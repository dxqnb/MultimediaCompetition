<script setup lang="ts">

import {IonAvatar, IonItem, IonLabel} from "@ionic/vue";

const props = defineProps(['item', 'index']);
</script>

<template>
  <ion-item lines="none" :href="item.link">
    <ion-avatar slot="start" style="height: 50px;width: 50px;">
      <img :src="item.img" alt="avatar"/>
    </ion-avatar>
    <ion-label>
      <h3>{{ item.title }}</h3>
      <p style="font-size: 10px">{{ item.createby }}</p>
    </ion-label>
  </ion-item>
</template>

<style scoped>
ion-avatar {
  --border-radius: 4px;
}

ion-item {
  --border-radius: 10px;
  --background: #eee;
/*  --border-width:10px;
  --border-style: solid;
  --border-color: rgba(255, 255, 255, 0);*/
  margin: 6px 0;
}
ion-label{
  margin: 16px 0;
}
</style>