<style>
html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Hello</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card>
      <section id="user-goals">
        <ion-label>My course goals</ion-label>
        <ion-input v-model="enteredGoalValue" type="text"></ion-input>
        <ion-button @click="addGoal">Add Goal</ion-button>
        <ion-label v-if="goals.length === 0"
          >No goals have been added yet - please start adding some!</ion-label
        >
        <ion-list v-else>
          <ion-item v-for="(goal,index) in goals" v-bind:key="goal">{{goal}}-{{index}}
            <ion-button v-on:click="removeGoal(index)">X</ion-button>
          <ion-input @click.stop></ion-input>
          </ion-item>
          
        </ion-list>
        <!-- <ion-list>
          <ion-item v-for="(value,key) in {name:'Max', age:31}" v-bind:key="value">{{key}} - {{value}}</ion-item>
        </ion-list> -->
        <!-- <ion-list>
            <ion-item v-for="num in 10" v-bind:key="num">{{num}}</ion-item>
        </ion-list> -->
      </section>
    </ion-card>
  </ion-content>
</template>

<script>
import { IonInput, IonItem, IonList, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonInput,
    IonItem,
    IonList,
    IonLabel,
  },
  setup() {},
  data() {
    return {
      goals: [],
      enteredGoalValue:'',

    };
  },
  methods:{
    addGoal(){
        this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index){
        this.goals.splice(index,1);
    }
  }
};
</script>
