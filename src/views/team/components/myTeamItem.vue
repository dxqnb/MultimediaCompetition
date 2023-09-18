<script setup lang="ts">

import {
  IonAvatar, IonItem, IonLabel
  , IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonImg, IonText, toastController
} from "@ionic/vue";
import {addZyKc, getZyKcDetailList} from "@/api/study";
import {useRoute} from "vue-router";

const route = useRoute();
const props = defineProps(['item', 'index','type']);
let user = localStorage.getItem('user')

</script>

<template>
  <ion-item-sliding>
    <ion-item lines="full">
      <ion-img slot="start" :src="item.bgimg"
               style="height: 87px;width: 66px;margin-top: 12px;margin-bottom: 12px;border-radius: 10px;overflow: hidden;object-fit: cover;">
      </ion-img>
      <ion-label style="margin-top: 2px;margin-bottom: 0">
        <h3 style="font-weight: 600">{{ item.tname }}</h3>
        <p style="font-size: 10px;padding: 5px 0 5px 0">{{ item.introduction }}</p>
        <p style="font-size: 10px;padding-top: 12px">标签:{{ item.attribute }}&nbsp;&nbsp;&nbsp;活跃度:{{ item.activity }}</p>
      </ion-label>
      <div slot="end" style="display: flex;flex-direction: column">
        <ion-button style="--background-activated: #4352b6;--background: #5D73FF;--color: #ffffff" @click="$router.push('/team/teamDetail/'+item.id)">
          <ion-text>进入学友团</ion-text>
        </ion-button>
      </div>

    </ion-item>
    <ion-item-options>
      <ion-item-option>Favorite</ion-item-option>
      <ion-item-option color="danger">Delete</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>

<style scoped>
ion-avatar {
  --border-radius: 4px;
}

ion-item {
  /*--border-radius: 10px;*/
    --background: #ffffff;
  /*  --border-width:10px;
    --border-style: solid;
    --border-color: rgba(255, 255, 255, 0);*/
  /* margin: 6px 0;*/
}

ion-label {
  margin: 16px 0;
}
</style>