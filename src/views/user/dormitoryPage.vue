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
  IonRow,
  IonCol,
  IonGrid, IonInfiniteScroll, IonInfiniteScrollContent,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {onMounted, reactive, ref} from "vue";
import TecItem from "@/views/study/components/tecItem.vue";
import {getVideoJs, getVideoYw} from "@/api/study";
import {getMyDor, getMyQj} from "@/api/user";
import NewsItem from "@/views/study/components/newsItem.vue";

const codeIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="59.392" height="59.437" viewBox="0 0 59.392 59.437">\n' +
    '  <path id="路径_226" data-name="路径 226" d="M45.867,45.376H72.119v5.413H45.867Zm32.928,0h15.2v5.413H78.8Zm20.77,0h5.523V50.9H99.565ZM45.867,66.33H72.119v5.417H45.867ZM45.7,45.376h5.413V71.628H45.7V45.376Zm21.011,0h5.413V71.628H66.707Zm-11.86,9.9h7.369v7.369H54.846ZM78.8,50.789h5.27v5.555H78.8Zm15.194,0h5.779V61.011H93.99Zm5.576,5.555h5.523v9.672H99.565Zm-15.3,4.145h9.729V67.45H84.265Zm5.445,5.523h9.9v5.612h-9.9V66.012Zm-10.882.175h5.437v5.437H78.828ZM45.7,77.053h5.413V89.317H45.7V77.053Zm5.425,11.111h5.857v5.861H51.121ZM45.7,93.792h5.425v11.021H45.7V93.792ZM56.648,77.053H73.313v6.733H56.648ZM60.7,83.187h6.953v6.4H60.7Zm5.657,4.977h6.953V99.3H66.36Zm-5.4,5.629h6.692v11.021H60.964V93.792Zm-5.572,4.043h6.5v6.978h-6.5ZM82.855,77.053H95.29V88.163H82.855V77.053Zm15.41,0h6.823v6.823H98.265ZM77.5,82.608h6.823V94.982H77.5Zm10.927,4H95.29v7.124H88.426ZM77.5,97.835h6.823v6.978H77.5ZM93.912,99.3h11.176v5.515H93.912ZM99.5,93.731h5.588v6.733H99.5Z" transform="translate(-45.696 -45.376)" fill="#3f3f3f"/>\n' +
    '</svg>')
const itemsLeft = reactive<item[]>([]);
const itemsRight = reactive<item[]>([]);


const data = localStorage.getItem('user') as string | null;
const userid = ref('');
const studentname = ref('');
const deptname = ref('');
if (data) { // 检查数据是否存在
  const parsedData = JSON.parse(data); // 将字符串转换为对象

  if (parsedData && parsedData.username) { // 检查是否成功解析并存在 username 字段
    userid.value = parsedData.username; // 提取 username 并赋值给变量
  }

  if (parsedData && parsedData.studentname) { // 检查是否成功解析并存在 username 字段
    studentname.value = parsedData.studentname; // 提取 username 并赋值给变量
  }

  if (parsedData && parsedData.deptname) { // 检查是否成功解析并存在 username 字段
    deptname.value = parsedData.deptname; // 提取 username 并赋值给变量
  }
  // const username=userid.value;
  // console.log(userid.value);

}

interface item {
  id: Number,
  likecount: Number,
  img: String,
  title: String,
  avatar: String,
  link: String,
  createBy: String,
  createtime: String,
  lll: String,
}

const dorarea = ref('');
const dornum = ref('');
const roomnum = ref('');
const bednum = ref('');
const status = ref('');
onMounted(async () => {
  const response = await getMyDor(userid.value);
  dorarea.value = response.data.data[0].dorarea
  dornum.value = response.data.data[0].dornum
  roomnum.value = response.data.data[0].roomnum
  bednum.value = response.data.data[0].bednum
  status.value = response.data.data[0].status
});

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
}

const index = ref(0)
const main = ref(true);
const news = reactive<any[]>([])
getVideoYw(index.value, index.value + 10).then((res) => {
  index.value += 10
  for (let i = 0; i < res.data.data.length; i++) {
    news.push(res.data.data[i])
  }
})
getVideoJs(1, 10).then(res => {
  for (let i = 0; i < res.data.data.length; i++) {
    if (i % 2 == 0) {
      itemsLeft.push(res.data.data[i])
    } else {
      itemsRight.push(res.data.data[i])
    }
  }
  console.log(itemsLeft)
})

function ionInfinite() {
  getVideoYw(index.value, index.value + 10).then((res) => {
    index.value += 10
    for (let i = 0; i < res.data.data.length; i++) {
      news.push(res.data.data[i])
    }
  })
}
</script>

