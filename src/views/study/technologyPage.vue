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
import {getVideoJs} from "@/api/study";
import {el} from "vuetify/locale";

interface item {
  id: Number,
  likecount: Number,
  coverimg: string
  title: String,
  avatar: String,
  link: String,
  createBy: String,
  createtime: String,
  lll: String,
}

const itemsLeft = reactive<item[]>([]);
const itemsRight = reactive<item[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

getVideoJs(1, 10).then(res => {
  for (let i = 0; i < res.data.data.length; i++) {
    if (i % 2 == 0) {
      itemsLeft.push(res.data.data[i])
    } else {
      itemsRight.push(res.data.data[i])
    }
  }
  console.log(itemsLeft)
})
// for (let i = 1; i < 10; i++) {
//   itemsLeft.push({
//     id: i,
//     likecount: 0,
//     coverimg: "https://www.0030.store/%E5%9F%BA%E6%9C%AC%E7%A7%AF%E5%88%86%E5%85%AC%E5%BC%8F.jpeg",
//     title: "title" + i,
//     avatar: 'https://www.0030.store/favicon.png',
//     link: "String",
//     createBy: 'admin',
//     createtime: "String",
//     lll: "String",
//   });
//   itemsRight.push({
//     id: i,
//     likecount: 0,
//     coverimg: "https://www.0030.store/%E5%9F%BA%E6%9C%AC%E7%A7%AF%E5%88%86%E5%85%AC%E5%BC%8F.jpeg",
//     title: "title" + i,
//     avatar: 'https://www.0030.store/favicon.png',
//     link: "String",
//     createBy: 'admin',
//     createtime: "String",
//     lll: "String",
//   });
// }

</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
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
            <ion-col size="6"  >
              <tec-item v-for="(item, index) in itemsLeft" :avatar="item.avatar" :like-count="item.likecount"
                        :img-url="item.coverimg" :title="item.title" :item="item"
                        :index="index"/>
            </ion-col>
            <ion-col size="6" >
              <tec-item v-for="(item, index) in itemsRight" :avatar="item.avatar" :like-count="item.likecount"
                        :img-url="item.coverimg" :title="item.title" :item="item"
                        :index="index"/>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #F7F8F9
}


ion-segment {
  --background: #F7F8F9;
}

/*ion-list{
  --ion-item-background: #ffffff;
}*/

ion-segment-button::part(native) {
  color: #474747;
}

.segment-button-checked::part(native) {
  color: #5D73FF;
}

ion-segment-button {
  --indicator-color: #BDD7FE;
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