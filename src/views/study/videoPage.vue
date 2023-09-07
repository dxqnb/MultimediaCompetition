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
  IonButton, IonInput, IonModal, IonItem, IonSearchbar, IonImg, IonList, IonLabel, actionSheetController
} from "@ionic/vue";
import {
  chatboxOutline,
  ellipsisHorizontalOutline,
  heart,
  heartOutline,
  searchOutline,
  thumbsUpOutline
} from "ionicons/icons";
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
const flag = ref(false);
const isOpen = ref(false);
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
    wInnerHeight.value = window.innerHeight - head.value.$el.offsetHeight;
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

async function canDismiss() {
  isOpen.value = false
  return true
}

const modal = ref()
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
                      :icon="flag?heart:heartOutline" @click="flag=!flag"></ion-icon>
            <ion-text style="display: inline-block;">{{ flag ? 256 + 1 : 256 }}</ion-text>
            <ion-icon @click="isOpen=true"
                      style="vertical-align: text-bottom;margin-right: 8px;width: 1.5em;height: 1.5em;margin-left: 10px"
                      :icon="chatboxOutline"></ion-icon>
            <ion-text @click="isOpen=true" style="display: inline-block;">10</ion-text>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-modal ref="modal" :is-open="isOpen" :showBackdrop="false" :can-dismiss="canDismiss" :initial-breakpoint="0.5"
               :breakpoints="[0, 0.5]">
      <ion-content class="ion-padding vice">
        <ion-text slot="fixed"
                  style="text-align: center;display: block;font-size: 15px;color: #484848;padding-top: 10px ;margin: 0 0 10px 0;top: 0;width: 100%;background-color: #FFFFFF">
          评论&nbsp;{{ `10` }}
        </ion-text>
        <ion-list style="margin-top: 20px;margin-bottom: 70%">
          <ion-item lines="full" class="vice" style="--background: white" v-for="i in 10">
            <ion-avatar style="margin-top: 10px" slot="start">
              <ion-img src="https://www.0030.store/test.jpg"></ion-img>
            </ion-avatar>
            <div>
              <ion-label style="margin-top: 10px">
                <h3>爱学习的小鱼</h3>
                <p style="font-size: 11px">2022年5月23日</p>
              </ion-label>
              <ion-text style="display: block;font-size: 13px;color: #4A4A4A;margin: 8px 0">
                真的很喜欢这个老师介绍的东西，都是满满的干货！！
              </ion-text>
            </div>
          </ion-item>
        </ion-list>
        <div slot="fixed" style="bottom: 50%;left: 0;width: 100%;background-color: #FFFFFF" class="ion-padding">
<!--          <ion-input @click="modal.$el.setCurrentBreakpoint(0.75)" placeholder="Search"></ion-input>-->
          <ion-text style="display:block;color: #5B78EC;font-size: 15px;font-weight: 500;margin-top: 10px">我的评论</ion-text>
          <ion-searchbar class="search" :mode="'md'" search-icon="1"
                       style="--box-shadow: none;--border-radius: 10px;font-size: 13px !important;width: 100%;"
                       placeholder="请输入"></ion-searchbar>
        </div>

      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: black;
}

ion-content.vice::part(background) {
  background: white;
}

ion-item.vice::part(native) {
  align-items: flex-start
}
</style>
<style>
.searchbar-input.sc-ion-searchbar-md{
  padding-left: 6px!important;
  padding-right: 0!important;
}
ion-modal{
  --height: 100%;
}
</style>