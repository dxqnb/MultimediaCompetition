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
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonRange,
  IonText,
  IonRadio,
  IonRadioGroup,
  IonSearchbar,
  IonFooter,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import TaskProcess from "@/views/team/components/taskProcess.vue";
import TaskList from "@/views/team/components/taskList.vue";
import TeamTalk from "@/views/team/components/teamTalk.vue";


import * as marked from "marked";
import dayjs from "dayjs";
import ReleaseTask from "@/views/team/components/releaseTask.vue";
import TeamInfo from "@/views/team/components/teamInfo.vue";

const text = marked.parse('### Marked in the browser\n\nRendered by **marked**.');
const blank = ref('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'/></svg>');
const sent = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.812" height="14.882" viewBox="0 0 18.812 14.882">\n' +
    '  <path id="path" d="M17.722.023.66,3.961a.823.823,0,0,0-.621.592.823.823,0,0,0,.184.838L2.974,8.537l-1.19,4.375a.8.8,0,0,0,.348.956.8.8,0,0,0,1.017-.019l8.313-6.125A.774.774,0,0,0,11.645,6.5a.774.774,0,0,0-1.225-.184l-6.3,4.624.652-2.384a.826.826,0,0,0-.188-.809l-2.1-2.406,13.948-3.22-4.581,10.57L10.1,11.521a.769.769,0,0,0-1.253.213.769.769,0,0,0,.282,1.24l2.625,1.75a.83.83,0,0,0,.481.153.977.977,0,0,0,.249-.035.836.836,0,0,0,.551-.494L18.724,1.222A.816.816,0,0,0,18.6.317.815.815,0,0,0,17.722.023Z" transform="translate(0.006 0.005)" fill="#fff" style="isolation: isolate"/>\n' +
    '</svg>\n');
const sentBar = ref('')
const content = ref()
const remoteMassage = ref([
      {
        time: '7-19 16:59',
        text: marked.parse('### Marked in the browser\n\nRendered by **marked**.'),
        isMyself: true,
        username: '队长',
      },
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我是小明，很高兴认识你'),
        isMyself: false,
        username: '队员1',
      },
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我也很高兴认识你'),
        isMyself: true,
        username: '队长',
      },

    ]
)

function sentEvent() {
  if (sentBar.value === '') {
    return
  }
  // console.log(remoteMassage.value[remoteMassage.value.length - 1].time.substring(0, 2))
  remoteMassage.value.push({
    time: !remoteMassage.value[remoteMassage.value.length - 1].time.includes(' ') ? remoteMassage.value[remoteMassage.value.length - 1].time.substring(0, 2) == dayjs().format('HH:mm').substring(0, 2) || remoteMassage.value[remoteMassage.value.length - 1].time == '' ? '' : dayjs().format('HH:mm') : dayjs().format('HH:mm'),
    text: marked.parse(sentBar.value),
    isMyself: true,
    username: '队长',
  })
  sentBar.value = ''
  content.value.$el.scrollToBottom(300)
}

const team = ref({
  teamName: '不简单队',

})
const segment = ref('info')
const contentClass = ref('ion-padding info')

