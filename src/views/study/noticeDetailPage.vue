<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonText,
  IonAvatar,
  IonFooter,
  IonSearchbar,
  IonButton,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import * as marked from "marked";
import dayjs from "dayjs";

const text = marked.parse('### Marked in the browser\n\nRendered by **marked**.');
const blank = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9.274" height="6.601" viewBox="0 0 9.274 6.601">\n' +
    '  <g id="Icon" transform="translate(-2.902 -4.902)" style="isolation: isolate">\n' +
    '    <path id="Icon-2" data-name="Icon" d="M7.577,0l-5,5.152L0,2.425" transform="translate(3.75 5.75)" fill="none" stroke="#7ea9ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>\n');
const sentBar = ref('')
const content = ref()
const remoteMassage = ref([
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我是小明，很高兴认识你')
      }
    ]
)
const myMassage = ref([
      {
        time: '7-19 16:59',
        text: marked.parse('### Marked in the browser\n\nRendered by **marked**.')
      },
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我也很高兴认识你')
      },
    ]
)

function sentEvent() {
  if (sentBar.value === '') {
    return
  }
  console.log(myMassage.value[myMassage.value.length - 1].time.substring(0, 2))
  myMassage.value.push({
    time: !myMassage.value[myMassage.value.length - 1].time.includes(' ') ? myMassage.value[myMassage.value.length - 1].time.substring(0, 2) == dayjs().format('HH:mm').substring(0, 2)||myMassage.value[myMassage.value.length - 1].time=='' ? '' : dayjs().format('HH:mm') : dayjs().format('HH:mm'),
    text: marked.parse(sentBar.value)
  })
  sentBar.value = ''
  content.value.$el.scrollToBottom(300)
}
</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>{{ $route.params.id }}</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" ref="content">
      <div class="ion-padding">
        <ion-text style="width: 100%;text-align: center;color: #2A2A2A;font-size: 20px;font-weight: 900;display: block">关于宿舍区整体网络升级改造的公告</ion-text>
        <ion-item lines="none" style="--background: #f1f1f1;padding:10px 0;border-bottom: 1px solid rgba(112,112,112,0.2);margin-bottom: 10px">
          <ion-avatar style="margin: 10px;"><img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"></ion-avatar>
          <div>
            <ion-text style="display: block;color: #2A2A2A;font-size: 14px">刘晓晓</ion-text>
            <ion-text style="color: #A8A8A8;font-size: 12px">09月19日&nbsp;&nbsp;18:19&nbsp;发布</ion-text>
          </div>
        </ion-item>
        <div style="margin: 20px">
          各位同学：

我校现有生活区的网络系统建于2014年7月，网络设备与线缆逐渐老化，故障率增高等问题日益严重，而且宿舍区WIFI无线系统基本瘫痪。近年来，学校与运营商协调，对网络系统进行修补与调整，调整期间，运营商邀请部分学生参与了网络测试体验。
学校与中国移动、中国电信等运营商进行多轮沟通后，将于今年暑期对学校所有宿舍楼的网络进行一次全面的升级改造，铺设光纤进入学生宿舍，有线、WIFI无线设备均安装房间内，提升网络效能。
为了顺利地开展网络系统的改造升级工作，现做出以下几点重要的提示：
1、带离贵重物品。2023年7月、8月间，宿舍网络改造工程施工过程中，需要进入每一间宿舍，在假期离校前，请务必将贵重物品（如现金、银行卡、笔记本电脑、运动装备、限量版的衣物鞋等）带离，床上用品、书籍及其它物品打包妥善存放并上锁。
2、新改造的宿舍网将支持更高速的网络，提供更多样网络服务产品，包括：不同运营商的多种带宽速率与多种同时接入终端数量（有线或WIFI无线）等多样的组合套餐产品，基础网络套餐保持价格不变，其他网络产品价格不高于在甬高校的平均水平。
3、宿舍网使用过程中有任何问题可拨打信息呼叫中心电话86328890（电信、移动短号681890）进行咨询、解决。
最后，感谢您对宿舍网升级改造工作的理解与支持。
浙江纺织服装职业技术学院
                                                                                                                                                                                                               2023年6月12日
        </div>
      </div>
      <div style="width: 100%;background-color: #FFFFFF;padding: 20px;">
        <ion-button style="width: 100%;--background: #ECF4FF;font-size: 12px;--color: #7EA9FF;" disabled>已读 334,901&nbsp;<ion-icon :icon="blank" style="width: 12px;"></ion-icon></ion-button>
        <div style="width: 100%;text-align: center;font-size: 10px;color: #C2C2C2;margin: 15px 0;">已经到底啦~</div>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped>
.time {
  width: 100%;
  padding-bottom: 1em;
}

.text {
  display: flex;
}

ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: #f1f1f1;
}

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.button-disabled{
  opacity: 1;
}
</style>