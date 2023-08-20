<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonTextarea,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton, IonSegment, IonSegmentButton, IonAvatar, IonRange, IonText, IonRadio, IonRadioGroup,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {Camera, CameraResultType} from "@capacitor/camera";

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  var imageUrl = image.webPath;
  console.log(image, imageUrl)
  return imageUrl;
}

const team = ref({
  teamName: '不简单队',

})
const pic = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.616" height="18" viewBox="0 0 18.616 18">\n' +
    '  <g id="Icon" transform="translate(1.056 0.75)" style="isolation: isolate">\n' +
    '    <g id="Icon-2" data-name="Icon" style="isolation: isolate">\n' +
    '      <path id="Icon-3" data-name="Icon" d="M14.5,0a2,2,0,0,1,2,2V14.5a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Zm-3,13L5.25,6.5,0,10.833M16.5,11,12.75,7.5,9,10" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const link = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18.229" viewBox="0 0 16 18.229">\n' +
    '  <g id="Icon" transform="translate(-1.75 -0.521)" style="isolation: isolate">\n' +
    '    <path id="Icon-2" data-name="Icon" d="M13.6,9.5l-5.72,5.659c-.076.075-.114.113-.151.148a4.375,4.375,0,0,1-2.9,1.188H4.616c-.245,0-.368,0-.471,0A4.329,4.329,0,0,1,0,12.4c0-.1,0-.224,0-.466,0-.106,0-.16,0-.211A4.282,4.282,0,0,1,1.2,8.854c.036-.037.074-.075.15-.15L9.247.892a3.1,3.1,0,0,1,4.352,0,3.022,3.022,0,0,1,0,4.306L5.439,13.271a1.55,1.55,0,0,1-2.176,0,1.511,1.511,0,0,1,0-2.153l7.071-7" transform="translate(2.5 1.5)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>\n')


</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/team/teamDetail/1"></ion-back-button>
        </ion-buttons>
        <IonTitle>提交任务</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;bottom: 0;height: 100px;" slot="fixed">
        <ion-button style="width: 80%;margin: 0 auto;display: block;--background: #515EFF;--color: white">提交
        </ion-button>
      </div>
      <div>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">提交任务
        </ion-text>
        <ion-card
                  style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
          <ion-card-content>
            <div style="border-bottom: solid 1px #E1E1E1;padding-bottom: 1.5em;margin-bottom: 1em">
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #343434">熟悉150个英语单词
              </ion-text>
              <ion-text style="display: block;font-size: 13px;font-weight: 400;color: #7D7D7D;margin-top: 10px">提交时间：&nbsp;{{
                  `2023 - 08 - 03至2023 - 10 - 11`
                }}
              </ion-text>
              <ion-text style="display: block;font-size: 13px;font-weight: 400;color: #7D7D7D;margin-top: 4px">任务要求：&nbsp;{{
                  `50单词`
                }}&nbsp;{{ `15天` }}
              </ion-text>
            </div>
            <div>
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #ADAEB0">任务详情：
              </ion-text>
              <div
                  style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #AEAEAE;padding: 10px">
                <ion-text style="font-size: 16px;font-weight: 400;color: #585858;">
                  <p>
                    1.这是一个任务详情<br>
                    2.这是一个任务详情<br>
                    3.提交要求<br>
                  </p>
                </ion-text>
              </div>
            </div>
            <div>
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #5C82FF">任务详情：
              </ion-text>
              <div
                  style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #6379FF;padding: 10px">
                <ion-textarea placeholder="请输入提交内容" :auto-grow="true"
                              style="border: none;font-size: 16px;font-weight: 400;--color: #585858;"></ion-textarea>
              </div>
            </div>

            <div style="width: 100%;text-align: right" @click="takePicture()">
              <div style="display: inline-block;margin-right: 10px">
                <ion-icon style="vertical-align: middle;margin-right: 5px" :icon="pic"></ion-icon>
                <ion-text style="vertical-align: middle">上传图片</ion-text>
              </div>
              <div style="display: inline-block">
                <ion-icon style="vertical-align: middle;margin-right: 5px" :icon="link"></ion-icon>
                <ion-text style="vertical-align: middle">上传附件</ion-text>
              </div>
            </div>

          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FFFFFF;
}

ion-toolbar {
  --background: #FFFFFF;
}


</style>