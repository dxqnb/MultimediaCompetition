<script setup lang="ts">

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonText
} from "@ionic/vue";
import {ref} from "vue";

const unfinished = ref(false)
const finished = ref(false)
const checkbox = ref([])

function click(num: number) {
  if (num === 1) {
    unfinished.value = true
    finished.value = false
  } else {
    unfinished.value = false
    finished.value = true
  }

}
function test(){
  console.log(checkbox.value)
  console.log(1)
}
</script>

<template>
  <div style="height: 100%;">
    <ion-button :class="unfinished?'clicked':'notClicked' " @click="click(1)"
                style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;"
                mode="md">
      未发布
    </ion-button>
    <ion-button mode="md" :class="finished?'clicked':'notClicked' " @click="click(2)"
                style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;">
      已发布
    </ion-button>
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">任务列表</ion-text>
    <div v-if="!finished">
      <ion-text style="color:#5C82FF;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">未发布</ion-text>
      <ion-item-sliding style="margin: 12px 0;">
        <ion-item lines="none" style="--inner-padding-end:0;--border-radius: 8px">
          <ion-card
              style="--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none;width: 100%;margin: 0;">
            <ion-card-content>
              <div style="display: flex;">
                <ion-checkbox value="1" ref="checkbox" @click="test()"
                    style="--border-radius: 100%;--checkmark-width: 3px;--checkmark-color: white;width: 10%;height: 73px;--size:22px;--border-width:1px;--border-color:rgba(0,22,161,0.15)"
                    mode="md"></ion-checkbox>
                <div style="width: 40%;" @click="$router.push('/team/submitTask/1')">
                  <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">熟悉150个英语单词
                  </ion-text>
                  <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">截止日期&nbsp;2023-10-11</ion-text>
                </div>
                <div style="width: 50%;">
                  <ion-text
                      style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                    2023-08-01
                  </ion-text>
                </div>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-item>

        <ion-item-options>
          <ion-item-option>发布</ion-item-option>
          <ion-item-option color="danger">删除</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </div>
    <div v-if="!unfinished">
      <ion-text style="color:#747474;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">已发布</ion-text>
      <ion-item-sliding style="margin: 12px 0;">
        <ion-item lines="none" style="--inner-padding-end:0;--border-radius: 8px">
          <ion-card
              style="--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none;width: 100%;margin: 0;">
            <ion-card-content>
              <div style="display: flex;">
                <ion-checkbox value="2" ref="checkbox"
                    style="--border-radius: 100%;--checkmark-width: 3px;--checkmark-color: white;width: 10%;height: 73px;--size:22px;--border-width:1px;--border-color:rgba(0,22,161,0.15)"
                    mode="md"></ion-checkbox>
                <div style="width: 40%;" @click="$router.push('/team/submitTask/1')">
                  <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">熟悉150个英语单词
                  </ion-text>
                  <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">截止日期&nbsp;2023-10-11</ion-text>
                </div>
                <div style="width: 50%;">
                  <ion-text
                      style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                    2023-08-01
                  </ion-text>
                </div>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-item>

        <ion-item-options>
          <ion-item-option>发布</ion-item-option>
          <ion-item-option color="danger">删除</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </div>



    <div style="position:fixed;bottom: 0;width: 100%;left: 0;">
      <ion-button style="width: 80%;margin: 0 auto;display: block;--background: #515EFF;--color: white">提交
        </ion-button>
    </div>
  </div>
</template>

<style scoped>
.clicked {
  --background: #5C82FF;
  --color: #FFFFFF;
}

.notClicked {
  --background: #FAFAFA;
  --color: #BFBFBF;
}

ion-item {
  --padding-start: 0px;
  --background: #ffffff;
}

.card-content-ios {
  padding: 10px 20px;
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