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
import {addZyKc, getKcDetailList, getZyKcDetailList} from "@/api/study";


interface item {
  id: number,
  kcdictid: string,
  img: string,
  title: string,
  introduction: number,
  link: string,
  createby: string,
  createtime: string
}

const items = ref<item[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

for (let i = 1; i < 20; i++) {

}
let user = localStorage.getItem('user')
const deptid = ref('999')
if (user != null) {
  deptid.value = JSON.parse(user).deptid
  getZyKcDetailList(deptid.value).then((res) => {
    items.value = res.data.data
  })
}
const segmentValue = ref("")
segmentValue.value = deptid.value

function change(event: any) {
  console.log(event.detail.value)
  if (event.detail.value == '1' || event.detail.value == '2' || event.detail.value == '3') {
    getKcDetailList(event.detail.value).then((res) => {
      items.value = res.data.data
    })
  } else {
    getZyKcDetailList(deptid.value).then((res) => {
      items.value = res.data.data
    })
  }
}
function addLesson() {
  if (user != null) {
    addZyKc(JSON.parse(user).username, deptid.value).then((res)=>{
      console.log(res)
    })
  }
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
      <ion-segment v-model="segmentValue" mode="ios" @ionChange="change">
        <ion-segment-button :value="deptid">
          <ion-label><h3 style="font-weight: 900">专业课程</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="1">
          <ion-label><h3 style="font-weight: 900">时事政治</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="2">
          <ion-label><h3 style="font-weight: 900">专升本</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="3">
          <ion-label><h3 style="font-weight: 900">身心健康</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height: 85vh;">
        <ion-list>
          <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
            <ion-refresher-content></ion-refresher-content>
          </ion-refresher>
          <ion-item-group class="ion-content-scroll-host">
            <lesson-item v-for="(item, index) in items" :item="item" :type="deptid==segmentValue?'zykc':'kc'"
                         :index="index"></lesson-item>
          </ion-item-group>
        </ion-list>
<!--        <ion-infinite-scroll>-->
<!--          <ion-infinite-scroll-content></ion-infinite-scroll-content>-->
<!--        </ion-infinite-scroll>-->
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