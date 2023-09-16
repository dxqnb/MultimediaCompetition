<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonFooter,
  IonButton,
  IonRadio, IonRadioGroup, IonText, IonImg, alertController, useIonRouter
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {getKcNoteList, getTestKcTiList, getTestZyTiList, ifAnswer} from "@/api/study";

const route = useRoute()
const router = useIonRouter()
const type = route.params.id.toString().includes('zykc') ? 'zykc' : 'kc';
const taoid = route.params.id.toString().split('kc')[1];
const answer = reactive<string[]>([]);
const num = ref('1')
const answerOption = ref('')
const error = reactive<any[]>([]);
const problem = reactive<any[]>([]);
const optionA = reactive<any[]>([]);
const optionB = reactive<any[]>([]);
const optionC = reactive<any[]>([]);
const optionD = reactive<any[]>([]);
const length = ref(0)
const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id

interface item {
  "id": number
  "problem": string
  "taoid": number
  "tres": string
  "optionA": string
  "optionB": string
  "optionC": string
  "optionD": string
  "answer": string
  "createtime": string
}

const answerItem = reactive<item[]>([])
if (type=="zykc"){
  getTestZyTiList(taoid).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      // console.log(res.data.data[i])
      problem.push(res.data.data[i].problem)
      optionA.push(res.data.data[i].optionA)
      optionB.push(res.data.data[i].optionB)
      optionC.push(res.data.data[i].optionC)
      optionD.push(res.data.data[i].optionD)
      answerItem.push(res.data.data[i])
    }
  })
}else {
  getTestKcTiList(taoid).then((res) => {
    length.value = res.data.data.length
    for (let i = 0; i < length.value; i++) {
      // console.log(res.data.data[i])
      problem.push(res.data.data[i].problem)
      optionA.push(res.data.data[i].optionA)
      optionB.push(res.data.data[i].optionB)
      optionC.push(res.data.data[i].optionC)
      optionD.push(res.data.data[i].optionD)
      answerItem.push(res.data.data[i])
    }
  })

}
// let tmp=reactive<string[]>([])
for (let i = 0; i < length.value; i++) {
  answer.push("");
}
console.log(answer)

function change() {
  answerOption.value = answer[Number(num.value) - 1]
}

function change1() {
  answer[Number(num.value) - 1] = answerOption.value
  console.log(answer)
}

async function submit() {
  if (answer.includes('')) {
    const alert1 = await alertController.create({
      header: '提示',
      subHeader: '你还有题目未作答，确认提交？',
      message: '请选择',
      buttons: [
        {
          role: 'cancel',
          text: '取消',
        },
        {
          text: '确认',
          role: 'ok',
        },
      ],
    })
    await alert1.present()
    alert1.onDidDismiss().then(async (res) => {
      if (res.role == 'ok') {
        for (let i = length.value; i > 0; i--) {
          ifAnswer(i.toString(), taoid, userid, answer[i - 1], '').then((res) => {
            if (res.data.code == 900) {
              error.push(i)
            }
            if (i == 1) {
              setTimeout(() => {
                error.sort()
                error.push(taoid)
                router.push('/study/testReport/' + error.toString())
              }, 500)
            }
          })
        }
      }
    })
  } else {
    for (let i = length.value; i > 0; i--) {
      ifAnswer(i.toString(), taoid, userid, answer[i - 1], '').then((res) => {
        if (res.data.code == 900) {
          error.push(i)
        }
        if (i == 1) {
          setTimeout(() => {
            error.sort()
            error.push(taoid)
            router.push('/study/testReport/' + error.toString())
          }, 500)
        }
      })
    }
  }
}