<template>
  <IonPage>
    <IonHeader collapse="fade" style="background: linear-gradient(to bottom, #4472FB, rgb(94, 137, 252))"
               class="ion-no-border ion-padding">
      <IonToolbar style="--color: white;--background: none" class="">
        <ion-buttons slot="start">
          <ion-back-button style="color: #FFFFFF" text="" default-href="/tabs/user"></ion-back-button>
        </ion-buttons>
        <IonTitle>我的寝室</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div
          style="width: 100%;background: linear-gradient(to bottom,#DEE6FB,#FFFFFF);border-radius: 16px;border: 1px solid #FFFFFF;position: relative">
        <div style="margin: 20px">
          <ion-text style="font-size: 12px;color: #7A7A7A;display: block">学号：{{ userid }}</ion-text>
          <ion-text style="font-size: 25px;color: #142352;display: block;font-weight: 900;margin-top: 10px">
            {{ studentname }}
          </ion-text>
          <ion-text style="font-size: 18px;color: #1B44B1;display: block;font-weight: 600">{{ deptname }}
          </ion-text>
        </div>
        <div style="position:absolute;top: -14px;right: 20px;">
          <div
              style="width: 89px;height: 89px;border-radius: 6px;background-color: white;box-shadow: -10px 10px 50px 10px rgba(164,161,255,0.5)">
            <ion-icon :icon="codeIcon"
                      style="width: 60px;height: 89px;margin: 0 auto 12px auto;display: block;"></ion-icon>
            <div style="text-align: center">
              <ion-text style="font-size: 12px;color: #363636">状态：</ion-text>
              <ion-text style="font-size: 12px;color: #5D73FF">{{ status == '0' ? "入住" : "退宿" }}</ion-text>
            </div>
          </div>
        </div>
      </div>
      <div
          style="width: 100%;background: linear-gradient(to bottom,#DEE6FB,#F2F5FF,#FFFFFF);border-radius: 16px;border: 1px solid #FFFFFF;display: flex;justify-content: space-between;margin: 10px 0">
        <div style="margin: 15px">
          <div style="font-size: 16px;color: #333333;border-left: 2px solid #5054EE;padding-left: 3px;font-weight: 900">
            详细地址
          </div>
          <ion-text style="font-size: 12px;color: #474D5D;padding-left: 6px">
            {{ dorarea + dornum + "栋" + roomnum + "室" + " " + bednum + "号床" }}
          </ion-text>
        </div>
        <ion-icon style="width: 46px;height: 46px;margin: 15px;"
                  icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="46.19" height="46.192" viewBox="0 0 46.19 46.192"><defs><linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#4f7afb"/><stop offset="1" stop-color="#c9d7fd"/></linearGradient></defs><path id="路径_176" data-name="路径 176" d="M68.911,86.758H57.364V49.617A3.14,3.14,0,0,1,60.2,46.483l16.06-1.606V75.211a1.05,1.05,0,1,0,2.1,0V53.165h6.3V75.211a1.05,1.05,0,1,0,2.1,0V53.165a2.1,2.1,0,0,0-2.1-2.1h-6.3V43.717a1.05,1.05,0,0,0-1.154-1.045L59.991,44.394a5.249,5.249,0,0,0-4.727,5.223V86.758h-6.3v-4.4A2.85,2.85,0,0,0,50.3,81.176a6.893,6.893,0,0,0,.769-3.6,17.332,17.332,0,0,0-.658-4.667,7.218,7.218,0,0,0-.792-1.847,1.864,1.864,0,0,0-3.4,0,7.254,7.254,0,0,0-.792,1.847,17.333,17.333,0,0,0-.658,4.667,6.892,6.892,0,0,0,.769,3.6,2.848,2.848,0,0,0,1.331,1.179v4.4H43.716a1.05,1.05,0,0,0,0,2.1H68.911a1.05,1.05,0,1,0,0-2.1ZM47.317,73.943a6.762,6.762,0,0,1,.6-1.64,6.768,6.768,0,0,1,.6,1.64,15.464,15.464,0,0,1,.451,3.63c0,.677-.076,2.887-1.05,2.887s-1.05-2.21-1.05-2.887a15.464,15.464,0,0,1,.451-3.63ZM63.662,55.265h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm-8.4,6.3h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm-8.4,6.3h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm2.1-4.2h2.1v4.2h-2.1Zm-6.3,10.5h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm4.2,0h-2.1v-4.2h2.1Zm-10.5,2.1h2.1v4.2h-2.1Zm4.2,0h2.1v4.2h-2.1Zm16.8-14.7h-2.1v-4.2h2.1Zm0,6.3h-2.1v-4.2h2.1Zm-2.1,2.1h2.1v4.2h-2.1Zm7.387,11.964a4.208,4.208,0,0,0-2.019-1.3,5.249,5.249,0,0,0-8.518-.164H76.26a4.2,4.2,0,1,0,0,8.4h8.4a4.2,4.2,0,0,0,3.188-6.932Zm-3.188,4.832h-8.4a2.1,2.1,0,0,1,0-4.2h1.612a1.05,1.05,0,0,0,.909-.525,3.149,3.149,0,0,1,5.475.033,1.05,1.05,0,0,0,.745.521,2.1,2.1,0,0,1-.342,4.17Z" transform="translate(-42.667 -42.668)" fill="url(#linear-gradient)"/></svg>'></ion-icon>
      </div>
      <div style="display: flex;flex-wrap: nowrap;justify-content: space-between">
        <div
            style="width: 48%;background: linear-gradient(to bottom,#FFD3E9,#FFFFFF);border-radius: 16px;display: flex;justify-content: space-between;margin: 10px 0;position: relative;overflow: hidden">
          <div style="margin: 15px 0 15px 15px">
            <div
                style="font-size: 15px;color: #333333;border-left: 2px solid #FF9884;padding-left: 3px;font-weight: 900">
              寝室卫生
            </div>
            <ion-text style="font-size: 12px;color: #474D5D;padding-left: 6px">打分情况
            </ion-text>
          </div>
          <ion-icon style="width: 64px;height: 64px;margin: 12px 6px 0 0"
                    icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <filter id="路径_187" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#cf3b3b" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="组_1492" data-name="组 1492" transform="translate(-119 -322)">
    <g id="组_1213" data-name="组 1213">
      <g transform="matrix(1, 0, 0, 1, 119, 322)" filter="url(#路径_187)">
        <path id="路径_187-2" data-name="路径 187" d="M21,0A21,21,0,1,1,0,21,21,21,0,0,1,21,0Z" transform="translate(9 6)" fill="#fff"/>
      </g>
      <path id="路径_193" data-name="路径 193" d="M85.272,120.419a3.43,3.43,0,0,0-3.427-3.427H68.777a3.43,3.43,0,0,0-3.427,3.427v5.7a3.425,3.425,0,0,0-1.461,2.8V133.6a1.142,1.142,0,0,0,1.143,1.142h.317v1.242a1.142,1.142,0,0,0,2.285,0v-1.242H82.988v1.242a1.142,1.142,0,0,0,2.284,0v-1.242h.318a1.142,1.142,0,0,0,1.143-1.142v-4.682a3.426,3.426,0,0,0-1.461-2.8v-5.7Zm-19.1,8.5a1.143,1.143,0,0,1,.887-1.113h16.5a1.145,1.145,0,0,1,.887,1.113v3.54H66.174Zm5.982-3.426a1.188,1.188,0,0,1,1.17-.986h4.067a1.093,1.093,0,0,1,1.086.986Zm-3.379-6.218H81.845a1.144,1.144,0,0,1,1.143,1.142v5.076H80.766a3.379,3.379,0,0,0-3.374-3.271H73.326a3.476,3.476,0,0,0-3.466,3.271H67.634v-5.076a1.144,1.144,0,0,1,1.143-1.142Z" transform="translate(73.251 221.895)" fill="#ffa8a8"/>
    </g>
  </g>
