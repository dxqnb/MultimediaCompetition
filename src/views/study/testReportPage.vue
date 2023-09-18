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
  IonBadge,
  IonButton, IonSegment, useIonRouter,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {getTestKcTiList, getTestZyTiList} from "@/api/study";

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

const problem = reactive<any[]>([]);
const optionA = reactive<any[]>([]);
const optionB = reactive<any[]>([]);
const optionC = reactive<any[]>([]);
const optionD = reactive<any[]>([]);
const length = ref(0)
const answerItem = reactive<item[]>([])
if (type == 'zykc') {
  getTestZyTiList(taoid.value).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      // console.log(res.data.data[i])
      problem.push(res.data.data[i].problem)
      optionA.push(res.data.data[i].optionA)
      optionB.push(res.data.data[i].optionB)
      optionC.push(res.data.data[i].optionC)
      optionD.push(res.data.data[i].optionD)
      answerItem.push(res.data.data[i])
    }
  })
} else {
  getTestKcTiList(taoid.value).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      // console.log(res.data.data[i])
      problem.push(res.data.data[i].problem)
      optionA.push(res.data.data[i].optionA)
      optionB.push(res.data.data[i].optionB)
      optionC.push(res.data.data[i].optionC)
      optionD.push(res.data.data[i].optionD)
      answerItem.push(res.data.data[i])
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
          <ion-content style="height: 3em;white-space: nowrap;" :scroll-y="false" :scroll-x="true">

            <div
                style="border-radius: 100%;width: 2em;height: 2em;display: inline-block;vertical-align: text-bottom;text-align: center;line-height: 2em;color: white;margin-right: 1em"
                :class="items.includes(i+'')?wrong:pass" v-for="i in length">{{ i }}
            </div>
          </ion-content>
        </ion-card-content>
      </ion-card>
      <ion-card style="margin-left: 0;margin-right: 0;height: 134px;">
        <ion-card-content>
          <ion-text color="primary"><h2 style="font-weight: 400">错题集</h2></ion-text>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content.main::part(background) {
  background: #F7F8F9;
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
</style>