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
import {getKcRecords, getZyRecords} from "@/api/user";

interface lesson {
  avatar: string,
  content: string
  createby: string
  createtime: string
  id: number
  img: string,
  kcid: number,
  kclable: number,
  studentname: string,
  studytime: number,
  title: string,
  userid: number,
  xiaojie: string,
  iszy?: string
}

const items = reactive<lesson[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

getKcRecords(Number(JSON.parse(localStorage.getItem('user') || '').id)).then((res) => {
  for (let i = 0; i < res.data.data.length; i++) {
    items.push(res.data.data[i])
  }
  items.sort((a, b) => {
    return new Date(b.createtime).getTime() - new Date(a.createtime).getTime();
  });

})
getZyRecords(Number(JSON.parse(localStorage.getItem('user') || '').id)).then((res) => {
  for (let i = 0; i < res.data.data.length; i++) {
    items.push(res.data.data[i])
  }
  items.sort((a, b) => {
    return new Date(b.createtime).getTime() - new Date(a.createtime).getTime();
  });
})



</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: #FFFFFF">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>学习记录</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list style="background: #FFFFFF;min-height: 100%;">
        <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <ion-item-group class="ion-content-scroll-host">
          <lesson-item v-for="(item, index) in items" :type="item.iszy=='1'?'zykc':'kc'" :item="item"
                       :index="index"></lesson-item>
        </ion-item-group>
      </ion-list>
      <!--      <ion-infinite-scroll>-->
      <!--        <ion-infinite-scroll-content></ion-infinite-scroll-content>-->
      <!--      </ion-infinite-scroll>-->
    </ion-content>
  </IonPage>
</template>

<style scoped>
ion-content::part(background) {
  background: #FFFFFF;
}


</style>