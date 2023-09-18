<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg
} from "@ionic/vue";
import {onMounted, reactive, ref} from "vue";

const button = ref()
onMounted(() => {
  // fireKeyEvent(button.value.$el, 'keypress', 40);
})

</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>智趣游戏</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <!--      <ion-button ref="button" slot="fixed">A-->
      <!--      </ion-button>-->
      <iframe slot="fixed" style="width: 200%;height: 200%;transform: scale(0.8);
top: -20%;
left: -20%;" src="/mario.html"></iframe>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-col > img {
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}
</style>