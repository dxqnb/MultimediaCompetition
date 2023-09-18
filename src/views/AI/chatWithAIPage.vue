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
  IonRadio, IonRadioGroup, IonText, IonImg, IonChip
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {TextToSpeech} from '@capacitor-community/text-to-speech';
import {SpeechRecognition} from "@capacitor-community/speech-recognition";
import {chats} from "@/api/main";

TextToSpeech.openInstall()
const index = ref(0)
const flag = ref(false)
const chatCallBack = ref('有什么可以帮助你的！')
SpeechRecognition.requestPermissions();
// SpeechRecognition.stop()

// listen to partial results
const speak = async (value: string) => {
  await TextToSpeech.speak({
    text: value,
    lang: 'zh-CN',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    voice: 156,
    category: 'ambient',
  });

};
const dataChat = ref('')

function click() {
  if (!flag.value) {
    SpeechRecognition.start({
      language: "zh-CN",
      maxResults: 1,
      prompt: "speak",
      partialResults: true,
      popup: true,
    }).then((res) => {
      console.log(res)
    })
    SpeechRecognition.addListener('partialResults', (data: any) => {
      console.log('res:', data.matches);
      dataChat.value += data.matches[0].substring(index.value)
      index.value = data.matches[0].length
    })
    flag.value = true
  } else {
    SpeechRecognition.removeAllListeners();
    SpeechRecognition.stop()
    chats(dataChat.value).then(async (res) => {
      console.log(res.data.result)
      dataChat.value = ''
      chatCallBack.value = res.data.result
      await speak(chatCallBack.value)
    })
    flag.value = false
  }
}
</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>智U</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true">
      <img style="width: 200px;position: absolute;top: 170px;left: 25%;" src="../../img/小U-02.png" alt="">
      <div slot="fixed" style="bottom: 0;width: 100%;">
        <div style="background: white;border-radius: 20px;margin: 16px;position: relative">
          <ion-text
              style="display: block;text-align: center;font-size: 22px;color: rgba(77,77,77,0.55);font-weight: bold;padding-top: 20px;margin-bottom: 8px ">
            你好！
          </ion-text>
          <ion-text style="display: block;text-align: center;font-size: 22px;color: #4D4D4D;font-weight: bold">
            <ion-icon style="vertical-align: middle" @click="speak(chatCallBack)" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <g id="Icon" transform="translate(-1 -1)" style="isolation: isolate">
    <path id="Icon-2" data-name="Icon" d="M16.5,4v8.5M12.5,7V9.5M4,0V16.5M0,6v4.5M8.25,3V13.5" transform="translate(1.75 1.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
            &nbsp;{{ chatCallBack }}
          </ion-text>
          <div style="display: flex;justify-content: center;padding-bottom: 20px">
            <ion-chip mode="md"
                      style="border-radius: 8px;min-width: 56px;--background: #FBFFC2;--color: rgba(22,22,22,0.38);margin: 10px 5px;height: 35px;padding-left: 20px;padding-right: 20px">
              <ion-text style="width: 100%;text-align: center;font-size: 13px;">翻译</ion-text>
            </ion-chip>
            <ion-chip mode="md"
                      style="border-radius: 8px;min-width: 56px;--background: #C2FFF8;--color: rgba(22,22,22,0.38);margin: 10px 5px;height: 35px;padding-left: 45px;padding-right: 45px">
              <ion-text style="width: 100%;text-align: center;font-size: 13px;">生成一份演讲稿</ion-text>
            </ion-chip>
          </div>
          <ion-icon style="position:absolute;bottom: 50px;left: 56px;width: 19px;height: 13px;"
                    @click="$router.push('/smartU/chat')" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
  <g id="Icon" transform="translate(0 -3)" style="isolation: isolate">
    <path id="Icon-2" data-name="Icon" d="M15.3,0a4.969,4.969,0,0,1,2.108.218,2,2,0,0,1,.874.874A4.968,4.968,0,0,1,18.5,3.2V9.3a4.968,4.968,0,0,1-.218,2.108,2,2,0,0,1-.874.874A4.968,4.968,0,0,1,15.3,12.5H3.2a4.968,4.968,0,0,1-2.108-.218,2,2,0,0,1-.874-.874A4.969,4.969,0,0,1,0,9.3V3.2A4.969,4.969,0,0,1,.218,1.092,2,2,0,0,1,1.092.218,4.969,4.969,0,0,1,3.2,0ZM6,10h6.5M3,3.5h.5M7,3.5h.5m7.5,0h.5M11,3.5h.5M3,6.5h.5M7,6.5h.5m7.5,0h.5M11,6.5h.5" transform="translate(0.75 3.75)" fill="none" stroke="#7e90ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>
  </g>
</svg>
'></ion-icon>
          <div style="width: 100%;text-align: center">
            <ion-icon style="width: 96px;height: 96px;" @click="click()" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="94" viewBox="0 0 94 94">
  <defs>
    <filter id="椭圆_115" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#417aff" flood-opacity="0.329"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#5d73ff"/>
      <stop offset="1" stop-color="#6948ea"/>
    </linearGradient>
    <filter id="路径_175" x="2.741" y="2.741" width="88.307" height="88.307" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur-2"/>
      <feFlood flood-color="#417aff" flood-opacity="0.329"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="组_1017" data-name="组 1017" transform="translate(-134.841 -684.841)">
    <g transform="matrix(1, 0, 0, 1, 134.84, 684.84)" filter="url(#椭圆_115)">
      <circle id="椭圆_115-2" data-name="椭圆 115" cx="32" cy="32" r="32" transform="translate(15 10)" fill="#fff"/>
    </g>
    <g id="组_955" data-name="组 955" transform="translate(152.582 697.582)">
      <g transform="matrix(1, 0, 0, 1, -17.74, -12.74)" filter="url(#路径_175)">
        <path id="路径_175-2" data-name="路径 175" d="M29.153,0A29.153,29.153,0,1,1,0,29.153,29.153,29.153,0,0,1,29.153,0Z" transform="translate(17.74 12.74)" fill="url(#linear-gradient)"/>
      </g>
      <g id="组_954" data-name="组 954" transform="translate(18.932 16.35)">
        <path id="路径_119" data-name="路径 119" d="M332.431,108.012a5.683,5.683,0,0,1,11.365,0v7.482a5.683,5.683,0,0,1-11.365,0Zm.381,19.44a.876.876,0,0,1,.881-.871h8.84a.871.871,0,1,1,0,1.742h-8.841a.877.877,0,0,1-.882-.871Z" transform="translate(-328.392 -102.4)" fill="#fff"/>
        <path id="路径_120" data-name="路径 120" d="M206.564,509.246a.882.882,0,0,0-1.764,0c0,4.99,4.421,8.918,9.721,8.918s9.721-3.927,9.721-8.918a.882.882,0,0,0-1.764,0c0,3.9-3.493,7.176-7.957,7.176s-7.957-3.278-7.957-7.176Z" transform="translate(-204.8 -495.528)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>
'></ion-icon>
          </div>
        </div>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: url('@/img/smartUVice.png') top right no-repeat fixed;
  background-size: cover;
}

//ion-content::part(scroll) {
//  --offset-top: 0px;
//}
ion-content {
  --offset-top: 0px !important;
}
</style>