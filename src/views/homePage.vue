<template>
  <ion-page class="page">
    <ion-header collapse="fade" style="background: #FFFFFF" class="ion-no-border ion-padding">
      <ion-toolbar style="--background: white" class="head">
        <div style="display: flex;justify-content: space-between">
          <ion-icon style="width: 100px;height: 30px;margin: auto" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="99.852" height="28.548" viewBox="0 0 99.852 28.548">
  <g id="组_1504" data-name="组 1504" transform="translate(-653.005 -281.351)">
    <path id="路径_587" data-name="路径 587" d="M678.877,306.584,676,309.146l-5.665-6.348-5.151,6.973-3.1-2.277,5.636-7.629-2.5-2.817-.484.627-.855-.627-1.963,1.452-.711-.968V309.8h-3.9V298.842l-1.308,3.785-2.988-1.053,3.727-10.959h-1.565v-4.639h2.107v-4.554H661.2v4.554h1.677v4.639H661.2v1.879l.681-.511,1.11,1.537,3.387-4.612h-2.618v-4.982H668v-2.533h4.582v2.533h5.123v4.982h-3.643l4.783,6.49-3.1,2.278-.825-1.11-2.25,3.046Zm-8.823-9.9,2.476-3.36-2.077-2.817,2.134-1.594h-4.7l2.133,1.594-2.476,3.359Z" transform="translate(0 0.014)" fill="#333"/>
    <path id="路径_588" data-name="路径 588" d="M674.134,281.737h22.428V309.26H674.134Zm4.1,22.97H692.38V286.319H678.231Zm11.615-6.406h1.935v5.58h-6.235v-7.629h-.91l-2.107,7.856-2.961-.8,1.907-7.059H679.03v-3.727h12.354v3.727h-2.791v3.929h1.254Zm-10.02-10.673h10.987v3.615H679.827Z" transform="translate(6.935 0.127)" fill="#333"/>
    <path id="路径_589" data-name="路径 589" d="M696.148,291.739h-2.192V288.1h3.1l-3.189-1.337,2.221-5.407,3.217,1.337-.171.4H706v3.5h-2.419l-.826,1.509h3.529v3.643h-3.444l4.014,2.136-1.537,2.876h9.563V309.9H696.12V297.432l-2.334-1.222Zm.911-3.643h1.594l.826-1.509h-1.794Zm7.656,8.655-5.095-2.733-1.48,2.733Zm5.836,3.1H700.475v1.708h10.076Zm0,6.4v-1.737H700.475v1.737Zm6.091-23.426V295.7h-9.336V282.831Zm-3.529,9.022V286.7h-2.278v5.152Z" transform="translate(13.385)" fill="#333"/>
    <path id="路径_590" data-name="路径 590" d="M718.567,307.681a8.783,8.783,0,0,1-2.812-2.1,7.614,7.614,0,0,1-1.484-2.533,8.177,8.177,0,0,1-.472-2.146V282.219h5.03V300.8a3.525,3.525,0,0,0,.209.75,2.541,2.541,0,0,0,.645.926,3.984,3.984,0,0,0,1.346.786,6.188,6.188,0,0,0,2.3.295l.035.594v-.594a6.175,6.175,0,0,0,2.359-.313,3.92,3.92,0,0,0,1.361-.821,2.278,2.278,0,0,0,.611-.942c.093-.316.151-.53.175-.647V282.219H732.9v18.859a9.207,9.207,0,0,1-.506,2.079,7.508,7.508,0,0,1-1.485,2.48,8.9,8.9,0,0,1-2.811,2.079,10.008,10.008,0,0,1-4.453.873.763.763,0,0,1-.157-.017.8.8,0,0,0-.158-.017h-.279A10.114,10.114,0,0,1,718.567,307.681Z" transform="translate(19.953 0.285)" fill="#333"/>
  </g>
