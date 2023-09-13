<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon,
  IonPage,
  IonText,
  IonImg,
  IonCardContent,
  IonModal,
  IonTitle, IonInput, IonItem, IonList, IonNote, IonAvatar, IonTextarea, IonRadio, IonRadioGroup, IonCardSubtitle,
  IonToolbar, IonSegmentButton, IonLabel, IonSegment, onIonViewDidEnter, onIonViewWillEnter, actionSheetController
} from "@ionic/vue";
import {
  ellipsisHorizontal,
  checkmarkOutline,
  star,
  starOutline,
  closeCircleOutline,
  closeOutline, cameraOutline, imagesOutline
} from "ionicons/icons";
import Player from "xgplayer";
import {onMounted, ref} from "vue";

const vs = ref();
const flag = ref(false);
const segmentValue = ref('lesson');
onMounted(() => {
  const vsp = new Player({
    el: vs.value,
    url: 'https://www.0030.store/5013.MP4',
    height: '30vh',
    width: '100%',
  })
})
const modal = ref()
const page = ref()

function dismiss() {
  modal.value.$el.dismiss();
}

const presentingElement = ref('')
onMounted(() => {
  presentingElement.value = page.value.$el;
})

async function canDismiss() {
  if (!flag.value) {
    const actionSheet = await actionSheetController.create({
      header: '还没保存确定要关闭吗?',
      buttons: [
        {
          text: '是的',
          role: 'confirm',
        },
        {
          text: '取消',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
    const {role} = await actionSheet.onWillDismiss();
    return role === 'confirm';
  }
  flag.value = false

  return true
}


function change(event: any) {
  segmentValue.value = event.detail.value;
}
</script>

<template>
  <ion-page ref="page">
    <ion-header class="ion-no-border">
      <ion-toolbar class="main">
        <div ref="vs">
        </div>
        <ion-buttons style="position: absolute;top: 20px;left: 20px">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/study/lesson/1"></ion-back-button>
        </ion-buttons>
        <ion-buttons style="position: absolute;top: 20px;right: 20px">
          <ion-button>
            <ion-icon color="light" :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-header>
      <ion-segment mode="md" :value="segmentValue" @ionChange="change" style="padding-bottom: 10px;--background: white">
        <ion-segment-button value="lesson">
          <ion-label><h3 style="font-weight: 900">共享笔记</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="comment">
          <ion-label><h3 style="font-weight: 900">我的笔记</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="test" @click="$router.push('/study/test/1')">
          <ion-label><h3 style="font-weight: 900">随堂练习</h3></ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content>
      <div v-if="segmentValue=='lesson'">
        <ion-card-content style="padding: 0">
          <ion-list>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <ion-item lines="none" class="ion-text-wrap">

              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img src="https://www.0030.store/favicon.png" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>爱学习的小鱼</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>
                  <ion-img src="https://www.0030.store/test.jpg"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </div>
      <ion-button slot="fixed" id="open-modal" expand="block" style="bottom: 0;right: 0;">发表笔记</ion-button>
      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header class="ion-no-border">
          <ion-toolbar style="--background: #F7F8F9">
            <ion-title>发表笔记</ion-title>
            <ion-buttons slot="start">
              <ion-button @click="dismiss()">
                <ion-icon style="color: black" :icon="closeOutline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding vice">
          <div style="border-radius: 10px;background: #FFFFFF">
            <ion-item style="--background: white;border-radius: 10px;padding: 20px 20px 0 20px">
              <ion-input type="text" placeholder="起个标题吧" :clear-input="true" style=""></ion-input>
            </ion-item>
            <ion-text style="padding-left: 20px;padding-top: 10px;--color:#858585;color: #858585;display: inline-block">
              <ion-icon :icon="cameraOutline" style="width: 26px;height: 26px;vertical-align: bottom;"></ion-icon>
              截图
            </ion-text>&nbsp;
            <ion-text style="padding-left: 10px;padding-top: 10px;--color:#858585;color: #858585">
              <ion-icon :icon="imagesOutline" style="width: 26px;height: 26px;vertical-align: bottom;"></ion-icon>
              上传图片
            </ion-text>&nbsp;
            <ion-textarea fill="solid" style="height: 400px;padding: 10px"
                          value="感谢，学到了很多。学习是一种持续的过程，它为我们打开了知识的大门，让我们不断成长和进步。通过学习，我们可以获取新的技能和知识，拓宽我们的视野，并且提升自己的能力。"></ion-textarea>
            <div style="text-align: right">
              <ion-radio-group value="custom-checked">
                <ion-radio value="custom" style="margin-right: 10px;font-size: 14px" mode="md"
                           aria-label="Custom checkbox" label-placement="end">
                  不分享
                </ion-radio>
                <ion-radio value="custom-checked" style="margin-right: 10px;font-size: 14px" mode="md"
                           aria-label="Custom checkbox that is checked" label-placement="end">
                  分享
                </ion-radio>
              </ion-radio-group>
            </div>
          </div>
          <div style="width: 100%;margin-top: 30px;">
            <ion-button @click="()=>{flag=true;dismiss()}"
                        style="width: 90%;margin: auto;--color: white;--background: #5B78EC;--background-activated: #475eb9"
                        :expand="'block'" fill="solid">发布
            </ion-button>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>

  </ion-page>
</template>

<style scoped>
ion-content.main::part(background) {
  background: url("@/img/background.png") no-repeat;
  background-size: contain;
  z-index: -2;
}

ion-content.vice::part(background) {
  background: #F7F8F9
}

ion-toolbar.main {
  --background: #000;
}

ion-radio::part(container) {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #ddd;
}

ion-radio::part(mark) {
  background: none;
  transition: none;
  transform: none;
  border-radius: 0;
}

ion-radio.radio-checked::part(container) {
  background: #35C1FC;
  border-color: transparent;
}

ion-radio.radio-checked::part(mark) {
  width: 6px;
  height: 10px;

  border-width: 0 2px 2px 0;
  border-style: solid;
  border-color: #fff;

  transform: rotate(45deg);
}
</style>
<style lang="scss">

</style>