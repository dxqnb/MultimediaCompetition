<script setup lang="ts">

import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem, IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonText
} from "@ionic/vue";
</script>

<template>
  <div>
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: inline-block;margin: 10px 0">当前任务进度</ion-text>
    <ion-button
        style="width: 100%;--background: #E9EFFF;color: #5C82FF;--box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;"
        :disabled="true">{{ `任务点A` }}
    </ion-button>
    <ion-card
        style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
      <ion-card-content>
        <ion-item>
          <ion-label>
            <p style="color:#333333;font-size: 16px;font-weight: 600">任务1：熟悉150个英语单词</p>
          </ion-label>
        </ion-item>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 400;display: inline-block;margin: 10px 0">
          已提交
        </ion-text>
        <div
            style="border-radius:0 0 10px 10px;padding-top: 10px;">
          <div style="width: 100%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in 3">
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
            <div
                style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
              <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
                <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>
              </ion-radio-group>
              <ion-text>
                <p style="display: inline-block;font-size: 12px">35/30单词</p>
              </ion-text>
            </div>
            <div
                style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #64DD3E">
              {{ `已完成` }}
            </div>
          </div>
        </div>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 400;display: inline-block;margin: 10px 0">
          未提交
        </ion-text>
        <div
            style="border-radius:0 0 10px 10px;padding-top: 10px;">
          <div style="width: 100%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in 3">
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
            <div
                style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
              <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
                <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>
              </ion-radio-group>
              <ion-text>
                <p style="display: inline-block;font-size: 12px">35/30单词</p>
              </ion-text>
            </div>
            <div
                style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #64DD3E">
              {{ `已完成` }}
            </div>
          </div>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<style scoped>
.button-disabled {
  opacity: 1;
}

ion-item {
  --padding-start: 0px;
  --background: #FAFBFF;
}

.card-content-ios {
  padding: 10px 20px;
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
ion-range {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}
.range-disabled {
  opacity: 1 !important;
}
</style>