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
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";

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
        <IonTitle>学习专区</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>

          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true" class="ion-padding">
      <ion-segment value="first" mode="ios">
        <ion-segment-button value="first">
          <ion-label><h3 style="font-weight: 900">专业课程</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label><h3 style="font-weight: 900">时事政治</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label><h3 style="font-weight: 900">专升本</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="fourth">
          <ion-label><h3 style="font-weight: 900">身心健康</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height: 85vh;">
        <ion-list>
          <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
            <ion-refresher-content></ion-refresher-content>
          </ion-refresher>
          <ion-item-group class="ion-content-scroll-host">
            <lesson-item v-for="(item, index) in items" :item="item" :index="index"></lesson-item>
          </ion-item-group>
        </ion-list>
        <ion-infinite-scroll>
          <div class="infinite-scroll-content">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
                xml:space="preserve"
            >
          <circle fill="none" stroke="#1b6dff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
              <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#1b6dff"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="85"
                  y2="50.5"
              >
            <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
            />
          </line>
              <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#1b6dff"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="49.5"
                  y2="74"
              >
            <animateTransform
                attributeName="transform"
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
            />
          </line>
        </svg>
          </div>
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