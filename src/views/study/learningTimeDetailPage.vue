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
import {onMounted, reactive, ref} from "vue";
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
const bar = ref();
let testRecordOption: EChartsOption = {
  title: {
    text: '特性示例：渐变色 阴影 点击缩放',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#83bff6'},
          {offset: 0.5, color: '#188df0'},
          {offset: 1, color: '#188df0'}
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: '#2378f7'},
            {offset: 0.7, color: '#2378f7'},
            {offset: 1, color: '#83bff6'}
          ])
        }
      },
      data: data
    }
  ]
};

onMounted(() => {
  let testChart = echarts.init(bar.value);
  testRecordOption && testChart.setOption(testRecordOption);
})
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
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
      <ion-text style="font-weight: 900;font-size: 20px">视频学习记录</ion-text>
      <div
          style="font-size: 13px;font-weight: 500;color: #474747;border-left: 4px solid #5676F1;padding-left: 2px;margin-top: 18px">
        《java编程基础》
      </div>
      <ion-card style="margin: 20px 0;--background: linear-gradient(to bottom,#FCEDE9, #F9F9F9);">
        <ion-card-content style="padding: 0 20px;">
          <div style="margin: 10px 0;border-bottom: 1px solid #F4E5E0;padding-bottom: 20px">
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
          <div style="width: 100%;height: 200px;" ref="bar">

          </div>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FBFBFB;
}


ion-item {
  --padding-start: 0px;
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