</svg>
'></ion-icon>
          <ion-searchbar class="search" :mode="'md'"
                         style="--box-shadow: none;--border-radius: 10px;font-size: 12px !important;width: 200px;"
                         placeholder="新生入学攻略"></ion-searchbar>
        </div>
      </ion-toolbar>

    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
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
      <ion-grid style="flex-wrap: nowrap;display: flex">
        <ion-col>
          <ion-card class="inner"
                    style="background: #F0F9FF;"
                    @click="$router.push('/study/notice')">
            <ion-card-content>
              <div class="text">
                <ion-text style="font-size: 16px;color: #005FA8;display: block">
                  通知公告
                  <ion-icon class="right" :icon="chevronForwardOutline" size="small"></ion-icon>
                </ion-text>
                <ion-text style="font-size: 10px;color: #7EADCD;display: block;text-align: left">
                  点击最新公告
                </ion-text>
              </div>
              <ion-icon class="bottom" aria-hidden="true" :icon="searchIcon" size="large"/>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="inner"
                    style="background: #F0F1FF"
                    @click="$router.push('/study/news')">
            <ion-card-content>
              <div class="text">
                <ion-text style="font-size: 16px;color: #464BCB">今日要闻
                  <ion-icon class="right" :icon="chevronForwardOutline" size="small"></ion-icon>
                </ion-text>
                <ion-text style="font-size: 10px;color: #9A95DC;display: block;text-align: left">
                  点击最新公告
                </ion-text>
              </div>
              <ion-icon class="bottom" aria-hidden="true" :icon="bookIcon" size="large"/>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-grid>
      <ion-card style="--background: white;position:relative;" v-if="isLogin()">
        <ion-card-content style="padding: 20px 15px">
          <ion-icon style="width: 76px;height: 75px;position:absolute;top: -30px;z-index: -1;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75.674" height="64.512" viewBox="0 0 75.674 64.512">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fcfcf4"/>
      <stop offset="1" stop-color="#fff2bf"/>
    </linearGradient>
  </defs>
  <path id="路径_618" data-name="路径 618" d="M561.242,309.04a6.16,6.16,0,0,0,5.4-3h15.3l15,14.418.025.026h9.186a6.187,6.187,0,0,0,5.191,2.674,6.052,6.052,0,1,0,0-12.1,6.16,6.16,0,0,0-5.393,2.992h-5.976L587.695,302.41l-2.931-2.81H566.42a6.188,6.188,0,0,0-5.179-2.656,6.053,6.053,0,1,0,0,12.1Zm58.7,22.194a6.174,6.174,0,0,0-5.819,3.685h-23.1l-18.09,17.388H562.31a5.888,5.888,0,0,0-3.163-2.526,6.529,6.529,0,0,0-8.176,3.427,6.119,6.119,0,0,0,3.564,7.863,6.54,6.54,0,0,0,7.56-2.333h13.587v-.008l.011.011,18.089-17.4H614.73v-.029h.595a6.291,6.291,0,0,0,10.9-4.032,6.19,6.19,0,0,0-6.288-6.049Zm-62.888,1.6a6.166,6.166,0,0,0,5.347-2.919h10.268a6.166,6.166,0,0,0,5.347,2.919,6.052,6.052,0,1,0,0-12.1,6.181,6.181,0,0,0-5.24,2.746H562.289a6.182,6.182,0,0,0-5.24-2.746,6.052,6.052,0,1,0,0,12.1Z" transform="translate(-550.551 -296.943)" fill="url(#linear-gradient)"/>
