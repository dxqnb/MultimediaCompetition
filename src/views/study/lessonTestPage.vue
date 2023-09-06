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
  IonFooter,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
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


</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ `1.1 Java是什么？` }}</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon style="color: black" :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true" class="ion-padding">
      <div style="width: 100%;white-space: nowrap;">
        <ion-text
            style="display: inline-block;font-size: 14px;height: 44px;line-height: 44px;vertical-align: bottom;color: #888888;margin: 0 16px 0 0">
          共20题
        </ion-text>

        <div style="display: inline-block;width: 85%;">
          <ion-segment :scrollable="true" value="1" mode="ios">
            <ion-segment-button v-for="i in 20" style="width: 44px;height: 38px;min-width: auto" :value="i+''">
              <ion-label style=""><h6>{{ i }}</h6></ion-label>
            </ion-segment-button>

          </ion-segment>
        </div>
      </div>
      <ion-content style="">
        <ion-text style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
          <h4 style="color: #474747;font-weight: bolder;">题目</h4>
          <div
              style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
        </ion-text>
        <div>
          <ion-text class="ion-margin">
            <p class="ion-margin">
              问：Java是什么？1.1 Java是么1.1 Java是什么？1.1 Java是么？1.1 Java是什么？1.1 Java是什么？
            </p>
          </ion-text>
          <ion-img src="https://www.0030.store/swiperAd/ad1.png"></ion-img>
          <div style="margin-top: 30px">
            <ion-segment value="A" mode="ios" style="display: inline-block;">
              <div v-for="i in 4" style="position: relative;margin: 20px 10px;">
                <ion-segment-button style="width: 44px;height: 38px;min-width: auto;"
                                    :value="i==1?'A':i==2?'B':i==3?'C':'D'">
                  <ion-label style=""><h6>{{ i == 1 ? 'A' : i == 2 ? 'B' : i == 3 ? 'C' : 'D' }}</h6></ion-label>
                </ion-segment-button>
                <p style="display: inline-block;position: absolute;top: 0;left: 80px;margin: 0;line-height: 38px">
                  123</p>
              </div>
            </ion-segment>
          </div>
        </div>
      </ion-content>
    </ion-content>
    <ion-footer style="height: 100px;" collapse="fade" class="ion-no-border">
      <ion-toolbar>
        <div style="margin: 0 auto;display: flex;width: 100%;justify-content: space-evenly;">
          <ion-button shape="round" style="width: 40%;">上一题</ion-button>
          <ion-button shape="round" style="width: 40%;">确定</ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
ion-segment {
  --background: var(--ion-background-color);
}

/*ion-list{
  --ion-item-background: #ffffff;
}*/

ion-segment-button::part(native) {
  color: #474747;
}

.segment-button-checked::part(native) {
  color: #ffffff;
}

ion-segment-button {
  --indicator-color: #5b78ec;
  --border-radius: 100%;
  --color-checked: #fff;
}

ion-segment-button::before {
  opacity: 0;
  display: none;
}

ion-segment::-webkit-scrollbar {
  display: none;
}

ion-content::-webkit-scrollbar {
  display: none;
  //Q:如何隐藏滚动条
  //A:在ion-content中添加属性scroll-y="false" :fullscreen="true"
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

/*.segment-button-indicator.segment-button-indicator-animated{
  display: none;
}*/
</style>