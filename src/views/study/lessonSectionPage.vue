<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonImg,
  IonCardContent,
  IonModal,
  IonTitle,
  IonInput,
  IonItem,
  IonList,
  IonNote,
  IonAvatar,
  IonTextarea,
  IonRadio,
  IonRadioGroup,
  IonCardSubtitle,
  IonToolbar,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  onIonViewDidEnter,
  onIonViewWillEnter,
  actionSheetController,
  toastController
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
import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {
  addKcNote,
  addZyKcNote, delKcNote, delZyKcNote, getKcNoteList,
  getKcXj, getMyKcNoteList,
  getMyZyKcNoteList,
  getZyKcNoteList,
  getZyKcZj
} from "@/api/study";
import {Camera, CameraResultType} from "@capacitor/camera";

const route = useRoute()
const type = route.params.id.includes('zykc') ? 'zykc' : 'kc'
const id = route.params.id.toString().split('kc')[1]
const vs = ref();
const flag = ref(false);
const segmentValue = ref('notice');
const userid = Number(JSON.parse(localStorage.getItem('user') || '').id)

interface notice {
  id: number,
  studentname: string,
  avatar: string,
  kcxjid: number,
  img: string,
  content: string,
  open: number,
  likecount: number,
  createtime: string,
  title: string,
  userid?: string,
  iszy?: string
}

const noticeList = reactive<notice[]>([])
const myNoticeList = reactive<notice[]>([])
const data = ref({
  id: 0,
  szyid: 0,
  xiaojie: "",
  title: "",
  content: "",
  stitile: "",
  video: "",
  img: "",
  createby: "",
  createtime: "",
  iszy: ""
})
onMounted(() => {
  if (type == 'zykc') {
    getZyKcZj(id, userid).then((res) => {
      data.value = res.data.data[0]
      const vsp = new Player({
        el: vs.value,
        url: data.value.video,
        height: '30vh',
        width: '100%',
      })
    })
    getZyKcNoteList(id).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        noticeList.push(res.data.data[i])
      }
    })
    getMyZyKcNoteList(id, userid).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        myNoticeList.push(res.data.data[i])
      }
    })
  } else {
    getKcXj(id, userid).then((res) => {
      data.value = res.data.data[0]
      const vsp = new Player({
        el: vs.value,
        url: data.value.video,
        height: '30vh',
        width: '100%',
      })
    })
    getKcNoteList(id).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        noticeList.push(res.data.data[i])
      }
    })
    getMyKcNoteList(id, userid).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        myNoticeList.push(res.data.data[i])
      }
    })
  }

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

interface image {
  base64?: string,
  file: File,
}

function base64ToFile(base64: string | undefined, fileName: string) {
  if (base64 == undefined) return;
  let arr = base64.split(",");
  // let tmp = arr[0].match(/:(.*?);/)
  // console.log(tmp)
  // if (tmp == null) return
  // let mime = tmp[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {type: 'image'});
}

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl
  });
  let dataUrl = image.dataUrl == undefined ? '.' : image.dataUrl
  let temp = base64ToFile(image.dataUrl, imageList.length.toString(6) + '.' + dataUrl.split('/')[1].split(';')[0])
  if (temp == null) return
  imageList.push({
    base64: image.dataUrl,
    file: temp,
  })
  return;
}

const textarea = ref('')
const radio = ref('0')
const imageList = reactive<image[]>([])

function post() {
  let a = {
    userid: userid,
    kcxjid: id,
    content: textarea.value,
    img: '',
    open: radio.value,
    file: imageList.length == 0 ? undefined : imageList[0].file,
  }
  console.log(a)
  flag.value = true;
  if (type == 'zykc') {
    addZyKcNote(a).then(async (res) => {
      if (res.data.code == 0) {
        const toast = await toastController.create({
          message: '发布成功'
        })
        await toast.present().then(() => {
          setTimeout(() => {
            toast.dismiss()
          }, 1000)
        })
      }
      noticeList.splice(0, noticeList.length);
      myNoticeList.splice(0, myNoticeList.length);
      getZyKcNoteList(id).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          noticeList.push(res.data.data[i])
        }
      })
      getMyZyKcNoteList(id, userid).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          myNoticeList.push(res.data.data[i])
        }

      })
    })
  } else {
    addKcNote(a).then(async (res) => {
      if (res.data.code == 0) {
        const toast = await toastController.create({
          message: '发布成功'
        })
        await toast.present().then(() => {
          setTimeout(() => {
            toast.dismiss()
          }, 1000)
        })
      }
      noticeList.splice(0, noticeList.length);
      myNoticeList.splice(0, myNoticeList.length);
      getKcNoteList(id).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          noticeList.push(res.data.data[i])
        }
      })
      getMyKcNoteList(id, userid).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          myNoticeList.push(res.data.data[i])
        }
      })
    })
  }
  dismiss();
}

function delPic(idP: number) {
  imageList.splice(idP, 1)
}

