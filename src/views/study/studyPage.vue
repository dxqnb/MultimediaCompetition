<template>
  <ion-page class="page">
    <ion-header collapse="fade" class="ion-no-border">
      <ion-toolbar color="primary">
        <!--        <ion-title color="light">-->
        <!--          <h3 style="margin-bottom: 5px;">学习</h3>-->
        <!--        </ion-title>-->
        <ion-text size="large" color="light" slot="start" style="margin-left: 20px;margin-top: 10px;margin-bottom: 0px">
          <h2 style="margin-bottom: 5px;margin-top: 0">学习</h2>
          <div style="border: 3px solid var(--ion-color-base);border-radius: 10px;width:12px;margin: 0 auto"></div>
        </ion-text>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <!--      <ion-header class="ion-no-border" collapse="condense">-->
      <!--        <ion-toolbar class="seHead">-->
      <!--          <ion-text size="large" color="light" slot="start" style="margin-left: 10px">-->
      <!--            <h2 style="margin-bottom: 5px;margin-top: 0">学习</h2>-->
      <!--            <div style="border: 3px solid var(&#45;&#45;ion-color-base);border-radius: 10px;width:12px;margin: 0 auto"></div>-->
      <!--          </ion-text>-->
      <!--        </ion-toolbar>-->
      <!--      </ion-header>-->
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
        <swiper-slide>
          <img src="https://www.0030.store/swiperAd/ad1.png" alt="">
        </swiper-slide>
        <swiper-slide><img src="https://www.0030.store/swiperAd/ad2.png" alt=""></swiper-slide>
        <swiper-slide>
          <ion-img src="https://www.0030.store/sw1.png"></ion-img>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
      <study-card></study-card>

      <study-area></study-area>
      <robot></robot>

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
  background: url("https://www.0030.store/5%20%E2%80%93%201.jpg") top right no-repeat fixed;
  background-size: 100%;
}

.swiper {
  width: 90%;
  height: 120px;
  overflow: visible;
  margin: 30px auto;
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

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}

</style>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonText,
  IonImg,
  IonicSlides,
} from '@ionic/vue';
import {defineComponent, onMounted, onUnmounted, ref} from "vue";
import io from 'socket.io-client';
import {EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper/modules';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';

import 'swiper/css';
import StudyCard from "@/views/study/components/studyCard.vue";
import StudyArea from "@/views/study/components/studyArea.vue";
import Robot from "@/components/robot.vue";


const modules = ref([EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

// onMounted(() => {
const sw = ref();
const onSwiper = (swiper: any) => {
  sw.value = swiper;
setTimeout(function () {
    swiper.slidePrev()
  }, 100);
};
// })
// sw.value.autoplay = {
//   paused: false, pause(): void {
//   }, resume(): void {
//   }, start(): boolean {
//     return false;
//   }, stop(): boolean {
//     return false;
//   },
//   timeLeft: 1000,
//   running: true
// }
</script>
