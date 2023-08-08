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
  IonList,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButton,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import schedule from "@/views/study/components/schedule.vue"

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


function getCurDay(num = 0) {
  var datetime = new Date();
  var year = datetime.getFullYear();
  var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
  let day: string | number = datetime.getDate()
  if ((day + num) > 0) {
    day = (day + num) < 10 ? "0" + (datetime.getDate() + num) : datetime.getDate() + num;
  } else {
    day = (day - num) < 10 ? "0" + (datetime.getDate() - num) : datetime.getDate() - num;
  }
  return `${year}-${month}-${day}`
}

const timePeriodList = ref([
  {
    timePeriod: '1',
    schedule: [
      {
        isExpend: false,
        [getCurDay()]: [
          {
            timePeriod: '8:00~10:00',
            date: getCurDay(),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 1,
          },
          {
            timePeriod: '8:00~10:00',
            date: getCurDay(),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 2,
          },
          {
            timePeriod: '8:00~10:00',
            date: getCurDay(),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 3,
          },
        ],
      },
      {
        isExpend: false,
        [getCurDay(-1)]: [
          {
            id: 1,
            timePeriod: '8:00~10:00',
            date: getCurDay(-1),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 1,
          },
        ]
      }
    ]
  },
  {
    timePeriod: '2',
    schedule: [
      {
        isExpend: false,
        [getCurDay()]: [
          {
            timePeriod: '12:00~14:00',
            date: getCurDay(),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 2,
          },
          {
            timePeriod: '12:00~14:00',
            date: getCurDay(),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 3,
          },
        ],
      },
      {
        isExpend: false,
        [getCurDay(-1)]: [
          {
            timePeriod: '12:00~14:00',
            date: getCurDay(-1),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 1,
          },
          {
            timePeriod: '实验室1',
            date: getCurDay(-1),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 1,
          },
          {
            timePeriod: '实验室1',
            date: getCurDay(-1),
            course: '大学英语',
            watchman: '井底的蜗牛',
            place: '测试地点',
            status: 1,
          },
        ]
      }
    ]
  },
  {
    timePeriod: '3',
    schedule: []
  },
])

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>我的课表</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">

      <div style="margin-top: 40px">
        <schedule :planList="timePeriodList" :isFirstDayOfMondayOrSunday="5" :hasNumExpend="3">
                    <template v-slot:thing="{row}">
                      <span>时段：{{ row.timePeriod }}</span>
                      <span>课程：{{ row.course }}</span>
                      <span>值班员：{{ row.watchman }}</span>
                      <span>地点：{{ row.place }}</span>
                    </template>
        </schedule>
      </div>
    </ion-content>
  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: #f1f1f1;
}

.item-lines-full {
  --border-width: 0.55px 0px 0px 0px;
}

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-button.topButton {
  --ion-color-base: #E3E7FF !important;
  --ion-color-contrast: #4257DF !important;
}
</style>