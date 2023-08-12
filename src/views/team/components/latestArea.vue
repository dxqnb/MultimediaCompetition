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
  IonButton
} from "@ionic/vue";
import {reactive, ref} from "vue";

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