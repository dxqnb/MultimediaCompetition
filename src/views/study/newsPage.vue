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
  IonRadio, IonRadioGroup
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";
import TecItem from "@/views/study/components/tecItem.vue";
import NewsItem from "@/views/study/components/newsItem.vue";

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
    <ion-content :scroll-y="false" :fullscreen="true" class="ion-padding">
<!--      <div style="width: 50%;">-->
        <ion-segment style="width: 50%;" value="first" mode="md">
          <ion-segment-button value="first">
            <ion-label style="margin: auto;"><h3 style="font-weight: 900;">推荐</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="second">
            <ion-label><h3 style="font-weight: 900">要闻</h3></ion-label>
          </ion-segment-button>
        </ion-segment>
<!--      </div>-->
      <ion-content style="height: 85vh;">
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
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
/*ion-segment {
  --background: var(--ion-background-color);
}

!*ion-list{
  --ion-item-background: #ffffff;
}*!

ion-segment-button::part(native) {
  color: #474747;
}

.segment-button-checked::part(native) {
  color: #ffffff;
}

ion-segment-button {
  --indicator-color: #5b78ec;
  --border-radius: 20px;
  --color-checked: #fff;
}

ion-segment-button::before {
  opacity: 0;
}*/

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