<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle"/>
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/study">
          <ion-icon :icon="schoolSharp"></ion-icon>
          <ion-label>学习</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square"/>
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue';
import {schoolOutline, square, triangle,schoolSharp} from 'ionicons/icons';
</script>
<!--<style scoped>-->
<!--ion-tab-bar {-->
<!--  position: fixed;-->
<!--  bottom: 5%;-->
<!--  left: 5%;-->
<!--  width: 90%;-->
<!--  border-radius: 20px;-->
<!--  box-shadow: 0 0 5px 5px rgba(171, 171, 171, 0.65);-->
<!--}-->

<!--</style>-->
