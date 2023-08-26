<template>
  <ion-page>
    <!--    <ion-tabs>-->
    <ion-router-outlet Animation="Animation"></ion-router-outlet>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end" v-if="$route.path.indexOf('study/noticeDetail')==-1&&$route.path.indexOf('team/teamDetail')==-1">
      <ion-fab-button>
        <ion-icon :icon="chevronUpCircle"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button @click="router.back">
          <ion-icon :icon="backspace"></ion-icon>
        </ion-fab-button>
        <ion-fab-button @click="$router.push('/')">
          <ion-icon :icon="home"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-page>
</template>

<script setup lang="ts">
import {IonIcon, IonPage, IonRouterOutlet, IonFab, IonFabButton, IonFabList, useIonRouter} from '@ionic/vue';
import {backspace, chevronUpCircle, home} from 'ionicons/icons';
const router = useIonRouter()
</script>
<style scoped>
ion-tab-bar {
  position: fixed;
  bottom: 5%;
  left: 5%;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(171, 171, 171, 0.65);
}

</style>
