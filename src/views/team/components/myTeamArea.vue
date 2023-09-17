<script setup lang="ts">

import {
  IonText,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonRadioGroup,
  IonRadio,
  IonAvatar,
  IonRange,
  IonButton, IonTabButton, useIonRouter, onIonViewDidEnter, onIonViewWillEnter
} from "@ionic/vue";
import {onMounted, onUpdated, reactive, ref} from "vue";
import StudyAreaItem from "@/views/study/components/studyAreaItem.vue";
import animation from "@/animations/customAnimation";
import router from "@/router";
import {getFridenTeamTaskfinshNo, getFridenTeamTaskfinshYes, getFridenTeamTaskList, getMyFridenTeam} from "@/api/team";

interface team {
  id: number,
  tname: string
}

interface item {
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
  finished?: item[]
  unfinished?: item[]

}

const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id
const ionRouter = useIonRouter();
const teamList = reactive<team[]>([])
const radio = ref('true')
const segment = ref('')
const finalItem = reactive<final[]>([]);
const ffffffff = reactive<final[]>([]);
const temp1 = ref<item[] | undefined>()
const temp2 = ref<item[] | undefined>()
// getMyFridenTeam(userid).then((res: any) => {
//   for (let i = 0; i < res.data.data.length; i++) {
//     teamList.push(res.data.data[i])
//   }
//   segment.value = res.data.data[0].id
//   getFridenTeamTaskList(segment.value).then((res) => {
//     for (let i = 0; i < res.data.data.length; i++) {
//       if (res.data.data[i].open == '1') {
//         finalItem.push(res.data.data[i])
//       }
//     }
//     console.log(finalItem)
//     getFridenTeamTaskfinshYes(segment.value).then((res) => {
//       for (let i = 0; i < res.data.data.length; i++) {
//         for (let j = 0; j < finalItem.length; j++) {
//           if (res.data.data[i].taskid == finalItem[j].id) {
//             if (finalItem[j].finished == undefined) finalItem[j].finished = []
//             finalItem[j].finished?.push(res.data.data[i])
//           }
//         }
//       }
//       getFridenTeamTaskfinshNo(segment.value).then((res) => {
//         for (let i = 0; i < res.data.data.length; i++) {
//           for (let j = 0; j < finalItem.length; j++) {
//             if (res.data.data[i].taskid == finalItem[j].id) {
//               if (finalItem[j].unfinished == undefined) finalItem[j].unfinished = []
//               finalItem[j].unfinished?.push(res.data.data[i])
//             }
//           }
//         }
//         for (let j = 0; j < finalItem.length; j++) {
//           ffffffff.push(finalItem[j])
//         }
//         temp1.value = ffffffff[0].finished
//         temp2.value = ffffffff[0].unfinished
//       })
//     })
//   })
// })
onMounted(() => {
  finalItem.splice(0, finalItem.length);
  ffffffff.splice(0, ffffffff.length);
  teamList.splice(0, teamList.length);
  getMyFridenTeam(userid).then((res: any) => {
    for (let i = 0; i < res.data.data.length; i++) {
      teamList.push(res.data.data[i])
    }
    segment.value = res.data.data[0].id
    getFridenTeamTaskList(segment.value).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].open == '1') {
          finalItem.push(res.data.data[i])
        }
      }
      console.log(finalItem)
      getFridenTeamTaskfinshYes(segment.value).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          for (let j = 0; j < finalItem.length; j++) {
            if (res.data.data[i].taskid == finalItem[j].id) {
              if (finalItem[j].finished == undefined) finalItem[j].finished = []
              finalItem[j].finished?.push(res.data.data[i])
            }
          }
        }
        getFridenTeamTaskfinshNo(segment.value).then((res) => {
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
          temp1.value = ffffffff[0].finished
          temp2.value = ffffffff[0].unfinished
        })
      })
    })
  })

})
</script>

