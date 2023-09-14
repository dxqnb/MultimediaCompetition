<script setup lang="ts">

import {IonAvatar, IonItem, IonLabel} from "@ionic/vue";

const props = defineProps(['item', 'index','type']);
</script>

<template>
  <ion-item lines="none" :href="'/study/lesson/'+item.id+'/'+type">
    <ion-avatar slot="start" style="height: 44px;width: 42px;">
      <img :src="item.img" alt="avatar"/>
    </ion-avatar>
    <ion-label style="margin-top: 10px">
      <h3 style="font-size: 14px;font-weight: 600">{{ item.title }}</h3>
      <p style="font-size: 10px">{{ item.createby||'&nbsp;' }}</p>
    </ion-label>
  </ion-item>
</template>

<style scoped>
ion-avatar {
  --border-radius: 4px;
}

ion-item {
  --border-radius: 10px;
  --background: #F8F8F8;
/*  --border-width:10px;
  --border-style: solid;
  --border-color: rgba(255, 255, 255, 0);*/
  margin: 10px;
}
ion-label{
  margin: 16px 0;
}
</style>