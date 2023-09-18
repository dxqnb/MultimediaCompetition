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
  IonLabel,
  IonContent,
  IonList,
  IonPopover,
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
  IonFooter, alertController, toastController, useIonRouter, onIonViewDidLeave,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {onUnmounted, reactive, ref} from "vue";
import TaskProcess from "@/views/team/components/taskProcess.vue";
import TaskList from "@/views/team/components/taskList.vue";


import * as marked from "marked";
import dayjs from "dayjs";
import ReleaseTask from "@/views/team/components/releaseTask.vue";
import TeamInfo from "@/views/team/components/teamInfo.vue";
import {
  addFridenTeamUser,
  addTeamMessage,
  delFridenTeam, delFridenUser,
  getFridenTeam,
  getFridenTeamMessageList,
  getFridenTeamUserList, zj
} from "@/api/team";
import {useRoute} from "vue-router";

const content = ref()
const userid = Number(JSON.parse(localStorage.getItem('user') || '').id)

interface item {
  attribute: string,
  bgimg: string,
  id: number,
  introduction: string,
  mxnumber: number,
  number: number,
  tavatar: string,
  tname: string,
  userid: number,
}

const team = ref<item>({
  attribute: "",
  bgimg: "",
  id: 0,
  introduction: "",
  mxnumber: 0,
  number: 0,
  tavatar: "",
  tname: "",
  userid: 0,
})



const route = useRoute()
const router = useIonRouter()
const user = ref([])
let id = route.params.id;
getFridenTeam({id: id}).then((res) => {
  localStorage.setItem('id', res.data.data)
  team.value = res.data.data[0]
});
getFridenTeamUserList(id).then((res) => {
  user.value = res.data.data
})

function join() {
  addFridenTeamUser(id, userid).then(async (res) => {
    const toast = await toastController.create({
      message: res.data.code == 0 ? '加入成功' : '加入失败'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
  })
}
const contentClass = ref('ion-padding info')

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/team"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ team.tname }}</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" ref="content" :class="contentClass">
      <team-info :duizhangID="team.userid" :team="team" :user="user"></team-info>
      <ion-button expand="block" style="--background: #35C1FC;--color:#fff" @click="join">
        加入该学友团
      </ion-button>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: url("@/img/teamBackground.png");
  background-size: cover;
}

ion-toolbar {
  --background: #FFFFFF;
}
</style>