function delNotice(idN: number) {
  if (type == 'zykc') {
    delZyKcNote(idN).then(async (res) => {
      if (res.data.code == 0) {
        const toast = await toastController.create({
          message: '删除成功'
        })
        await toast.present().then(() => {
          setTimeout(() => {
            toast.dismiss()
          }, 1000)
        })
      }
      noticeList.splice(0, noticeList.length);
      myNoticeList.splice(0, myNoticeList.length);
      getZyKcNoteList(id).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          noticeList.push(res.data.data[i])
        }
      })
      getMyZyKcNoteList(id, userid).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          myNoticeList.push(res.data.data[i])
        }
      })
    })
  } else {
    delKcNote(idN).then(async (res) => {
      if (res.data.code == 0) {
        const toast = await toastController.create({
          message: '发布成功'
        })
        await toast.present().then(() => {
          setTimeout(() => {
            toast.dismiss()
          }, 1000)
        })
      }
      noticeList.splice(0, noticeList.length);
      myNoticeList.splice(0, myNoticeList.length);
      getKcNoteList(id).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          noticeList.push(res.data.data[i])
        }
      })
      getMyKcNoteList(id, userid).then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          myNoticeList.push(res.data.data[i])
        }
      })
    })
  }
}

</script>

<template>
  <ion-page ref="page">
    <ion-header class="ion-no-border">
      <ion-toolbar class="main">
        <div ref="vs">
        </div>
        <ion-buttons style="position: absolute;top: 20px;left: 20px">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/tabs/study"></ion-back-button>
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
        <ion-segment-button value="notice">
          <ion-label><h3 style="font-weight: 900">共享笔记</h3></ion-label>
        </ion-segment-button>
        <ion-segment-button value="myNotice">
          <ion-label><h3 style="font-weight: 900">我的笔记</h3></ion-label>
        </ion-segment-button>
        <!--        <ion-segment-button value="test" @click="$router.push('/study/test/1')">-->
        <!--          <ion-label><h3 style="font-weight: 900">随堂练习</h3></ion-label>-->
        <!--        </ion-segment-button>-->
      </ion-segment>
    </ion-header>
    <ion-content>
      <div v-if="segmentValue=='notice'">
        <ion-card-content style="padding: 0">
          <ion-list style="margin-bottom: 50px">
            <ion-item lines="full" class="ion-text-wrap" v-for="i in noticeList">
              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img :src="i.avatar" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>{{ i.studentname }}</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">{{ i.createtime }}</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p v-html="i.content">
                  </p></ion-text>
                  <ion-img v-if="i.img != undefined && i.img != ''" :src="i.img"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
            </ion-item>
            <!--            <ion-item lines="none" class="ion-text-wrap">-->

            <!--              <div class="ion-padding-top ion-margin-top">-->
            <!--                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">-->
            <!--                  <img src="https://www.0030.store/favicon.png" alt="">-->
            <!--                </ion-avatar>-->
            <!--                <div style="padding-left: 50px">-->
            <!--                  <ion-text><h2>爱学习的小鱼</h2></ion-text>-->
            <!--                  <ion-text color="medium" style="font-size: 10px">五个小时前</ion-text>-->
            <!--                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p>-->
            <!--                    真的很喜欢这个老师介绍的东西，都是满满的干货！！</p></ion-text>-->
            <!--                  <ion-img src="https://www.0030.store/test.jpg"-->
            <!--                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </ion-item>-->
          </ion-list>
        </ion-card-content>
      </div>
      <div v-if="segmentValue=='myNotice'">
        <ion-card-content style="padding: 0">
          <ion-button id="open-modal" expand="block" style="--background: #5676F1;--color: white">发表笔记</ion-button>

          <ion-list style="margin-bottom: 50px">
            <ion-item lines="full" class="ion-text-wrap" v-for="i in myNoticeList">
              <div class="ion-padding-top ion-margin-top">
                <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                  <img :src="i.avatar" alt="">
                </ion-avatar>
                <div style="padding-left: 50px">
                  <ion-text><h2>{{ i.studentname }}</h2></ion-text>
                  <ion-text color="medium" style="font-size: 10px">{{ i.createtime }}</ion-text>
                  <ion-text style="display: block;padding: 10px 0 4px 0;"><p v-html="i.content">
                  </p></ion-text>
                  <ion-img v-if="i.img != undefined && i.img != ''" :src="i.img"
                           style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                </div>
              </div>
              <div slot="end">
                <ion-text style="color: #9F9F9F;font-size: 12px;display: block;text-align: center">{{
                    i.open == 1 ? '公开' : '未公开'
                  }}
                </ion-text>
                <ion-button expand="block" @click="delNotice(i.id)" style="">删除</ion-button>
              </div>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </div>

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
              <ion-icon :icon="imagesOutline" style="width: 26px;height: 26px;vertical-align: bottom;"
                        @click="takePicture()"></ion-icon>
              上传图片
            </ion-text>&nbsp;
            <ion-textarea fill="solid" style="height: 400px;padding: 10px" v-model="textarea"></ion-textarea>
            <div style="display: flex;justify-content: left">
              <div style="margin: 4px;width: 30%;border-radius: 10px;position: relative;margin: 4px;width: 30%;"
                   v-for="(item,i) in imageList">
                <ion-img style="width: 100%;border-radius: 10px;overflow:hidden;"
                         :src="item.base64"></ion-img>
                <ion-icon style="position:absolute; top: -8px;left: -8px;color: #7B73FF" :icon="closeCircleOutline"
                          @click="delPic(i)"></ion-icon>
              </div>
            </div>
            <div style="text-align: right">
              <ion-radio-group v-model="radio">
                <ion-radio value="0" style="margin-right: 10px;font-size: 14px" mode="md"
                           aria-label="Custom checkbox" label-placement="end">
                  不分享
                </ion-radio>
                <ion-radio value="1" style="margin-right: 10px;font-size: 14px" mode="md"
                           aria-label="Custom checkbox that is checked" label-placement="end">
                  分享
                </ion-radio>
              </ion-radio-group>
            </div>
          </div>
          <div style="width: 100%;margin-top: 30px;">
            <ion-button @click="post"
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