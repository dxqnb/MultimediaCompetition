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
  IonCard,
  IonChip,
  IonItemGroup,
  IonItemDivider,
  IonItem,
  IonList,
  IonNote,
  IonAvatar,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonToolbar,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  onIonViewDidEnter,
  onIonViewWillEnter,
  IonInput,
  IonTitle,
  IonModal, IonRadio, IonTextarea, IonRadioGroup, actionSheetController, toastController
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  checkmarkOutline,
  star,
  starOutline,
  closeOutline,
  cameraOutline, imagesOutline, closeCircleOutline
} from "ionicons/icons";
import Player from "xgplayer";
import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {
  addKcNote, addKcPj,
  addZyKcNote, addZyKcPj,
  getKc,
  getKcList, getKcNoteList, getKcPjList,
  getKcXj, getMyKcNoteList, getMyZyKcNoteList,
  getTestKcTaoList,
  getTestZyTaoList,
  getZyKc,
  getZyKcList, getZyKcNoteList, getZyKcPjList,
  getZyKcZj
} from "@/api/study";
import {Camera, CameraResultType} from "@capacitor/camera";

interface comment {
  id: number,
  userid: number,
  kcid: number,
  studentname: string,
  avatar: string,
  star: string,
  content: string,
  createtime: string,
  img?: string
}

const vs = ref();
// const item = ref({
//   id: 0,
//   szyid: 0,
//   lable: "",
//   xiaojie: "",
//   title: "",
//   content: "",
//   stitile: "",
//   video: "",
//   img: "",
//   createby: ""
// });
const item = ref({
  id: 0,
  zyid: 0,
  deptname: "",
  title: "",
  img: "",
  introduction: "",
  link: "",
  createby: "",
  createtime: "",
  iszy: ""
});
const route = useRoute()
const scroll = ref(false);
const content = ref();
const scrollEvents = ref(true);
const fixed = ref();
const divHeight = ref("76vh");
const colors = ['#000', 'purple', 'orange', 'indigo', 'red'];
const rating = ref(4.5);
const segmentValue = ref('lesson');
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id
var vsp: Player;
const flag = ref(false);
const modal = ref()
const page = ref()
const textarea = ref('')
const postRating = ref(0)

function dismiss() {
  modal.value.$el.dismiss();
}

const presentingElement = ref('')

interface section {
  id: number,
  sid?: number,
  szyid?: number,
  lable: string,
  xiaojie: string,
  title: string,
  content: string,
  stitile: string,
  video: string,
  img: string,
  createby: string,
  createtime: string
}

interface test {
  id: number,
  tname: string,
  kcid: number,
  createby: string,
  createtime: string
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

const imageList = reactive<image[]>([])

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


function delPic(idP: number) {
  imageList.splice(idP, 1)
}

const sectionItem = reactive<section[]>([])
const commentItem = reactive<comment[]>([])
const testItem = reactive<test[]>([])
const average = ref(0.0)
onMounted(() => {
  setTimeout(function () {
    // content.value.$el.scrollToPoint(0, fixed.value.offsetHeight, 500);
    divHeight.value = window.innerHeight - fixed.value.getBoundingClientRect().bottom - 16 + "px";
    console.log(divHeight.value)
  }, 1000);
  vsp = new Player({
    el: vs.value,
    url: "",
    height: '20vh',
    width: '92%',
  })
  presentingElement.value = page.value.$el;

})

if (route.path.includes('zykc')) {
  getZyKc(<string>route.params.id).then((res) => {
    item.value = res.data.data[0]
    vsp.switchURL(item.value.link)
  })
  getZyKcList(<string>route.params.id, userid).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      sectionItem.push(res.data.data[i])
    }
  })
  getTestZyTaoList(<string>route.params.id).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      testItem.push(res.data.data[i])
    }
  })
  getZyKcPjList(<string>route.params.id).then((res) => {
    if (res.data.data.length == 0) return
    let count = 0
    for (let i = 0; i < res.data.data.length; i++) {
      commentItem.push(res.data.data[i])
      count += Number(commentItem[i].star)
      console.log(Number(commentItem[i].star))
    }
    average.value = Number((count / commentItem.length).toFixed(1))
  })

} else {
  getKc(<string>route.params.id).then((res) => {
    item.value = res.data.data[0]
    vsp.switchURL(item.value.link)
  })
  getKcList(<string>route.params.id, userid).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      sectionItem.push(res.data.data[i])
    }
  })
  getTestKcTaoList(<string>route.params.id).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      testItem.push(res.data.data[i])
    }
  })
  getKcPjList(<string>route.params.id).then((res) => {
    if (res.data.data.length == 0) return
    let count = 0
    for (let i = 0; i < res.data.data.length; i++) {
      commentItem.push(res.data.data[i])
      count += Number(commentItem[i].star)
      console.log(Number(commentItem[i].star))
    }
    average.value = Number((count / commentItem.length).toFixed(1))
  })
}

