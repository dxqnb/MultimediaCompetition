<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
  IonText, IonRadio, IonRadioGroup, IonRange,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";

const up = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10.099" height="14" viewBox="0 0 10.099 14">\n' +
    '  <path id="路径_101" data-name="路径 101" d="M148.811.1l4.75,5.443a.3.3,0,0,1-.224.494H151a.294.294,0,0,0-.294.256,11.417,11.417,0,0,1-2.575,5.768,6.211,6.211,0,0,1-3.662,1.933.3.3,0,0,1-.242-.525,6.331,6.331,0,0,0,2.293-4.291A21.5,21.5,0,0,0,146.7,6.34a.3.3,0,0,0-.3-.3h-2.566a.3.3,0,0,1-.224-.494L148.363.1a.3.3,0,0,1,.448,0Z" transform="translate(-143.536 0)" fill="#00c081"/>\n' +
    '</svg>\n')

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>学习进度</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-text style="font-weight: 900;font-size: 20px">今日进度</ion-text>
      <div style="">
        <ion-card style="margin: 10px 0">
          <ion-card-content style="display: flex;justify-content: space-between;padding: 0">
            <div style="padding: 1em 0;width: 50%;">
              <div style="border-right: solid 1px rgba(112,112,112,0.14);width: 100%;">
                <ion-text
                    style="color: #00C081;font-weight: 600;display:block;width: 100%;text-align: center;line-height: 36px">
                  每日学习量
                </ion-text>
                <ion-text style="font-size: 12px;color: #BEBEBE;display: block;text-align: center;width: 100%;">
                  已更新至最新
                </ion-text>
              </div>
            </div>
            <div style="padding: 1em 0;width: 50%;">
              <div style="border-left: solid 1px rgba(112,112,112,0.14);width: 100%;">
                <ion-text
                    style="color: #303030;font-weight: 400;display:block;width: 100%;text-align: center;font-size: 14px;">
                  <span style="font-size: 26px;font-weight: 900;text-shadow: 0 0 5px #00C081">{{ `66` }}</span>
                  <span style="position: relative">
                    分钟
                  <ion-icon :icon="up"
                            style="width: 16px;height: 32px;position: absolute;top: -1.5em ;right: -2em"></ion-icon>
                  </span>
                </ion-text>
                <ion-text style="font-size: 12px;color: #BEBEBE;display: block;text-align: center;width: 100%;">
                  课程完成度
                </ion-text>
              </div>
            </div>

          </ion-card-content>
        </ion-card>
        <ion-card style="margin: 20px 0 ">
          <ion-card-content>

            <div style="border-bottom: solid 1px #D4D4D4;padding-bottom: 10px;margin-bottom: 10px">
              <ion-text style="display: inline-block;text-align: left;width: 50%;color: #242424">
                《{{ `java编程基础` }}》
              </ion-text>
              <ion-text style="display: inline-block;text-align: right;width: 50%;color: #A9A9A9">
                {{ `正在学习` }}
              </ion-text>
              <ion-range class="learning" disabled style="padding: 0" :value="50"></ion-range>
              <div style="display: inline-block;text-align: left;width: 50%;color: #A9A9A9;font-size: 14px">
                已学&nbsp;
                <ion-text
                    style="color: #444444;border-right: solid 1px #D4D4D4 ;display: inline-block;padding-right: 5px;font-weight: 600">
                  20课
                </ion-text>
                <ion-text style="color: #444444;display: inline-block;padding-left: 5px;font-weight: 600">21%</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                总&nbsp;<ion-text style="color: #444444;font-weight: 600">120</ion-text>
              </div>
            </div>
            <div>
              <div style="width: 50%;display: inline-block">
                <div style="width: 16px;height: 16px;border: solid 1px #707070;background-color: #FFBFD2;border-radius: 100%;display: inline-block;margin-right: 10px;vertical-align: middle"></div>
                <ion-text style="color: #A9A9A9;vertical-align: middle;font-size: 14px">视频学习时长</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                <ion-text style="color: #444444;font-weight: 600">40</ion-text>&nbsp;h
              </div>
            </div>
            <div>
              <div style="width: 50%;display: inline-block">
                <div style="width: 16px;height: 16px;border: solid 1px #707070;background-color: #E5CBFF;border-radius: 100%;display: inline-block;margin-right: 10px;vertical-align: middle"></div>
                <ion-text style="color: #A9A9A9;vertical-align: middle;font-size: 14px">测试记录</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                <ion-text style="color: #444444;font-weight: 600">22</ion-text>&nbsp;题
              </div>
            </div>
            <div>
              <div style="width: 50%;display: inline-block">
                <div style="width: 16px;height: 16px;border: solid 1px #707070;background-color: #FDFFBF;border-radius: 100%;display: inline-block;margin-right: 10px;vertical-align: middle"></div>
                <ion-text style="color: #A9A9A9;vertical-align: middle;font-size: 14px">实操记录</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                <ion-text style="color: #444444;font-weight: 600">3</ion-text>&nbsp;题
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <ion-text style="font-weight: 900;font-size: 20px">视频学习时长</ion-text>
      <ion-card style="margin: 20px 0;--background: linear-gradient(to bottom,#FCEDE9, #F9F9F9);">
          <ion-card-content>
            <div style="margin: 10px 0">
              <ion-text style="display: inline-block;text-align: left;width: 50%;color: #242424">
                《{{ `java编程基础` }}》
              </ion-text>
              <ion-text style="display: inline-block;text-align: right;width: 50%;color: #A9A9A9">
                {{ `正在学习` }}
              </ion-text>
              <ion-range class="learned-1" disabled style="padding: 0" :value="50"></ion-range>
              <div style="display: inline-block;text-align: left;width: 50%;color: #A9A9A9;font-size: 14px">
                已学&nbsp;
                <ion-text
                    style="color: #444444;border-right: solid 1px #D4D4D4 ;display: inline-block;padding-right: 5px;font-weight: 600">
                  20课
                </ion-text>
                <ion-text style="color: #444444;display: inline-block;padding-left: 5px;font-weight: 600">21%</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                总&nbsp;<ion-text style="color: #444444;font-weight: 600">120</ion-text>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      <ion-card style="margin: 20px 0;--background: linear-gradient(to bottom,#E9F4FC, #F9F9F9);">
          <ion-card-content>
            <div style="margin: 10px 0">
              <ion-text style="display: inline-block;text-align: left;width: 50%;color: #242424">
                《{{ `java编程基础` }}》
              </ion-text>
              <ion-text style="display: inline-block;text-align: right;width: 50%;color: #A9A9A9">
                {{ `正在学习` }}
              </ion-text>
              <ion-range class="learned-2" disabled style="padding: 0" :value="30"></ion-range>
              <div style="display: inline-block;text-align: left;width: 50%;color: #A9A9A9;font-size: 14px">
                已学&nbsp;
                <ion-text
                    style="color: #444444;border-right: solid 1px #D4D4D4 ;display: inline-block;padding-right: 5px;font-weight: 600">
                  20课
                </ion-text>
                <ion-text style="color: #444444;display: inline-block;padding-left: 5px;font-weight: 600">21%</ion-text>
              </div>
              <div style="display: inline-block;font-size:14px;text-align: right;width: 50%;color: #A9A9A9;">
                总&nbsp;<ion-text style="color: #444444;font-weight: 600">120</ion-text>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #f1f1f1;
}


ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-range.learning {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}
ion-range.learned-1 {
  --bar-background: rgba(212, 193, 184, 0.22);
  --bar-background-active: #FFB38F;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}
ion-range.learned-2 {
  --bar-background: rgba(198, 198, 198, 0.22);
  --bar-background-active: #8FE1FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}
.range-disabled {
  opacity: 1 !important;
}
</style>