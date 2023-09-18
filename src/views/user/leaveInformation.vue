<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg, IonAccordionGroup, IonAccordion, IonItem
} from "@ionic/vue";
import {reactive, ref, onMounted} from "vue";
import {getMyQj} from "@/api/user";

const data = localStorage.getItem('user') as string | null;
const userid = ref('');
if (data) { // 检查数据是否存在
  const parsedData = JSON.parse(data); // 将字符串转换为对象

  if (parsedData && parsedData.username) { // 检查是否成功解析并存在 username 字段
    userid.value = parsedData.username; // 提取 username 并赋值给变量
  }
  const username = userid.value;
  // console.log(userid.value);

}

interface item {
  id: number,
  username: string,
  qjkc: string,
  qjyy: string,
  qjtime: string
}

const items = reactive<item[]>([]);

onMounted(async () => {
  getMyQj(userid.value).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      items.push(res.data.data[i])
    }
  })

});


</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>请假信息</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <ion-card v-for="item in items">

        <div style="margin: 10px">
          <div style="background: #F9FAFE;width: 100%;position: relative;border-radius: 10px;overflow: hidden">
            <div style="padding: 20px 0 20px 10px">
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">请假课程：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">{{ item.qjkc }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">请假类别：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">{{ item.qjyy }}</ion-text>
              </div>
              <div style="margin-bottom: 10px">
                <ion-text style="font-size: 13px;color: #727272">提交时间：</ion-text>
                <ion-text style="font-size: 15px;color: #444444">{{ item.qjtime }}</ion-text>
              </div>

            </div>
          </div>
        </div>
      </ion-card>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: url("@/img/userBackground.jpg");
  background-size: cover;
}

ion-col > img {
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}

ion-segment-button {
  --color-checked: #5D73FF;
}
</style>