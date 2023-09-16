<script setup lang="ts">
import {IonCard, IonLabel, IonText, IonAccordionGroup, IonItem, IonAccordion} from "@ionic/vue";
import {useRoute} from "vue-router";

const route = useRoute();
const props = defineProps(['item', 'index']);

</script>

<template>
  <ion-card>
    <ion-accordion-group value="main">
      <ion-accordion value="main">
        <ion-item slot="header" style="--background: linear-gradient(to right,#5E91FF, #9A81FF);--color:white">
          <ion-label style="width: 100%;text-align: center">校级奖学金</ion-label>
        </ion-item>
        <div style="margin: 10px" slot="content">
          <div style="background: #F9FAFE;width: 100%;position: relative;border-radius: 10px;overflow: hidden">
            <div style="padding: 26px 15px">
              <div
                  style="border-top: 30px solid transparent;border-left: 30px solid #FF9269;border-bottom: 30px solid transparent;width: 0;transform: rotate(225deg);position:absolute;top: -21px;left: -4px">
                <span style="position:absolute;transform: rotate(135deg);top: -10px;right: 15px;">{{ index }}</span>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">学年：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.year }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">类别：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.level }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">获奖时间：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.wintime }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">获奖名称：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.winname }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">奖金：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.money }}</ion-text>
              </div>
              <div style="" v-if="item.remark!=undefined&&item.remark!=''">
                <ion-text style="font-size: 13px;color: #727272">备注：</ion-text>
                <ion-text style="font-size: 13px;color: #444444">{{ item.remark }}</ion-text>
              </div>
            </div>
          </div>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </ion-card>
</template>

<style scoped>

</style>