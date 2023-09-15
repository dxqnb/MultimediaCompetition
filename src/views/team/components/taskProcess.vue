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
import {getFridenTeamTaskfinshNo, getFridenTeamTaskfinshYes, getFridenTeamTaskList} from "@/api/team";

interface final {
  id: number,
  tid: number,
  userid: number,
  task: string,
  img: string,
  open: string,
  target: number,
  finishtime: number,
  createtime: string,
  finished?: {
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
  }[]
  unfinished?: {
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
  }[]

}

const finalItem = reactive<final[]>([]);
const ffffffff = reactive<final[]>([]);
const route = useRoute()
const tid = route.params.id
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id

getFridenTeamTaskList(tid).then((res) => {
  for (let i = 0; i < res.data.data.length; i++) {
    if (res.data.data[i].open == '1') {
      finalItem.push(res.data.data[i])
    }
  }
  console.log(finalItem)
  getFridenTeamTaskfinshYes(tid).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      for (let j = 0; j < finalItem.length; j++) {
        if (res.data.data[i].taskid == finalItem[j].id) {
          if (finalItem[j].finished == undefined) finalItem[j].finished = []
          finalItem[j].finished?.push(res.data.data[i])
        }
      }
    }
    getFridenTeamTaskfinshNo(tid).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        for (let j = 0; j < finalItem.length; j++) {
          if (res.data.data[i].taskid == finalItem[j].id) {
            if (finalItem[j].unfinished == undefined) finalItem[j].unfinished = []
            finalItem[j].unfinished?.push(res.data.data[i])
          }
        }
      }
      for (let j = 0; j < finalItem.length; j++) {
        ffffffff.push(finalItem[j])
      }
    })
  })

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
    <task-process-item v-for="(item,i) in ffffffff" :final-item="item" :index="i+1"></task-process-item>
  </div>
</template>

<style scoped>
.button-disabled {
  opacity: 1;
}
</style>