<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

/* .log--heal {
  color: green; */

</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Hello</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <h2>Your Health</h2>
    <div class="healthbar">
        <div class="healthbar__value" :style="playerBarStyles"></div>
    </div>
    <h2>Monster Health</h2>
    <div class="healthbar">
        <div class="healthbar__value" :style="monsterBarStyles"></div>
    </div>
    <section v-if="winner" >
      <h2>Game Over!</h2>
      <h3 v-if="winner === 'Monster'">You Lost!</h3>
      <h3 v-else-if="winner === 'Player'">You Won!</h3>
      <h3 v-else-if="winner === 'draw'">It's a draw!</h3>
      <ion-button @click="startGame">START NEW GAME</ion-button>
    </section>
    <section v-else>
      <ion-button @click="attackMonster">ATTACK</ion-button>
      <ion-button v-bind:disabled="mayUseSpecial" @click="SpecialAttackMonster">SPECIAL ATTACK</ion-button>
      <ion-button @click="healPlayer">HEAL</ion-button>
      <ion-button @click="surrender">SURRENDER</ion-button>
    </section>
    

    <h2>Battle Log</h2>
        <ul v-for=" logMessage in logMessageArray" v-bind:key="logMessage">
          <ion-span>{{logMessage.actionBy === 'player' ? 'Player':'Monster'}}</ion-span>
          <ion-span v-if="logMessage.actionType === 'heal'"> heals himself for {{logMessage.actionValue}}</ion-span>
          <ion-span v-else>
            attacks and deals {{logMessage.actionValue}}</ion-span>
          
        </ul>

  </ion-content>
</template>

<script>

function getRandmonValue(min,max){
  return Math.floor(Math.random() * (max-min))+min;
}

import { /*IonInput, IonItem, IonList, IonLabel, */ IonButton,IonSpan } from "@ionic/vue";
export default {
  components: {
    // IonInput,
    // IonItem,
    // IonList,
    // IonLabel,
    IonSpan,
    IonButton
  },
  setup() {},
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessageArray:[]
    };
  },
  computed:{
    monsterBarStyles(){
      if (this.monsterHealth < 0){
        return {width:'0%'}
      }else{
        return {width: this.monsterHealth+'%'}
      }
    },
    playerBarStyles(){
      if (this.playerHealth < 0){
        return {width:'0%'}
      }else{
        return {width: this.playerHealth+'%'}
      }
    },
    mayUseSpecial(){
      return this.currentRound %3 !== 0;
    }
  },
  watch:{
    playerHealth(value){
      if (value <=0 && this.monsterHealth <=0){
        this.winner = 'draw';
      }else if(value <=0){
        this.winner = 'Monster';
      }
    },
    monsterHealth(value){
      if (value <=0 && this.playerHealth<=0){
        this.winner = 'draw';
      }else if (value <=0){
        this.winner = 'Player';
      }
    }
    
  },
  methods:{
    startGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
    },
    surrender(){
      this.winner = 'Monster';
    },
    attackMonster(){
      this.currentRound++;
      const attackMonster = getRandmonValue(5,12);
      this.monsterHealth = this.monsterHealth - attackMonster;
      this.addLogMessage('player','attack', attackMonster);
      this.attackPlayer();
    },
    attackPlayer(){
      const attackPlayer = getRandmonValue(15,8);
      this.playerHealth = this.playerHealth - attackPlayer;
      this.addLogMessage('monster','attack', attackPlayer);
    },
    SpecialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandmonValue(10, 25);
      this.monsterHealth = this.monsterHealth-attackValue;
      this.addLogMessage('player','super attack', attackValue);
      this.attackPlayer()
    },
    healPlayer(){
      this.currentRound++;
      const healValue = getRandmonValue(8,20);
      if (this.playerHealth+healValue >100){
        this.playerHealth = 100;
      }else{
        this.playerHealth+=healValue;
      }
      this.addLogMessage('player','heal', healValue);
      this.attackPlayer();
    },
    addLogMessage(who,what,value){
      this.logMessageArray.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });

    }

  }
};
</script>
