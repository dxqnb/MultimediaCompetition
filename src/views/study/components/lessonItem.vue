<script setup lang="ts">

import {
  IonAvatar, IonItem, IonLabel
  , IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonImg, IonText, toastController
} from "@ionic/vue";
import {addZyKc, getZyKcDetailList} from "@/api/study";
import {ref} from "vue/dist/vue";
import {useRoute} from "vue-router";

const route = useRoute();
const props = defineProps(['item', 'index','type']);
let user = localStorage.getItem('user')
let kcid = route.path.includes('history') ? props.item.kcid : props.item.id

function addLesson() {
  if (user != null) {
    addZyKc(JSON.parse(user).username, JSON.parse(user).deptid).then(async (res) => {
      if (res.data.code == 0) {
        const toast = await toastController.create({
          message: '添加成功'
        })
        await toast.present().then(() => {
          setTimeout(() => {
            toast.dismiss()
          }, 1000)
        })
      }
    })
  }
}
</script>

<template>
  <ion-item-sliding>
    <ion-item lines="full">
      <ion-img slot="start" :src="item.img"
               style="height: 100px;width: 70px;">
      </ion-img>
      <ion-label>
        <h3>{{ item.title }}</h3>
        <p style="font-size: 10px;padding: 5px 0 5px 0">{{ item.createby }}</p>
        <p style="font-size: 10px">{{ item.createtime }}</p>
      </ion-label>
      <div slot="end" style="display: flex;flex-direction: column">
        <ion-button v-if="!$route.path.includes('history')"
                    style="--background: #FFAA1B;--background-activated: #d38d17" @click="addLesson()">
          <ion-text color="light">添加课程</ion-text>
        </ion-button>
        <ion-button @click="$router.push('/study/lesson/'+kcid+'/'+type)">
          <ion-text color="light">进入课程</ion-text>
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
  /*  --background: #eee;*/
  /*  --border-width:10px;
    --border-style: solid;
    --border-color: rgba(255, 255, 255, 0);*/
  /* margin: 6px 0;*/
}

ion-label {
  margin: 16px 0;
}
</style>