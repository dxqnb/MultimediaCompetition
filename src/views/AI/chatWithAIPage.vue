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
const defaultIcon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="94" viewBox="0 0 94 94">\n' +
    '  <defs>\n' +
    '    <linearGradient id="linear-gradient" x1="0.82" y1="0.789" x2="0.208" y2="0.147" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#7053ff"/>\n' +
    '      <stop offset="0.48" stop-color="#2d49ff"/>\n' +
    '      <stop offset="1" stop-color="#0061f2"/>\n' +
    '    </linearGradient>\n' +
    '    <filter id="椭圆_115" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="5" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="5" result="blur"/>\n' +
    '      <feFlood flood-color="#417aff" flood-opacity="0.329"/>\n' +
    '      <feComposite operator="in" in2="blur"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#5d73ff"/>\n' +
    '      <stop offset="1" stop-color="#6948ea"/>\n' +
    '    </linearGradient>\n' +
    '    <filter id="路径_175" x="2.741" y="2.741" width="88.307" height="88.307" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="5" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="5" result="blur-2"/>\n' +
    '      <feFlood flood-color="#417aff" flood-opacity="0.329"/>\n' +
    '      <feComposite operator="in" in2="blur-2"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <path id="Container" d="M28.047,0A28.047,28.047,0,1,1,0,28.047,28.047,28.047,0,0,1,28.047,0Z" transform="translate(-2542.5 12970.168)" stroke="#fff" stroke-width="4" fill="url(#linear-gradient)"/>\n' +
    '    </clipPath>\n' +
    '  </defs>\n' +
    '  <g id="组_1601" data-name="组 1601" transform="translate(-141 -690)">\n' +
    '    <g id="组_1017" data-name="组 1017" transform="translate(6.159 5.159)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, 134.84, 684.84)" filter="url(#椭圆_115)">\n' +
    '        <circle id="椭圆_115-2" data-name="椭圆 115" cx="32" cy="32" r="32" transform="translate(15 10)" fill="#fff"/>\n' +
    '      </g>\n' +
    '      <g id="组_955" data-name="组 955" transform="translate(152.582 697.582)">\n' +
    '        <g transform="matrix(1, 0, 0, 1, -17.74, -12.74)" filter="url(#路径_175)">\n' +
    '          <path id="路径_175-2" data-name="路径 175" d="M29.153,0A29.153,29.153,0,1,1,0,29.153,29.153,29.153,0,0,1,29.153,0Z" transform="translate(17.74 12.74)" fill="url(#linear-gradient-2)"/>\n' +
    '        </g>\n' +
    '        <g id="组_954" data-name="组 954" transform="translate(18.932 16.35)" opacity="0.51">\n' +
    '          <path id="路径_119" data-name="路径 119" d="M332.431,108.012a5.683,5.683,0,0,1,11.365,0v7.482a5.683,5.683,0,0,1-11.365,0Zm.381,19.44a.876.876,0,0,1,.881-.871h8.84a.871.871,0,1,1,0,1.742h-8.841a.877.877,0,0,1-.882-.871Z" transform="translate(-328.392 -102.4)" fill="#fff"/>\n' +
    '          <path id="路径_120" data-name="路径 120" d="M206.564,509.246a.882.882,0,0,0-1.764,0c0,4.99,4.421,8.918,9.721,8.918s9.721-3.927,9.721-8.918a.882.882,0,0,0-1.764,0c0,3.9-3.493,7.176-7.957,7.176s-7.957-3.278-7.957-7.176Z" transform="translate(-204.8 -495.528)" fill="#fff"/>\n' +
    '        </g>\n' +
    '        <g id="Menu_3" data-name="Menu 3" transform="translate(-7.473 -5.573)" style="isolation: isolate">\n' +
    '          <rect id="Menu_3-2" data-name="Menu 3" width="73.8" height="70" fill="none" style="isolation: isolate"/>\n' +
    '        </g>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g id="蒙版组_49" data-name="蒙版组 49" transform="translate(2702.121 -12266.879)" opacity="0.4" clip-path="url(#clip-path)">\n' +
    '      <rect id="Menu_3-3" data-name="Menu 3" width="66.411" height="62.991" transform="translate(-2564.306 12971.219)" fill="none" style="isolation: isolate"/>\n' +
    '      <g id="组_1599" data-name="组 1599" transform="translate(-2537.551 12996.265)">\n' +
    '        <rect id="矩形_576" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(0 6.299)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-2" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(3.6)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-3" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(7.199 11.698)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-4" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(10.799 11.698)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-5" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(14.398 19.797)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-6" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(17.998 15.298)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-7" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(21.597 20.697)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-8" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(25.197 16.198)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-9" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(28.796 12.598)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-10" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(32.396 9.899)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-11" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(35.995 14.398)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-12" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(39.595 9.899)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-13" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(43.194)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-14" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(46.794)" fill="#8293ff"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n'
