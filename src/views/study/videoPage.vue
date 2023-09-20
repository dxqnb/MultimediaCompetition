<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import Player from "xgplayer";
import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonButton,
  IonInput,
  IonModal,
  IonItem,
  IonSearchbar,
  IonImg,
  IonList,
  IonLabel,
  actionSheetController,
  IonInfiniteScroll, IonInfiniteScrollContent
} from "@ionic/vue";
import {
  chatboxOutline,
  ellipsisHorizontalOutline,
  heart,
  heartOutline,
  searchOutline,
  thumbsUpOutline
} from "ionicons/icons";
import {useRoute} from "vue-router";
import {addJsLike, addJsPlLike, getVideoJs, getVideoJsPl} from "@/api/study";
import * as url from "url";

interface v {
  id?: number,
  title?: string,
  likecount?: string,
  coverimg?: string,
  link?: string,
  avatar?: string,
  lll?: number,
  createBy?: string,
  createTime?: string
}

interface test {
  url: string
}

interface comment {
  "id": number,
  "userid": number,
  "lyid": number,
  "studentname": string,
  "avatar": string,
  "message": string,
  "img": string,
  "likecount": number,
  "createtime": string
}

const list = reactive<v[]>([])
const commentDetailList = reactive<comment[]>([{}])
const id = useRoute().params.id;
const head = ref();
const vs = ref();
const content = ref();
const num = ref(0);
const contentHeight = ref("height: 100vh;width: 100vw;");
const wInnerHeight = ref<number>(0.0);
const vsp = reactive<Player[]>([]);
const scrollEvents = ref(true);
const flag = ref([false, false, false, false, false]);
const isOpen = ref(false);
const video = reactive<test[]>([]);
const createByList = ref(['', '', '', '', ''])
const titleList = ref(['', '', '', '', ''])
const imgList = ref(['', '', '', '', ''])
const likecountList = ref([0, 0, 0, 0, 0])
const commentList = ref([0, 0, 0, 0, 0])

const index = ref(Number(id))
const openIndex = ref(0)
const height = ref(0.0);
onMounted(() => {
  // const vsp = new Player({
  //   el: vs.value,
  //   url: 'https://www.0030.store/5013.MP4',
  //   height: '100%',
  //   width: '100%',
  // })
  // const vsp1 = new Player({
  //   el: vs1.value,
  //   url: 'https://www.0030.store/5013.MP4',
  //   height: '100%',
  //   width: '100%',
  // })
  getVideoJs(index.value, index.value + 5).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      getVideoJsPl(res.data.data[i].id).then((res) => {
        commentList.value[i] = res.data.data.length
      })
      list.push(res.data.data[i])
      createByList.value[i] = res.data.data[i].createBy
      titleList.value[i] = res.data.data[i].title
      imgList.value[i] = res.data.data[i].avatar
      likecountList.value[i] = res.data.data[i].likecount
      video.push({url: res.data.data[i].link})
      vsp.push(new Player({
        el: vs.value[vsp.length],
        url: res.data.data[i].link,
        // height: 'calc(93% - 83px)',
        height: '88%',
        width: '100vw',
        mobile: {
          gestureY: false,
        },
      }))
    }
  })
  // for (let i = 0; i < video.length; i++) {
  //   vsp.push(new Player({
  //     el: vs.value[i],
  //     url: video[i].url,
  //     // height: 'calc(93% - 83px)',
  //     height: '88%',
  //     width: '100vw',
  //     mobile: {
  //       gestureY: false,
  //     },
  //   }))
  // }
  setTimeout(() => {
    // console.log(vs.value)
    wInnerHeight.value = window.innerHeight - head.value.$el.offsetHeight;
    contentHeight.value = `height: ${wInnerHeight.value}px;width: 100vw;`;
    // content.value.$el.scrollToPoint(0, window.innerHeight, 500);
    console.log(head.value.$el.offsetHeight)
  }, 100);
})

function onScroll(event: any) {
  // const scrollElement = event.target.$el;
  // const scrollTop = scrollElement.scrollTop;
  console.log(event.target.detail)
  scrollEvents.value = false;
  if (event.target.detail.deltaY > 150) {
    num.value++;
  } else if (num.value >= 1 && event.target.detail.deltaY < -150) {
    num.value--;
  }
  content.value.$el.scrollToPoint(0, wInnerHeight.value * num.value, 200);
  setTimeout(function () {
    if (event.target.detail.deltaY > 150) {
      vsp[num.value - 1].pause();

    } else if (num.value >= 0 && event.target.detail.deltaY < -150) {
      vsp[num.value + 1].pause();
    }
    vsp[num.value].play();
    scrollEvents.value = true;
  }, 300)
  if (num.value == vs.value.length - 3) {
    console.log('该加载更多了')
  }
  // console.log(event);
}

