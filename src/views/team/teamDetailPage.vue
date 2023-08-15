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
  IonButton, IonSegment, IonSegmentButton, IonAvatar, IonRange, IonText, IonRadio, IonRadioGroup,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import TaskProcess from "@/views/team/components/taskProcess.vue";
import TaskList from "@/views/team/components/taskList.vue";

const team = ref({
  teamName: '不简单队',

})
const segment = ref('info')

function change(event: any) {
  segment.value = event.detail.value;
  console.log(segment.value)
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
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;" slot="fixed">
        <ion-segment v-model="segment" :scrollable="true" mode="md" value="info" @ionChange="change"
                     style="padding-bottom: 10px">
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
      <div style="margin-top: 50px">
        <div v-if="segment=='info'">
          info
        </div>
        <div v-else-if="segment=='taskProcess'">
          <task-process></task-process>
        </div>
        <div v-else-if="segment=='taskList'">
          <task-list></task-list>
        </div>
        <div v-else-if="segment=='taskPost'">
          taskPost
        </div>
        <div v-else>
          talk
        </div>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FFFFFF;
}

ion-toolbar {
  --background: #FFFFFF;
}


</style>