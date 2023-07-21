<script setup lang="ts">

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonCardContent,
  IonCard,
  IonChip,
  IonItemGroup, IonItemDivider, IonItem,IonList,IonNote, IonAvatar,IonCardTitle,IonCardHeader,IonCardSubtitle,
  IonToolbar, IonSegmentButton, IonLabel, IonSegment, onIonViewDidEnter, onIonViewWillEnter
} from "@ionic/vue";
import {ellipsisHorizontalOutline, checkmarkOutline} from "ionicons/icons";
import Player from "xgplayer";
import {onBeforeMount, onBeforeUnmount, onMounted, onUpdated, ref} from "vue";

const vs = ref();
const scroll = ref(false);
const content = ref();
const scrollEvents = ref(true);
const fixed = ref();
const divHeight = ref("76vh");

onMounted(() => {
  setTimeout(function () {
    // content.value.$el.scrollToPoint(0, fixed.value.offsetHeight, 500);
    divHeight.value = window.innerHeight - fixed.value.getBoundingClientRect().bottom - 16 + "px";
    console.log(divHeight.value)
  }, 100);
  const vsp = new Player({
    el: vs.value,
    url: 'https://www.0030.store/5013.MP4',
    height: '20vh',
    width: '85vw',
  })

})
onIonViewDidEnter(() => {

})

function onScroll(event) {
  // const scrollElement = event.target.$el;
  // const scrollTop = scrollElement.scrollTop;
  // console.log(event.target.detail.scrollTop)
  if (event.target.detail.scrollTop > 150) {
    scrollEvents.value = false;
    content.value.$el.scrollToBottom(500);
    setTimeout(function () {
      scrollEvents.value = true;
    }, 550)
    scroll.value = true;
  } else {
    scrollEvents.value = false;
    content.value.$el.scrollToTop(500);
    // setTimeout(function () {
    scrollEvents.value = true;
    // }, 550)
    scroll.value = false;
  }
  // console.log(event);
}
</script>

<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/lessons"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontalOutline"/>

          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="main" style="z-index: -2;" :scroll-events="scrollEvents" @ionScrollEnd="onScroll" ref="content"
                 :fullscreen="true">
      <div slot="fixed" style="width: 90vw;left: 5vw;right: 5vw;z-index: -1;">
        <div ref="fixed" style="margin: 30px 30px">
          <ion-text color="light"><h2>java编程基础</h2></ion-text>
          <ion-chip color="light">王思睿</ion-chip>
        </div>
        <div ref="vs" style="border-radius: 10px;margin: 0 auto"></div>
      </div>
      <div style="height: 350px;width: 1px;pointer-events: none;"></div>
      <ion-card :style="`z-index: 1000;margin: 0;height:`+divHeight">
        <ion-card-content>
          <ion-segment mode="md" value="first" style="width: 50%;">
            <ion-segment-button value="first">
              <ion-label><h3 style="font-weight: 900">课程</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="second">
              <ion-label><h3 style="font-weight: 900">评价</h3></ion-label>
            </ion-segment-button>
          </ion-segment>
          <ion-content :scroll-y="scroll" :style="`height:`+ divHeight">
            <ion-list v-if="false" style="margin-top: 14px;margin-bottom: 120px">
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item lines="none">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item  lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none" >
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
            <div style="margin-top: 14px">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>评论</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-avatar slot="start">
                        <img src="http://localhost:8100/favicon.png" alt="">
                      </ion-avatar>
                      <ion-label>
                        <h2>王思睿</h2>
                        <p>这个老师讲的很好</p>
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-avatar slot="start">
                        <img src="http://localhost:8100/favicon.png">
                      </ion-avatar>
                      <ion-label>
                        <h2>王思睿</h2>
                        <p>这个老师讲的很好</p>
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-avatar slot="start">
                        <img src="http://localhost:8100/favicon.png">
                      </ion-avatar>
                      <ion-label>
                        <h2>王思睿</h2>
                        <p>这个老师讲的很好</p>
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-avatar slot="start">
                        <img src="http://localhost:8100/favicon.png">
                      </ion-avatar>
                      <ion-label>
                        <h2>王思睿</h2>
                        <p>这个老师讲的很好</p>
                      </ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-avatar slot="start">
                        <img src="http://localhost:8100/favicon.png">
                      </ion-avatar>
                      <ion-label>
                        <h2>王思睿</h2>
                        <p>这个老师讲的很好</p>
                      </ion-label>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </div>
          </ion-content>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content.main::part(background) {
  background: url("@/img/background.png") no-repeat;
  background-size: contain;
  z-index: -2;
}
</style>