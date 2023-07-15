<script setup lang="ts">

import {IonAvatar, IonItem, IonLabel} from "@ionic/vue";

const props = defineProps(['item', 'index']);
</script>

<template>
  <ion-item lines="none" href="#">
    <ion-avatar slot="start">
      <img src="https://www.0030.store/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91.png" alt="avatar"/>
    </ion-avatar>
    <ion-label>
      <h3>移动应用开发</h3>
      <p style="font-size: 6px">王思睿</p>
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