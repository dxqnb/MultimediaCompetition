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
  IonAvatar,
  IonItemDivider,
  IonItemGroup,
  IonButton, toastController, useIonRouter,
} from "@ionic/vue";
import {
  createOutline,
  ellipsisHorizontal, helpCircleOutline, helpCircleSharp,
  lockClosedOutline, logOutOutline,
  navigateOutline, notificationsOutline,
  phonePortraitOutline,
  readerOutline, removeCircleOutline
} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {NativeBiometric} from "capacitor-native-biometric";

const chevronForwardOutline = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="30" d="M184 112l144 144-144 144" class="ionicon-fill-none"></path></svg>');
const icon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14.494" height="16.47" viewBox="0 0 14.494 16.47">\n' +
    '  <g id="组_311" data-name="组 311" transform="translate(0)">\n' +
    '    <path id="路径_72" data-name="路径 72" d="M331.514,597.333v.659a.659.659,0,0,1-.659.659h-5.929a.659.659,0,0,1-.659-.659v-.659Z" transform="translate(-320.643 -587.451)" fill="#515151"/>\n' +
    '    <path id="路径_73" data-name="路径 73" d="M145.756,85.333a.659.659,0,0,1,.049,1.316l-.049,0h-7.906v13.835h11.858V90.7a.659.659,0,0,1,1.316-.049l0,.049v9.788a1.318,1.318,0,0,1-1.252,1.316l-.066,0H137.851a1.318,1.318,0,0,1-1.316-1.252l0-.066V86.651a1.318,1.318,0,0,1,1.252-1.316l.066,0Z" transform="translate(-136.533 -85.333)" fill="#515151"/>\n' +
    '    <path id="路径_74" data-name="路径 74" d="M467.9,102.348a.659.659,0,0,1,.948.913l-.04.041-6.749,6.42a.659.659,0,0,1-.947-.913l.04-.041Z" transform="translate(-454.685 -101.84)" fill="#515151"/>\n' +
    '  </g>\n' +
    '</svg>\n');
const username = JSON.parse(localStorage.getItem('user') || '').studentname
const studentNumber = JSON.parse(localStorage.getItem('user') || '').username
const studentAvatar = JSON.parse(localStorage.getItem('user') || '').avatar
const router = useIonRouter()
const isRe = localStorage.getItem('isRegister')

async function closed() {
  localStorage.setItem('isRegister', 'false')
  await NativeBiometric.deleteCredentials({server: 'www.dxxx.live'})
  const toast = await toastController.create({
    message: '关闭成功'
  })
  await toast.present().then(() => {
    setTimeout(() => {
      toast.dismiss()
    }, 1000)
  })
}

async function logout() {
  localStorage.setItem('isLogin', 'false')
  const toast = await toastController.create({
    message: '修改成功'
  })
  await toast.present().then(() => {
    setTimeout(() => {
      toast.dismiss()
    }, 1000)
  })
  router.push('/')
}
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>设置</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true">
      <ion-item-group style="border-radius: 10px">
        <ion-item-divider style="--background: white;border-radius: 0;">
          <ion-label style="color: #323232;font-size: 20px;margin-top: 16px">个人信息</ion-label>
        </ion-item-divider>
        <ion-item lines="none" style="--border-radius: 0">
          <ion-avatar slot="start" style="margin: 14px;width: 52px;height: 52px;"><img
              :src="studentAvatar" alt=""></ion-avatar>
          <div>
            <ion-label style="display: block;color: #14121E;font-weight: bolder">{{ username }}</ion-label>
            <ion-label style="display: block;color: #8492A2;font-size: 12px;font-weight: bold">{{
                studentNumber
              }}
            </ion-label>
          </div>
          <ion-icon slot="end" :icon="createOutline"></ion-icon>
        </ion-item>
      </ion-item-group>
      <ion-item-group style="border-radius: 10px">
        <ion-item-divider>
          <ion-label style="color: black;font-size: 14px;vertical-align: bottom">账号</ion-label>
        </ion-item-divider>
        <ion-item lines="none" style="--border-radius: 10px 10px 0 0">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="icon"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">编辑个人信息</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
        <ion-item lines="none" style="">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="navigateOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">定位</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
        <ion-item lines="none" style="">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="phonePortraitOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">绑定手机</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
        <ion-item lines="none" style="--border-radius: 0 0 10px 10px">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="lockClosedOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">隐私</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-item-group>
      <ion-item-group style="border-radius: 10px">
        <ion-item-divider>
          <ion-label style="color: black;font-size: 14px;vertical-align: bottom">通用</ion-label>
        </ion-item-divider>
        <ion-item lines="none" style="--border-radius: 10px">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="notificationsOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">通知设置</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-item-group>
      <ion-item-group style="border-radius: 10px">
        <ion-item-divider>
          <ion-label style="color: black;font-size: 14px;vertical-align: bottom">关于</ion-label>
        </ion-item-divider>
        <ion-item lines="none" style="--border-radius: 10px">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="helpCircleOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">反馈与帮助</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-item-group>
      <ion-item-group style="border-radius: 10px">
        <ion-item lines="none" style="--border-radius: 10px 10px 0 0" @click="closed()" v-if="isRe=='true'">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="removeCircleOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">关闭生物识别登录</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
        <ion-item lines="none" style="--border-radius: 0 0 10px 10px" @click="logout()">
          <ion-icon slot="start" style="margin: 14px;width: 20px;height: 20px;" :icon="logOutOutline"></ion-icon>
          <ion-label style="font-weight: bold;font-size: 15px">退出登录</ion-label>
          <ion-icon slot="end" style="margin: 16px;width: 20px;height: 20px;" :icon="chevronForwardOutline"></ion-icon>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: #F7F8F9;
}

/*.item-lines-full {
  --border-width: 0.55px 0px 0px 0px;
}*/

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-item {
  --background: #FFFFFF;
}

ion-item-divider {
  --background: #F7F8F9;
}

ion-item-group {
  margin-top: 20px;
}
</style>