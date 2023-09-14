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
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";
import TecItem from "@/views/study/components/tecItem.vue";
import NewsItem from "@/views/study/components/newsItem.vue";
import {getVideoYw} from "@/api/study";

const items = reactive([""]);
const main = ref(true);
getVideoYw(0,10).then((res)=>{
  console.log(res.data.data)
})
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
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>今日要闻</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <!--      <div style="width: 50%;">-->
      <!--      <ion-segment style="width: 50%;" value="first" mode="md">-->
      <!--        <ion-segment-button value="first">-->
      <!--          <ion-label style="margin: auto;"><h3 style="font-weight: 900;">推荐</h3></ion-label>-->
      <!--        </ion-segment-button>-->
      <!--        <ion-segment-button value="second">-->
      <!--          <ion-label><h3 style="font-weight: 900">要闻</h3></ion-label>-->
      <!--        </ion-segment-button>-->
      <!--      </ion-segment>-->
      <ion-text style="color:#333333;font-size: 18px;font-weight: 600;display: inline-block;margin: 10px 14px">精选文章
      </ion-text>
      <div style="width: 100%;padding-left: 20px;font-weight: 600;font-size: 14px">
        <ion-text :style="main?'color:#333333':'color:#C2C2C2'" style="padding-right: 10px" @click="main=true">推荐
        </ion-text>
        <ion-text :style="!main?'color:#333333':'color:#C2C2C2'" @click="main=false">要闻</ion-text>
      </div>
      <!--      </div>-->
      <ion-grid>
        <ion-row class="ion-align-items-start">
          <ion-col>
            <news-item @click="$router.push('/study/news/1')"></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #F7F8F9
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

.segment-button-indicator.segment-button-indicator-animated {
  display: none;
}
</style>