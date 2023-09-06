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
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonInfiniteScrollContent
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";

const items = reactive([""]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};
const segmentValue=ref("1")
for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}
function change(event: any) {
  segmentValue.value = event.detail.value;
}

</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>学习专区</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>

          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true" class="ion-padding">
      <ion-segment :value="segmentValue" mode="ios" @change="change">
        <ion-segment-button value="1">
          <ion-label><h3 style="font-weight: 900">专业课程</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="2">
          <ion-label><h3 style="font-weight: 900">时事政治</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="3">
          <ion-label><h3 style="font-weight: 900">专升本</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="4">
          <ion-label><h3 style="font-weight: 900">身心健康</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height: 85vh;">
        <ion-list>
          <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
            <ion-refresher-content></ion-refresher-content>
          </ion-refresher>
          <ion-item-group class="ion-content-scroll-host">
            <lesson-item v-if="segmentValue=='1'" v-for="(item, index) in items" :item="item" :index="index"></lesson-item>
            <lesson-item v-if="segmentValue=='2'"></lesson-item>
          </ion-item-group>
        </ion-list>
        <ion-infinite-scroll>
          <ion-infinite-scroll-content></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    </ion-content>
  </IonPage>
</template>

<style scoped>
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
  --border-radius: 20px;
  --color-checked: #fff;

}

</style>