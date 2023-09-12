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
const props=defineProps(['id'])
const now = new Date();
const todayStr = now.getMonth().valueOf() + '/' + now.getDate()
type EChartsOption = echarts.EChartsOption;
let dataAxis = [];
for (let i = 0; i <= 6; i++) {
  let time = (new Date).getTime() - 24 * 60 * 60 * 1000 * i;
  let temp = new Date(time);
  dataAxis.push(temp.getMonth().valueOf() + '/' + temp.getDate())
}
dataAxis = dataAxis.reverse()
// prettier-ignore
let data = [20,10,10,50,60,70,20];
let yMax = 100;
let dataShadow = [];

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
const bar = ref();
let testRecordOption: EChartsOption = {
  title: {
    text: '{a|66}{b| 分钟\n}{b| '+now.getMonth()+'月'+now.getDate()+'日}{c| 今日}',
    // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    textStyle: {
      rich: {
        a: {
          color: '#FF8044',
          fontSize: '25px',
          fontWeight: 600,
        },
        b: {
          color: '#999999',
          fontSize: '11px',
          fontWeight: 500,
        },
        c: {
          color: '#FF9F9F',
          fontSize: '11px',
          fontWeight: 500,
        },
      },
    },
  },
  grid: {
    height: '120px',
    width: '90%',
  },
  xAxis: {
    type: 'category',
    data: dataAxis,
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
      barWidth: '10px',
      showBackground: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#FFBFAD'},
          {offset: 1, color: '#FAF4F3'}
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#fa9981'},
          {offset: 1, color: '#fdccc2'}
          ])
        }
      },
      data: data
    }
  ]
};

onMounted(() => {
  setTimeout(() => {
    let testChart = echarts.init(bar.value);
    testRecordOption && testChart.setOption(testRecordOption);
  }, 100)
})
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/progress"></ion-back-button>
        </ion-buttons>
        <IonTitle>视频学习时长</IonTitle>
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
        {{ id }}
      </div>
      <ion-card style="margin: 20px 0;--background: linear-gradient(to bottom,#FCEDE9, #F9F9F9);">
        <ion-card-content style="padding: 0 14px;">
          <div style="margin: 10px 0;border-bottom: 1px solid #F4E5E0;padding-bottom: 20px">
            <ion-text style="display: inline-block;text-align: left;width: 50%;color: #242424">
              {{ id }}
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
          <div style="width: 100%;height: 200px;margin: 30px 0" ref="bar">

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