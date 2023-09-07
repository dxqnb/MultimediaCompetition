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
  IonTitle, createAnimation, IonBackButton, IonButtons
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
import {login} from "@/api/user";
const num=ref('2021080418');
const pw=ref('');
function doLogin(){
  login({userName:num,password:pw}).then((res)=>{
    console.log(res)
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
          <ion-text style="color: #323232;font-size: 19px;margin: 20px 10px;display: block;font-weight: 500">登录
          </ion-text>
          <form action="" method="get">
            <ion-label style="margin: 20px 0 10px 10px;display: block">用户名</ion-label>
            <ion-input fill="outline" inputmode="numeric" :autofocus="true" enterkeyhint="next" type="number"
                       shape="round" placeholder="输入你的学号" mode="md" v-model="num"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
              <!--              <div slot="label">Email-->
              <!--                <ion-text color="danger">(Required)</ion-text>-->
              <!--              </div>-->
            </ion-input>
            <ion-label style="margin: 20px 0 10px 10px;display: block">密码</ion-label>
            <ion-input fill="outline" inputmode="text" :autofocus="false" enterkeyhint="send" type="password"
                       shape="round" placeholder="输入你的密码" mode="md" value="" v-model="pw"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
              <!--              <div slot="label">Email-->
              <!--                <ion-text color="danger">(Required)</ion-text>-->
              <!--              </div>-->
            </ion-input>
            <ion-button type="submit"
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