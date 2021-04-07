<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            <ion-title>All memories</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <h2> These are my memories </h2>
        
        <ion-list>
            <ion-item>
                Beach
            </ion-item>
            <ion-item>
                Mountain
            </ion-item>
            <ion-item>
                Tahiti
            </ion-item>
            <ion-item>
                Madeira
            </ion-item>
        </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar,IonList,IonItem, IonTitle, IonContent } from '@ionic/vue';
export default ({
    setup() {
        
    },
    components:{
        IonPage,
        IonHeader, 
        IonTitle,
        IonContent,IonToolbar,IonList,IonItem
    }
})
</script>
