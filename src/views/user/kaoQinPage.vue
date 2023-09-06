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
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonItem,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {chevronBackCircleOutline, chevronBackOutline, chevronForwardOutline} from "ionicons/icons";

const index = ref(1);

</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>考勤</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <ion-item lines="full" style="margin-top: 20px;--background: white">
        <ion-button :disabled="index==1" @click="()=>{if(index>1){index--}}" slot="start"
                    style="--background: rgba(120,126,249,0.58);--border-radius: 100%;width: 26px;height: 26px;min-height: 0">
          <ion-icon :icon="chevronBackOutline"></ion-icon>
        </ion-button>
        <ion-label style="text-align: center">第{{ index }}周</ion-label>
        <ion-button :disabled="index==55" @click="()=>{if(index<55){index++}}" slot="end"
                    style="--background: rgba(120,126,249,0.58);--border-radius: 100%;width: 26px;height: 26px;min-height: 0">
          <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-button>
      </ion-item>
      <ion-card
          style="--background: linear-gradient(to bottom right, #8F44FF,#7B73FF,#8581FF,#8F8FFF,#999DFF,#A1A8FF,#A9B4FF);position:relative;display: flex;justify-content: space-between">
        <ion-text style="font-size: 19px;color: white;display: block;margin: 19px 0 19px 28px;">签到</ion-text>
        <ion-text style="font-size: 15px;color: white;display: block;margin: 22px 28px 0 0">《课程名称A》</ion-text>
        <ion-icon style="width: 70px;height: 70px;position: absolute;top: -24px;left: -14px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70.408" height="61.948" viewBox="0 0 70.408 61.948">
  <g id="组_1483" data-name="组 1483" transform="translate(-67.184 -158.232) rotate(-14)" opacity="0.11" style="mix-blend-mode: overlay;isolation: isolate">
    <path id="Vector" d="M.931,21.706a1.3,1.3,0,0,0,0,2.5A30.712,30.712,0,0,1,21.552,44.975a1.306,1.306,0,0,0,2.5,0A30.69,30.69,0,0,1,44.677,24.2a1.3,1.3,0,0,0,0-2.5A30.7,30.7,0,0,1,24.056.935a1.306,1.306,0,0,0-2.5,0A30.69,30.69,0,0,1,.931,21.706Z" transform="translate(47.821 175) rotate(42)" fill="#fff" style="isolation: isolate"/>
    <path id="Vector-2" data-name="Vector" d="M.286,6.68a.4.4,0,0,0,0,.769,9.451,9.451,0,0,1,6.346,6.392.4.4,0,0,0,.771,0,9.445,9.445,0,0,1,6.346-6.392.4.4,0,0,0,0-.769A9.448,9.448,0,0,1,7.4.288a.4.4,0,0,0-.771,0A9.445,9.445,0,0,1,.286,6.68Z" transform="matrix(0.914, 0.407, -0.407, 0.914, 74.607, 212.377)" fill="#fff" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
      </ion-card>
      <ion-card
          style="--background: linear-gradient(to bottom right, #FF8944,#FF8173,#FF907F,#FFA08B,#FFB098,#FFBDA2,#FFC5A9);position:relative;display: flex;justify-content: space-between">
        <ion-text style="font-size: 19px;color: white;display: block;margin: 19px 0 19px 28px;">旷课</ion-text>
        <ion-text style="font-size: 15px;color: white;display: block;margin: 22px 28px 0 0">《课程名称A》</ion-text>
        <ion-icon style="width: 70px;height: 70px;position: absolute;top: -24px;left: -14px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70.408" height="61.948" viewBox="0 0 70.408 61.948">
  <g id="组_1483" data-name="组 1483" transform="translate(-67.184 -158.232) rotate(-14)" opacity="0.11" style="mix-blend-mode: overlay;isolation: isolate">
    <path id="Vector" d="M.931,21.706a1.3,1.3,0,0,0,0,2.5A30.712,30.712,0,0,1,21.552,44.975a1.306,1.306,0,0,0,2.5,0A30.69,30.69,0,0,1,44.677,24.2a1.3,1.3,0,0,0,0-2.5A30.7,30.7,0,0,1,24.056.935a1.306,1.306,0,0,0-2.5,0A30.69,30.69,0,0,1,.931,21.706Z" transform="translate(47.821 175) rotate(42)" fill="#fff" style="isolation: isolate"/>
    <path id="Vector-2" data-name="Vector" d="M.286,6.68a.4.4,0,0,0,0,.769,9.451,9.451,0,0,1,6.346,6.392.4.4,0,0,0,.771,0,9.445,9.445,0,0,1,6.346-6.392.4.4,0,0,0,0-.769A9.448,9.448,0,0,1,7.4.288a.4.4,0,0,0-.771,0A9.445,9.445,0,0,1,.286,6.68Z" transform="matrix(0.914, 0.407, -0.407, 0.914, 74.607, 212.377)" fill="#fff" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
      </ion-card>
      <ion-card
          style="--background: linear-gradient(to bottom right, #4475FF,#73B4FF,#80BDFF,#8BC5FF,#96CCFF,#A0D3FF,#A9D9FF);position:relative;display: flex;justify-content: space-between">
        <ion-text style="font-size: 19px;color: white;display: block;margin: 19px 0 19px 28px;">迟到</ion-text>
        <ion-text style="font-size: 15px;color: white;display: block;margin: 22px 28px 0 0">《课程名称A》</ion-text>
        <ion-icon style="width: 70px;height: 70px;position: absolute;top: -24px;left: -14px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70.408" height="61.948" viewBox="0 0 70.408 61.948">
  <g id="组_1483" data-name="组 1483" transform="translate(-67.184 -158.232) rotate(-14)" opacity="0.11" style="mix-blend-mode: overlay;isolation: isolate">
    <path id="Vector" d="M.931,21.706a1.3,1.3,0,0,0,0,2.5A30.712,30.712,0,0,1,21.552,44.975a1.306,1.306,0,0,0,2.5,0A30.69,30.69,0,0,1,44.677,24.2a1.3,1.3,0,0,0,0-2.5A30.7,30.7,0,0,1,24.056.935a1.306,1.306,0,0,0-2.5,0A30.69,30.69,0,0,1,.931,21.706Z" transform="translate(47.821 175) rotate(42)" fill="#fff" style="isolation: isolate"/>
    <path id="Vector-2" data-name="Vector" d="M.286,6.68a.4.4,0,0,0,0,.769,9.451,9.451,0,0,1,6.346,6.392.4.4,0,0,0,.771,0,9.445,9.445,0,0,1,6.346-6.392.4.4,0,0,0,0-.769A9.448,9.448,0,0,1,7.4.288a.4.4,0,0,0-.771,0A9.445,9.445,0,0,1,.286,6.68Z" transform="matrix(0.914, 0.407, -0.407, 0.914, 74.607, 212.377)" fill="#fff" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
      </ion-card>
      <ion-card
          style="--background: linear-gradient(to bottom right, #B5E300,#91E064,#9BE27B,#A4E490,#AEE6A5,#B9E8BD,#C4EAD6);position:relative;display: flex;justify-content: space-between">
        <ion-text style="font-size: 19px;color: white;display: block;margin: 19px 0 19px 28px;">请假</ion-text>
        <ion-text style="font-size: 15px;color: white;display: block;margin: 22px 28px 0 0">《课程名称A》</ion-text>
        <ion-icon style="width: 70px;height: 70px;position: absolute;top: -24px;left: -14px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70.408" height="61.948" viewBox="0 0 70.408 61.948">
  <g id="组_1483" data-name="组 1483" transform="translate(-67.184 -158.232) rotate(-14)" opacity="0.11" style="mix-blend-mode: overlay;isolation: isolate">
    <path id="Vector" d="M.931,21.706a1.3,1.3,0,0,0,0,2.5A30.712,30.712,0,0,1,21.552,44.975a1.306,1.306,0,0,0,2.5,0A30.69,30.69,0,0,1,44.677,24.2a1.3,1.3,0,0,0,0-2.5A30.7,30.7,0,0,1,24.056.935a1.306,1.306,0,0,0-2.5,0A30.69,30.69,0,0,1,.931,21.706Z" transform="translate(47.821 175) rotate(42)" fill="#fff" style="isolation: isolate"/>
    <path id="Vector-2" data-name="Vector" d="M.286,6.68a.4.4,0,0,0,0,.769,9.451,9.451,0,0,1,6.346,6.392.4.4,0,0,0,.771,0,9.445,9.445,0,0,1,6.346-6.392.4.4,0,0,0,0-.769A9.448,9.448,0,0,1,7.4.288a.4.4,0,0,0-.771,0A9.445,9.445,0,0,1,.286,6.68Z" transform="matrix(0.914, 0.407, -0.407, 0.914, 74.607, 212.377)" fill="#fff" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
      </ion-card>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FCFCFC;
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}

ion-segment-button {
  --color-checked: #5D73FF;
}

ion-item {
  --border-width: 0.55px 0px 0.55px 0px;
}
</style>