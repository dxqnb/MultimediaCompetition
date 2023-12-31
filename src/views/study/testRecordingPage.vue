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
const props=defineProps(['id'])

const up = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10.099" height="14" viewBox="0 0 10.099 14">\n' +
    '  <path id="路径_101" data-name="路径 101" d="M148.811.1l4.75,5.443a.3.3,0,0,1-.224.494H151a.294.294,0,0,0-.294.256,11.417,11.417,0,0,1-2.575,5.768,6.211,6.211,0,0,1-3.662,1.933.3.3,0,0,1-.242-.525,6.331,6.331,0,0,0,2.293-4.291A21.5,21.5,0,0,0,146.7,6.34a.3.3,0,0,0-.3-.3h-2.566a.3.3,0,0,1-.224-.494L148.363.1a.3.3,0,0,1,.448,0Z" transform="translate(-143.536 0)" fill="#00c081"/>\n' +
    '</svg>\n')
const testRecord = ref();
const testRecordDetail = ref();
const now = new Date();
let dataAxis = ['一测', '二测', '三测', '四测', '五测', '六测'];
let data = [10, 10, 10, 10, 9, 10, 16];
let data1 = [5, 11, 1, 0, 1, 1, 7];
let yMax = 25;
let dataShadow = [];

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
const bar = ref();
let testRecordDetailOption: EChartsOption = {
  title: {
    text: '{a|55}{b| %\n}{c|'+props.id+'}',
    // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    textStyle: {
      rich: {
        a: {
          color: '#445CFF',
          fontSize: '25px',
          fontWeight: 600,
        },
        b: {
          color: '#999999',
          fontSize: '11px',
          fontWeight: 500,
        },
        c: {
          color: '#A29FFF',
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
        color: '#CDD2FA'
      },
      emphasis: {
        itemStyle: {
          color: '#aab3f8'
        }
      },
      data: data
    },
    {
      type: 'bar',
      barWidth: '10px',
      showBackground: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#6363FF'},
          {offset: 1, color: '#79A3F6'}
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: '#4949fa'},
          {offset: 1, color: '#558bf8'}
          ])
        }
      },
      data: data1
    }
  ]
};


let testRecordOption: EChartsOption = {
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '90%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold',
          formatter: '{a|{d}}{b|%}',
          rich: {
            a: {
              color: '#8056F5',
              fontSize: 18,
              fontWeight: 'bolder',
            },
            b: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'normal',
            }
          },
        }
      },
      labelLine: {
        show: true
      },
      data: [
        {value: 2, name: '未完成', itemStyle: {color: '#FFFFFF', borderColor: '#FFFFFF'}},
        {value: 2, name: '正确', itemStyle: {color: '#8056F5', borderColor: '#8056F5'}},
        {value: 1, name: '错误', itemStyle: {color: '#FFE600', borderColor: '#FFE600'}},
      ]
    }
  ]
};

onMounted(() => {
  setTimeout(() => {
    let testChart = echarts.init(testRecord.value);
    testRecordOption && testChart.setOption(testRecordOption);
    let testDetailChart = echarts.init(testRecordDetail.value);
    testRecordDetailOption && testDetailChart.setOption(testRecordDetailOption);
    testChart.dispatchAction({
      type: 'select',
      name: '正确',
    });
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
        <IonTitle>测试记录</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-text style="font-weight: 900;font-size: 20px;color: #474747">测试记录</ion-text>
      <ion-card style="margin: 20px 0;--background: linear-gradient(to bottom,#E9E9FC, #F9F9F9);">
        <ion-card-content style="padding: 0 15px;">
          <div style="display: flex;margin: 10px 0;border-bottom: 1px solid #F4E5E0;padding-bottom: 20px">
            <div style="margin: 10px 0;width: 70%;" @click="$router.push('/study/testRecording')">
              <ion-text
                  style="display: inline-block;font-size: 13px;text-align: left;color: #5C5CCF;font-weight: bold;margin-bottom: 48px">
                {{ `你已完成101道测试练习，还剩20道` }}
              </ion-text>
              <div style="display: inline-block;text-align: left;width: 70%;color: #8A8ADD;font-size: 14px">
                当前正确率为&nbsp;
                <ion-text
                    style="color: #5669F5;display: inline-block;padding-right: 5px;font-weight: 600">
                  74%
                </ion-text>
                <div style="display: inline-block;text-align: left;color: #8A8ADD;font-size: 14px">
                  继续保持哦~
                </div>
              </div>
              <div
                  style="display: inline-block;font-size:11px;text-align: right;width: 30%;color: #8A8ADD;vertical-align: bottom">
                <div>
                <span
                    style="display: inline-block;width: 8px;height: 8px;border-radius: 100%;background-color: #8056F5"></span>&nbsp;正确&nbsp;75
                </div>
                <div>
                <span
                    style="display: inline-block;width: 8px;height: 8px;border-radius: 100%;background-color: #FFE600"></span>&nbsp;错误&nbsp;26
                </div>
              </div>
            </div>
            <div style="width: 100px;height: 100px;margin-top: 20px" ref="testRecord">
            </div>
          </div>
          <div style="width: 100%;height: 217px;" ref="testRecordDetail">
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