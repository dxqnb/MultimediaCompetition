<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border">
      <ion-toolbar color="primary" class="head">
        <!--        <ion-title color="light">-->
        <!--          <h3 style="margin-bottom: 5px;">学习</h3>-->
        <!--        </ion-title>-->
        <ion-text size="large" color="light" slot="start" style="margin-left: 20px;margin-top: 10px;margin-bottom: 0px">
          <h2 style="margin-bottom: 5px;margin-top: 0">学友</h2>
          <div style="border: 3px solid var(--ion-color-base);border-radius: 10px;width:12px;margin: 0 auto"></div>
        </ion-text>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <!--      <ion-searchbar style="padding:0"></ion-searchbar>-->
      <ion-searchbar class="search" :mode="'md'"
                     style="--box-shadow: none;--border-radius: 10px;font-size: 12px !important;"
                     placeholder="新生入学攻略"></ion-searchbar>
      <swiper
          effect="cards"
          :grabCursor="true"
          :modules="modules"
          :autoplay="{ delay: 3000, disableOnInteraction: false, }"
          :initialSlide="1"
          :loop="true"
          :space-between="50"
          :pagination="true" :scrollbar="true" :zoom="true"
          @swiper="onSwiper"
      >
        <swiper-slide v-for="item in Banner">
          <!--          <img src="https://www.0030.store/swiperAd/ad1.png" alt="">-->
          <ion-img :src="item.img"></ion-img>
        </swiper-slide>
      </swiper>
      <team-home-first-button></team-home-first-button>
      <notice-area></notice-area>
      <my-team-area></my-team-area>
      <latest-area title="最新"></latest-area>

    </ion-content>

  </ion-page>
</template>
<style scoped>

ion-toolbar.seHead {
  --opacity: 0;
  padding-top: 0 !important;
}

ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: url("https://www.0030.store/background2.jpg") top right no-repeat fixed;
  background-size: 100%;
}

.swiper {
  width: 90%;
  height: 120px;
  overflow: visible;
  margin: 0 auto 1em auto;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

img {
  width: 100%;
  object-fit: cover !important;
}

</style>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonText,
  IonImg,
  IonicSlides,
} from '@ionic/vue';
import {defineComponent, onMounted, onUnmounted, reactive, ref} from "vue";
import io from 'socket.io-client';
import {EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper/modules';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';
import TeamHomeFirstButton from "@/views/team/components/teamHomeFirstButton.vue";
import MyTeamArea from "@/views/team/components/myTeamArea.vue";
import LatestArea from "@/views/team/components/latestArea.vue";
import NoticeArea from "@/views/team/components/noticeArea.vue";
import {getBanner} from "@/api/main";
import {getMyFridenTeam} from "@/api/team";


const modules = ref([EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

// onMounted(() => {
const sw = ref();

const onSwiper = (swiper: any) => {
  sw.value = swiper;

  setTimeout(function () {
    swiper.slidePrev()
  }, 100);
};

interface banner {
  "id": number,
  "img": string,
  "title": string,
  "link": string
}


const Banner = ref<banner[]>([])
getBanner('3').then(res => {
  for (let datum of res.data.data) {
    Banner.value.push(datum)
  }
})

</script>
<style>
.search input {
  font-size: 12px !important;
}
</style>