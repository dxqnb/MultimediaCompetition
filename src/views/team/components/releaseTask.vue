<script setup lang="ts">

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonText,
  IonIcon,
  IonTextarea,
  IonInput,
  IonLabel,
  IonChip,
  IonSelectOption,
  IonSelect,
  IonList,
  pickerController,
  IonDatetime,
  IonDatetimeButton, toastController, IonImg
} from "@ionic/vue";
import {reactive, ref} from "vue";
import {Camera, CameraResultType} from "@capacitor/camera";
import {addOutline, chevronForwardOutline, closeCircleOutline, closeOutline} from "ionicons/icons";
import dayjs from "dayjs";
import {addFridenTeamTask, delFridenTeamTaskById, getFridenTeamTaskList, upTaskOpen} from "@/api/team";
import {useRoute} from "vue-router";

const textarea = ref()
const taskName = ref()
const postDate = ref()
const select = ref('3天')

interface item {
  id: number,
  tid: number,
  userid: number,
  task: string,
  img: string,
  open: string,
  target: number,
  finishtime: number
}

const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id

interface image {
  // webPath?: string,
  // path?: string,
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
const unfinished = ref(false)
const finished = ref(false)
const publishItem = reactive<item[]>([]);
const unPublishItem = reactive<item[]>([]);
const checkbox = ref([])
const releasePage = ref(false)
const route = useRoute()
const tid = route.params.id
getFridenTeamTaskList(tid).then((res) => {
  for (let i = 0; i < res.data.data.length; i++) {
    if (res.data.data[i].open == '1') {
      publishItem.push(res.data.data[i])
    } else {
      unPublishItem.push(res.data.data[i])
    }
  }
  console.log(publishItem)
  console.log(unPublishItem)
})

function click(num: number) {
  if (num === 1) {
    unfinished.value = true
    finished.value = false
  } else {
    unfinished.value = false
    finished.value = true
  }
}

function test() {
  console.log(checkbox.value)
  console.log(1)
}

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl
  });
  let dataUrl = image.dataUrl == undefined ? '.' : image.dataUrl
  let temp = base64ToFile(image.dataUrl, imageList.length.toString(6) + dataUrl.split('/')[1].split(';')[0])
  if (temp == null) return
  imageList.push({
    base64: image.dataUrl,
    file: temp,
  })
  return;
}

const team = ref({
  teamName: '不简单队',

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

const pickerColumns = [
  {
    name: 'vocabulary',
    options: [
      {
        text: '请选择每日单词数',
        value: '请选择',
      },
      {
        text: '10个',
        value: '10',
      },
      {
        text: '15个',
        value: '15',
      },
      {
        text: '20个',
        value: '20',
      },
      {
        text: '25个',
        value: '25',
      },
      {
        text: '30个',
        value: '30',
      },
      {
        text: '40个',
        value: '40',
      },
      {
        text: '50个',
        value: '50',
      },
      {
        text: '60个',
        value: '60',
      },
      {
        text: '70个',
        value: '70',
      },
      {
        text: '80个',
        value: '80',
      },
      {
        text: '90个',
        value: '90',
      },
      {
        text: '100个',
        value: '100',
      },
    ],
  },
];
const vocabulary = ref('请选择');
const days = ref('请选择');
const selectData = ref('2023-08-20');
const pickerButtons = [
  {
    text: 'Cancel',
    role: 'cancel',
  },
  {
    text: 'Confirm',
    handler: (value: any) => {
      // window.alert(`单词数:${value.vocabulary.value} );
      vocabulary.value = value.vocabulary.text;
      // days.value = value.days.text;
    },
  },
];

async function openPicker() {
  const picker = await pickerController.create(
      {
        columns: pickerColumns,
        buttons: pickerButtons,
        mode: 'ios',
        cssClass: ['picker'],
      }
  );
  await picker.present();
}

// function datatimeChange() {
//   if (selectData.value.length>3){
//   }
//   for (let i=0;i<2;i++){
//     // selectData.value[i]=dayjs(selectData.value[i]).format('YYYY-MM-DD')
//     console.log(selectData.value[i])
//     console.log(888)
//   }
//   console.log(selectData.value)
// }
function publish(id: any) {
  upTaskOpen(id, tid).then(async (res) => {
    console.log(res.data)
    const toast = await toastController.create({
      message: '发布成功'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
    getFridenTeamTaskList(tid).then((res) => {
      publishItem.splice(0, publishItem.length);
      unPublishItem.splice(0, unPublishItem.length);
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].open == '1') {
          publishItem.push(res.data.data[i])
        } else {
          unPublishItem.push(res.data.data[i])
        }
      }
      console.log(publishItem)
      console.log(unPublishItem)
    })
  })
}

function deleteTask(id: any) {
  delFridenTeamTaskById(id).then(async (res) => {
    console.log(res.data)
    const toast = await toastController.create({
      message: '删除成功'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
    getFridenTeamTaskList(tid).then((res) => {
      publishItem.splice(0, publishItem.length);
      unPublishItem.splice(0, unPublishItem.length);
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].open == '1') {
          publishItem.push(res.data.data[i])
        } else {
          unPublishItem.push(res.data.data[i])
        }
      }
    })
  })
}

