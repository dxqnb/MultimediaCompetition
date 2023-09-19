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
  IonInfiniteScrollContent, toastController
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {onUpdated, reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";
import {addZyKc, getKcDetailList, getMyKc, getMyZyKc, getZyKcDetailList} from "@/api/study";


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
const isJoin = ref<boolean[]>([]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

let user = localStorage.getItem('user') || ''
const deptid = ref('999')
if (user != null) {
  deptid.value = JSON.parse(user).deptid
  getZyKcDetailList(deptid.value).then((res) => {
    items.value = res.data.data
    getMyZyKc(JSON.parse(user).username).then((r) => {
      a:for (let i = 0; i < items.value.length; i++) {
        for (let j = 0; j < r.data.data.length; j++) {
          if (items.value[i].id == r.data.data[j].zykcid) {
            isJoin.value.push(true);
            continue a
          } else {
            if (j == r.data.data.length || j == r.data.data.length - 1) {
              isJoin.value.push(false);
            }
          }
        }
      }
    })
  })
}
const segmentValue = ref("")
segmentValue.value = deptid.value
onUpdated((() => {
  console.log(1)
  isJoin.value = []
  if (segmentValue.value == '1' || segmentValue.value == '2' || segmentValue.value == '3') {
    getKcDetailList(segmentValue.value).then((res) => {
      items.value = res.data.data
      getMyKc(JSON.parse(user).username).then((r) => {
        a:for (let i = 0; i < items.value.length; i++) {
          for (let j = 0; j < r.data.data.length; j++) {
            if (items.value[i].id == r.data.data[j].kcid) {
              isJoin.value.push(true);
              continue a
            } else {
              if (j == r.data.data.length || j == r.data.data.length - 1) {
                isJoin.value.push(false);
              }
            }
          }
        }
      })
    })
  } else {
    getZyKcDetailList(deptid.value).then((res) => {
      items.value = res.data.data
      getMyZyKc(JSON.parse(user).username).then((r) => {
        a:for (let i = 0; i < items.value.length; i++) {
          for (let j = 0; j < r.data.data.length; j++) {
            if (items.value[i].id == r.data.data[j].zykcid) {
              isJoin.value.push(true);
              continue a
            } else {
              if (j == r.data.data.length || j == r.data.data.length - 1) {
                isJoin.value.push(false);
              }
            }
          }
        }
      })
    })
  }
}))

function change(event: any) {
  console.log(event.detail.value)
  isJoin.value = []
  if (event.detail.value == '1' || event.detail.value == '2' || event.detail.value == '3') {
    getKcDetailList(event.detail.value).then((res) => {
      items.value = res.data.data
      getMyKc(JSON.parse(user).username).then((r) => {
        a:for (let i = 0; i < items.value.length; i++) {
          for (let j = 0; j < r.data.data.length; j++) {
            if (items.value[i].id == r.data.data[j].kcid) {
              isJoin.value.push(true);
              continue a
            } else {
              if (j == r.data.data.length || j == r.data.data.length - 1) {
                isJoin.value.push(false);
              }
            }
          }
        }
      })
    })
  } else {
    getZyKcDetailList(deptid.value).then((res) => {
      items.value = res.data.data
      getMyZyKc(JSON.parse(user).username).then((r) => {
        a:for (let i = 0; i < items.value.length; i++) {
          for (let j = 0; j < r.data.data.length; j++) {
            if (items.value[i].id == r.data.data[j].zykcid) {
              isJoin.value.push(true);
              continue a
            } else {
              if (j == r.data.data.length || j == r.data.data.length - 1) {
                isJoin.value.push(false);
              }
            }
          }
        }
      })
    })
  }
}

function addLesson() {
  if (user != null) {
    addZyKc(JSON.parse(user).username, deptid.value).then(async (res) => {
      const toast = await toastController.create({
        message: '添加课程成功'
      })
      await toast.present().then(() => {
        setTimeout(() => {
          toast.dismiss()
        }, 1000)
      })
    })
  }
}

</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: #FFFFFF">
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
    <ion-content :scroll-y="false" :fullscreen="true" class="">
      <ion-segment style="background: #F7F8F9;padding: 10px" v-model="segmentValue" mode="ios" @ionChange="change">
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
      <ion-content class="vice" style="height: 85vh;--padding-start: 10px;--padding-end: 10px">
        <ion-list style="background: #FFFFFF;height: 100%;">
          <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
            <ion-refresher-content></ion-refresher-content>
          </ion-refresher>
          <ion-item-group class="ion-content-scroll-host">
            <lesson-item v-for="(item, index) in items" :disable="isJoin[index]" :item="item"
                         :type="deptid==segmentValue?'zykc':'kc'"
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
  --background: white;
}

ion-content.vice::part(background) {
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
  --color: #7C8091;
}

</style>