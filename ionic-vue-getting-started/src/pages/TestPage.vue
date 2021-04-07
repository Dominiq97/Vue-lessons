<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>Hello</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
    <h2>Event Practice</h2>
      <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
      <ion-button v-on:click="alertPress">Show Alert</ion-button>
      <hr />
      <!-- 2) Register the user input on "keydown" and output it in the paragraph (hint: event.target.value helps) -->
      <ion-input type="text"
        v-on:keydown="saveInput"  />
      <p>OUTPUT: {{userInput}}</p>
      <hr />
      <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
      <ion-input type="text"
        v-on:keydown="saveInput" 
        v-on:keyup.enter="confirmInput" />
      <p>OUTPUT: {{confirmedInput}}</p>
    

    </ion-content>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
export default {
    components:{
        IonHeader, 
        IonTitle,
        IonContent,IonToolbar,IonInput
    },
    data() {
    return {
      userInput: "",
      confirmedInput:''
    };
  },
  methods: {
    saveInput(event){
        this.userInput = event.target.value;
    },
    alertPress() {
      alert("pressed!");
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
}
</script>