// function ionInfinite() {
//   getVideoJs(index.value, index.value + 5).then((res) => {
//     for (let i = 0; i < res.data.data.length; i++) {
//       list.push(res.data.data[i])
//       index.value += 5
//       video.push({url: res.data.data[i].link})
//       vsp.push(new Player({
//         el: vs.value[vsp.length],
//         url: res.data.data[i].link,
//         // height: 'calc(93% - 83px)',
//         height: '88%',
//         width: '100vw',
//         mobile: {
//           gestureY: false,
//         },
//       }))
//     }
//   })
// }
function openModal(num: any) {
  openIndex.value = num
  commentDetailList.splice(0, commentDetailList.length);
  getVideoJsPl(list[num].id).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      commentDetailList.push(res.data.data[i])
    }
  })

  isOpen.value = true
}

async function canDismiss() {
  isOpen.value = false
  return true
}

const modal = ref()
</script>

<template>
  <ion-page>
    <IonHeader ref="head" style="background-color: #f7f7f7" collapse="fade" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/technology"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content style="background-color: black" ref="content" :fullscreen="true" :scroll-events="scrollEvents"
                 @ionScrollEnd="onScroll">
      <div :style="contentHeight" v-for="i in 5">
        <div ref="vs"></div>
        <div style="height: 12%; background-color: #0d0d0d;color: #e7e7e7 ;display: flex;position:relative;">
          <div style="position:absolute;top: -30px;color: white;left: 0;padding-left: 20px;font-size: 12px">
            {{ titleList[i - 1] }}
          </div>
          <div style="height: 100%;line-height: 10vh;margin:0 30px;width: 50%;">
            <ion-avatar style="width: 40px;height: 40px;display:inline-block;margin-right: 8px">
              <img :src="imgList[i-1]" style="vertical-align: middle;" alt="">
            </ion-avatar>
            <ion-text style="display: inline-block;font-size: 10px">{{ createByList[i] }}</ion-text>
          </div>
          <div style="width: 50%;line-height: 11vh;text-align: right;padding-right: 20px">
            <ion-icon style="vertical-align: text-bottom;margin-right: 8px;width: 1.5em;height: 1.5em;"
                      :icon="flag[i-1]?heart:heartOutline" :style="flag[i-1]?'color:red':''"
                      @click="()=>{flag[i-1]=!flag[i-1];addJsLike(list[i-1].id)}"></ion-icon>
            <ion-text style="display: inline-block;">
              {{ flag[i - 1] ? Number(likecountList[i - 1]) + 1 : likecountList[i - 1] }}
            </ion-text>
            <ion-icon @click="openModal(i-1)"
                      style="vertical-align: text-bottom;margin-right: 8px;width: 1.5em;height: 1.5em;margin-left: 10px"
                      :icon="chatboxOutline"></ion-icon>
            <ion-text @click="openModal(i-1)" style="display: inline-block;">{{ commentList[i - 1] }}</ion-text>
          </div>
        </div>
      </div>
      <!--      <ion-infinite-scroll @ionInfinite="ionInfinite">-->
      <!--        <ion-infinite-scroll-content></ion-infinite-scroll-content>-->
      <!--      </ion-infinite-scroll>-->
    </ion-content>
    <ion-modal ref="modal" :is-open="isOpen" :showBackdrop="false" :can-dismiss="canDismiss" :initial-breakpoint="0.5"
               :breakpoints="[0, 0.5]">
      <ion-content class="ion-padding vice">
        <ion-text slot="fixed"
                  style="text-align: center;display: block;font-size: 15px;color: #484848;padding-top: 10px ;margin: 0 0 10px 0;top: 0;width: 100%;background-color: #FFFFFF">
          评论&nbsp;{{ commentList[openIndex] }}
        </ion-text>
        <ion-list style="margin-top: 20px;margin-bottom: 70%">
          <ion-item lines="full" class="vice" style="--background: white" v-for="(item,i) in commentDetailList">
            <ion-avatar style="margin-top: 10px" slot="start">
              <ion-img :src="item.avatar"></ion-img>
            </ion-avatar>
            <div>
              <ion-label style="margin-top: 10px">
                <h3>{{ item.studentname }}</h3>
                <p style="font-size: 11px">{{ item.createtime}}</p>
              </ion-label>
              <ion-text style="display: block;font-size: 13px;color: #4A4A4A;margin: 8px 0">
                {{ item.message }}
              </ion-text>
            </div>
          </ion-item>
        </ion-list>
        <div slot="fixed" style="bottom: 50%;left: 0;width: 100%;background-color: #FFFFFF" class="ion-padding">
          <!--          <ion-input @click="modal.$el.setCurrentBreakpoint(0.75)" placeholder="Search"></ion-input>-->
          <ion-text style="display:block;color: #5B78EC;font-size: 15px;font-weight: 500;margin-top: 10px">我的评论
          </ion-text>
          <ion-searchbar class="search" :mode="'md'" search-icon="1"
                         style="--box-shadow: none;--border-radius: 10px;font-size: 13px !important;width: 100%;"
                         placeholder="请输入"></ion-searchbar>
        </div>

      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: black;
}

ion-content.vice::part(background) {
  background: white;
}

ion-item.vice::part(native) {
  align-items: flex-start
}
</style>
<style>
.searchbar-input.sc-ion-searchbar-md {
  padding-left: 6px !important;
  padding-right: 0 !important;
}

ion-modal {
  --height: 100%;
}
</style>