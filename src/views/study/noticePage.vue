<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {getNotice} from "@/api/study";

interface item {
  noticeid: number,
  noticetitle: string,
  noticetype: number,
  noticecontent: string,
  status: number,
  createby: string,
  createtime: string,
  updateby: string,
  remark: string
}

const items = reactive<item[]>([]);
getNotice().then(res => {
  items.push(...res.data.data);
});

function isToday(date: Date) {
  return new Date().toDateString() == date.toDateString()
}
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>通知公告</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;" slot="fixed">
        <ion-item lines="full">
          <ion-label style="font-size: 14px;text-align: center;position: absolute;top: 0;width: 100%;left: 0">
            开启推送通知，重要消息不错过
          </ion-label>
          <ion-button class="topButton" slot="end" size="small" color="primary">去开启</ion-button>
        </ion-item>
      </div>
      <div style="margin-top: 40px">
        <ion-card style="margin: 10px " v-for="item in items" :key="item.noticeid"
                  @click="$router.push('/study/noticeDetail/'+item.noticeid)">
          <ion-card-content>
            <ion-list>
              <ion-item lines="none">
                <ion-thumbnail style="position: relative;background: #E0EFFF" slot="start">
                  <ion-icon v-if="item.noticetype==1"
                            style="width: 24px;height: 24px;margin: auto;display: block;margin-top: 16px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="menu-02" transform="translate(-2 -2)" style="isolation: isolate">
    <path id="union-1" d="M0,3V4A3,3,0,0,0,3,7H6A3,3,0,0,0,9,4V3A3,3,0,0,0,6,0H3A3,3,0,0,0,0,3ZM3,2H6A1,1,0,0,1,7,3V4A1,1,0,0,1,6,5H3A1,1,0,0,1,2,4V3A1,1,0,0,1,3,2Zm8,1V8a3,3,0,0,0,3,3h3a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3H14A3,3,0,0,0,11,3Zm3-1h3a1,1,0,0,1,1,1V8a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V3A1,1,0,0,1,14,2ZM0,12v5a3,3,0,0,0,3,3H6a3,3,0,0,0,3-3V12A3,3,0,0,0,6,9H3A3,3,0,0,0,0,12Zm3-1H6a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V12A1,1,0,0,1,3,11Zm8,5v1a3,3,0,0,0,3,3h3a3,3,0,0,0,3-3V16a3,3,0,0,0-3-3H14A3,3,0,0,0,11,16Zm3-1h3a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V16A1,1,0,0,1,14,15Z" transform="translate(2 2)" fill="#4257df" style="isolation: isolate"/>
  </g>
</svg>'></ion-icon>
                  <ion-icon v-if="item.noticetype==2"
                            style="width: 24px;height: 24px;margin: auto;display: block;margin-top: 16px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
  <path id="union-1" d="M1,0A1,1,0,0,0,0,1V19a1,1,0,0,0,2,0V13H15a1,1,0,0,0,.707-1.707L11.414,7l4.293-4.293A1,1,0,0,0,15,1H2A1,1,0,0,0,1,0ZM2,11V3H12.586L9.293,6.293a1,1,0,0,0,0,1.414L12.586,11Z" fill="#4257df" style="isolation: isolate"/>
</svg>
'></ion-icon>
                  <ion-icon v-if="item.noticetype==3"
                            style="width: 24px;height: 24px;margin: auto;display: block;margin-top: 16px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
  <path id="union-1" d="M0,3V17a3,3,0,0,0,3,3H13a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3ZM2,17a1,1,0,0,1,1-1H13a3,3,0,0,0,1-.171V17a1,1,0,0,1-1,1H3A1,1,0,0,1,2,17Zm11-3H3a3,3,0,0,0-1,.171V3A1,1,0,0,1,3,2H4V6a1,1,0,0,0,1.447.894L7,6.118l1.553.776A1,1,0,0,0,10,6V2h3a1,1,0,0,1,1,1V13A1,1,0,0,1,13,14ZM8,2V4.382l-.553-.276a1,1,0,0,0-.894,0L6,4.382V2Z" fill="#4257df" style="isolation: isolate"/>
</svg>
'></ion-icon>

                  <ion-badge style="position: absolute;top: -10%;right: -20%;" color="danger">&nbsp;</ion-badge>
                </ion-thumbnail>
                <ion-label>
                  <h2 style="line-height: 200%">
                    {{ item.noticetype == 1 ? '系统消息' : item.noticetype == 2 ? '信息中心' : '校园通知' }}</h2>
                  <p>{{ item.noticetitle }}</p>
                </ion-label>
              </ion-item>
            </ion-list>
            <ion-label style="font-size: 12px;color: #999999;position: absolute;top: 25px;right: 20px;">
              <span>{{ isToday(new Date(item.createtime)) ? item.createtime.split(' ')[1] : item.createtime }}</span>
              <span style="display: block;text-align: right">{{ item.createby }}</span>
            </ion-label>

          </ion-card-content>
        </ion-card>

      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: #f1f1f1;
}

.item-lines-full {
  --border-width: 0.55px 0px 0px 0px;
}

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-button.topButton {
  --ion-color-base: #E3E7FF !important;
  --ion-color-contrast: #4257DF !important;
}
</style>