<script setup lang="ts">

import {
  IonText,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonRadioGroup,
  IonRadio,
  IonAvatar,
  IonRange,
  IonButton, IonTabButton, useIonRouter
} from "@ionic/vue";
import {reactive, ref} from "vue";
import StudyAreaItem from "@/views/study/components/studyAreaItem.vue";
import animation from "@/animations/customAnimation";
import router from "@/router";

const items = reactive([""]);

for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}
const radio = ref('true')
const ionRouter = useIonRouter();
</script>

<template>
  <div>
    <ion-text @click="$router.push('/study/lessons')"
              style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
      <h4 style="color: #474747;font-weight: bolder;">我的学友团</h4>
      <div
          style="border: 10px solid #89C0EF;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
    </ion-text>
    <div class="area">
      <ion-segment mode="ios" value="first">
        <ion-segment-button value="first">
          <ion-label><h3 style="font-weight: 900">不简单队</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label><h3 style="font-weight: 900">简单队</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <div
          style="background-color: #FFFFFF;border-radius:0 0 10px 10px;padding-top: 1em;">
        <div style="width: 90%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in 3">
          <ion-avatar
              style="display:inline-block;vertical-align: top;margin-top: 1em;width: 2em;height: 2em;margin-right: 6px">
            <img src="https://www.0030.store/favicon.png" style="vertical-align: middle;width: 2em;height: 2em;"
                 alt="">
          </ion-avatar>
          <div style="width: 100px;display: inline-block;margin: 0;">
            <ion-text style="white-space: nowrap;display: flex;">
              <p style="padding-right: 0.5em;margin: 0;font-size: 12px">{{ `2019不挂科` }}</p>
              <p style="color: #9A9A9A;font-size: 12px;margin: 0;">{{ `12:25` }}</p>
            </ion-text>
            <ion-range disabled style="padding: 0" :value="50"></ion-range>
          </div>
          <div style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
            <ion-radio-group :value="radio" style="vertical-align: middle;margin-right: 0.4em">
              <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>
            </ion-radio-group>
            <ion-text>
              <p style="display: inline-block;font-size: 12px">35/30单词</p>
            </ion-text>
          </div>
          <div
              style="display: inline-block;vertical-align: top;position: absolute;top: 2em;right: 20px;font-size: 12px;color: #64DD3E">
            {{ `已完成` }}
          </div>
        </div>
        <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10px;">
          <ion-button mode="md"
                      @click="ionRouter.navigate('/team/teamDetail/1','forward','push')"
                      style="height: 22px;min-height: 22px;--background: #E0E0E0;color: #989898;--padding-top: 0.8em;--padding-bottom: 0.8em;font-size: 0.8em;">
            更多
          </ion-button>
<!--          <ion-button mode="md"-->
<!--                      @click="router.push('/team/teamDetail/1')"-->
<!--                      style="height: 22px;min-height: 22px;&#45;&#45;background: #E0E0E0;color: #989898;&#45;&#45;padding-top: 0.8em;&#45;&#45;padding-bottom: 0.8em;font-size: 0.8em;">-->
<!--            更多-->
<!--          </ion-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-range {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}

.radio-disabled {
  opacity: 1;
}

ion-radio {
  --border-radius: 100%;
  --inner-border-radius: 100%;

  --color: #5065FF;
  --color-checked: #5065FF;
}

ion-radio.ios::part(container) {
  width: 20px;
  height: 20px;

  border: 2px solid #5065FF;
  border-radius: 100%;
}

.radio-checked.ios::part(container) {
  border-color: #5065FF;
}

.area {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

ion-segment {
  --background: linear-gradient(to right, rgba(0, 213, 255, 0.04), rgba(68, 0, 255, 0.04));
  height: 55px;
  border-radius: 10px 10px 0 0;
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
ion-segment-button {
  --background: rgba(0, 0, 0, 0);
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
}

ion-segment-button.ios::before {
  display: none;
}


.segment-button-checked.ios::part(native) {
  color: #8997ef !important;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 10px 10px 0 0;
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

.range-disabled {
  opacity: 1 !important;
}
</style>