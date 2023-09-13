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

function fireKeyEvent(el, evtType, keyCode) {
  var evtObj;
  if (document.createEvent) {
    evtObj = document.createEvent('UIEvents');
    evtObj.initUIEvent(evtType, true, true, window, 1);

    delete evtObj.keyCode;
    if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
      Object.defineProperty(evtObj, "keyCode", {value: keyCode});
    } else {
      evtObj.key = String.fromCharCode(keyCode);
    }

    if (typeof evtObj.ctrlKey === 'undefined') {//为了模拟ctrl键
      Object.defineProperty(evtObj, "ctrlKey", {value: true});
    } else {
      evtObj.ctrlKey = true;
    }
  }
  el.dispatchEvent(evtObj);
}

</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>智U</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true">
<!--      <ion-button ref="button" slot="fixed">A-->
<!--      </ion-button>-->
      <iframe style="width: 100%;height: 100%;" src="/mario.html"></iframe>
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