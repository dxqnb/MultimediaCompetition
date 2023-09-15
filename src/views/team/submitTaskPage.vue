<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonTextarea,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonRange,
  IonText,
  IonRadio,
  IonRadioGroup,
  toastController,
  useIonRouter, IonImg,
} from "@ionic/vue";
import {closeCircleOutline, ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {Camera, CameraResultType} from "@capacitor/camera";
import {addFridenTeamTask, getFridenTeamTaskList, getTaskDetail, upTaskFinsh} from "@/api/team";
import {useRoute} from "vue-router";

const route = useRoute()
const id = route.params.id
const tid = route.params.tid

interface task {
  id: number,
  tid: number,
  userid: number,
  task: string,
  img?: string,
  open: string,
  target: number,
  finishtime: number,
  createtime: string
  taskdetail: string
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

const content = ref('');
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

const taskItem = ref<task>({
  id: 0,
  tid: 0,
  userid: 0,
  task: '',
  open: '',
  img: '',
  target: 0,
  finishtime: 0,
  createtime: '',
  taskdetail: '',
})
const fd = ref('')
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id
getTaskDetail(id).then((res) => {
  taskItem.value = res.data.data[0]
  taskItem.value.createtime = taskItem.value.createtime.split(' ')[0]
  let temp = new Date(new Date(taskItem.value.createtime).getTime() + Number(taskItem.value.finishtime) * 60 * 60 * 24 * 1000)
  fd.value = temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate()
})
const pic = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18.616" height="18" viewBox="0 0 18.616 18">\n' +
    '  <g id="Icon" transform="translate(1.056 0.75)" style="isolation: isolate">\n' +
    '    <g id="Icon-2" data-name="Icon" style="isolation: isolate">\n' +
    '      <path id="Icon-3" data-name="Icon" d="M14.5,0a2,2,0,0,1,2,2V14.5a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Zm-3,13L5.25,6.5,0,10.833M16.5,11,12.75,7.5,9,10" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const link = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18.229" viewBox="0 0 16 18.229">\n' +
    '  <g id="Icon" transform="translate(-1.75 -0.521)" style="isolation: isolate">\n' +
    '    <path id="Icon-2" data-name="Icon" d="M13.6,9.5l-5.72,5.659c-.076.075-.114.113-.151.148a4.375,4.375,0,0,1-2.9,1.188H4.616c-.245,0-.368,0-.471,0A4.329,4.329,0,0,1,0,12.4c0-.1,0-.224,0-.466,0-.106,0-.16,0-.211A4.282,4.282,0,0,1,1.2,8.854c.036-.037.074-.075.15-.15L9.247.892a3.1,3.1,0,0,1,4.352,0,3.022,3.022,0,0,1,0,4.306L5.439,13.271a1.55,1.55,0,0,1-2.176,0,1.511,1.511,0,0,1,0-2.153l7.071-7" transform="translate(2.5 1.5)" fill="none" stroke="#8d8d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const router = useIonRouter()

function post() {
  let imgFile = []
  for (let i = 0; i < imageList.length; i++) {
    imgFile.push(imageList[i].file)
  }
  console.log(imgFile)
  let a = {
    taskid: id,
    tid: tid,
    userid: userid,
    content: content.value,
    img: '',
    file: imgFile.length == 0 ? undefined : imgFile[0],
  }
  upTaskFinsh(a).then(async (res) => {
    console.log(res)
    if (res.data.code == 0) {
      const toast = await toastController.create({
        message: '提交成功'
      })
      await toast.present().then(() => {
        setTimeout(() => {
          toast.dismiss()
        }, 1000)
      })
      router.back()
    }
  })
}

function delPic(id: number) {
  imageList.splice(id, 1)
}
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/team/teamDetail/1"></ion-back-button>
        </ion-buttons>
        <IonTitle>提交任务</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;bottom: 0;height: 100px;" slot="fixed">
        <ion-button @click="post" style="width: 80%;margin: 0 auto;display: block;--background: #515EFF;--color: white">
          提交
        </ion-button>
      </div>
      <div>
        <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">提交任务
        </ion-text>
        <ion-card
            style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
          <ion-card-content>
            <div style="border-bottom: solid 1px #E1E1E1;padding-bottom: 1.5em;margin-bottom: 1em">
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #343434">{{ taskItem.task }}
              </ion-text>
              <ion-text style="display: block;font-size: 13px;font-weight: 400;color: #7D7D7D;margin-top: 10px">提交时间：&nbsp;{{
                  taskItem.createtime + `至` + fd
                }}
              </ion-text>
              <ion-text style="display: block;font-size: 13px;font-weight: 400;color: #7D7D7D;margin-top: 4px">目标值：&nbsp;{{
                  taskItem.target + `次`
                }}&nbsp
              </ion-text>
            </div>
            <div>
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #ADAEB0">任务详情：
              </ion-text>
              <div
                  style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #AEAEAE;padding: 10px">
                <ion-text style="font-size: 16px;font-weight: 400;color: #585858;">
                  <p>{{ taskItem.taskdetail }}</p>
                  <!--                    1.这是一个任务详情<br>-->
                  <!--                    2.这是一个任务详情<br>-->
                  <!--                    3.提交要求<br>-->
                  <!--                  </p>-->
                </ion-text>
              </div>
            </div>
            <div>
              <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #5C82FF">任务详情：
              </ion-text>
              <div
                  style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #6379FF;padding: 10px">
                <ion-textarea placeholder="请输入提交内容" :auto-grow="true" v-model="content"
                              style="border: none;font-size: 16px;font-weight: 400;--color: #585858;"></ion-textarea>
                <div style="display: flex;justify-content: left">
                  <div style="margin: 4px;width: 30%;border-radius: 10px;position: relative;margin: 4px;width: 30%;"
                       v-for="(item,i) in imageList">
                    <ion-img style="width: 100%;border-radius: 10px;overflow:hidden;"
                             :src="item.base64"></ion-img>
                    <ion-icon style="position:absolute; top: -8px;left: -8px;color: #7B73FF" :icon="closeCircleOutline"
                              @click="delPic(i)"></ion-icon>
                  </div>
                </div>
              </div>
            </div>

            <div style="width: 100%;text-align: right" @click="takePicture()">
              <div style="display: inline-block;margin-right: 10px">
                <ion-icon style="vertical-align: middle;margin-right: 5px" :icon="pic"></ion-icon>
                <ion-text style="vertical-align: middle">上传图片</ion-text>
              </div>
              <div style="display: inline-block">
                <ion-icon style="vertical-align: middle;margin-right: 5px" :icon="link"></ion-icon>
                <ion-text style="vertical-align: middle">上传附件</ion-text>
              </div>
            </div>

          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #FFFFFF;
}

ion-toolbar {
  --background: #FFFFFF;
}


</style>