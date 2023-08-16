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
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">任务列表</ion-text>
    <ion-text style="color:#5C82FF;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">待完成</ion-text>
    <ion-card
        style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
      <ion-card-content>
        <div style="display: flex;">
          <div style="width: 50%;">
            <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">熟悉150个英语单词</ion-text>
            <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">截止日期&nbsp;2023-10-11</ion-text>
          </div>
          <div style="width: 50%;">
            <ion-text style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">2023-08-01</ion-text>
            <ion-text style="display: block;font-size: 18px;font-weight: 400;color: #5C82FF;text-align: right;width: 100%;margin-top: 10px">进行中</ion-text>
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