function change(event: any) {
  segment.value = event.detail.value;
  if (segment.value === 'talk') {
    contentClass.value = 'ion-padding talk';
    return;
  }
  if (segment.value === 'info') {
    contentClass.value = 'ion-padding info';
    return;
  }
  contentClass.value = 'ion-padding';
}

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ team.teamName }}</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" ref="content" :class="contentClass">
      <div style="width: 100%;" slot="fixed">
        <ion-segment v-model="segment" :scrollable="true" mode="md" value="info" @ionChange="change"
                     style="background-color: #FFFFFF">
          <ion-segment-button value="info">
            <ion-label><h3 style="font-weight: 900">团队信息</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="taskProcess">
            <ion-label><h3 style="font-weight: 900">任务进程</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="taskList">
            <ion-label><h3 style="font-weight: 900">任务列表</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="taskPost">
            <ion-label><h3 style="font-weight: 900">发布任务</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="talk">
            <ion-label><h3 style="font-weight: 900">队友交流</h3></ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <div style="padding-top: 36px;height: 100%;">
        <div v-if="segment=='info'">
          <team-info></team-info>
        </div>
        <div v-else-if="segment=='taskProcess'">
          <task-process></task-process>
        </div>
        <div v-else-if="segment=='taskList'">
          <task-list></task-list>
        </div>
        <div style="height: 100%;" v-else-if="segment=='taskPost'">
          <release-task></release-task>
        </div>
        <div v-else>
          <div style="margin-top: 40px">
            <div v-for="(item , i) in remoteMassage" :key="i">
              <div style="margin-top: 1em" v-if="!item.isMyself">
                <div class="time">
                  <ion-text
                      style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
                    {{ item.time }}
                  </ion-text>
                </div>
                <div class="text">
                  <ion-avatar>
                    <ion-text
                        style="position: absolute;top: -18px;font-size: 12px;width: 48px;display: block;text-align: center;">
                      {{ item.username }}
                    </ion-text>
                    <img style="width: 48px;height: 48px;" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                         alt=""/>
                  </ion-avatar>
                  <div v-html="item.text"
                       style="display: inline-block;width: 75%;border-radius: 0 20px 20px 20px;background:#FFFFFF;padding-left: 1.5em;margin-left: 1.5em;margin-top: 1em;position: relative;overflow: visible;"
                       class="other">
                  </div>
                </div>
              </div>
              <div v-if="item.isMyself" style="margin-top: 1em">
                <div class="time">
                  <ion-text
                      style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
                    {{ item.time }}
                  </ion-text>
                </div>
                <div class="text">
                  <div v-html="item.text"
                       style="display: inline-block;width: 80%;border-radius: 20px 0 20px 20px;background:#FFFFFF;padding-left: 1.5em;margin-right: 1.5em;margin-top: 1em;position: relative;"
                       class="my">
                  </div>
                  <ion-avatar>
                    <ion-text
                        style="position: absolute;top: -18px;font-size: 12px;width: 48px;display: block;text-align: center;">
                      {{ item.username }}
                    </ion-text>
                    <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" style="width: 48px;height: 48px;"
                         alt=""/>
                  </ion-avatar>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 110px;"></div>
        </div>
      </div>
    </ion-content>
    <ion-footer style="background-color: #f7f7f7" v-if="segment=='talk'">
      <ion-toolbar>
        <ion-searchbar v-model="sentBar" :animated="true" inputmode="text" placeholder="请输入..." type="text"
                       :search-icon="blank"
                       enterkeyhint="send" style="width: 80%;margin-top: 15px;display: inline-block" :spellcheck="true"
                       @submit="sentEvent"
                       @keydown="(event:KeyboardEvent)=>{if(event.key=='Enter') {sentEvent()}}"></ion-searchbar>
        <ion-button
            style="width: 19%;display: inline-block;min-width: 0;min-height: 0;margin-top: 15px;margin-right: 0;margin-left: 0;vertical-align: top;--padding-bottom: 10px;--padding-top: 10px;--background: #5B78EC;--color: white"
            @click="sentEvent">
          <ion-icon slot="start" style="vertical-align: top;" :icon="sent"></ion-icon>
          发送
        </ion-button>

      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FFFFFF;
}

ion-content.talk::part(background) {
  background: linear-gradient(to bottom, rgba(0, 213, 255, 0.02), rgba(68, 0, 255, 0.02)) #FFFFFF;
}

ion-content.info::part(background) {
  background: linear-gradient(to bottom, rgba(0, 213, 255, 0.11), rgba(68, 0, 255, 0.11)) #FFFFFF;
}

ion-toolbar {
  --background: #FFFFFF;
}

.time {
  width: 100%;
  padding-bottom: 1em;
}

.text {
  display: flex;
  overflow: visible;
  position: relative;
}

.searchbar-search-icon {
  display: none;
}


.other:before {
  content: '';
  position: absolute;
  top: 0;
  left: -1em;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-top: 0.5em solid #FFFFFF;
  border-right: 0.5em solid #FFFFFF;
  border-bottom: 0.5em solid transparent;
}

.my:before {
  content: '';
  position: absolute;
  top: 0;
  right: -1em;
  width: 0;
  height: 0;
  border-left: 0.5em solid #FFFFFF;
  border-top: 0.5em solid #FFFFFF;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid transparent;
}
</style>