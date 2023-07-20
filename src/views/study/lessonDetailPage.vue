<script setup lang="ts">

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonCardContent,
  IonCard,
  IonChip,

  IonToolbar
} from "@ionic/vue";
import {ellipsisHorizontalOutline} from "ionicons/icons";
import Player from "xgplayer";
import {onMounted, ref} from "vue";

const vs = ref();

onMounted(() => {
  console.log(vs.value)
  const vsp = new Player({
    el: vs.value,
    url: 'https://www.0030.store/5013.MP4',
    height: '20vh',
    width: '85vw',
  })
})
</script>

<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/lessons"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontalOutline"/>

          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content style="z-index: -2;" :fullscreen="true">
      <div slot="fixed" style="width: 90vw;left: 5vw;right: 5vw;z-index: -1;">
        <div style="margin: 30px 30px">
          <ion-text color="light"><h2>java编程基础</h2></ion-text>
          <ion-chip color="light">王思睿</ion-chip>
        </div>
        <div ref="vs" style="border-radius: 10px;margin: 0 auto"></div>
      </div>
      <div style="height: 350px;width: 1px;pointer-events: none;"></div>
      <ion-card style="height: 1000px;z-index: 1000">
        <ion-card-content></ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/background.png") no-repeat;
  background-size: contain;
  z-index: -2;
}
</style>