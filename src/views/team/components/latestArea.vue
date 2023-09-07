<script setup lang="ts">

import {
  IonText,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonRadioGroup,
  IonRadio,
  IonAvatar,
  IonImg,
  IonButton, IonCardContent, IonCard
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {Swiper, SwiperSlide,} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';

import 'swiper/less/navigation';

const modules = ref([Pagination, Navigation]);

const items = reactive([""]);

for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}
const radio = ref('true')

</script>

<template>
  <div style="position:relative">
    <ion-text @click="$router.push('/study/lessons')"
              style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
      <h4 style="color: #474747;font-weight: bolder;">最新</h4>
      <div
          style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
    </ion-text>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="i in 10">
        <ion-avatar style="width: 38px;height: 38px;">
          <img src="@/img/test.jpg">
        </ion-avatar>
        <div
            style="width: 238px;border-radius: 10px;display: inline-block;background-color: white;vertical-align: top;margin-left: 15px;padding-top: 10px"
            class="ion-padding">
          <div style="display: flex;justify-content: space-between;margin-bottom: 10px">
            <ion-text style="font-weight: 600;font-size: 13px;display: block;margin-top: 8px">咩咩</ion-text>
            <ion-button
                style="font-weight: 600;font-size: 13px;--color: white;--background: #FFC830;--background-activated: #eab82c;--border-radius: 20px;--padding-top: 0;--padding-bottom: 0;height: 32px;min-height: 0;">
              加入
            </ion-button>
          </div>
          <ion-img style="border-radius: 10px;overflow:hidden;"
                   src="https://www.0030.store/e1c1aba9b18e4902bf99672ca6fe6a25.jpg"></ion-img>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>

.swiper {
  width: 100%;
  height: 100%;
  margin: 10px 0;
}

.swiper-slide {
  text-align: left;
  font-size: 18px;
  width: 290px;
  align-items: start;
}
.swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>