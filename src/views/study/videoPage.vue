<script setup lang="ts">
import {onMounted, ref} from "vue";
import Player from "xgplayer";
import {
  IonAvatar,
  IonContent, IonIcon,
  IonPage, IonText,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonButton, IonTitle,
} from "@ionic/vue";
import {ellipsisHorizontalOutline, searchOutline, thumbsUpOutline} from "ionicons/icons";
import {useRoute} from "vue-router";

const id = useRoute().params.id;
const head = ref();
const vs = ref();
const content = ref();
const num = ref(0);
const contentHeight = ref("height: 100vh;width: 100vw;");
const wInnerHeight = ref<number>(0.0);
const vsp = ref<Player[]>([]);
const scrollEvents = ref(true);
const video = ref([{
  url: 'https://www.0030.store/f8df496ca33539a37c1a3420c2e69b94.MP4',
  height: '100%',
  width: '100%',
}, {
  url: 'https://www.0030.store/7d90f9affa69747b7672d68635c5b5c7.MP4',
  height: 'calc(100vh - 100px)',
  width: '100%',
}
  , {
    url: 'https://www.0030.store/7d90f9affa69747b7672d68635c5b5c7.MP4',
    height: '100%',
    width: '100%',
  }]);
const height = ref(0.0);
onMounted(() => {
  // const vsp = new Player({
  //   el: vs.value,
  //   url: 'https://www.0030.store/5013.MP4',
  //   height: '100%',
  //   width: '100%',
  // })
  // const vsp1 = new Player({
  //   el: vs1.value,
  //   url: 'https://www.0030.store/5013.MP4',
  //   height: '100%',
  //   width: '100%',
  // })
  for (let i = 0; i < video.value.length; i++) {
    vsp.value.push(new Player({
      el: vs.value[i],
      url: video.value[i].url,
      // height: 'calc(93% - 83px)',
      height: '90%',
      width: '100vw',
      mobile: {
        gestureY: false,
      },
    }))
  }
  setTimeout(() => {
    // console.log(vs.value)
    wInnerHeight.value = window.innerHeight-head.value.$el.offsetHeight;
    contentHeight.value = `height: ${wInnerHeight.value}px;width: 100vw;`;
    // content.value.$el.scrollToPoint(0, window.innerHeight, 500);
  console.log(head.value.$el.offsetHeight)
  }, 100);
})

function onScroll(event: any) {
  // const scrollElement = event.target.$el;
  // const scrollTop = scrollElement.scrollTop;
  console.log(event.target.detail)
  scrollEvents.value = false;
  if (event.target.detail.deltaY > 150) {
    num.value++;

    console.log(num.value)
  } else if (num.value >= 1 && event.target.detail.deltaY < -150) {
    num.value--;
    console.log(num.value)

  }
  content.value.$el.scrollToPoint(0, wInnerHeight.value * num.value, 200);
  setTimeout(function () {
    if (event.target.detail.deltaY > 150) {
      vsp.value[num.value - 1].pause();

      console.log(num.value)
    } else if (num.value >= 0 && event.target.detail.deltaY < -150) {
      vsp.value[num.value + 1].pause();

    }
    vsp.value[num.value].play();
    scrollEvents.value = true;
  }, 300)
  // console.log(event);
}
</script>

<template>
  <ion-page>
    <IonHeader ref="head" style="background-color: #f7f7f7" collapse="fade" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/technology"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content style="background-color: black" ref="content" :fullscreen="true" :scroll-events="scrollEvents"
                 @ionScrollEnd="onScroll">
      <div :style="contentHeight" v-for="(item,i) in video">
        <div ref="vs"></div>
        <div style="height: 10%; background-color: #0d0d0d;color: #e7e7e7 ;display: flex">
          <div style="height: 100%;line-height: 8vh;margin:0 30px;width: 50%;">
            <ion-avatar style="width: 40px;height: 40px;display:inline-block;margin-right: 8px">
              <img src="https://www.0030.store/favicon.png" style="vertical-align: middle;" alt="">
            </ion-avatar>
            <ion-text style="display: inline-block;font-size: 10px">技术大牛</ion-text>
          </div>
          <div style="width: 50%;line-height: 8vh">
            <ion-icon style="vertical-align: text-bottom;margin-right: 8px;width: 1.5em;height: 1.5em;"
                      :icon="thumbsUpOutline"></ion-icon>
            <ion-text style="display: inline-block;">256</ion-text>
          </div>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: black;
}
</style>