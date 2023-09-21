<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {
  IonPage,
} from "@ionic/vue";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {ref} from "vue";
import {EffectFade, Navigation, Pagination} from 'swiper/modules';

const w = ref('99%')
setTimeout(()=>{w.value='100%'},100)
const modules = [EffectFade]
</script>

<template>
  <ion-page>
    <swiper
        :spaceBetween="-1"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide
      ><img
          src="@/img/guide.png" alt=""/></swiper-slide
      >
      <swiper-slide
      ><img
          src="@/img/guide1.png" alt=""/></swiper-slide
      >
      <swiper-slide
      ><img
          src="@/img/guide2.png" alt=""/></swiper-slide
      >
      <swiper-slide
      ><img src="@/img/guide3.png" alt="" @click="$router.replace('/')"/></swiper-slide>
    </swiper>
  </ion-page>
</template>

<style scoped>
.swiper {
  width: v-bind(w);
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  height: 100%;
}

</style>
