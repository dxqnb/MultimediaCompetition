<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSpinner,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg, IonTextarea, IonSearchbar, toastController
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {closeCircleOutline} from "ionicons/icons";
import {ctjl} from "@/api/main";
import {addTeamMessage, getFridenTeamMessageList} from "@/api/team";
import dayjs from "dayjs";
import marked from "marked";
import axios from "axios";
import {el} from "vuetify/locale";

const sentBar = ref('')
const m = ref(30)

const blank = ref('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'/></svg>');
const sent = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.812" height="14.882" viewBox="0 0 18.812 14.882">\n' +
    '  <path id="path" d="M17.722.023.66,3.961a.823.823,0,0,0-.621.592.823.823,0,0,0,.184.838L2.974,8.537l-1.19,4.375a.8.8,0,0,0,.348.956.8.8,0,0,0,1.017-.019l8.313-6.125A.774.774,0,0,0,11.645,6.5a.774.774,0,0,0-1.225-.184l-6.3,4.624.652-2.384a.826.826,0,0,0-.188-.809l-2.1-2.406,13.948-3.22-4.581,10.57L10.1,11.521a.769.769,0,0,0-1.253.213.769.769,0,0,0,.282,1.24l2.625,1.75a.83.83,0,0,0,.481.153.977.977,0,0,0,.249-.035.836.836,0,0,0,.551-.494L18.724,1.222A.816.816,0,0,0,18.6.317.815.815,0,0,0,17.722.023Z" transform="translate(0.006 0.005)" fill="#fff" style="isolation: isolate"/>\n' +
    '</svg>\n');
const imgUrl = ref('')
const taskId = ref('')
const flag = ref(false)

async function sentEvent() {
  if (sentBar.value === '') {
    const toast = await toastController.create({
      message: '请在输入关键词后点发送'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
    return
  }
  flag.value = true
  let aa = setInterval(() => {
    if (m.value != 0) {
      m.value -= 1
    } else {
      flag.value = false
      m.value = 30
      clearInterval(aa)
    }
  }, 1000)
  try {
    // 发送第一个请求
    const response1 = await axios.post(
        'https://aip.baidubce.com/rpc/2.0/ernievilg/v1/txt2img?access_token=24.dc5796f86988ad7c8b90a2067b0af163.2592000.1695974212.282335-37718861', {
          "text": sentBar.value,
          "resolution": "1024*1024",
          "style": "写实风格",
          "num": 1
        }
    );
    taskId.value = response1.data.data.taskId;
    console.log(taskId.value);

    // 延迟30秒发送第二个请求
    setTimeout(async () => {
      const response2 = await axios.post(
          'https://aip.baidubce.com/rpc/2.0/ernievilg/v1/getImg?access_token=24.dc5796f86988ad7c8b90a2067b0af163.2592000.1695974212.282335-37718861', {
            taskId: taskId.value
          }
      );
      // console.log(response2);
      imgUrl.value = response2.data.data.img;
      console.log(imgUrl.value);
    }, 30000);
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar style="--background: transparent;">
        <ion-buttons slot="start">
          <ion-back-button style="color: white" text="" default-href="/smartU"></ion-back-button>
        </ion-buttons>
        <IonTitle style="color: white">AI绘画</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :scroll-y="false" :fullscreen="true" class="ion-padding">
      <div style="">
        <ion-searchbar v-model="sentBar" :animated="true" inputmode="text" placeholder="请输入..." type="text"
                       :search-icon="blank"
                       enterkeyhint="send"
                       style="width: 80%;margin-top: 15px;display: inline-block;--background: #56536F;height: 52px;padding-top: 0;padding-bottom: 0;--color: white"
                       :spellcheck="true"
                       @submit="sentEvent"
                       @keydown="(event:KeyboardEvent)=>{if(event.key=='Enter') {sentEvent()}}"></ion-searchbar>
        <ion-button
            style="width: 19%;display: inline-block;min-width: 0;min-height: 0;margin-top: 15px;margin-right: 0;margin-left: 0;vertical-align: top;--padding-bottom: 10px;--padding-top: 10px;--background: #6C66CF;--color: white"
            @click="sentEvent">
          <ion-icon slot="start" style="vertical-align: top;margin-left: 2px" :icon="sent"></ion-icon>
          发送
        </ion-button>
      </div>
      <div
          style="background-color: #56536F;width: 100%;min-height: 300px;border-radius: 16px;padding: 16px;overflow: hidden;margin-top: 20px">
        <ion-img :src="imgUrl" style="width: 100%;overflow: hidden;border-radius: 16px" v-if="imgUrl!=''"></ion-img>
      </div>
      <div v-if="flag"
           style="background-color: #56536F;width: 100%;border-radius: 10px;margin-top: 20px;color: #FFFFFF;text-align: center;height: 42px;">
        <ion-spinner style="--color: white;margin-right: 20px" name="lines"></ion-spinner>
        <span style="line-height: 42px;vertical-align: bottom">需要等待{{ m }}秒</span>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-col > img {
  box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.01);
}

ion-content::part(background) {
  background: #2D2B4A
}

.first {
  background: url('@/img/smartU1.png') no-repeat;
  background-size: cover;
  margin: auto;
}

ion-searchbar {
  --placeholder-color: white;
}
</style>
<style>
.searchbar-input-container.sc-ion-searchbar-ios {
  height: 42px;
}
</style>