</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: #FFFFFF">
        <ion-buttons slot="start">
          <ion-back-button style="color: black" text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ route.params.title }}</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon style="color: black" :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div slot="fixed" style="width: 100%;white-space: nowrap;background: #F7F8F9;top: 0;left: 0;padding: 4px 10px">
        <ion-text
            style="display: inline-block;font-size: 14px;height: 44px;line-height: 44px;vertical-align: bottom;color: #888888;margin: 0 16px 0 0">
          共{{ length }}题
        </ion-text>

        <div style="display: inline-block;width: 85%;">
          <ion-segment :scrollable="true" @ionChange="change" v-model="num" mode="ios">
            <ion-segment-button v-for="i in length" style="width: 30px;height: 30px;min-width: auto;margin: 0 10px"
                                :value="i+''">
              <span style="font-size: 13px">{{ i }}</span>
            </ion-segment-button>

          </ion-segment>
        </div>
      </div>
      <div style="height: 20px;"></div>
      <ion-text style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
        <h4 style="color: #474747;font-weight: bolder;z-index: 1;position: relative">题目</h4>
        <div
            style="border: 10px solid #8997ef;border-radius: 10px;height: 20px;;width:20px;position:absolute;top: -5px;left: -4px;"></div>
      </ion-text>
      <div>
        <ion-text class="ion-margin">
          <p class="ion-margin">
            {{ problem[Number(num) - 1] }}
          </p>
        </ion-text>
        <ion-img v-if="false" src="https://www.0030.store/swiperAd/ad1.png"></ion-img>
        <div style="margin-top: 30px">
          <ion-segment @ionChange="change1()" v-model="answerOption" mode="ios"
                       style="display: inline-block;background: #FFFFFF">
            <div style="position: relative;margin: 20px 10px;">
              <ion-segment-button style="width: 36px;height: 36px;min-width: auto;"
                                  value="A">
                <ion-label style=""><h6>A</h6></ion-label>
              </ion-segment-button>
              <p style="display: inline-block;position: absolute;top: 0;left: 80px;margin: 0;line-height: 38px">
                {{ optionA[Number(num) - 1] }}</p>
            </div>
            <div style="position: relative;margin: 20px 10px;">
              <ion-segment-button style="width: 36px;height: 36px;min-width: auto;"
                                  value="B">
                <ion-label style=""><h6>B</h6></ion-label>
              </ion-segment-button>
              <p style="display: inline-block;position: absolute;top: 0;left: 80px;margin: 0;line-height: 38px">
                {{ optionB[Number(num) - 1] }}</p>
            </div>
            <div style="position: relative;margin: 20px 10px;">
              <ion-segment-button style="width: 36px;height: 36px;min-width: auto;"
                                  value="C">
                <ion-label style=""><h6>C</h6></ion-label>
              </ion-segment-button>
              <p style="display: inline-block;position: absolute;top: 0;left: 80px;margin: 0;line-height: 38px">
                {{ optionC[Number(num) - 1] }}</p>
            </div>
            <div style="position: relative;margin: 20px 10px;">
              <ion-segment-button style="width: 36px;height: 36px;min-width: auto;"
                                  value="D">
                <ion-label style=""><h6>D</h6></ion-label>
              </ion-segment-button>
              <p style="display: inline-block;position: absolute;top: 0;left: 80px;margin: 0;line-height: 38px">
                {{ optionD[Number(num) - 1] }}</p>
            </div>
          </ion-segment>
        </div>
      </div>
    </ion-content>
    <ion-footer style="height: 100px;" class="ion-no-border">
      <ion-toolbar style="--background: transparent;height: 100px;">
        <div style="margin: 0 auto;display: flex;width: 100%;justify-content: space-evenly;">
          <ion-button shape="round" @click="()=>{num=(Number(num)-1).toString();change()}" :disabled="num=='1'"
                      style="width: 40%;--background: #5676F1;--color: white;">上一题
          </ion-button>
          <ion-button shape="round" @click="()=>{
            if(num!=length.toString()){
              num=(Number(num)+1).toString()
            }else {
              submit()
            }
            change()
          }" style="width: 40%;--background: #5676F1;--color: white;">{{ num == length.toString() ? '提交' : '下一题' }}
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </IonPage>
</template>

<style scoped lang="scss">
ion-segment {
  --background: #F7F8F9;
}

ion-content::part(background) {
  background: #FFFFFF;
}

ion-segment-button::part(native) {
  color: #474747;
}

.segment-button-checked::part(native) {
  color: #ffffff;
}

ion-segment-button {
  --indicator-color: #4A93FE;
  --border-radius: 100%;
  /*--color-checked: #fff;*/
  --background-checked: #F7F8F9;
  --background-focused: #4A93FE;
  --background: #DFDFDF;
}

ion-segment-button::before {
  opacity: 0;
  display: none;
}

ion-segment-button::part(indicator) {
  padding-inline: 0;
}

ion-segment::-webkit-scrollbar {
  display: none;
}

ion-content::-webkit-scrollbar {
  display: none;
  //Q:如何隐藏滚动条
  //A:在ion-content中添加属性scroll-y="false" :fullscreen="true"
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

/*.segment-button-indicator.segment-button-indicator-animated{
  display: none;
}*/
</style>
