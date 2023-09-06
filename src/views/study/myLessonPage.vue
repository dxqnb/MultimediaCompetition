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
import TecItem from "@/views/study/components/tecItem.vue";

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
        <IonTitle>科技前言</IonTitle>
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
          <ion-label><h3 style="font-weight: 900">推荐</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label><h3 style="font-weight: 900">专栏</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label><h3 style="font-weight: 900">技术</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="fourth">
          <ion-label><h3 style="font-weight: 900">兴趣</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height: 85vh;">
        <ion-grid>
          <ion-row class="ion-align-items-start">
            <ion-col>
                <tec-item @click="$router.push('/study/video')"></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item>
            </ion-col>
            <ion-col>
                <tec-item></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item><tec-item></tec-item>
                <tec-item></tec-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-content>
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
  --border-radius: 20px;
  --color-checked: #fff;
}

ion-segment-button::before {
  opacity: 0;
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}
</style>