const clickIcon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="94" height="94" viewBox="0 0 94 94">\n' +
    '  <defs>\n' +
    '    <linearGradient id="linear-gradient" x1="0.82" y1="0.789" x2="0.208" y2="0.147" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#7053ff"/>\n' +
    '      <stop offset="0.48" stop-color="#2d49ff"/>\n' +
    '      <stop offset="1" stop-color="#0061f2"/>\n' +
    '    </linearGradient>\n' +
    '    <filter id="椭圆_115" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="5" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="5" result="blur"/>\n' +
    '      <feFlood flood-color="#417aff" flood-opacity="0.329"/>\n' +
    '      <feComposite operator="in" in2="blur"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#5d73ff"/>\n' +
    '      <stop offset="1" stop-color="#6948ea"/>\n' +
    '    </linearGradient>\n' +
    '    <filter id="路径_175" x="2.741" y="2.741" width="88.307" height="88.307" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="5" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="5" result="blur-2"/>\n' +
    '      <feFlood flood-color="#417aff" flood-opacity="0.329"/>\n' +
    '      <feComposite operator="in" in2="blur-2"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <path id="Container" d="M28.047,0A28.047,28.047,0,1,1,0,28.047,28.047,28.047,0,0,1,28.047,0Z" transform="translate(-2542.5 12970.168)" stroke="#fff" stroke-width="4" fill="url(#linear-gradient)"/>\n' +
    '    </clipPath>\n' +
    '  </defs>\n' +
    '  <g id="组_1602" data-name="组 1602" transform="translate(-141 -690)">\n' +
    '    <g id="组_1017" data-name="组 1017" transform="translate(6.159 5.159)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, 134.84, 684.84)" filter="url(#椭圆_115)">\n' +
    '        <circle id="椭圆_115-2" data-name="椭圆 115" cx="32" cy="32" r="32" transform="translate(15 10)" fill="#fff"/>\n' +
    '      </g>\n' +
    '      <g id="组_955" data-name="组 955" transform="translate(152.582 697.582)">\n' +
    '        <g transform="matrix(1, 0, 0, 1, -17.74, -12.74)" filter="url(#路径_175)">\n' +
    '          <path id="路径_175-2" data-name="路径 175" d="M29.153,0A29.153,29.153,0,1,1,0,29.153,29.153,29.153,0,0,1,29.153,0Z" transform="translate(17.74 12.74)" fill="url(#linear-gradient-2)"/>\n' +
    '        </g>\n' +
    '        <g id="Menu_3" data-name="Menu 3" transform="translate(-7.473 -5.573)" style="isolation: isolate">\n' +
    '          <rect id="Menu_3-2" data-name="Menu 3" width="73.8" height="70" fill="none" style="isolation: isolate"/>\n' +
    '        </g>\n' +
    '        <g id="组_1600" data-name="组 1600" transform="translate(-158.741 -702.741)" opacity="0.51">\n' +
    '          <circle id="椭圆_201" data-name="椭圆 201" cx="3" cy="3" r="3" transform="translate(174 728)" fill="#fff"/>\n' +
    '          <circle id="椭圆_201-2" data-name="椭圆 201" cx="3" cy="3" r="3" transform="translate(184 728)" fill="#fff"/>\n' +
    '          <circle id="椭圆_201-3" data-name="椭圆 201" cx="3" cy="3" r="3" transform="translate(194 728)" fill="#fff"/>\n' +
    '        </g>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g id="蒙版组_49" data-name="蒙版组 49" transform="translate(2702.121 -12266.879)" opacity="0.4" clip-path="url(#clip-path)">\n' +
    '      <rect id="Menu_3-3" data-name="Menu 3" width="66.411" height="62.991" transform="translate(-2564.306 12971.219)" fill="none" style="isolation: isolate"/>\n' +
    '      <g id="组_1599" data-name="组 1599" transform="translate(-2537.551 12996.265)">\n' +
    '        <rect id="矩形_576" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(0 6.299)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-2" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(3.6)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-3" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(7.199 11.698)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-4" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(10.799 11.698)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-5" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(14.398 19.797)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-6" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(17.998 15.298)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-7" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(21.597 20.697)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-8" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(25.197 16.198)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-9" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(28.796 12.598)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-10" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(32.396 9.899)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-11" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(35.995 14.398)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-12" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(39.595 9.899)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-13" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(43.194)" fill="#8293ff"/>\n' +
    '        <rect id="矩形_576-14" data-name="矩形 576" width="2.7" height="27.896" rx="1" transform="translate(46.794)" fill="#8293ff"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n'
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
            <ion-icon style="width: 96px;height: 96px;" @click="click()" :icon='!flag?defaultIcon:clickIcon'></ion-icon>
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