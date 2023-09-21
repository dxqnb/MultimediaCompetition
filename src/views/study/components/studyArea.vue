<script setup lang="ts">

import {
  IonText,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonContent,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonAvatar,
  IonItem, IonIcon
} from "@ionic/vue";
import {reactive, ref} from "vue";
import StudyAreaItem from "@/views/study/components/studyAreaItem.vue";
import {getKcDetailList, getZyKcDetailList} from "@/api/study";
import {chevronForwardOutline, ellipsisHorizontalOutline} from "ionicons/icons";

interface item {
  id: number,
  kcdictid: string,
  img: string,
  title: string,
  introduction: number,
  link: string,
  createby: string,
  createtime: string
}

const items = ref<item[]>([]);

let user = localStorage.getItem('user')
const deptid = ref('999')
if (user != null) {
  deptid.value = JSON.parse(user).deptid
  getZyKcDetailList(deptid.value).then((res) => {
    items.value = res.data.data
  })
}
const segmentValue = ref("")
segmentValue.value = deptid.value

async function change(event: any) {
  console.log(event.detail.value)
  if (event.detail.value == '1' || event.detail.value == '2' || event.detail.value == '3') {
    await getKcDetailList(event.detail.value).then((res) => {
      items.value = res.data.data
    })
  } else {
    await getZyKcDetailList(deptid.value).then((res) => {
      items.value = res.data.data
    })
  }
}

</script>

<template>
  <div>
    <!--    <ion-text @click="$router.push('/study/lessons')"-->
    <!--              style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">-->
    <!--      <h4 style="color: #474747;font-weight: bolder;">学习专区</h4>-->
    <!--      <div-->
    <!--          style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>-->
    <!--    </ion-text>-->
    <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 36px;">
      <div style="width: 50%;">
        <ion-text
            style="display: block;margin-left: 10px;width: 100%;position:relative;">
          <h4 style="color: #474747;font-weight: 900;">学习专区</h4>
          <div
              style="border: 10px solid #8997ef;;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
        </ion-text>
      </div>
      <ion-text style="margin-top: 20px;display: block;font-size: 11px;font-weight: 500;color: #B0B0B0"
                @click="$router.push('/study/lessons')">
        <ion-icon :icon="ellipsisHorizontalOutline" style="vertical-align: middle;width: 24px;height: 24px;"></ion-icon>
      </ion-text>
    </div>
    <div class="area" style="margin-top: 10px">
      <ion-segment mode="ios" v-model="segmentValue" @ionChange="change">
        <ion-segment-button :value="deptid">
          <ion-label><span style="font-weight: 600;font-size: 12px">专业课程</span></ion-label>
        </ion-segment-button>
        <ion-segment-button value="1">
          <ion-label><span style="font-weight: 600;font-size: 12px">时事政治</span></ion-label>
        </ion-segment-button>
        <ion-segment-button value="2">
          <ion-label><span style="font-weight: 600;font-size: 12px">专升本</span></ion-label>
        </ion-segment-button>
        <ion-segment-button value="3">
          <ion-label><span style="font-weight: 600;font-size: 12px">身心健康</span></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height:70vh">
        <ion-list style="background: white">
          <study-area-item v-for="(item, index) in items" :item="item" :type="deptid==segmentValue?'zykc':'kc'"
                           :index="index"></study-area-item>
        </ion-list>
        <!--        <ion-infinite-scroll>-->
        <!--          <div class="infinite-scroll-content">-->
        <!--            <svg-->
        <!--                version="1.1"-->
        <!--                xmlns="http://www.w3.org/2000/svg"-->
        <!--                xmlns:xlink="http://www.w3.org/1999/xlink"-->
        <!--                x="0px"-->
        <!--                y="0px"-->
        <!--                viewBox="0 0 100 100"-->
        <!--                enable-background="new 0 0 100 100"-->
        <!--                xml:space="preserve"-->
        <!--            >-->
        <!--          <circle fill="none" stroke="#1b6dff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>-->
        <!--              <line-->
        <!--                  fill="none"-->
        <!--                  stroke-linecap="round"-->
        <!--                  stroke="#1b6dff"-->
        <!--                  stroke-width="4"-->
        <!--                  stroke-miterlimit="10"-->
        <!--                  x1="50"-->
        <!--                  y1="50"-->
        <!--                  x2="85"-->
        <!--                  y2="50.5"-->
        <!--              >-->
        <!--            <animateTransform-->
        <!--                attributeName="transform"-->
        <!--                dur="2s"-->
        <!--                type="rotate"-->
        <!--                from="0 50 50"-->
        <!--                to="360 50 50"-->
        <!--                repeatCount="indefinite"-->
        <!--            />-->
        <!--          </line>-->
        <!--              <line-->
        <!--                  fill="none"-->
        <!--                  stroke-linecap="round"-->
        <!--                  stroke="#1b6dff"-->
        <!--                  stroke-width="4"-->
        <!--                  stroke-miterlimit="10"-->
        <!--                  x1="50"-->
        <!--                  y1="50"-->
        <!--                  x2="49.5"-->
        <!--                  y2="74"-->
        <!--              >-->
        <!--            <animateTransform-->
        <!--                attributeName="transform"-->
        <!--                dur="15s"-->
        <!--                type="rotate"-->
        <!--                from="0 50 50"-->
        <!--                to="360 50 50"-->
        <!--                repeatCount="indefinite"-->
        <!--            />-->
        <!--          </line>-->
        <!--        </svg>-->
        <!--          </div>-->
        <!--        </ion-infinite-scroll>-->
      </ion-content>
    </div>
  </div>
</template>

<style scoped>
ion-content::part(background) {
  background: white;
}

ion-segment {
  --background: #fff;
  height: 36px;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #474747;
}

.segment-button-checked.md::part(native) {
  color: #08a391;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

ion-segment-button {
  margin-bottom: 0;
}

ion-segment-button:nth-child(1) {
  --background: #ffe0d6;
  border-radius: 0 15px 0 0;
  z-index: 4;
}

ion-segment-button:nth-child(2) {
  --background: #D6DBFF;
  border-radius: 0 15px 0 0;
  position: relative;
  z-index: 3;
}

ion-segment-button::before {
  position: absolute;
  margin: 0;
  left: -20px;
  top: 0;
  z-index: -9999;
  border-left: 20px solid var(--background);
  content: "";
  transition: opacity 50ms ease-in-out 50ms;
  height: 42px;
  will-change: opacity;
}

/*ion-segment-button.ios::part(indicator-background)::before {
  position: absolute;
  margin: 0;
  left: -20px;
  top: 0;
  z-index: -9999;
  border-left: 20px solid var(--background);
  content: "";
  transition: opacity 50ms ease-in-out 50ms;
  height: 42px;
  will-change: opacity;
  opacity: 1 !important;
}*/

ion-segment-button.ios:nth-child(3) {
  --background: #d6f5ff;
  border-radius: 0 15px 0 0;
  z-index: 2;
}

ion-segment-button.ios:nth-child(4) {
  --background: #fff8d6;
  border-radius: 0 15px 0 0;
  z-index: 1;
}

.segment-button-checked.ios::part(native) {
  color: #8997ef !important;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 0 15px 0 0;
}

.segment-button-after-checked::before {
  opacity: 1 !important;
}


svg {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.infinite-scroll-content {
  text-align: center;
  padding: 20px 0;
}
</style>