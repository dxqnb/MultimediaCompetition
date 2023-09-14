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
  IonText,
    IonIcon
} from "@ionic/vue";
import {chevronForward, chevronDown} from 'ionicons/icons';
import TaskProcessItem from "@/views/team/components/taskProcessItem.vue";
import {reactive} from "vue";
import {useRoute} from "vue-router";
import {getFridenTeamTaskfinshNo, getFridenTeamTaskfinshYes} from "@/api/team";

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
</script>

<template>
  <div>
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: inline-block;margin: 10px 0">当前任务进度
    </ion-text>
    <ion-button
        style="width: 100%;--background: #E9EFFF;color: #5C82FF;--box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;"
        :disabled="true">{{ `任务点A` }}
    </ion-button>
    <task-process-item v-for="i in 3"></task-process-item>
  </div>
</template>

<style scoped>
.button-disabled{
  opacity: 1;
}
</style>