<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, IonAvatar, IonFooter, IonSearchbar
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";
import TecItem from "@/views/study/components/tecItem.vue";
import NewsItem from "@/views/study/components/newsItem.vue";
import {getVideoYw} from "@/api/study";
import {addTeamMessage, getFridenTeamMessageList} from "@/api/team";
import dayjs from "dayjs";
import {marked} from "marked";
import {chats} from "@/api/main";

const blank = ref('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'/></svg>');
const sent = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.812" height="14.882" viewBox="0 0 18.812 14.882">\n' +
    '  <path id="path" d="M17.722.023.66,3.961a.823.823,0,0,0-.621.592.823.823,0,0,0,.184.838L2.974,8.537l-1.19,4.375a.8.8,0,0,0,.348.956.8.8,0,0,0,1.017-.019l8.313-6.125A.774.774,0,0,0,11.645,6.5a.774.774,0,0,0-1.225-.184l-6.3,4.624.652-2.384a.826.826,0,0,0-.188-.809l-2.1-2.406,13.948-3.22-4.581,10.57L10.1,11.521a.769.769,0,0,0-1.253.213.769.769,0,0,0,.282,1.24l2.625,1.75a.83.83,0,0,0,.481.153.977.977,0,0,0,.249-.035.836.836,0,0,0,.551-.494L18.724,1.222A.816.816,0,0,0,18.6.317.815.815,0,0,0,17.722.023Z" transform="translate(0.006 0.005)" fill="#fff" style="isolation: isolate"/>\n' +
    '</svg>\n');
const sentBar = ref('')
const content = ref()

interface message {
  time: string,
  text: string,
  isMyself: boolean,
  username: string,
  avatar: string
}

const remoteMassage = ref<message[]>([])
remoteMassage.value.push({
  time: dayjs().format('HH:mm'),
  text: marked.parse('你好，我是小U，很高兴为您服务！请选择你要咨询的问题类型，查看解决方案哦。'),
  isMyself: false,
  username: '小U',
  avatar: 'https://www.0030.store/chatImg.png'
})
const index = ref(0)
const news = reactive<any[]>([])
getVideoYw(index.value, index.value + 10).then((res) => {
  index.value += 10
  for (let i = 0; i < res.data.data.length; i++) {
    news.push(res.data.data[i])
  }
})

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

function ionInfinite() {
  getVideoYw(index.value, index.value + 10).then((res) => {
    index.value += 10
    for (let i = 0; i < res.data.data.length; i++) {
      news.push(res.data.data[i])
    }
  })
}

function sentEvent() {
  if (sentBar.value === '') {
    return
  }
  remoteMassage.value.push({
    time: '',
    text: marked.parse(sentBar.value),
    isMyself: true,
    username: JSON.parse(localStorage.getItem('user') || '').studentname,
    avatar: JSON.parse(localStorage.getItem('user') || '').avatar
  })
  content.value.$el.scrollToBottom(300)
  chats(sentBar.value).then((res) => {
    remoteMassage.value.push({
      time: '',
      text: marked.parse(res.data.result),
      isMyself: false,
      username: '小U',
      avatar: 'https://www.0030.store/chatImg.png'
    })
    content.value.$el.scrollToBottom(300)
  })
  sentBar.value = ''
}
</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/smartU"></ion-back-button>
        </ion-buttons>
        <IonTitle>小U助手</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content ref="content" :fullscreen="true" class="ion-padding">
      <div style="margin-top: 40px">
        <div v-for="(item , i) in remoteMassage" :key="i">
          <div style="margin-top: 1em" v-if="!item.isMyself">
            <div class="time">
              <ion-text
                  style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
                {{ item.time }}
              </ion-text>
            </div>
            <div class="text">
              <ion-avatar>
                <ion-text
                    style="position: absolute;top: -18px;font-size: 12px;width: 48px;display: block;text-align: center;">
                  {{ item.username }}
                </ion-text>
                <img style="width: 48px;height: 48px;" :src="item.avatar"
                     alt=""/>
              </ion-avatar>
              <div v-html="item.text"
                   style="display: inline-block;width: 75%;border-radius: 0 20px 20px 20px;background:#FFFFFF;padding-left: 1.5em;margin-left: 1.5em;margin-top: 1em;position: relative;overflow: visible;"
                   class="other">
              </div>
            </div>
          </div>
          <div v-if="item.isMyself" style="margin-top: 1em">
            <div class="time">
              <ion-text
                  style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
                {{ item.time }}
              </ion-text>
            </div>
            <div class="text">
              <div v-html="item.text"
                   style="display: inline-block;width: 80%;border-radius: 20px 0 20px 20px;background:#FFFFFF;padding-left: 1.5em;margin-right: 1.5em;margin-top: 1em;position: relative;"
                   class="my">
              </div>
              <ion-avatar>
                <ion-text
                    style="position: absolute;top: -18px;font-size: 12px;width: 48px;display: block;text-align: center;">
                  {{ item.username }}
                </ion-text>
                <img :src="item.avatar" style="width: 48px;height: 48px;"
                     alt=""/>
              </ion-avatar>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer style="background-color: #f7f7f7">
      <ion-toolbar>
        <ion-searchbar v-model="sentBar" :animated="true" inputmode="text" placeholder="请输入..." type="text"
                       :search-icon="blank"
                       enterkeyhint="send" style="width: 80%;margin-top: 15px;display: inline-block" :spellcheck="true"
                       @submit="sentEvent"
                       @keydown="(event:KeyboardEvent)=>{if(event.key=='Enter') {sentEvent()}}"></ion-searchbar>
        <ion-button
            style="width: 19%;display: inline-block;min-width: 0;min-height: 0;margin-top: 15px;margin-right: 0;margin-left: 0;vertical-align: top;--padding-bottom: 10px;--padding-top: 10px;--background: #5B78EC;--color: white"
            @click="sentEvent">
          <ion-icon slot="start" style="vertical-align: top;" :icon="sent"></ion-icon>
          发送
        </ion-button>

      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #F7F8F9
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

.segment-button-indicator.segment-button-indicator-animated {
  display: none;
}

ion-toolbar {
  --background: #FFFFFF;
}

.time {
  width: 100%;
  padding-bottom: 1em;
}

.text {
  display: flex;
  overflow: visible;
  position: relative;
}

.searchbar-search-icon {
  display: none;
}


.other:before {
  content: '';
  position: absolute;
  top: 0;
  left: -1em;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-top: 0.5em solid #FFFFFF;
  border-right: 0.5em solid #FFFFFF;
  border-bottom: 0.5em solid transparent;
}

.my:before {
  content: '';
  position: absolute;
  top: 0;
  right: -1em;
  width: 0;
  height: 0;
  border-left: 0.5em solid #FFFFFF;
  border-top: 0.5em solid #FFFFFF;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid transparent;
}
</style>