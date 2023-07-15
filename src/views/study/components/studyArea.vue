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
  IonItem
} from "@ionic/vue";
import {reactive} from "vue";
import StudyAreaItem from "@/views/study/components/studyAreaItem.vue";

const items = reactive([]);

for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}

</script>

<template>
  <div>
    <ion-text style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
      <h4 style="color: #474747;font-weight: bolder;">学习专区</h4>
      <div
          style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
    </ion-text>
    <div class="area">
      <ion-segment value="first">
        <ion-segment-button value="first">
          <ion-label><h3 style="font-weight: 900">专业课程</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label><h3 style="font-weight: 900">时事政治</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label><h3 style="font-weight: 900">专升本</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="fourth">
          <ion-label><h3 style="font-weight: 900">身心健康</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-content style="height: 80vh;">
        <ion-list>
          <study-area-item v-for="(item, index) in items" :item="item" :index="index"></study-area-item>
        </ion-list>
        <ion-infinite-scroll>
          <div class="infinite-scroll-content">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 100 100"
                xml:space="preserve"
            >
          <circle fill="none" stroke="#1b6dff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
              <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#1b6dff"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="85"
                  y2="50.5"
              >
            <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
            />
          </line>
              <line
                  fill="none"
                  stroke-linecap="round"
                  stroke="#1b6dff"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  x1="50"
                  y1="50"
                  x2="49.5"
                  y2="74"
              >
            <animateTransform
                attributeName="transform"
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
            />
          </line>
        </svg>
          </div>
        </ion-infinite-scroll>
      </ion-content>
    </div>
  </div>
</template>

<style scoped>
.area {
  width: 95%;
  margin: 0 auto;
}

ion-segment {
  --background: var(--ion-background-color);
  height: 46px;
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

/* iOS styles */
/*ion-segment-button.ios:nth-child(1)::part(native) {

  color: #08a391;
}*/
ion-segment-button:nth-child(1) {
  --background: #999999;
  border-radius: 0 20px 0 0;
  z-index: 4;
}

ion-segment-button.ios:nth-child(2) {
  --background: #8997ef;
  border-radius: 0 20px 0 0;
  position: relative;
  z-index: 3;
}

ion-segment-button.ios::before {
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
  border-radius: 0 20px 0 0;
  z-index: 2;
}

ion-segment-button.ios:nth-child(4) {
  --background: #fff8d6;
  border-radius: 0 20px 0 0;
  z-index: 1;
}

.segment-button-checked.ios::part(native) {
  color: #8997ef !important;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 0 20px 0 0;
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