</svg>
'></ion-icon>
          <div style="display: flex;justify-content: space-between">
            <div>
              <ion-text style="font-size: 18px;color: #474747;font-weight: 900">精选课程
              </ion-text>
              <ion-text style="font-size: 13px;color: #BFBFBF;display: block;text-align: left">
                定制你的精品课
              </ion-text>
            </div>
            <ion-button
                style="--background: #FFAC3A;--background-activated: #c2832c;--color: white;font-size: 12px;height: 32px;min-height: 0;--padding-start: 3px;--padding-end: 3px;--border-radius: 10px">
              <ion-icon slot="icon-only" :icon="playCircleOutline" style="height: 20px;width: 20px;"></ion-icon>
              点击试看
            </ion-button>
          </div>

          <ion-grid style="flex-wrap: nowrap;display: flex;padding: 0;padding-top: 10px">
            <ion-col>
              <ion-card class="inner"
                        style="--background: #FBFBFB;height: 70px;"
                        @click="$router.push('/study/technology')">
                <ion-card-content style="padding: 10px">
                  <div class="text">
                    <ion-text style="font-size: 14px;color: #474747;display: block">
                      升学宝典
                    </ion-text>
                    <ion-text style="font-size: 10px;color: #9D9D9D;display: block;text-align: left">
                      15章
                    </ion-text>
                  </div>
                  <ion-icon
                      style="  vertical-align: bottom;position: absolute;  bottom: 10px;right: 12px;height: 32px;width: 32px;"
                      aria-hidden="true" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="31.664" height="31.571" viewBox="0 0 31.664 31.571">
  <g id="组_1551" data-name="组 1551" transform="translate(-192.032 -191.79)">
    <path id="路径_620" data-name="路径 620" d="M222.437,198.751l-12.228-6.483a5.42,5.42,0,0,0-4.45,0l-12.4,6.339a2.816,2.816,0,0,0-1.331,2.2,2.929,2.929,0,0,0,1.082,2.363l11.854,6.147a5.826,5.826,0,0,0,3.161.528,4.766,4.766,0,0,0,2.7-.624l5.906-3.073v6.675a1.35,1.35,0,0,0,1.248,1.3q.851-.038.832-1.249l.166-7.78,3.951-2.209a2.071,2.071,0,0,0,.624-.961,2.656,2.656,0,0,0-1.122-3.169m-1.289,1.777q.5.443,0,.72l-3.868,2.017-8.235-3.073a1.237,1.237,0,0,0-1.456,0,1.555,1.555,0,0,0,0,1.681l6.78,2.641-4.867,2.834a4.429,4.429,0,0,1-3.327,0l-11.48-6.051q-.649-.236-.333-.577l11.646-6a4.086,4.086,0,0,1,3.66,0l11.48,5.811m-3.2,15.8a1.428,1.428,0,0,0-1.123.721v.961a6.912,6.912,0,0,1-3.327,2.065,22.143,22.143,0,0,1-9.883.346q-.777-.146-1.555-.346a4.757,4.757,0,0,1-3.161-2.113v-9.125a1.466,1.466,0,0,0-.915-1.1,1.034,1.034,0,0,0-1.123.721v9.461a4.946,4.946,0,0,0,1.913,3.17l2.413,1.2a14.442,14.442,0,0,0,5.074.912,13.924,13.924,0,0,0,6.405-.528,9.64,9.64,0,0,0,4.2-1.729,3.513,3.513,0,0,0,2.055-2.622,2.987,2.987,0,0,0-.224-1.316A.744.744,0,0,0,217.945,216.328Z" transform="translate(0 0)" fill="#dbdbdb"/>
  </g>
</svg>
' size="large"/>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card class="inner"
                        style="--background: #FBFBFB;height: 70px;"
                        @click="$router.push('/study/technology')">
                <ion-card-content style="padding: 10px">
                  <div class="text">
                    <ion-text style="font-size: 14px;color: #474747;display: block">
                      基础语法课
                    </ion-text>
                    <ion-text style="font-size: 10px;color: #9D9D9D;display: block;text-align: left">
                      15章
                    </ion-text>
                  </div>
                  <ion-icon
                      style="  vertical-align: bottom;position: absolute;  bottom: 10px;right: 12px;height: 32px;width: 32px;"
                      aria-hidden="true" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="27.453" height="27.453" viewBox="0 0 27.453 27.453">
  <path id="路径_622" data-name="路径 622" d="M77.155,91.467V80.033h8.478v1.934H79.463V84.5H85.2v1.927h-5.74V89.54h6.388v1.927Zm17.174,0H92.138V87.24A6.582,6.582,0,0,0,92,85.5a1.218,1.218,0,0,0-.457-.612,1.3,1.3,0,0,0-.761-.219,1.754,1.754,0,0,0-1.021.312,1.565,1.565,0,0,0-.62.827,7.149,7.149,0,0,0-.168,1.9v3.752H86.78V83.184h2.036V84.4a3.4,3.4,0,0,1,4.055-1.143,2.22,2.22,0,0,1,.908.667,2.4,2.4,0,0,1,.429.92,6.9,6.9,0,0,1,.121,1.474ZM74.995,74a1,1,0,0,0-1,1V96.458a1,1,0,0,0,1,1H96.458a1,1,0,0,0,1-1V74.995a1,1,0,0,0-1-1Zm0-2H96.458a3,3,0,0,1,2.995,2.995V96.458a3,3,0,0,1-2.995,2.995H74.995A3,3,0,0,1,72,96.458V74.995A3,3,0,0,1,74.995,72Z" transform="translate(-72 -72)" fill="#dbdbdb"/>
