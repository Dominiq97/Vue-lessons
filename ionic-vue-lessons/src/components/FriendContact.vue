<template>
  <ion-item>
    <h2>{{ friend.name }}</h2>
    <ion-button @click="toggleDetails">Show Details</ion-button>
    <ion-list v-if="detailsAreVisible">
      <ion-item>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </ion-item>
      <ion-item>
        <strong>Email:</strong>
        {{ friend.email }}
      </ion-item>
    </ion-list>
  </ion-item>
</template>

<script>
import { /*IonInput, IonItem, IonList, IonLabel,,IonSpan */IonItem, IonList,IonButton } from "@ionic/vue";
export default {
  components: {
    IonItem, IonList,IonButton
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>