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
import {ellipsisHorizontal, ellipsisVertical, ellipsisVerticalOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";

interface lessonName{
  name:string
}
const items = reactive<lessonName[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};

  items.push({name:'java编程基础'});
  items.push({name:'基础体育'});
  items.push({name:'移动应用开发导论'});
  items.push({name:'数学（专升本）'});
  items.push({name:'英语（专升本）'});
const star = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
    '    width="15.869873046875" height="15" viewBox="0 0 15.869873046875 15" fill="none">\n' +
    '    <g opacity="0.93" transform="translate(0 0)  rotate(0)">\n' +
    '        <path id="Path - 轮廓" fill-rule="evenodd" style="fill:#FFFFFF" opacity="1"\n' +
    '            d="M7.93,0c0.38,0 0.73,0.21 0.9,0.55l1.91,3.81l4.27,0.62c0.38,0.05 0.69,0.32 0.81,0.68c0.12,0.37 0.02,0.77 -0.26,1.03l-3.08,2.96l0.72,4.18c0.07,0.37 -0.08,0.75 -0.39,0.98c-0.31,0.22 -0.71,0.25 -1.05,0.08l-3.83,-1.98l-3.82,1.98c-0.34,0.17 -0.75,0.14 -1.05,-0.08c-0.31,-0.23 -0.46,-0.61 -0.4,-0.98l0.73,-4.18l-3.08,-2.96c-0.28,-0.26 -0.38,-0.66 -0.26,-1.03c0.11,-0.36 0.43,-0.63 0.81,-0.68l4.27,-0.62l1.91,-3.81c0.17,-0.34 0.51,-0.55 0.89,-0.55zM9.1804,5.7234l-1.25,-2.49l-1.25,2.49c-0.14,0.3 -0.42,0.5 -0.75,0.54l-2.76,0.4l1.99,1.91c0.24,0.23 0.35,0.57 0.29,0.9l-0.47,2.71l2.49,-1.29c0.29,-0.15 0.63,-0.15 0.92,0l2.5,1.29l-0.48,-2.71c-0.05,-0.33 0.06,-0.67 0.3,-0.9l1.99,-1.91l-2.77,-0.4c-0.32,-0.04 -0.6,-0.24 -0.75,-0.54z"></path>\n' +
    '    </g>\n' +
    '</svg>');
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
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
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
      <div v-for="(item,i) in items">
        <div
            style="width: 100%;border-radius: 10px;margin: 0 auto;height: 40px;" :style="i%3==1?'background: linear-gradient(to left,rgba(111,68,230,0.51), rgba(66,92,255,0.51));':i%3==2?'background: linear-gradient(to left,rgba(230,203,68,0.51), rgba(255,110,66,0.51));':'background: linear-gradient(to left,rgba(68,230,110,0.51), rgba(66,193,255,0.51));'">
          <ion-icon style="line-height: 40px;padding: 0 10px;vertical-align: text-bottom" :icon="star"></ion-icon>
          <ion-text style="line-height: 40px;font-weight: 600;font-size: 14px" color="light">{{ item.name }}</ion-text>
        </div>
        <ion-card style="margin: 10px 0 20px 0;--background: #ffffff;border-radius: 12px">
          <ion-card-content style="padding-top: 0 ;padding-bottom: 0">
            <ion-grid>
              <ion-row>
                <ion-col size="5" @click="$router.push('/study/progress')">
                  <div>
                    <ion-icon :icon="bluePoint" style="padding-right: 5px;width: 20px;height: 20px;vertical-align: middle"></ion-icon>
                    <ion-text style="line-height: 40px;font-weight: 700;color: #5C5C5C;font-size: 14px;">学习进度</ion-text>
                  </div>
                  <div style="margin-left: 10px">
                    <ion-text style="font-size: 40px;font-weight: 700">
                      {{ i==1?32:i==2?21:i==3?19:i==4?69:83 }}
                    </ion-text>
                    <ion-text style="font-weight: 600">
                      次
                    </ion-text>
                  </div>
                  <div style="color: #D2D2D2;font-size: 10px;width: 70%;text-align: center">累计次数</div>
                </ion-col>
                <ion-col size="7">
                  <div>
                    <ion-icon :icon="redPoint" style="padding-right: 5px;width: 20px;height: 20px;vertical-align: middle"></ion-icon>
                    <ion-text style="line-height: 40px;font-weight: 600;color: #5C5C5C;font-size: 14px">最新通知</ion-text>
                  </div>
                  <div style="margin-left: 21px">
                    <ion-text style="font-size: 12px;color: #9F9F9F">
                      {{ i==1?'10:00':i==2?'8:30':i==3?'12:26':i==4?'16:10':'14:23' }}
                    </ion-text>
                  </div>
                  <div style="margin-left: 21px">
                    <ion-text style="font-size: 12px;font-weight: 400;color: #B5B5B5">
                      {{ i==1?'由于今天下雨，体育课暂停':i==2?'之后课程到5#211上课，请同学们...':i==3?'今天上课请同学们带好自己的电脑...':i==4?'今天上课请同学们带好自己的电脑...':'关于宿舍区整体网络升级改造的公，...' }}
                    </ion-text>
                  </div>
                  <div style="color: #A0A0A0;font-size: 10px;width: 100%;text-align: right">{{ i==1?'体育部':i==2?'信息中心':i==3?'公选课部':i==4?'公选课部':'信息中心' }}</div>
                  <ion-icon style="position: absolute;top: 4px;right: -10px;width: 20px;height: 20px;color: #E0E0E0" :icon="ellipsisVertical">111</ion-icon>
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
  background: #FBFBFB;
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