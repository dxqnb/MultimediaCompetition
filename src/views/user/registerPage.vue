<script setup lang="ts">
import {
  IonRadio,
  IonButton,
  IonRadioGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonList,
  IonInput,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonTitle, createAnimation, IonBackButton, IonButtons, toastController, useIonRouter
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  chevronForwardOutline,
  star,
  starOutline,
  addOutline,
  chevronDownOutline, phonePortraitOutline, settingsOutline, notificationsOutline
} from "ionicons/icons";
import {onMounted, ref} from "vue";
import {firstUpPwd, getUserDetail} from "@/api/user";

const router = useIonRouter()
const phone = ref('')
const username = ref('')
const password = ref('')
const rePassword = ref('')
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id
getUserDetail(userid).then((res) => {
  phone.value = res.data.data[0].phonenumber
  username.value = res.data.data[0].username
})

function post() {
  firstUpPwd(username.value, password.value, rePassword.value).then(async (res) => {
    const toast = await toastController.create({
      message: '修改成功'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
    router.push('/')
  })
}
</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button style="font-size: 15px" color="light">
            帮助
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div style="height: 18%;position:relative;">
        <div style="color: white;font-size: 30px;width: 50%;margin: 30px 0 0 0;font-weight: bold">
          <ion-text style="display:block;text-align: center">欢迎来到</ion-text>
          <ion-text style="display:block;text-align: center">校园智U</ion-text>
        </div>
        <img
            style="width: 227px;height: 362px;position:absolute;top: -100px;right: -50px;object-fit: contain;transform: rotate(-21deg)"
            src="@/img/小U-02.png" alt=""/>
      </div>
      <ion-card style="height: 82%;margin: 0;--background: white;border-radius: 30px">
        <ion-card-content>
          <ion-text style="color: #323232;font-size: 19px;margin: 20px 10px;display: block;font-weight: 500">设置帐号密码
          </ion-text>
          <form action="" method="get">
            <ion-label style="margin: 20px 0 10px 10px;display: block">学号</ion-label>
            <ion-input disabled fill="outline" inputmode="numeric" :autofocus="true" enterkeyhint="next" type="number"
                       shape="round" placeholder="输入你的学号" mode="md" v-model="username"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
            </ion-input>
<!--            <ion-label style="margin: 20px 0 10px 10px;display: block">手机号</ion-label>-->
<!--            <ion-input disabled fill="outline" inputmode="numeric" :autofocus="true" enterkeyhint="next" type="tel"-->
<!--                       shape="round" placeholder="输入你的手机号" mode="md" :minlength="11" :maxlength="11"-->
<!--                       v-model="phone"-->
<!--                       style="&#45;&#45;background: #F1F1F1;&#45;&#45;border-radius:16px;&#45;&#45;border-color:#F1F1F1;min-height: 44px;font-size: 14px">-->
<!--            </ion-input>-->
            <ion-label style="margin: 20px 0 10px 10px;display: block">修改密码</ion-label>
            <ion-input fill="outline" inputmode="text" :autofocus="false" enterkeyhint="next" type="password"
                       shape="round" placeholder="输入你的密码" mode="md" v-model="password"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
            </ion-input>
            <ion-label style="margin: 20px 0 10px 10px;display: block">确认密码</ion-label>
            <ion-input fill="outline" inputmode="text" v-model="rePassword" :autofocus="false" enterkeyhint="send"
                       type="password"
                       shape="round" placeholder="输入你的密码" mode="md"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
            </ion-input>
            <ion-button @click="post"
                        style="--color: #fff;font-size: 13px;width: 100%;margin: 30px auto;display:block;--background: #5676F1;min-height: 47px">
              登录
            </ion-button>
            <div style="margin: 10px auto;width: 226px;">
              <ion-radio-group :allow-empty-selection="true" value="false">
                <ion-radio style="font-size: 9px;" mode="md" value="true" labelPlacement="end">
                  <ion-text style="color: #515151">我已阅读并同意app</ion-text>
                  <ion-text style="color: #5E88F8">《用户协议》</ion-text>
                  <ion-text style="color: #515151">和</ion-text>
                  <ion-text style="color: #5E88F8">《隐私政策》</ion-text>
                </ion-radio>
              </ion-radio-group>
            </div>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/login2.png") no-repeat top left;
  background-size: cover;
}


ion-toolbar {
  --background: transparent;
}

ion-radio::part(container) {
  width: 13px;
  height: 13px;
}
</style>