<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>Hello</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
        <img src="../../public/assets/icon/icon.png" />
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>Madison, WI</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>
      </ion-card>
    </ion-content>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
export default {
    components:{
        IonHeader, 
        IonTitle,
        IonContent,IonToolbar,
    },
    setup() {
        
    },
}
</script>