function post() {
  // const formData = new FormData()
  //
  // for (let i = 0; i < imageList.length; i++) {
  //   formData.append('img', imageList[i].file)
  // }
  let imgFile = []
  for (let i = 0; i < imageList.length; i++) {
    imgFile.push(imageList[i].file)
  }
  console.log(imgFile)
  let a = {
    tid: tid,
    userid: userid,
    task: taskName.value,
    taskdetail: textarea.value,
    img: '',
    finishtime: Number(select.value.substring(0, select.value.length - 1)),
    target: Number(vocabulary.value.substring(0, vocabulary.value.length - 1)),
    file: imgFile.length == 0 ? undefined : imgFile,
  }
  addFridenTeamTask(a).then(async (res) => {
    console.log(res)
    if (res.data.code == 0) {
      const toast = await toastController.create({
        message: '添加成功'
      })
      await toast.present().then(() => {
        setTimeout(() => {
          toast.dismiss()
        }, 1000)
      })
      releasePage.value = false;
      getFridenTeamTaskList(tid).then((res) => {
        publishItem.splice(0, publishItem.length);
        unPublishItem.splice(0, unPublishItem.length);
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].open == '1') {
            publishItem.push(res.data.data[i])
          } else {
            unPublishItem.push(res.data.data[i])
          }
        }
        console.log(publishItem)
      })
    }
  })
}

function delPic(id: number) {
  imageList.splice(id, 1)
}
</script>

