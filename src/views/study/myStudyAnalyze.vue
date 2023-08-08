<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonContent,
  IonCol,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";

const items = reactive([""]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};

for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}
const star = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15.867" height="15" viewBox="0 0 15.867 15">\n' +
    '  <g id="组_456" data-name="组 456" transform="translate(1 1)" opacity="0.93" style="isolation: isolate">\n' +
    '    <path id="Path" d="M9.076,4.279l4.791.69L10.4,8.3l.818,4.7L6.933,10.779,2.649,13l.818-4.7L0,4.969l4.791-.69L6.933,0Z" fill="#5676f1"/>\n' +
    '    <path id="Path_-_轮廓" data-name="Path - 轮廓" d="M6.933-1a1,1,0,0,1,.894.552L9.736,3.363l4.273.616a1,1,0,0,1,.55,1.711L11.476,8.65l.727,4.178a1,1,0,0,1-1.445,1.059L6.933,11.905,3.109,13.888a1,1,0,0,1-1.445-1.059L2.39,8.65-.693,5.69A1,1,0,0,1-.952,4.663a1,1,0,0,1,.809-.684l4.273-.616L6.039-.448A1,1,0,0,1,6.933-1ZM11.7,5.667l-2.763-.4a1,1,0,0,1-.752-.542L6.933,2.234,5.685,4.726a1,1,0,0,1-.752.542l-2.763.4,1.989,1.91a1,1,0,0,1,.293.893L3.98,11.184,6.473,9.891a1,1,0,0,1,.92,0l2.493,1.293L9.415,8.469a1,1,0,0,1,.293-.893Z" fill="#fff"/>\n' +
    '  </g>\n' +
    '</svg>\n');
const bluePoint = ref('data:image/svg+xml;utf8,<svg id="组_559" data-name="组 559" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">\n' +
    '  <circle id="椭圆_33" data-name="椭圆 33" cx="7.5" cy="7.5" r="7.5" fill="#5676f1" opacity="0.22"/>\n' +
    '  <circle id="椭圆_32" data-name="椭圆 32" cx="3.5" cy="3.5" r="3.5" transform="translate(4 4)" fill="#5676f1"/>\n' +
    '</svg>\n');
const redPoint = ref('data:image/svg+xml;utf8,<svg id="组_559" data-name="组 559" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">\n' +
    '  <circle id="椭圆_33" data-name="椭圆 33" cx="7.5" cy="7.5" r="7.5" fill="#f15656" opacity="0.22"/>\n' +
    '  <circle id="椭圆_32" data-name="椭圆 32" cx="3.5" cy="3.5" r="3.5" transform="translate(4 4)" fill="#f15656"/>\n' +
    '</svg>\n');

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>我的学习</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div v-for="i in 2">
        <div
            style="width: 90%;border-radius: 4px;background: linear-gradient(to left,rgba(111,68,230,0.51), rgba(66,92,255,0.51));margin: 0 auto;height: 40px;">
          <ion-icon style="line-height: 40px;padding: 0 10px" :icon="star"></ion-icon>
          <ion-text style="line-height: 40px;font-weight: 600" color="light">java高级编程</ion-text>
        </div>
        <ion-card style="margin-top: 5px">
          <ion-card-content style="padding-top: 0 ;padding-bottom: 0">
            <ion-grid>
              <ion-row>
                <ion-col size="5">
                  <div>
                    <ion-icon :icon="bluePoint" style="padding-right: 5px"></ion-icon>
                    <ion-text style="line-height: 40px;font-weight: 600;color: #5C5C5C">学习进度</ion-text>
                  </div>
                  <div style="margin-left: 21px">
                    <ion-text style="font-size: 40px;font-weight: 600">
                      64
                    </ion-text>
                    <ion-text style="font-weight: 600">
                      次
                    </ion-text>
                  </div>
                  <div style="color: #D2D2D2;font-size: 10px;margin: 0 auto;text-align: center">累计次数</div>
                </ion-col>
                <ion-col size="7">
                  <div>
                    <ion-icon :icon="redPoint" style="padding-right: 5px"></ion-icon>
                    <ion-text style="line-height: 40px;font-weight: 600;color: #5C5C5C">最新通知</ion-text>
                  </div>
                  <div style="margin-left: 21px">
                    <ion-text style="font-size: 14px;font-weight: 600;color: #9F9F9F">
                      16:59
                    </ion-text>
                  </div>
                  <div style="margin-left: 21px">
                    <ion-text style="font-size: 12px;font-weight: 400;color: #B5B5B5">
                      关于宿舍区整体网络升级改造的公，...
                    </ion-text>
                  </div>
                  <div style="color: #A0A0A0;font-size: 10px;width: 100%;text-align: right">信息中心</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: #f1f1f1;
}

.item-lines-full {
  --border-width: 0.55px 0px 0px 0px;
}

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-button.topButton {
  --ion-color-base: #E3E7FF !important;
  --ion-color-contrast: #4257DF !important;
}
</style>