</svg>
' size="large"/>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-grid>
        </ion-card-content>
      </ion-card>
      <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 36px;">
        <div style="width: 50%;">
          <ion-text
              style="display: block;margin-left: 10px;width: 100%;position:relative;">
            <h4 style="color: #474747;font-weight: bolder;">学友团排行榜</h4>
            <div
                style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
          </ion-text>
        </div>
        <ion-text style="margin-top: 20px;display: block;font-size: 11px;font-weight: 500;color: #B0B0B0"
                  @click="$router.push('/team/ranking')">全部排名
          <ion-icon :icon="chevronForwardOutline" style="vertical-align: middle"></ion-icon>
        </ion-text>
      </div>
      <div style="display: flex;justify-content: space-evenly;align-items: flex-end">
        <div
            style="width: 30%;height: 90px;background: linear-gradient(to bottom,#C5D9E9,#EFF3F6,#F1F4F8,#F3F5F9,#F5F6FA,#F6F7FB);border-radius: 10px;position:relative;">
          <div style="width: 100%;text-align: center;position:absolute;top: -5px">
            <ion-avatar style="width: 37px;height: 37px;display: inline-block">
              <ion-img src="https://www.0030.store/test.jpg"></ion-img>
            </ion-avatar>
          <ion-text style="display: block;font-size: 14px;font-weight: bolder;color: #888888;margin: 4px 0">TOP.2</ion-text>
          <ion-text style="display: block;font-size: 12px;font-weight: 500;color: #1B1B1B">【备战英语...</ion-text>
          </div>
        </div>
        <div
            style="width: 30%;height: 100px;background: linear-gradient(to bottom,#FFE066,#FFF2D2,#FCF4E1,#F9F6EE,#F6F7FB);border-radius: 10px;position:relative;">
          <div style="width: 100%;text-align: center;position:absolute;top: -5px">
            <ion-avatar style="width: 37px;height: 37px;display: inline-block">
              <ion-img src="https://www.0030.store/test.jpg"></ion-img>
            </ion-avatar>
          <ion-text style="display: block;font-size: 14px;font-weight: bolder;color: #F19700;margin: 4px 0">TOP.1</ion-text>
          <ion-text style="display: block;font-size: 12px;font-weight: 500;color: #1B1B1B">【备战英语...</ion-text>
          </div>
        </div>
        <div
            style="width: 30%;height: 80px;background: linear-gradient(to bottom,#F1DAB7,#F1EDE2,#F3F0EA,#F4F3F2,#F6F7FB);border-radius: 10px;position:relative;">
          <div style="width: 100%;text-align: center;position:absolute;top: -5px">
            <ion-avatar style="width: 37px;height: 37px;display: inline-block">
              <ion-img src="https://www.0030.store/test.jpg"></ion-img>
            </ion-avatar>
          <ion-text style="display: block;font-size: 14px;font-weight: bolder;color: #B48445;margin: 4px 0">TOP.3</ion-text>
          <ion-text style="display: block;font-size: 12px;font-weight: 500;color: #1B1B1B">【备战英语...</ion-text>
          </div>
        </div>
      </div>
      <latest-area title="社交达人"></latest-area>

    </ion-content>

  </ion-page>
</template>
<style scoped>

ion-toolbar.seHead {
  --opacity: 0;
  padding-top: 0 !important;
}

