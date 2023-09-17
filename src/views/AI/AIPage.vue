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
import {reactive, ref} from "vue";




</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <IonTitle>智U</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true">
      <ion-grid style="padding: 0 15px">
        <ion-row>
          <ion-col size="12">
            <div class="first"
                 style="width: 100%;height: 125px;border-radius: 10px;position: relative;margin-top: 20px" @click="$router.push('/smartU/chat')">
              <ion-text style="color: white;font-weight: bolder;font-size: 20px;display: block;text-align: right">
                智小U
                <div
                    style="width: 75px;object-fit: cover;display: inline-block;vertical-align: middle;margin-top: -30px">
                  <img src="../../img/小U-02.png" alt="">
                </div>
              </ion-text>
              <ion-icon style="position: absolute;left: 20px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="19.085" height="17.475" viewBox="0 0 19.085 17.475">
  <path id="Vector" d="M15.681,11.99a2.925,2.925,0,0,1-2.3-.366l-1.534-1.03a3.115,3.115,0,0,1-1.379-2.587V7.064a3.08,3.08,0,0,1,.971-2.256,2.779,2.779,0,1,0-3.78.009,3.181,3.181,0,0,1,.96,2.351v.839a3.115,3.115,0,0,1-1.379,2.587L5.7,11.623a2.923,2.923,0,0,1-2.3.366,2.778,2.778,0,1,0,2.128,3.136,3.18,3.18,0,0,1,1.417-2.109l.861-.578a3.116,3.116,0,0,1,3.473,0l.861.578a3.184,3.184,0,0,1,1.417,2.109,2.779,2.779,0,1,0,4.733-2.371h0A2.777,2.777,0,0,0,15.681,11.99Z" transform="translate(0)" fill="#fff" style="isolation: isolate"/>
</svg>
'></ion-icon>
              <ion-text style="text-align: center;width: 250px;display: inline-block;margin-left: 40px;color: #FFFFFF;font-weight: 500">
                你好，我是智小U，我可以为你做点什么？
                <ion-icon style="width: 10px;height: 10px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9.577" height="8.513" viewBox="0 0 9.577 8.513">
  <path id="Icon" d="M6.093.737,9.373,6.311a1.47,1.47,0,0,1-1.305,2.2H1.509A1.47,1.47,0,0,1,.2,6.311L3.483.737A1.524,1.524,0,0,1,6.093.737ZM4.392,7.05v-.8a.4.4,0,1,1,.8,0v.8a.4.4,0,1,1-.8,0Zm0-2.66V2.527a.4.4,0,1,1,.8,0V4.389a.4.4,0,1,1-.8,0Z" transform="translate(9.577 8.513) rotate(180)" fill="#fff" style="isolation: isolate"/>
</svg>
'></ion-icon>
              </ion-text>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6" style="object-fit: cover">
            <img src="../../img/smartU2.png" alt="">
          </ion-col>
          <ion-col size="6" style="object-fit: cover">
            <img src="../../img/smartU3.png" alt="">
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6" style="object-fit: cover">
            <img src="../../img/smartU4.png" alt="">
          </ion-col>
          <ion-col size="6" style="object-fit: cover">
            <img src="../../img/smartU5.png" alt="">
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6" style="object-fit: cover">
            <img src="../../img/smartU6.png" alt="">
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-col>img{
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}
.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}
</style>