<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonTextarea,
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
import groupTeamItem from '@/views/team/components/groupTeamItem.vue'
import {getAllFridenTeam} from "@/api/team";

interface team {
  id:number,
  tname: string,
  studentname: string
  bgimg: string,
  number: number,
  mxnumber: number,
  createtime: string
}

interface team {
  avatar: String
}
const items = reactive<team[]>([]);
getAllFridenTeam().then((res) => {
  console.log(res.data.data)
  for (let i = 0; i < res.data.data.length; i++) {
    items.push(res.data.data[i])
  }
})

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/team/teamDetail/1"></ion-back-button>
        </ion-buttons>
        <IonTitle>组队学习</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;">
        <ion-segment style="width: 110px;min-width: 0;margin: 0 auto;" @ionChange="()=>{$router.push('/team/createTeam')}" value="join">
          <ion-segment-button style="min-width: 55px;min-height: 20px" value="join">
            <ion-label style="font-size: 13px">参与</ion-label>
          </ion-segment-button>
          <ion-segment-button style="min-width: 55px;min-height: 20px" value="create">
            <ion-label style="font-size: 13px">创建</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <div>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">可参加
        </ion-text>
        <div>
          <group-team-item index="able" v-for="item in items" :item="item" :disable="false"></group-team-item>
        </div>

      </div>
      <div>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">已满员
        </ion-text>
        <div >
          <group-team-item index="disable"  v-for="item in items" :item="item" :disable="true"></group-team-item>
        </div>

      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #F7F8F9;
}

ion-toolbar {
  --background: #FFFFFF;
}

.segment-button-checked::part(native) {
  color: #FFFFFF;
}


ion-segment {
  --background: #ffffff;
}

ion-segment-button::part(indicator-background) {
  background: #6776FF;
}

ion-segment-button::part(native) {
  color: #C9C9C9;
}
</style>
