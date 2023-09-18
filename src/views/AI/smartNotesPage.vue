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
  IonRadio, IonRadioGroup, IonText, IonImg, IonTextarea, toastController
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {closeCircleOutline} from "ionicons/icons";
import {ctjl} from "@/api/main";

const textarea = ref('')

async function getNotice() {
  const toast = await toastController.create({
    message: '请求成功，请耐心等待简历生成'
  })
  toast.present()
  ctjl(Number(JSON.parse(localStorage.getItem('user') || '').username)).then((res) => {
    textarea.value = res.data.result
    toast.dismiss()
  })
}
</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar style="--background: transparent;">
        <ion-buttons slot="start">
          <ion-back-button style="color: white" text="" default-href="/smartU"></ion-back-button>
        </ion-buttons>
        <IonTitle style="color: white">智能生成简历</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true">
      <ion-grid style="padding: 0 15px">
        <ion-row>
          <ion-col size="12">
            <div class="first"
                 style="width: 100%;height: 125px;border-radius: 10px;position: relative;margin-top: 20px"
                 @click="$router.push('/smartU/chatWithAI')">
              <ion-text style="color: white;font-weight: 900;font-size: 20px;display: block;text-align: right">
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
              <ion-text
                  style="text-align: center;width: 250px;display: inline-block;margin-left: 40px;color: #FFFFFF;font-weight: 500">
                你好，我是智小U，我可以帮助你完成对简历的修改，快来试试！
                <ion-icon style="width: 10px;height: 10px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9.577" height="8.513" viewBox="0 0 9.577 8.513">
  <path id="Icon" d="M6.093.737,9.373,6.311a1.47,1.47,0,0,1-1.305,2.2H1.509A1.47,1.47,0,0,1,.2,6.311L3.483.737A1.524,1.524,0,0,1,6.093.737ZM4.392,7.05v-.8a.4.4,0,1,1,.8,0v.8a.4.4,0,1,1-.8,0Zm0-2.66V2.527a.4.4,0,1,1,.8,0V4.389a.4.4,0,1,1-.8,0Z" transform="translate(9.577 8.513) rotate(180)" fill="#fff" style="isolation: isolate"/>
</svg>
'></ion-icon>
              </ion-text>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div style="padding: 16px">
        <div
            style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #CDD4FF;padding: 10px">
          <ion-textarea placeholder="快点击一键生成简历，生成专属于你的简历吧" :auto-grow="true" v-model="textarea"
                        style="border: none;font-size: 16px;font-weight: 400;--color: #585858;min-height: 250px">
          </ion-textarea>
        </div>
      </div>
      <div slot="fixed" style="width: 100%;bottom: 20px;">
        <ion-button expand="block" @click="getNotice()"
                    style="--background: #515EFF;--color: white;width: 90%;margin: auto;">一键生成简历
        </ion-button>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-col > img {
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}

ion-content::part(background) {

  background: url("@/img/noteBackground.png") top right no-repeat;
  background-size: cover;
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}
</style>