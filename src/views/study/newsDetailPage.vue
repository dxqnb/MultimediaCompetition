<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonText,
  IonImg,
  IonLabel,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonInfiniteScroll,
  IonRefresher,
  IonRefresherContent,
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup, toastController
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {addYwLike, getVideoYw} from "@/api/study";

interface news {
  id: number,
  title: string,
  ly: string,
  img: string,
  content: string,
  likecount: number,
  lll: number,
  avatar: string,
  createby: string,
  createtime: string
}

const isLike = ref(false)
const route = useRoute()
const newItem = ref<news>({
  id: 0,
  title: "",
  ly: "",
  img: "",
  content: "",
  likecount: 0,
  lll: 0,
  avatar: "",
  createby: "",
  createtime: ""
})
const id = route.params.id
getVideoYw(id, id).then((res) => {
  newItem.value = res.data.data[0]
})

function like() {
  addYwLike(id).then(async (res) => {
    const toast = await toastController.create({
      message: '点赞成功'
    })
    isLike.value = true
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
  })
}
</script>

<template>
  <IonPage>
    <IonHeader style="background: #FFFFFF" class="ion-no-border ion-padding">
      <IonToolbar style="--background: white">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/study/news"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-text><h1 style="text-align: center;font-weight: 900">{{ newItem.title }}</h1></ion-text>
      <ion-text color="medium" style="display: block;font-size: 12px;padding-left: 20px">{{ newItem.createtime }}
      </ion-text>
      <ion-text color="medium" style="display: block;font-size: 12px;padding-left: 20px">{{
          newItem.createby
        }}
      </ion-text>
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">作者：张三</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">阅读量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">评论量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">点赞量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">收藏量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">转发量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">分享量：100</ion-text>-->
      <!--      <ion-text color="medium" style="display: block;font-size: 12px">浏览量：100</ion-text>-->
      <ion-text style="text-indent: 2em">
        <p v-html="newItem.content"></p>
      </ion-text>
      <ion-img :src="newItem.img"></ion-img>
      <!--        <p style="text-indent: 2em">-->
      <!--          2021年10月9日，国家统计局发布数据显示，2021年前三季度，国内生产总值（GDP）同比增长9.8%，经济运行保持在合理区间，经济增长质量稳步提升，经济活力持续释放。-->
      <!--        </p>-->
      <!--        <p style="text-indent: 2em">-->
      <!--          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产投资（不含农户）同比增长8.9%，增速比1-8月份加快0.1个百分点；全国社会消费品零售总额同比增长18.9%，增速比1-8月份加快0.1个百分点。-->
      <!--        </p>-->
      <!--        <p style="text-indent: 2em">-->
      <!--          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产投资（不含农户）同比增长8.9%，增速比1-8月份加快0.1个百分点；全国社会消费品零售总额同比增长18.9%，增速比1-8月份加快0.1个百分点。-->
      <!--        </p>-->
      <!--        <p style="text-indent: 2em">-->
      <!--          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产-->
      <!--        </p>-->
      <!--      </ion-text>-->
      <div style="display: flex;justify-content: space-between;margin: 30px 0">
        <div
            style="background: #F5F5F5;width: 46%;text-align: center;height: 32px;line-height: 32px;color: #B9B9B9;font-size: 10px">
          阅读 {{ newItem.lll }}
        </div>
        <div :style="isLike?'color:#ff4b4b':'color:#B9B9B9'"
             style="background: #F5F5F5;width: 46%;text-align: center;height: 32px;line-height: 32px;font-size: 10px"
             @click="!isLike?like():null">点赞 {{ isLike ? newItem.likecount + 1 : newItem.likecount }}
        </div>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">

ion-content::part(background) {
  background: linear-gradient(to bottom, #F7F8F9, white)
}

.item {
  background-color: #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  //height: calc(100px + 50 * +Math.random()*10);
}

.segment-button-indicator.segment-button-indicator-animated {
  display: none;
}

ion-text > p {
  font-size: 16px !important;
}
</style>