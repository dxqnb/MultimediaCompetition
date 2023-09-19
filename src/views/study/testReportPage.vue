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
  IonCol,
  IonContent,
  IonRow,
  IonCard,
  IonCardContent,
  IonList,
  IonButton, IonSegment, useIonRouter,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {getMyKcWorng, getMyZyWorng, getTestKcTiList, getTestZyTiList} from "@/api/study";

const items = reactive<any[]>([]);
const pass = ref('pass');
const wrong = ref('wrong');
const taoid = ref('');
const route = useRoute()
const error: string = route.params.item + '';
const type: string = route.params.type + '';

if (error != null && error.includes(',')) {
  for (let i = 0; i < error.split(',').length - 1; i++) {
    items.push(error.split(',')[i])
  }
  taoid.value = error.split(',')[error.split(',').length - 1]
} else {
  taoid.value = error
}

interface item {
  "id": number
  "problem": string
  "taoid": number
  "tres": string
  "optionA": string
  "optionB": string
  "optionC": string
  "optionD": string
  "answer": string
  "createtime": string
}

interface errorItem {
  id: number,
  userid: number,
  taoid: number,
  tiid: number,
  tname: string,
  problem: string,
  tres: string,
  optionA: string,
  optionB: string,
  optionC: string,
  optionD: string,
  answer: string,
  myanswer: string,
  createtime: string,
  iszy: string
}

const errorList = reactive<errorItem[]>([])
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id
const router = useIonRouter()
const length = ref(0)
const answerItem = reactive<item[]>([])
if (type == 'zykc') {
  getTestZyTiList(taoid.value).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      answerItem.push(res.data.data[i])
    }
  })
  getMyZyWorng(userid).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      errorList.push(res.data.data[i])
    }
  })
} else {
  getTestKcTiList(taoid.value).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      answerItem.push(res.data.data[i])
    }
  })
  getMyKcWorng(userid).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      errorList.push(res.data.data[i])
    }
  })
}


function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}


</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>练习报告</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding main">
      <ion-card style="margin: 0">
        <ion-card-content>
          <ion-text style="color: #474747;"><h2 style="font-weight: 900">答题卡</h2></ion-text>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-text>
                  <div
                      style="border-radius: 100%;width: 1em;height: 1em;background-color: #5BC9A4;display: inline-block;vertical-align: text-bottom;"></div>
                  <span style="margin-left: 10px;font-size: 12px">正确</span>
                  <div
                      style="border-radius: 100%;width: 1em;height: 1em;background-color: #E15238;display: inline-block;margin-left: 1.5em;vertical-align: text-bottom;"></div>
                  <span style="margin-left: 10px;font-size: 12px">不正确</span>
                </ion-text>
              </ion-col>
              <ion-col size="6" style="text-align: right">
                <span style="font-size: 12px">共{{ length }}题</span>
              </ion-col>
            </ion-row>

          </ion-grid>
          <ion-content style="height: 3em;white-space: nowrap;" class="vice" :scroll-y="false" :scroll-x="true">

            <div
                style="border-radius: 100%;width: 2em;height: 2em;display: inline-block;vertical-align: text-bottom;text-align: center;line-height: 2em;color: white;margin-right: 1em"
                :class="items.includes(i+'')?wrong:pass" v-for="i in length">{{ i }}
            </div>
          </ion-content>
        </ion-card-content>
      </ion-card>
      <ion-card style="margin-left: 0;margin-right: 0;min-height: 134px;">
        <ion-card-content>
          <ion-text color="primary"><h2 style="font-weight: 400">错题集</h2></ion-text>
          <ion-list>
            <div style="width: 96%;margin: 10px auto;border-radius: 10px;display: flex;position:relative;"
                 :style="i%3==1?'background: #FAFCFF;':i%3==2?'background: #FAFFFC;':'background: #FFFEFA;'"
                 v-for="(item,i) in errorList">
              <ion-icon style="width: 50px;height: 50px;margin: 12px" icon='data:image/svg+xml;utf8,<svg id="组_1581" data-name="组 1581" xmlns="http://www.w3.org/2000/svg" width="46.757" height="49.876" viewBox="0 0 46.757 49.876">
                  <path id="路径_629" data-name="路径 629" d="M150.714,144.084h-19.1a8.218,8.218,0,0,1-8.218-8.218V102.426a8.218,8.218,0,0,1,8.218-8.218h30.411a8.218,8.218,0,0,1,8.128,8.218v22.254a8.158,8.158,0,0,1-2.4,5.818l-11.307,11.277a8.158,8.158,0,0,1-5.728,2.309Zm-19.1-46.877a5.219,5.219,0,0,0-5.219,5.219v33.441a5.219,5.219,0,0,0,5.219,5.219h19.1a5.188,5.188,0,0,0,3.689-1.41L165.71,128.4a5.189,5.189,0,0,0,1.44-3.719V102.426a5.219,5.219,0,0,0-5.219-5.219Z" transform="translate(-123.392 -94.208)" fill="#d3e2ff"/>
                  <path id="路径_630" data-name="路径 630" d="M317.108,318.37h-3v-9.657a8.218,8.218,0,0,1,8.218-8.218h8.518v3h-8.668a5.219,5.219,0,0,0-5.069,5.219Zm-2.129-33.77H296.984a1.5,1.5,0,0,1,0-3h17.995a1.5,1.5,0,1,1,0,3Zm5.638,8.937H296.924a1.529,1.529,0,0,1-1.5-1.5,1.5,1.5,0,0,1,1.5-1.5h23.693a1.5,1.5,0,0,1,1.5,1.5A1.53,1.53,0,0,1,320.617,293.537Z" transform="translate(-285.347 -270.623)" fill="#d3e2ff"/>
                  </svg>'></ion-icon>
              <div
                  style="display: block;font-size: 14px;text-overflow: ellipsis;overflow: hidden;width: 50%;margin: 10px 0 0 10px;white-space: nowrap;">
                {{ item.problem }}
              </div>
              <div style="position: absolute;font-size: 10px;bottom: 6px;left: 80px;">
                <ion-text>我的答案：</ion-text>
                <ion-text style="color: #ff5555">
                  {{
                    item.myanswer == 'A' ? item.optionA : item.myanswer == 'B' ? item.optionB : item.myanswer == 'C' ? item.optionC : item.optionD
                  }}
                </ion-text>
              </div>
              <div style="position: absolute;font-size: 10px;bottom: 6px;right: 20px;">
                <ion-text>正确答案：</ion-text>
                <ion-text style="color: #20bd20">
                  {{
                    item.answer == 'A' ? item.optionA : item.answer == 'B' ? item.optionB : item.answer == 'C' ? item.optionC : item.optionD
                  }}
                </ion-text>
              </div>
            </div>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content.main::part(background) {
  background: #F7F8F9;
}

ion-card {
  --background: white;
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

.pass {
  background-color: #5BC9A4;
}

.wrong {
  background-color: #E15238;
}

ion-content.vice::part(background) {
  background: white;
}

ion-list {
  background: white;
}
</style>