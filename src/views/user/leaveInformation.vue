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
  IonRadio, IonRadioGroup, IonText, IonImg, IonAccordionGroup, IonAccordion, IonItem
} from "@ionic/vue";
import {reactive, ref} from "vue";


</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>请假信息</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <ion-card>

        <div style="margin: 10px">
          <div style="background: #F9FAFE;width: 100%;position: relative;border-radius: 10px;overflow: hidden">
            <div style="padding: 20px 0 20px 10px">
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">请假日期：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">2023年06月15日-2023年06月20日</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">请假类别：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">因事请假</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">提交时间：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">2023年06月13日</ion-text>
              </div>
              <div>
                <ion-text style="font-size: 13px;color: #727272">销假时间：</ion-text>
                <ion-text style="font-size: 15px;color: #42BB24">2023年06月20日</ion-text>
              </div>

            </div>
          </div>
        </div>
      </ion-card>
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