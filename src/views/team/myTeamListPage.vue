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
import {getKcRecords, getZyRecords} from "@/api/user";
import MyTeamItem from "@/views/team/components/myTeamItem.vue";
import {getMyFridenTeam} from "@/api/team";

interface team {
  id: number,
  tname: string,
  introduction: string
  bgimg: string,
  number: number,
  mxnumber: number,
  createtime: string,
  tavatar:string,
  userid:string,
  attribute:string,
  activity:number,
}

const items = reactive<team[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

  getMyFridenTeam(Number(JSON.parse(localStorage.getItem('user') || '').id)).then((res: any) => {
    for (let i = 0; i < res.data.data.length; i++) {
      items.push(res.data.data[i])
    }
  })
</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: #FFFFFF">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>我参加的学友团</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list style="background: #FFFFFF;min-height: 100%;">
        <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <ion-item-group class="ion-content-scroll-host">
          <my-team-item v-for="(item, index) in items" :item="item"
                        :index="index"></my-team-item>
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