</svg>'></ion-icon>
          <ion-icon style="position: absolute;top: -12px;right: -2px;width: 30px;height: 30px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="38.903" height="38.903" viewBox="0 0 38.903 38.903">
  <g id="组_665" data-name="组 665" transform="translate(811.221 -5304.163) rotate(60)" opacity="0.77">
    <g id="组_661" data-name="组 661" transform="translate(4200.261 3333.26)">
      <circle id="椭圆_49" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-2" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-3" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-4" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_660" data-name="组 660" transform="translate(4207.626 3333.26)">
      <circle id="椭圆_49-5" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-6" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-7" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-8" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_659" data-name="组 659" transform="translate(4216.955 3333.26)">
      <circle id="椭圆_49-9" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-10" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-11" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-12" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_658" data-name="组 658" transform="translate(4224.32 3333.26)">
      <circle id="椭圆_49-13" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-14" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-15" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-16" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
  </g>
</svg>
'></ion-icon>
        </div>
        <div
            style="width: 48%;background: linear-gradient(to bottom,#D5F0D3,#FFFFFF);border-radius: 16px;display: flex;justify-content: space-between;margin: 10px 0;position: relative;overflow: hidden">
          <div style="margin: 15px 0 15px 15px">
            <div
                style="font-size: 15px;color: #333333;border-left: 2px solid #8FDB4B;padding-left: 3px;font-weight: 900">
              电费水费
            </div>
            <ion-text style="font-size: 12px;color: #474D5D;padding-left: 6px">缴费详情
            </ion-text>
          </div>
          <ion-icon style="width: 64px;height: 64px;margin: 12px 6px 0 0"
                    icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <filter id="路径_189" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#3bcf71" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="组_1220" data-name="组 1220" transform="translate(-120 -322)">
    <g transform="matrix(1, 0, 0, 1, 120, 322)" filter="url(#路径_189)">
      <path id="路径_189-2" data-name="路径 189" d="M21,0A21,21,0,1,1,0,21,21,21,0,0,1,21,0Z" transform="translate(9 6)" fill="#fff"/>
    </g>
    <g id="bulb" transform="translate(136 335)" style="isolation: isolate">
      <path id="union-1" d="M8.84,2.526A6.314,6.314,0,0,1,13.7,12.868a4.344,4.344,0,0,0-1.073,2.748v2.063a1.263,1.263,0,0,1-1.263,1.263H6.314a1.263,1.263,0,0,1-1.263-1.263V15.616a4.343,4.343,0,0,0-1.074-2.748A6.314,6.314,0,0,1,8.84,2.526ZM0,8.84a8.809,8.809,0,0,0,2.034,5.642,1.843,1.843,0,0,1,.492,1.135v2.063a3.788,3.788,0,0,0,3.788,3.788h5.051a3.788,3.788,0,0,0,3.788-3.788V15.616a1.843,1.843,0,0,1,.492-1.135A8.84,8.84,0,1,0,0,8.84ZM3.788,23.993a1.263,1.263,0,0,0,1.263,1.263h7.577a1.263,1.263,0,0,0,0-2.526H5.051A1.263,1.263,0,0,0,3.788,23.993Z" transform="translate(5 2)" fill="#b7f7c9" style="isolation: isolate"/>
    </g>
  </g>