function post() {
  let a = {
    userid: userid,
    kcid: route.params.id,
    content: textarea.value,
    img: '',
    star: postRating.value,
    // open: radio.value,
    file: imageList.length == 0 ? undefined : imageList[0].file,
  }
  console.log(a)
  flag.value = true;
  if (route.path.includes('zykc')) {
    addZyKcPj(a).then(async (res) => {
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
      commentItem.splice(0, commentItem.length);
      getZyKcPjList(<string>route.params.id).then((res) => {
        if (res.data.data.length == 0) return
        let count = 0
        for (let i = 0; i < res.data.data.length; i++) {
          commentItem.push(res.data.data[i])
          count += Number(commentItem[i].star)
          console.log(Number(commentItem[i].star))
        }
        average.value = Number((count / commentItem.length).toFixed(1))
      })
    })
  } else {
    addKcPj(a).then(async (res) => {
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
      commentItem.splice(0, commentItem.length);
      getKcPjList(<string>route.params.id).then((res) => {
        if (res.data.data.length == 0) return
        let count = 0
        for (let i = 0; i < res.data.data.length; i++) {
          commentItem.push(res.data.data[i])
          count += Number(commentItem[i].star)
          console.log(Number(commentItem[i].star))
        }
        average.value = Number((count / commentItem.length).toFixed(1))
      })
    })
  }
  dismiss();
}

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
    await actionSheet.present();
    const {role} = await actionSheet.onWillDismiss();
    return role === 'confirm';
  }
  flag.value = false
  return true
}

function onScroll(event: any) {
  // const scrollElement = event.target.$el;
  // const scrollTop = scrollElement.scrollTop;
  // console.log(event.target.detail.scrollTop)
  if (event.target.detail.scrollTop > 100) {
    scrollEvents.value = false;
    content.value.$el.scrollToBottom(500);
    setTimeout(function () {
      scrollEvents.value = true;
    }, 550)
    scroll.value = true;
  } else {
    scrollEvents.value = false;
    content.value.$el.scrollToTop(500);
    // setTimeout(function () {
    scrollEvents.value = true;
    // }, 550)
    scroll.value = false;
  }
  // console.log(event);
}

function change(event: any) {
  segmentValue.value = event.detail.value;
}
</script>

<template>
  <ion-page ref="page" class="page">
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/study/lessons"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button color="light">
            <ion-icon :icon="ellipsisHorizontalOutline"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="main" style="z-index: -2;" :scroll-events="scrollEvents" @ionScrollEnd="onScroll" ref="content"
                 :fullscreen="true">
      <div slot="fixed" style="width: 96vw;left: 0;z-index: -1;left: 2vw;">
        <div ref="fixed" style="margin: 0px 18px 30px 18px;">
          <ion-text><h2 style="color: #FFFFFF;font-weight: 900">{{ item.title }}</h2></ion-text>
          <ion-chip
              style="color: white;--background: rgba(255,255,255,0.23);border-radius: 8px;font-size: 12px;height: 26px;">
            {{ item.createby }}
          </ion-chip>
        </div>
        <div ref="vs" style="border-radius: 10px;margin: 0 auto"></div>
      </div>
      <div style="height: 310px;width: 100%;" @click="vsp.isPlaying?vsp.pause():vsp.play()"></div>
      <ion-card :style="`z-index: 1000;margin: 0;height:`+divHeight">
        <ion-card-content style="padding-top: 0;">
          <ion-segment mode="md" :value="segmentValue" @ionChange="change" style="width: 100%;padding-bottom: 10px;">
            <ion-segment-button value="lesson">
              <ion-label><h3 style="font-weight: 900">课程</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="test">
              <ion-label><h3 style="font-weight: 900">习题</h3></ion-label>
            </ion-segment-button>
            <ion-segment-button value="comment">
              <ion-label><h3 style="font-weight: 900">评价</h3></ion-label>
            </ion-segment-button>

          </ion-segment>
          <ion-content :scroll-y="scroll" :style="`height:`+ divHeight">
            <ion-list v-if="segmentValue=='lesson'" style="margin-bottom: 120px">
              <ion-item-group>
                <!--                <ion-item-divider :sticky="true" style="border-radius: 5px;height: 46px;">-->
                <!--                  <ion-label>初识Java</ion-label>-->
                <!--                </ion-item-divider>-->
                <ion-item lines="full" v-for="i in sectionItem"
                          @click="route.path.includes('zykc')?$router.push('/study/section/'+'zykc'+i.id):$router.push('/study/section/'+'kc'+i.id)">
                  <ion-note slot="start" mode="md">视频</ion-note>
                  <ion-label>{{ i.xiaojie }}&nbsp;{{ i.title }}</ion-label>
