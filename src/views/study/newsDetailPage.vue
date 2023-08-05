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
  IonItemGroup,
  IonButton,
  IonRadio, IonRadioGroup
} from "@ionic/vue";
import {searchOutline} from 'ionicons/icons';
import {reactive, ref} from "vue";
import LessonItem from "@/views/study/components/lessonItem.vue";
import TecItem from "@/views/study/components/tecItem.vue";
import NewsItem from "@/views/study/components/newsItem.vue";

const items = reactive([""]);

function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};

for (let i = 1; i < 20; i++) {
  items.push("Item " + i);
}


</script>

<template>
  <IonPage>
    <IonHeader class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-text><h1 style="text-align: center;font-weight: 900">8组数据带你看2023年上半年经济活力</h1></ion-text>
      <ion-text color="medium" style="display: block;font-size: 12px">2021-10-10 10:10:10</ion-text>
      <ion-text color="medium" style="display: block;font-size: 12px">来源：中国经济网</ion-text>
<!--      <ion-text color="medium" style="display: block;font-size: 12px">作者：张三</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">阅读量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">评论量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">点赞量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">收藏量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">转发量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">分享量：100</ion-text>-->
<!--      <ion-text color="medium" style="display: block;font-size: 12px">浏览量：100</ion-text>-->
      <ion-text>
        <p style="text-indent: 2em">
          2021年10月9日，国家统计局发布数据显示，2021年前三季度，国内生产总值（GDP）同比增长9.8%，经济运行保持在合理区间，经济增长质量稳步提升，经济活力持续释放。
        </p>
        <p style="text-indent: 2em">
          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产投资（不含农户）同比增长8.9%，增速比1-8月份加快0.1个百分点；全国社会消费品零售总额同比增长18.9%，增速比1-8月份加快0.1个百分点。
        </p>
        <p style="text-indent: 2em">
          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产投资（不含农户）同比增长8.9%，增速比1-8月份加快0.1个百分点；全国社会消费品零售总额同比增长18.9%，增速比1-8月份加快0.1个百分点。
        </p>
        <p style="text-indent: 2em">
          从经济运行的主要指标看，前三季度，全国规模以上工业增加值同比增长10.7%，增速比1-8月份加快0.1个百分点；全国固定资产
        </p>
      </ion-text>

    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
/*ion-segment {
  --background: var(--ion-background-color);
}

!*ion-list{
  --ion-item-background: #ffffff;
}*!

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
}*/

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
</style>