ion-content::part(background) {
  background: linear-gradient(to bottom, #FFFFFF, #F6F7FB, #F6F7FB);
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

ion-col {
  text-align: center;
  padding: 0;
}

ion-card.inner {
  position: relative;
  width: 95%;
  display: inline-block;
  height: 80px;
  border-radius: 13px;
}

ion-card {
  margin: 0;
}

ion-card.inner ion-card-content {
  height: 100%;
}

.text {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 14px;
  font-weight: bold;
  vertical-align: bottom;
}

ion-icon.right {
  vertical-align: bottom;
}

.card-content-ios {
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}

ion-icon.bottom {
  vertical-align: bottom;
  position: absolute;
  bottom: -100%;
  right: -50%;
  height: 159px;
  width: 159px;
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
  IonicSlides, IonIcon, IonCard, IonCardContent, IonCol, IonGrid, IonButton, IonAvatar
} from '@ionic/vue';
import {defineComponent, onMounted, onUnmounted, ref} from "vue";
import io from 'socket.io-client';
import {EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper/modules';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';
import LatestArea from "@/views/team/components/latestArea.vue";
import {getBanner} from "@/api/main";
import {arrowForwardOutline, chevronForwardOutline, playCircleOutline} from "ionicons/icons";


const modules = ref([EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

interface banner {
  "id": number,
  "img": string,
  "title": string,
  "link": string
}

const Banner = ref<banner[]>([])
getBanner().then(res => {
  for (let datum of res.data.data) {
    Banner.value.push(datum)
  }
})
const searchIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"159\" height=\"159\" viewBox=\"0 0 159 159\">\n" +
    "  <defs>\n" +
    "    <filter id=\"路径_592\" x=\"24.562\" y=\"24.702\" width=\"78.746\" height=\"71.303\" filterUnits=\"userSpaceOnUse\">\n" +
    "      <feOffset dy=\"3\" input=\"SourceAlpha\"/>\n" +
    "      <feGaussianBlur stdDeviation=\"3\" result=\"blur\"/>\n" +
    "      <feFlood flood-color=\"#3b72cf\" flood-opacity=\"0.161\"/>\n" +
    "      <feComposite operator=\"in\" in2=\"blur\"/>\n" +
    "      <feComposite in=\"SourceGraphic\"/>\n" +
    "    </filter>\n" +
    "    <filter id=\"路径_593\" x=\"33.227\" y=\"30.735\" width=\"80.879\" height=\"77.69\" filterUnits=\"userSpaceOnUse\">\n" +
    "      <feOffset dy=\"3\" input=\"SourceAlpha\"/>\n" +
    "      <feGaussianBlur stdDeviation=\"3\" result=\"blur-2\"/>\n" +
    "      <feFlood flood-color=\"#3b7bcf\" flood-opacity=\"0.161\"/>\n" +
    "      <feComposite operator=\"in\" in2=\"blur-2\"/>\n" +
    "      <feComposite in=\"SourceGraphic\"/>\n" +
    "    </filter>\n" +
    "    <filter id=\"路径_594\" x=\"45.994\" y=\"43.503\" width=\"50.315\" height=\"30.37\" filterUnits=\"userSpaceOnUse\">\n" +
    "      <feOffset dy=\"3\" input=\"SourceAlpha\"/>\n" +
    "      <feGaussianBlur stdDeviation=\"3\" result=\"blur-3\"/>\n" +
    "      <feFlood flood-color=\"#3b94cf\" flood-opacity=\"0.161\"/>\n" +
    "      <feComposite operator=\"in\" in2=\"blur-3\"/>\n" +
    "      <feComposite in=\"SourceGraphic\"/>\n" +
    "    </filter>\n" +
    "    <filter id=\"路径_595\" x=\"48.389\" y=\"55.671\" width=\"42.895\" height=\"30.135\" filterUnits=\"userSpaceOnUse\">\n" +
    "      <feOffset dy=\"3\" input=\"SourceAlpha\"/>\n" +
    "      <feGaussianBlur stdDeviation=\"3\" result=\"blur-4\"/>\n" +
    "      <feFlood flood-color=\"#3b94cf\" flood-opacity=\"0.161\"/>\n" +
    "      <feComposite operator=\"in\" in2=\"blur-4\"/>\n" +
    "      <feComposite in=\"SourceGraphic\"/>\n" +
    "    </filter>\n" +
    "  </defs>\n" +
    "  <g id=\"组_1559\" data-name=\"组 1559\" transform=\"translate(-75 -0.111)\">\n" +
    "    <path id=\"路径_608\" data-name=\"路径 608\" d=\"M79.5,0A79.5,79.5,0,1,1,0,79.5,79.5,79.5,0,0,1,79.5,0Z\" transform=\"translate(75 0.111)\" fill=\"#e8f4fe\"/>\n" +
    "    <g id=\"组_1541\" data-name=\"组 1541\" transform=\"translate(-1429.25 -15713.075) rotate(-13)\">\n" +
    "      <g transform=\"matrix(0.97, 0.22, -0.22, 0.97, -2069, 15648.84)\" filter=\"url(#路径_592)\">\n" +
    "        <path id=\"路径_592-2\" data-name=\"路径 592\" d=\"M216.8,228.72m3.2,0H266.11q3.2,0,3.2,3.2V268.1q0,3.2-3.2,3.2H220q-3.2,0-3.2-3.2V231.924Q216.8,228.72,220,228.72Z\" transform=\"translate(-229.13 -131.57) rotate(-13)\" fill=\"#fff\"/>\n" +
    "      </g>\n" +
    "      <g transform=\"matrix(0.97, 0.22, -0.22, 0.97, -2069, 15648.84)\" filter=\"url(#路径_593)\">\n" +
    "        <path id=\"路径_593-2\" data-name=\"路径 593\" d=\"M328.609,351.045H290.42a3.2,3.2,0,0,1-3.2-3.2V311.668a3.2,3.2,0,0,1,3.2-3.2h46.82a3.2,3.2,0,0,1,3.2,3.2V347.84a3.217,3.217,0,0,1-.072.679v8.917Z\" transform=\"translate(-307.02 -187.24) rotate(-13)\" fill=\"#b4d2ff\"/>\n" +
    "      </g>\n" +
    "      <g transform=\"matrix(0.97, 0.22, -0.22, 0.97, -2069, 15648.84)\" filter=\"url(#路径_594)\">\n" +
    "        <path id=\"路径_594-2\" data-name=\"路径 594\" d=\"M393.552,414.8m2.66,0h26.615a2.352,2.352,0,0,1,2.661,2.66v0a2.352,2.352,0,0,1-2.661,2.661H396.213a2.352,2.352,0,0,1-2.66-2.661v0A2.352,2.352,0,0,1,396.213,414.8Z\" transform=\"translate(-421.78 -258.95) rotate(-13)\" fill=\"#fff\"/>\n" +
    "      </g>\n" +
    "      <g transform=\"matrix(0.97, 0.22, -0.22, 0.97, -2069, 15648.84)\" filter=\"url(#路径_595)\">\n" +
    "        <path id=\"路径_595-2\" data-name=\"路径 595\" d=\"M393.552,521.136m3.2,0H414.3q3.2,0,3.2,3.2v.517q0,3.2-3.2,3.2H396.756q-3.2,0-3.2-3.2v-.517Q393.552,521.136,396.756,521.136Z\" transform=\"translate(-443.31 -352.19) rotate(-13)\" fill=\"#869bf7\"/>\n" +
    "      </g>\n" +
    "    </g>\n" +
    "  </g>\n" +
    "</svg>\n");
const bookIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"159\" height=\"159\" viewBox=\"0 0 159 159\">\n" +
    "  <defs>\n" +
    "    <filter id=\"路径_601\" x=\"18.828\" y=\"20.46\" width=\"98.304\" height=\"79.223\" filterUnits=\"userSpaceOnUse\">\n" +
    "      <feOffset dy=\"3\" input=\"SourceAlpha\"/>\n" +
    "      <feGaussianBlur stdDeviation=\"3\" result=\"blur\"/>\n" +
    "      <feFlood flood-color=\"#7b3bcf\" flood-opacity=\"0.161\"/>\n" +
    "      <feComposite operator=\"in\" in2=\"blur\"/>\n" +
    "      <feComposite in=\"SourceGraphic\"/>\n" +
    "    </filter>\n" +
    "  </defs>\n" +
    "  <g id=\"组_1560\" data-name=\"组 1560\" transform=\"translate(-75 -0.111)\">\n" +
    "    <path id=\"路径_607\" data-name=\"路径 607\" d=\"M79.5,0A79.5,79.5,0,1,1,0,79.5,79.5,79.5,0,0,1,79.5,0Z\" transform=\"translate(75 0.111)\" fill=\"#e8e9fe\"/>\n" +
    "    <g id=\"组_1540\" data-name=\"组 1540\" transform=\"translate(-820.26 17.952) rotate(-13)\">\n" +
    "      <g id=\"组_1529\" data-name=\"组 1529\" transform=\"translate(893.86 231.516)\">\n" +
    "        <g transform=\"matrix(0.97, 0.22, -0.22, 0.97, -17.53, -47.51)\" filter=\"url(#路径_601)\">\n" +
    "          <path id=\"路径_601-2\" data-name=\"路径 601\" d=\"M961.135,246.228a8.216,8.216,0,0,0-4.12-4.539,17.348,17.348,0,0,0-1.982-.607,4.176,4.176,0,0,0-1.015-.162,16.8,16.8,0,0,0-4.432-3.524,31.912,31.912,0,0,0-38.916.068,16.784,16.784,0,0,0-4.1,3.257,5.314,5.314,0,0,0-.793.121,4.968,4.968,0,0,0-1.39.444,9.667,9.667,0,0,0-3.434,2.654l-.709-6.446a.7.7,0,0,0-1.391-.053l-1.79,9.511a1.7,1.7,0,0,0,.113.985,12.4,12.4,0,0,0-2.853,7.147,7.236,7.236,0,0,0,.742,5.3c-.021-.13-.025-.255-.039-.383a12.441,12.441,0,0,0,4.959,7.71c.012.074.022.145.034.22a4.094,4.094,0,0,0,2.416,2.9,4.533,4.533,0,0,0,2.233.841,15.01,15.01,0,0,0,11.543,5.41h28.126a15,15,0,0,0,11.826-5.778,7.582,7.582,0,0,0,1.147-.49,4.027,4.027,0,0,0,2.445-2.708l.013-.059a13.046,13.046,0,0,0,6.015-10.474C966.118,252.815,964.211,248.53,961.135,246.228Z\" transform=\"translate(-895.26 18.83) rotate(-13)\" fill=\"#fff\"/>\n" +
    "        </g>\n" +
    "        <path id=\"路径_602\" data-name=\"路径 602\" d=\"M900.305,234.265a1.862,1.862,0,1,0-1.861-1.862A1.863,1.863,0,0,0,900.305,234.265Z\" transform=\"translate(-894.34 -230.542)\" fill=\"#7069ce\"/>\n" +
    "      </g>\n" +
    "      <g id=\"组_1532\" data-name=\"组 1532\" transform=\"translate(909.959 245.304)\">\n" +
    "        <g id=\"组_1530\" data-name=\"组 1530\">\n" +
    "          <path id=\"路径_603\" data-name=\"路径 603\" d=\"M942.206,246.228a11.608,11.608,0,0,0-5.791,1.314,9.886,9.886,0,0,1-9.089,0,11.605,11.605,0,0,0-5.791-1.314c-5.59.177-10.22,4.343-10.568,9.521-.4,5.916,4.659,10.829,10.952,10.829a11.589,11.589,0,0,0,5.3-1.266,10.255,10.255,0,0,1,9.3,0,11.588,11.588,0,0,0,5.3,1.266c6.293,0,11.348-4.912,10.952-10.829C952.426,250.571,947.8,246.4,942.206,246.228Z\" transform=\"translate(-910.946 -246.222)\" fill=\"#7069ce\"/>\n" +
    "          <rect id=\"矩形_563\" data-name=\"矩形 563\" width=\"3.324\" height=\"7.064\" rx=\"1.662\" transform=\"translate(9.623 6.581)\" fill=\"#fff\"/>\n" +
    "        </g>\n" +
    "        <g id=\"组_1531\" data-name=\"组 1531\" transform=\"translate(27.624 10.126)\">\n" +
    "          <path id=\"路径_604\" data-name=\"路径 604\" d=\"M945.025,257.03a9.593,9.593,0,0,0-4.736.714\" transform=\"translate(-940.288 -256.978)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.697\"/>\n" +
    "        </g>\n" +
    "      </g>\n" +
    "    </g>\n" +
    "  </g>\n" +
    "</svg>\n");
// onMounted(() => {
const sw = ref();
const onSwiper = (swiper: any) => {
  sw.value = swiper;

  setTimeout(function () {
    swiper.slidePrev()
  }, 100);
};

// 判断登录
function isLogin() {
  if (localStorage.getItem('user') == null) {
    localStorage.setItem('isLogin', 'false')
    return false
  }else return localStorage.getItem('isLogin') == 'true';
}
</script>
<style>
.search input {
  font-size: 12px !important;
}
</style>