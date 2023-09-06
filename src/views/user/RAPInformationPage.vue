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
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg
} from "@ionic/vue";
import {reactive, ref} from "vue";
import Information from "@/views/user/components/information.vue";

const segmentValue = ref('rewards');

function change(event: any) {
  segmentValue.value = event.detail.value;
}


</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>奖惩信息</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-header style="background: #F7F8F9" >
      <ion-segment mode="md" :value="segmentValue" @ionChange="change" style="padding-bottom: 10px">
        <ion-segment-button value="rewards" style="border-right: 1px solid #DFDFDF;">
          <ion-label><h3 style="font-weight: 900">获奖信息</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="punishment">
          <ion-label><h3 style="font-weight: 900">违纪处分</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content :fullscreen="true">
      <information v-if="segmentValue=='rewards'" v-for="index in 10" :index="index"></information>
      <information v-for="index in 5" :index="index" v-if="segmentValue=='punishment'"></information>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FFFFFF;
}
ion-col > img {
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}

ion-segment-button {
  --color-checked: #5D73FF;
}
</style>