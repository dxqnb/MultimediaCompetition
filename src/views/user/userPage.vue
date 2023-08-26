<template>
  <ion-page class="page">
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-item lines="none" style="--background: none">
        <div slot="end" style="color: #FFFFFF">
          <ion-icon :icon="settingsOutline" style="margin-right: 10px;width: 20px;height: 20px;"></ion-icon>
          <ion-icon :icon="notificationsOutline" style="width: 20px;height: 20px;"></ion-icon>
        </div>
      </ion-item>
      <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          :autoplay="{ delay: 3000, disableOnInteraction: false, }"
          :initialSlide="1"
          :loop="true"
          :space-between="50"
          @swiper="onSwiper"
          :pagination="true" :scrollbar="true" :zoom="true"
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
  IonIcon,
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
import Robot from "@/components/robot.vue";
import {notificationsOutline, settingsOutline} from "ionicons/icons";


const modules = ref([EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

// onMounted(() => {
const sw = ref();
const onSwiper = (swiper: any) => {
  sw.value = swiper;

  setTimeout(function () {
    swiper.slidePrev()
  }, 100);
};
</script>
