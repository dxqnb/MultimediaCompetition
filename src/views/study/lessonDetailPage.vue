<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonPage,
  IonText,
  IonImg,
  IonCardContent,
  IonCard,
  IonChip,
  IonItemGroup, IonItemDivider, IonItem, IonList, IonNote, IonAvatar, IonCardTitle, IonCardHeader, IonCardSubtitle,
  IonToolbar, IonSegmentButton, IonLabel, IonSegment, onIonViewDidEnter, onIonViewWillEnter
} from "@ionic/vue";
import {ellipsisHorizontalOutline, checkmarkOutline, star, starOutline} from "ionicons/icons";
import Player from "xgplayer";
import {onMounted, ref} from "vue";
import * as url from "url";

const vs = ref();
const scroll = ref(false);
const content = ref();
const scrollEvents = ref(true);
const fixed = ref();
const divHeight = ref("76vh");
const colors = ['#000', 'purple', 'orange', 'indigo', 'red'];
const rating = ref(4.5);
const segmentValue = ref('lesson');
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

function onScroll(event: any) {
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
function change(event: any) {
  segmentValue.value = event.detail.value;
}
</script>

<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/study/lessons"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button color="light">
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
          <ion-segment mode="md" :value="segmentValue" @ionChange="change" style="width: 50%;padding-bottom: 10px">
            <ion-segment-button value="lesson" >
              <ion-label><h3 style="font-weight: 900">课程</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="comment" >
              <ion-label><h3 style="font-weight: 900">评价</h3></ion-label>
            </ion-segment-button>
          </ion-segment>
          <ion-content :scroll-y="scroll" :style="`height:`+ divHeight">
            <ion-list v-if="segmentValue=='lesson'" style="margin-top: 14px;margin-bottom: 120px">
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item lines="full" @click="$router.push('/study/section/1')">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>
                </ion-item>
                <ion-item lines="full">
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
                </ion-item>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">
                  <ion-label>初识Java</ion-label>
                </ion-item-divider>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.1 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="full">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.2 Java是什么？</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>1.3 Java是什么？</ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
            <div v-if="segmentValue=='comment'" style="margin-top: 14px;margin-bottom: 120px">
              <ion-card>
                <ion-card-content>
                  <div>
                    <pre style="display: inline-block;margin: 5px 8px;width: 50px;color: #ff9900">{{ rating }}分</pre>
                    <v-rating
                        color="#000"
                        v-model="rating"
                        :hover="true"
                        half-increments
                    >
                      <template v-slot:item="props:any">
                        <ion-icon color="primary" size="large" :icon=" props.isFilled ? star : starOutline "
                                  @click="()=>{props.onClick;/*console.log(props)*/}"></ion-icon>

                      </template>
                    </v-rating>
                  </div>
                  <ion-text color="medium" style="font-size: 10px">有xx人评价了这个课</ion-text>
                </ion-card-content>

              </ion-card>
              <ion-card>
                <ion-card-content style="padding: 0">
                  <ion-list>
                    <ion-item lines="none" class="ion-text-wrap">
                      <div style="width: 70px;"></div>
                      <div class="ion-padding-top ion-margin-top">
                        <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                          <img src="https://www.0030.store/favicon.png" alt="">
                        </ion-avatar>
                        <ion-text><h2>爱学习的小鱼</h2></ion-text>
                        <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                        <v-rating
                            :disabled="true"
                            color="#000"
                            v-model="rating"
                            :hover="true"
                            half-increments
                            style="position: absolute;right: 20px;top: 35px;"
                        >
                          <template v-slot:item="props:any">
                            <ion-icon color="primary" size="small" :icon=" props.isFilled ? star : starOutline "
                            ></ion-icon>
                          </template>
                        </v-rating>
                        <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                          真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                        <ion-img src="https://www.0030.store/test.jpg"
                                 style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                      </div>
                    </ion-item>
                    <ion-item lines="none" class="ion-text-wrap">
                      <div style="width: 70px;"></div>
                      <div class="ion-padding-top ion-margin-top">
                        <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                          <img src="https://www.0030.store/favicon.png" alt="">
                        </ion-avatar>
                        <ion-text><h2>爱学习的小鱼</h2></ion-text>
                        <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                        <v-rating
                            color="#000"
                            :disabled="true"
                            v-model="rating"
                            :hover="true"
                            half-increments
                            style="position: absolute;right: 20px;top: 35px;"
                        >
                          <template v-slot:item="props:any">
                            <ion-icon color="primary" size="small" :icon=" props.isFilled ? star : starOutline "
                            ></ion-icon>
                          </template>
                        </v-rating>
                        <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                          真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                        <ion-img src="https://www.0030.store/test.jpg"
                                 style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                      </div>
                    </ion-item>
                    <ion-item lines="none" class="ion-text-wrap">
                      <div style="width: 70px;"></div>
                      <div class="ion-padding-top ion-margin-top">
                        <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                          <img src="https://www.0030.store/favicon.png" alt="">
                        </ion-avatar>
                        <ion-text><h2>爱学习的小鱼</h2></ion-text>
                        <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                        <v-rating
                            :disabled="true"
                            color="#000"
                            v-model="rating"
                            :hover="true"
                            half-increments
                            style="position: absolute;right: 20px;top: 35px;"
                        >
                          <template v-slot:item="props:any">
                            <ion-icon color="primary" size="small" :icon=" props.isFilled ? star : starOutline "
                            ></ion-icon>
                          </template>
                        </v-rating>
                        <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                          真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                        <ion-img src="https://www.0030.store/test.jpg"
                                 style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                      </div>
                    </ion-item>
                    <ion-item lines="none" class="ion-text-wrap">
                      <div style="width: 70px;"></div>
                      <div class="ion-padding-top ion-margin-top">
                        <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                          <img src="https://www.0030.store/favicon.png" alt="">
                        </ion-avatar>
                        <ion-text><h2>爱学习的小鱼</h2></ion-text>
                        <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                        <v-rating
                            color="#000"
                            v-model="rating"
                            :disabled="true"
                            :hover="true"
                            half-increments
                            style="position: absolute;right: 20px;top: 35px;"
                        >
                          <template v-slot:item="props:any">
                            <ion-icon color="primary" size="small" :icon=" props.isFilled ? star : starOutline "
                            ></ion-icon>
                          </template>
                        </v-rating>
                        <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                          真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                        <ion-img src="https://www.0030.store/test.jpg"
                                 style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                      </div>
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
ion-toolbar {
    --background: #6774E2FF;
  }

</style>