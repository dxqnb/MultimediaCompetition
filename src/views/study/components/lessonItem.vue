<script setup lang="ts">

import {IonAvatar, IonItem, IonLabel
, IonButton,IonItemSliding,IonItemOptions,IonItemOption,IonImg} from "@ionic/vue";

const props = defineProps(['item', 'index']);
</script>

<template>
  <ion-item-sliding>
  <ion-item lines="full">
    <ion-img slot="start" src="https://www.0030.store/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91.png" style="height: 100px;width: 70px;">
    </ion-img>
    <ion-label>
      <h3>移动应用开发</h3>
      <p style="font-size: 6px;padding-bottom: 10px">王思睿</p>
      <p style="font-size: 6px">2018</p>
    </ion-label>
    <ion-button slot="end" @click="$router.push('/study/lesson/1')"><ion-text color="light">加入课程</ion-text></ion-button>
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
/*  --background: #eee;*/
/*  --border-width:10px;
  --border-style: solid;
  --border-color: rgba(255, 255, 255, 0);*/
 /* margin: 6px 0;*/
}
ion-label{
  margin: 16px 0;
}
</style>