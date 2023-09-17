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
  IonButton, IonCardContent, IonCard, toastController
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {Swiper, SwiperSlide,} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';

const props = defineProps(['title'])
import 'swiper/less/navigation';
import {addFridenTeamUser, getAllFridenTeam} from "@/api/team";

const modules = ref([Pagination, Navigation]);


interface rankItem {
  id: number,
  tname: string,
  userid: number,
  tavatar: string,
  bgimg: string,
  introduction: string,
  number: number,
  mxnumber: number,
  attribute: string,
  activity: number,
  createtime: string
}

const radio = ref('true')
const mainList = reactive<rankItem[]>([])
getAllFridenTeam().then((res) => {
  for (let i = 0; i < res.data.data.length && i < 6; i++) {
    mainList.push(res.data.data[i])
  }
})
var userid = 0;
const user = localStorage.getItem('user') || ''
if (user != '') {
  userid = Number(JSON.parse(user).id)
}

function join(tid: any) {
  addFridenTeamUser(tid, userid).then(async (res) => {
    const toast = await toastController.create({
      message: res.data.code == 0 ? '加入成功' : '加入失败'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
  })
}
</script>

<template>
  <div style="position:relative">
    <ion-text @click="$router.push('/study/lessons')"
              style="display: block;width: 100%;position:relative;margin: 36px 0 30px 10px">
      <h4 style="color: #474747;font-weight: bolder;">{{ title }}</h4>
      <div
          style="border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"
          :style="title=='最新'?'border:10px solid rgb(137, 192, 239)':'border: 10px solid #8eabfc;'"></div>
    </ion-text>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="item in mainList">
        <ion-avatar style="width: 30px;height: 30px;">
          <img :src="item.bgimg">
        </ion-avatar>
        <div
            style="width: 238px;border-radius: 10px;display: inline-block;background-color: white;vertical-align: top;margin-left: 6px;padding-top: 10px"
            class="ion-padding">
          <div style="display: flex;justify-content: space-between;margin-bottom: 10px">
            <ion-text style="font-weight: 600;font-size: 13px;display: block;margin-top: 8px">{{
                item.tname
              }}
            </ion-text>
            <ion-button @click="join(item.id)"
                        style="font-weight: 600;font-size: 13px;--color: white;--background: #FFC830;--background-activated: #eab82c;--border-radius: 20px;--padding-top: 0;--padding-bottom: 0;height: 32px;min-height: 0;">
              加入
            </ion-button>
          </div>
          <ion-img style="border-radius: 10px;overflow:hidden;"
                   :src="item.bgimg"></ion-img>
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