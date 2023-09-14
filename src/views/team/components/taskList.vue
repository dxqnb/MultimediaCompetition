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
import {reactive, ref} from "vue";
import {getFridenTeamTaskfinshNo, getFridenTeamTaskfinshYes, getFridenTeamTaskList} from "@/api/team";
import {useRoute} from "vue-router";
interface item     {
      id: number
      taskid: number
      tid: number
      userid: number
      studentname: string
      avatar: string,
      task: string
      taskdetail: string
      img: string
      target: number
      finishtime: number
      content: string
      isfinsh: string
      createtime: string
    }

const unfinished = ref(false)
const finished = ref(false)
const finishedItem = reactive<item[]>([]);
const unfinishedItem = reactive<item[]>([]);
const route = useRoute()
const tid = route.params.id
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id



getFridenTeamTaskfinshYes(tid).then((res)=>{
  for (let i = 0; i < res.data.data.length; i++) {
    if (res.data.data[i].userid == userid) {
      finishedItem.push(res.data.data[i])
    }
  }
  console.log(finishedItem)
})
getFridenTeamTaskfinshNo(tid).then((res)=>{
  for (let i = 0; i < res.data.data.length; i++) {
    if (res.data.data[i].userid == userid) {
      unfinishedItem.push(res.data.data[i])
    }
  }
  console.log(unfinishedItem)
})
function click(num: number) {
  if (num === 1) {
    unfinished.value = true
    finished.value = false
  } else {
    unfinished.value = false
    finished.value = true
  }
}
</script>

<template>
  <div>
    <ion-button :class="unfinished?'clicked':'notClicked' " @click="click(1)"
                style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;"
                mode="md">
      待完成
    </ion-button>
    <ion-button mode="md" :class="finished?'clicked':'notClicked' " @click="click(2)"
                style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;">
      已完成
    </ion-button>
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">任务列表</ion-text>
    <div v-if="!finished">
      <ion-text style="color:#5C82FF;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">待完成</ion-text>
      <ion-card @click="$router.push('/team/submitTask/'+item.taskid)"
                style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none" v-for="item in unfinishedItem">
        <ion-card-content>
          <div style="display: flex;">
            <div style="width: 50%;">
              <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">{{ item.task }}
              </ion-text>
              <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">截止日期&nbsp;{{ new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getFullYear()+'-'+new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getMonth()+'-'+new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getDate()}}</ion-text>
            </div>
            <div style="width: 50%;">
              <ion-text
                  style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                {{ item.createtime.split(' ')[0] }}
              </ion-text>
              <ion-text
                  style="display: block;font-size: 18px;font-weight: 400;color: #5C82FF;text-align: right;width: 100%;margin-top: 10px">
                进行中
              </ion-text>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </div>
    <div v-if="!unfinished">
      <ion-text style="color:#747474;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">已完成</ion-text>
      <ion-card
          style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none" v-for="item in finishedItem">
        <ion-card-content>
          <div style="display: flex;">
            <div style="width: 50%;">
              <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">{{ item.task }}
              </ion-text>
              <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">截止日期&nbsp;{{ new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getFullYear()+'-'+new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getMonth()+'-'+new Date(new Date(item.createtime).getTime() + 24 * 60 * 60 * 1000 * item.finishtime).getDate()}}</ion-text>
            </div>
            <div style="width: 50%;">
              <ion-text
                  style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                {{ item.createtime.split(' ')[0] }}
              </ion-text>
              <ion-text
                  style="display: block;font-size: 18px;font-weight: 400;color: #66CC0B;text-align: right;width: 100%;margin-top: 10px">
                已完成
              </ion-text>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
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