<template>
  <div style="height: 100%;">
    <div style="height: 100%;" v-if="!releasePage">
      <ion-button :class="unfinished?'clicked':'notClicked' " @click="click(1)"
                  style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;"
                  mode="md">
        未发布
      </ion-button>
      <ion-button mode="md" :class="finished?'clicked':'notClicked' " @click="click(2)"
                  style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;">
        已发布
      </ion-button>
      <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: block;margin: 14px 0">任务列表</ion-text>
      <div v-if="!finished">
        <ion-text style="color:#5C82FF;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">未发布</ion-text>
        <ion-item-sliding style="margin: 12px 0;" v-for="item in unPublishItem">
          <ion-item lines="none" style="--inner-padding-end:0;--border-radius: 8px">
            <ion-card
                style="--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none;width: 100%;margin: 0;">
              <ion-card-content>
                <div style="display: flex;justify-content: space-evenly">
                  <!--                  <ion-checkbox value="1" ref="checkbox" @click="test()"-->
                  <!--                                style="&#45;&#45;border-radius: 100%;&#45;&#45;checkmark-width: 3px;&#45;&#45;checkmark-color: white;width: 10%;height: 73px;&#45;&#45;size:22px;&#45;&#45;border-width:1px;&#45;&#45;border-color:rgba(0,22,161,0.15)"-->
                  <!--                                mode="md"></ion-checkbox>-->
                  <div style="width: 50%;">
                    <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">{{ item.task }}
                    </ion-text>
                    <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">
                      截止日期&nbsp;2023-10-11
                    </ion-text>
                  </div>
                  <div style="width: 50%;">
                    <ion-text
                        style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                      2023-08-01
                    </ion-text>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-item>

          <ion-item-options>
            <ion-item-option style="color: white" @click="publish(item.id)">发布</ion-item-option>
            <ion-item-option color="danger" @click="deleteTask(item.id)">删除</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </div>
      <div v-if="!unfinished">
        <ion-text style="color:#747474;font-size: 14px;font-weight: 400;display: block;margin: 16px 0">已发布</ion-text>
        <ion-item-sliding style="margin: 12px 0;" v-for="item in publishItem">
          <ion-item lines="none" style="--inner-padding-end:0;--border-radius: 8px">
            <ion-card
                style="--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none;width: 100%;margin: 0;">
              <ion-card-content>
                <div style="display: flex;justify-content: space-evenly">
                  <!--                  <ion-checkbox value="2" ref="checkbox"-->
                  <!--                                style="&#45;&#45;border-radius: 100%;&#45;&#45;checkmark-width: 3px;&#45;&#45;checkmark-color: white;width: 10%;height: 73px;&#45;&#45;size:22px;&#45;&#45;border-width:1px;&#45;&#45;border-color:rgba(0,22,161,0.15)"-->
                  <!--                                mode="md"></ion-checkbox>-->
                  <div style="width: 50%;" @click="$router.push('/team/submitTask/1')">
                    <ion-text style="display: block;font-size: 16px;font-weight: 500;color: #343434">{{ item.task }}
                    </ion-text>
                    <ion-text style="display: block;font-size: 12px;font-weight: 400;color: #7D7D7D;margin-top: 10px">
                      截止日期&nbsp;2023-10-11
                    </ion-text>
                  </div>
                  <div style="width: 50%;">
                    <ion-text
                        style="display: block;font-size: 14px;font-weight: 400;color: #343434;text-align: right;width: 100%;">
                      2023-08-01
                    </ion-text>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-item>

          <ion-item-options>
            <ion-item-option color="danger" @click="deleteTask(item.id)">删除</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </div>


      <div style="position:fixed;bottom: 0;width: 100%;left: 0;z-index:1">
        <ion-button @click="releasePage=true"
                    style="width: 80%;display: block;--background: #515EFF;--color: white;margin: 0 auto 2em;">
          创建任务
        </ion-button>
      </div>
    </div>

    <div style="height: 100%;" v-if="releasePage">
      <div style="display: flex;justify-content: space-between">
        <ion-button @click="releasePage=false"
                    style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;--background: transparent;">
          取消
        </ion-button>
        <ion-button @click="post()"
                    style="font-size: 12px;--padding-bottom: 0;--padding-top: 0;min-height: 2.2em;margin: 0 10px 0 0;--background: transparent;">
          保存
        </ion-button>
      </div>

      <ion-card
          style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
        <ion-card-content>
          <div style="padding-bottom: 1.5em;margin-bottom: 1em">
            <ion-list>
              <ion-item lines="none">
                <ion-input
                    label="任务名"
                    label-placement="stacked"
                    :clear-on-edit="true"
                    placeholder="请输入任务名"
                    v-model="taskName"
                >
                </ion-input>
              </ion-item>
              <ion-item lines="none">
                <ion-input v-model="postDate" label="发布日期" label-placement="start" type="date"></ion-input>
              </ion-item>
              <!--                <ion-datetime id="datetime"></ion-datetime>-->

              <ion-item lines="none">
                <ion-select label="组队天数" placeholder="7"
                            class="always-flip"
                            :toggle-icon="chevronForwardOutline"
                            interface="alert"
                            value="7天" v-model="select">
                  <ion-select-option v-for="i in 100" :value="i+'天'"><p style="width: 100%;text-align: center">{{
                      i
                    }}天</p>
                  </ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item lines="none">
                <ion-label>任务要求</ion-label>
                <ion-label style="margin: 0;" slot="end" @click="openPicker">
                  <ion-text>{{ vocabulary }}</ion-text>
                  <ion-icon style="color: rgb(89, 89, 89)" :icon="chevronForwardOutline"></ion-icon>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
          <div>
            <!--            <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #ADAEB0">任务详情：-->
            <!--            </ion-text>-->
            <!--            <div-->
            <!--                style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #AEAEAE;padding: 10px">-->
            <!--              <ion-text style="font-size: 16px;font-weight: 400;color: #585858;">-->
            <!--                <p>-->
            <!--                  1.这是一个任务详情<br>-->
            <!--                  2.这是一个任务详情<br>-->
            <!--                  3.提交要求<br>-->
            <!--                </p>-->
            <!--              </ion-text>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--          <div>-->
            <ion-text style="display: block;font-size: 16px;font-weight: 600;color: #5C82FF">任务详情：
            </ion-text>
            <div
                style="background-color: white;width: 100%;margin: 10px auto; border-radius: 14px;border: solid 1px #6379FF;padding: 10px">
              <ion-textarea placeholder="请输入提交内容" :auto-grow="true" v-model="textarea"
                            style="border: none;font-size: 16px;font-weight: 400;--color: #585858;">
              </ion-textarea>
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

  </div>
</template>

<style scoped>
.clicked {
  --background: #5C82FF;
  --color: #FFFFFF;
}

.notClicked {
  --background: #FAFAFA;
  --color: #BFBFBF;
}

ion-item {
  --padding-start: 0px;
  --background: #ffffff;
}

.card-content-ios {
  padding: 10px 20px;
}

.radio-checked.ios::part(container) {
  border-color: #5065FF;
}

.area {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

ion-item {
  --background: #FAFBFF;
}

ion-range {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}

.range-disabled {
  opacity: 1 !important;
}
</style>