</svg>
'></ion-icon>
          <ion-icon style="position: absolute;top: -12px;right: -2px;width: 30px;height: 30px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="38.903" height="38.903" viewBox="0 0 38.903 38.903">
  <g id="组_665" data-name="组 665" transform="translate(811.221 -5304.163) rotate(60)" opacity="0.77">
    <g id="组_661" data-name="组 661" transform="translate(4200.261 3333.26)">
      <circle id="椭圆_49" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-2" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-3" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-4" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_660" data-name="组 660" transform="translate(4207.626 3333.26)">
      <circle id="椭圆_49-5" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-6" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-7" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-8" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_659" data-name="组 659" transform="translate(4216.955 3333.26)">
      <circle id="椭圆_49-9" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-10" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-11" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-12" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
    <g id="组_658" data-name="组 658" transform="translate(4224.32 3333.26)">
      <circle id="椭圆_49-13" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 0)" fill="#fff"/>
      <circle id="椭圆_49-14" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 7.365)" fill="#fff"/>
      <circle id="椭圆_49-15" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 16.694)" fill="#fff"/>
      <circle id="椭圆_49-16" data-name="椭圆 49" cx="2.21" cy="2.21" r="2.21" transform="translate(0 24.06)" fill="#fff"/>
    </g>
  </g>
</svg>
'></ion-icon>
        </div>
      </div>
      <div>
        <ion-text
            style="display: block;margin-left: 10px;width: 100%;position:relative;margin-top: 36px">
          <h4 style="color: #474747;font-weight: bolder;">今日要闻</h4>
        </ion-text>
        <ion-segment value="first" mode="ios">
          <ion-segment-button value="first">
            <ion-label><h3 style="font-weight: 900">推荐</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="second">
            <ion-label><h3 style="font-weight: 900">专栏</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="third">
            <ion-label><h3 style="font-weight: 900">技术</h3></ion-label>
          </ion-segment-button>
          <ion-segment-button value="fourth">
            <ion-label><h3 style="font-weight: 900">兴趣</h3></ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-grid>
        <ion-row class="ion-align-items-start">
          <ion-col>
            <news-item v-for="item in news" :item="item"></news-item>
          </ion-col>
        </ion-row>
      </ion-grid>
        <ion-infinite-scroll @ionInfinite="ionInfinite">
          <ion-infinite-scroll-content></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: linear-gradient(to bottom, #4472FB, #7D9DFC, #B3C6FC, #EBF1FD, #F5F8FE, #FFFFFF);
}

ion-segment {
  --background: var(--ion-background-color);
}

/*ion-list{
  --ion-item-background: #ffffff;
}*/

ion-segment-button::part(native) {
  color: #474747;
}

.segment-button-checked::part(native) {
  color: #ffffff;
}

ion-segment-button {
  --indicator-color: #5b78ec;
  --border-radius: 20px;
  --color-checked: #fff;
}

ion-segment-button::before {
  opacity: 0;
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

</style>
