<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonText,
  useIonRouter,
  IonThumbnail, IonAvatar, IonImg
} from "@ionic/vue";
import {Swiper, SwiperSlide,} from 'swiper/vue';
import {Pagination, Navigation} from 'swiper/modules';
import {ref} from "vue";
import 'swiper/css';

import 'swiper/less/navigation';
import {data} from "browserslist";
import {getFridenTeamUserList} from "@/api/team";
const Props=defineProps(['team','user'])
const modules = ref([Pagination, Navigation]);
console.log(Props.user)

</script>

<template>
  <ion-card
      style="margin: 12px 0 ;--background: #ffffff;box-shadow: none">
    <ion-img :src=team.bgimg>

    </ion-img>
    <ion-card-content style="padding: 10px;">
      <div>
<!--        <ion-text style="font-weight: bolder;font-size: 24px;color: black;display: block">【备战英语】我们不简单队<br>（组队背单词）-->
<!--        </ion-text>-->
        <ion-text style="font-weight: bolder;font-size: 24px;color: black;display: block"> {{team.tname}}
        </ion-text>
      </div>

      <div style="margin: 10px 0 10px 10px">
        <ion-text
            style="display: block;color: rgba(0,0,0,0.32);font-size: 12px;text-align: left;margin: 5px 0 10px 0;font-weight: bold">
          周日&nbsp;12月21日&nbsp;00：00
        </ion-text>
        <ion-avatar
            style="width: 22px;height: 22px;display: inline-block;z-index: 4;position: relative;vertical-align: middle">
          <!--                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>-->
          <div style="width: 22px;height: 22px;background-color: #73C2FF;border-radius: 100%"></div>
        </ion-avatar>
        <ion-avatar
            style="width: 22px;height: 22px;display: inline-block;margin-left: -6px;z-index: 3;position: relative;vertical-align: middle">
          <!--                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>-->
          <div style="width: 22px;height: 22px;background-color: #E2F2FF;border-radius: 100%"></div>
        </ion-avatar>
        <ion-avatar
            style="width: 22px;height: 22px;display: inline-block;margin-left: -6px;z-index: 2;position: relative;vertical-align: middle">
          <!--                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>-->
          <div style="width: 22px;height: 22px;background-color: #E2E3FF;border-radius: 100%"></div>
        </ion-avatar>
        <ion-text style="color: #B5B5B5;font-size: 13px;vertical-align: middle;padding-left: 10px">4人已参加</ion-text>
      </div>
    </ion-card-content>
  </ion-card>
  <ion-card
      style="margin: 12px 0 ;--background: #ffffff;box-shadow: none">
    <ion-card-content style="padding: 16px;">
      <div style="">
        <ion-text style="font-weight: bolder;font-size: 20px;color: black;display: block;margin-bottom: 6px">简介
        </ion-text>
        <ion-text style="font-weight: bolder;font-size: 12px;color: #3B3B3B;display: block"><p>
          {{team.introduction}}</p>
        </ion-text>
      </div>
      <!--      <ion-content class="inner" style="width: 100%;height: 100px;" :scroll-x="true" :scroll-y="false">-->
      <!--        <ion-grid>-->
      <!--          <ion-row>-->
      <!--            <ion-col size="20">-->
      <!--              <ion-card style="display: inline-block">-->
      <!--                <ion-card-content>-->

      <!--                </ion-card-content>-->
      <!--              </ion-card>-->
      <!--            </ion-col>-->
      <!--          </ion-row>-->
      <!--        </ion-grid>-->
      <!--      </ion-content>-->
      <swiper
          :slidesPerView="'auto'"
          :spaceBetween="10"
          :modules="modules"
          :navigation="true"
          class="mySwiper"
      >
        <swiper-slide v-for="i in user" style="width: 45%;">
          <ion-card style="margin: 12px 0 ;box-shadow: none;width: 100%;">
            <ion-card-content style="padding: 0;margin: 10px">
              <div style="margin: 10px 0">
                <ion-avatar
                    style="width: 32px;height: 32px;display: inline-block;position: relative;vertical-align: baseline;margin-right: 5px">
                  <!--                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>-->
                  <div style="width: 32px;height: 32px;background-color: #73C2FF;border-radius: 100%"></div>
                </ion-avatar>
                <ion-text style="font-size: 12px;display: inline-block;line-height: 9px"><p style="color: black">
                  {{ i.studentname }}</p><br>
                  <p style="color: #919191;font-size: 12px">队长</p></ion-text>
              </div>
              <ion-text style="font-size: 12px;color: #6D6D6D;margin: 1em">
                21数媒|爱好|能源&nbsp;&nbsp;&nbsp;
                机械|细节狂魔...
              </ion-text>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper>
    </ion-card-content>
  </ion-card>
  <ion-card
      style="margin: 12px 0;--background: #ffffff;box-shadow: none">
    <ion-card-content style="padding: 16px;">
      <div style="">
        <span style="height: 16px;width: 16px;background-color: #59ADFF;display: inline-block;border-radius: 100%;border: solid 1px #707070;vertical-align: top;"></span>
        <div style="display: inline-block;margin-left: 10px">
          <ion-text style="font-size: 12px;color: #979797;display: block;">成立时间
          </ion-text>
          <ion-text style="font-size: 14px;color: black;display: block">
            <p>
            {{new Date(Props.team.createtime).getFullYear()+`-`+(new Date(Props.team.createtime).getMonth()+1)+`-`+new Date(Props.team.createtime).getDate()}}
            </p>
          </ion-text>
        </div>
      </div>
      <div style="margin: 10px 0">
        <span style="height: 16px;width: 16px;background-color: #FF7600;display: inline-block;border-radius: 100%;border: solid 1px #707070;vertical-align: top;"></span>
        <div style="display: inline-block;margin-left: 10px">
          <ion-text style="font-size: 12px;color: #979797;display: block;">结束时间
          </ion-text>
          <ion-text style="font-size: 14px;color: black;display: block">
            <p>
            {{new Date(Props.team.createtime).getFullYear()+`-`+(new Date(Props.team.createtime).getMonth()+1)+`-`+(new Date(Props.team.createtime).getDate()+7)}}
            </p>
          </ion-text>
        </div>
      </div>
      <div style="margin: 10px 0">
        <span style="height: 16px;width: 16px;background-color: #9DFF89;display: inline-block;border-radius: 100%;border: solid 1px #707070;vertical-align: top;"></span>
        <div style="display: inline-block;margin-left: 10px">
          <ion-text style="font-size: 12px;color: #979797;display: block;">人数上限
          </ion-text>
          <ion-text style="font-size: 14px;color: black;display: block">
            <p>
            {{team.mxnumber}}人
            </p>
          </ion-text>
        </div>
      </div>
      <div style="margin: 10px 0">
        <span style="height: 16px;width: 16px;background-color: #FFCC00;display: inline-block;border-radius: 100%;border: solid 1px #707070;vertical-align: top;"></span>
        <div style="display: inline-block;margin-left: 10px">
          <ion-text style="font-size: 12px;color: #979797;display: block;">队员要求
          </ion-text>
          <ion-text style="font-size: 14px;color: black;display: block">
            <p>
<!--            爱英语、一起考级的小伙伴！-->
              {{team.attribute}}
            </p>
          </ion-text>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
  <div style="height: 20px;"></div>
</template>

<style scoped>
ion-content.inner::part(background) {
  background: white;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: left;
  font-size: 18px;
  background: #fff;

}
*{
  --swiper-navigation-size: 24px;
}

</style>