<template>
  <div>
    <ion-text @click="$router.push('/study/lessons')"
              style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
      <h4 style="color: #474747;font-weight: bolder;">我的学友团</h4>
      <div
          style="border: 10px solid #89C0EF;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;z-index: -1;"></div>
    </ion-text>
    <div class="area">
      <ion-segment mode="ios" v-model="segment">
        <ion-segment-button :value="i.id" v-for="i in teamList">
          <ion-label><h3 style="font-weight: 900">{{ i.tname }}</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button :value="0" v-if="teamList.length==0">
          <ion-label><h3 style="font-weight: 900">你还没加入任何一个学友团</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
      <div
          style="background-color: #FFFFFF;border-radius:0 0 10px 10px;padding-top: 1em;">
        <div v-if="temp1==undefined&&temp2==undefined">
          暂无任务
        </div>
        <div style="width: 90%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in temp1">
          <ion-avatar
              style="display:inline-block;vertical-align: top;margin-top: 1em;width: 2em;height: 2em;margin-right: 6px">
            <img :src="i.avatar" style="vertical-align: middle;width: 2em;height: 2em;"
                 alt="">
          </ion-avatar>
          <div style="width: 100px;display: inline-block;margin: 0;">
            <ion-text style="white-space: nowrap;display: flex;">
              <p style="padding-right: 0.5em;margin: 0;font-size: 12px">{{ i.studentname }}</p>
              <p style="color: #9A9A9A;font-size: 12px;margin: 0;">{{ `` }}</p>
            </ion-text>
            <ion-range disabled style="padding: 0" :value="100"></ion-range>
          </div>
          <div
              style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
            <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
              <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>
            </ion-radio-group>
            <ion-text>
              <p style="display: inline-block;font-size: 12px">{{ finalItem[0].target }}/{{ finalItem[0].target }}</p>
            </ion-text>
          </div>
          <div
              style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #64DD3E">
            {{ `已完成` }}
          </div>
        </div>
        <div style="width: 90%;margin: 0 auto;white-space: nowrap;position: relative"
             v-for="i in temp2">
          <ion-avatar
              style="display:inline-block;vertical-align: top;margin-top: 1em;width: 2em;height: 2em;margin-right: 6px">
            <img :src="i.avatar" style="vertical-align: middle;width: 2em;height: 2em;"
                 alt="">
          </ion-avatar>
          <div style="width: 100px;display: inline-block;margin: 0;">
            <ion-text style="white-space: nowrap;display: flex;">
              <p style="padding-right: 0.5em;margin: 0;font-size: 12px">{{ i.studentname }}</p>
              <p style="color: #9A9A9A;font-size: 12px;margin: 0;">{{ `` }}</p>
            </ion-text>
            <ion-range disabled style="padding: 0" :value="5"></ion-range>
          </div>
          <div
              style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
            <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
              <!--                    <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>-->
            </ion-radio-group>
            <ion-text>
              <p style="display: inline-block;font-size: 12px">{{ finalItem[0].target }}/{{ finalItem[0].target }}</p>
            </ion-text>
          </div>
          <div
              style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #525252">
            {{ `未完成` }}
          </div>
        </div>
        <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10px;">
          <ion-button mode="md" v-if="temp1!=undefined||temp2!=undefined"
                      @click="ionRouter.navigate('/team/teamDetail/'+segment,'forward','push')"
                      style="height: 22px;min-height: 22px;--background: #E0E0E0;color: #989898;--padding-top: 0.8em;--padding-bottom: 0.8em;font-size: 0.8em;">
            更多
          </ion-button>
          <!--          <ion-button mode="md"-->
          <!--                      @click="router.push('/team/teamDetail/1')"-->
          <!--                      style="height: 22px;min-height: 22px;&#45;&#45;background: #E0E0E0;color: #989898;&#45;&#45;padding-top: 0.8em;&#45;&#45;padding-bottom: 0.8em;font-size: 0.8em;">-->
          <!--            更多-->
          <!--          </ion-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-range {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
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

ion-segment {
  --background: linear-gradient(to right, rgba(0, 213, 255, 0.04), rgba(68, 0, 255, 0.04));
  height: 55px;
  border-radius: 10px 10px 0 0;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #474747;
}

.segment-button-checked.md::part(native) {
  color: #08a391;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

/* iOS styles */
/*ion-segment-button.ios:nth-child(1)::part(native) {

  color: #08a391;
}*/
ion-segment-button {
  --background: rgba(0, 0, 0, 0);
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
}

ion-segment-button.ios::before {
  display: none;
}


.segment-button-checked.ios::part(native) {
  color: #8997ef !important;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 10px 10px 0 0;
}

.segment-button-after-checked::before {
  opacity: 1 !important;
}

svg {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.infinite-scroll-content {
  text-align: center;
  padding: 20px 0;
}

.range-disabled {
  opacity: 1 !important;
}
</style>