<!--                  <ion-icon size="small" color="primary" :icon="checkmarkOutline" slot="end"></ion-icon>-->
                </ion-item>
              </ion-item-group>
            </ion-list>
            <ion-list v-if="segmentValue=='test'" style="margin-bottom: 120px">
              <ion-item-group>
                <ion-item lines="full" v-for="i in testItem"
                          @click="route.path.includes('zykc')?$router.push('/study/test/'+'zykc'+i.id+'/'+i.tname):$router.push('/study/test/'+'kc'+i.id+'/'+i.tname)">
                  <ion-note slot="start" mode="md">测试</ion-note>
                  <ion-label>{{ i.tname }}</ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
            <div v-if="segmentValue=='comment'" style="margin-top: 14px;margin-bottom: 120px">
              <ion-card class="comment">
                <ion-card-content>
                  <div>
                    <pre style="display: inline-block;margin: 5px 8px;width: 50px;color: #ff9900">{{ average }}分</pre>
                    <v-rating
                        color="#000"
                        v-model="average"
                        :hover="true"
                        half-increments
                        :disabled="true"
                    >
                      <template v-slot:item="props:any">
                        <ion-icon color="primary" size="large" :icon=" props.isFilled ? star : starOutline "
                                  @click="()=>{props.onClick;/*console.log(props)*/}"></ion-icon>
                      </template>
                    </v-rating>
                  </div>
                  <div style="display: flex;justify-content: space-between;">
                    <ion-text color="medium" style="font-size: 10px">有{{ commentItem.length }}人评价了这个课</ion-text>
                    <ion-button id="open-modal" style="min-height: auto;height: 20px;font-size: 12px;--color: white">
                      发表笔记
                    </ion-button>
                  </div>
                </ion-card-content>

              </ion-card>
              <ion-card class="comment">
                <ion-card-content style="padding: 0">
                  <ion-list>
                    <ion-item lines="none" class="ion-text-wrap" v-for="(item,index) in commentItem">
                      <div :style="index!=commentItem.length-1?'width: 100px;':'width: 50px'"></div>
                      <div class="ion-padding-top ion-margin-top">
                        <ion-avatar style="position: absolute;top: 30px;left: 0;width: 40px;height: 40px;">
                          <img :src="item.avatar" alt="">
                        </ion-avatar>
                        <ion-text ><h2>{{ item.studentname }}</h2></ion-text>
                        <ion-text color="medium" style="font-size: 10px">{{ item.createtime }}</ion-text>
                        <v-rating
                            :disabled="true"
                            color="#000"
                            :model-value="item.star"
                            :hover="true"
                            half-increments
                            style="position: absolute;right: 20px;top: 35px;"
                        >
                          <template v-slot:item="props:any">
                            <ion-icon color="primary" size="small" :icon=" props.isFilled ? star : starOutline "
                            ></ion-icon>
                          </template>
                        </v-rating>
                        <ion-text style="display: block;padding: 10px 0 4px 0;"><p>
                          {{ item.content }}</p></ion-text>
                        <ion-img :src="item.img" v-if="item.img != undefined && item.img != ''"
                                 style="width: 95%;height: 180px;margin: 20px auto;border-radius: 10px;overflow: hidden;object-fit: cover;"></ion-img>
                      </div>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>

              <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss"
                         :presenting-element="presentingElement">
                <ion-header class="ion-no-border">
                  <ion-toolbar style="--background: #F7F8F9">
                    <ion-title>发表评价</ion-title>
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
                      <pre style="display: inline-block;margin: 5px 8px;width: 50px;color: #ff9900">{{
                          postRating
                        }}分</pre>
                      <v-rating
                          color="#000"
                          v-model="postRating"
                          :hover="true"
                          half-increments
                      >
                        <template v-slot:item="props:any">
                          <ion-icon color="primary" size="large" :icon=" props.isFilled ? star : starOutline "
                                    @click="()=>{props.onClick;/*console.log(props)*/}"></ion-icon>
                        </template>
                      </v-rating>
                    </ion-item>
                    <ion-text
                        style="padding-left: 20px;padding-top: 10px;--color:#858585;color: #858585;display: inline-block">
                      <ion-icon :icon="cameraOutline"
                                style="width: 26px;height: 26px;vertical-align: bottom;"></ion-icon>
                      截图
                    </ion-text>&nbsp;
                    <ion-text style="padding-left: 10px;padding-top: 10px;--color:#858585;color: #858585">
                      <ion-icon :icon="imagesOutline" style="width: 26px;height: 26px;vertical-align: bottom;"
                                @click="takePicture()"></ion-icon>
                      上传图片
                    </ion-text>&nbsp;
                    <ion-textarea fill="solid" style="height: 300px;padding: 10px" v-model="textarea"></ion-textarea>
                    <div style="display: flex;justify-content: left">
                      <div style="margin: 4px;width: 30%;border-radius: 10px;position: relative;margin: 4px;width: 30%;"
                           v-for="(item,i) in imageList">
                        <ion-img style="width: 100%;border-radius: 10px;overflow:hidden;"
                                 :src="item.base64"></ion-img>
                        <ion-icon style="position:absolute; top: -8px;left: -8px;color: #7B73FF"
                                  :icon="closeCircleOutline"
                                  @click="delPic(i)"></ion-icon>
                      </div>
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
            </div>
          </ion-content>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content.main::part(background) {
  background: url("@/img/background.png") no-repeat;
  background-size: contain;
  z-index: -2;
}

ion-toolbar {
  --background: transparent;
}

.comment {
  margin: 10px;
}
</style>