<template>
    <div>
        <ion-avatar slot="start"><img :src="test" alt=""></ion-avatar>
        <!-- <ion-card id="test"><ion-card-content>&nbsp;</ion-card-content></ion-card> -->
        <ion-card id="right">
            <!-- <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header> -->
            <ion-card-content>
                {{ test }}
            </ion-card-content>
        </ion-card>
    </div>
</template>
  
<script lang="ts">
import { IonAvatar, IonContent, IonLabel, IonCard, IonCardContent } from '@ionic/vue'
import { textSharp } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default {
    props: {
        test: String,
    },
    data() {

    },

};
</script>
  
<style scoped>
/* #test {
    border-radius: 20%;
    border-top: 50px solid none;
    border-bottom: 50px solid none;
    border-left: 50px solid none;
    border-right: 50px solid chocolate;
} */

#right:before {
    border: solid transparent yellow;
    content: ' ';
    height: 0;
    left: 0;
    position: absolute;
    width: 0;
}
</style>
  