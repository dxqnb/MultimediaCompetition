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
  IonChip,
  IonItemGroup, IonItemDivider, IonItem, IonList, IonNote, IonAvatar, IonCardTitle, IonCardHeader, IonCardSubtitle,
  IonToolbar, IonSegmentButton, IonLabel, IonSegment, onIonViewDidEnter, onIonViewWillEnter
} from "@ionic/vue";
import {ellipsisHorizontal, checkmarkOutline, star, starOutline} from "ionicons/icons";
import Player from "xgplayer";
import {onMounted, ref} from "vue";

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
  const vsp = new Player({
    el: vs.value,
    url: 'https://www.0030.store/5013.MP4',
    height: '30vh',
    width: '100%',
  })

})

function change(event: any) {
  segmentValue.value = event.detail.value;
}
</script>

<template>
  <ion-page class="page">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <div ref="vs">
        </div>
        <ion-buttons style="position: absolute;top: 20px;left: 20px">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/study/lesson/1"></ion-back-button>
        </ion-buttons>
        <ion-buttons style="position: absolute;top: 20px;right: 20px">
          <ion-button>
            <ion-icon color="light" :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-header class="">
      <ion-segment mode="md" :value="segmentValue" @ionChange="change" style="padding-bottom: 10px">
        <ion-segment-button value="lesson">
          <ion-label><h3 style="font-weight: 900">共享笔记</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="comment">
          <ion-label><h3 style="font-weight: 900">我的笔记</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="test" @click="$router.push('/study/test/')">
          <ion-label><h3 style="font-weight: 900">随堂练习</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content>
      <div v-if="segmentValue=='lesson'">
        <ion-card-content style="padding: 0">
          <ion-list>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </div>
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
  --background: #000;
}
</style>