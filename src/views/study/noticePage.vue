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


function handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};



</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/study"></ion-back-button>
        </ion-buttons>
        <IonTitle>通知公告</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <div style="width: 100%;" slot="fixed">
        <ion-item lines="full">
          <ion-label style="font-size: 14px;text-align: center;position: absolute;top: 0;width: 100%;left: 0">
            开启推送通知，重要消息不错过
          </ion-label>
          <ion-button class="topButton" slot="end" size="small" color="primary">去开启</ion-button>
        </ion-item>
      </div>
      <div style="margin-top: 40px">
        <ion-card style="margin: 10px ">
          <ion-card-content>
            <ion-list>
              <ion-item lines="none">
                <ion-thumbnail style="position: relative" slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                  <ion-badge style="position: absolute;top: -10%;right: -20%;" color="danger">2</ion-badge>
                </ion-thumbnail>
                <ion-label>
                  <h2 style="line-height: 200%">系统消息</h2>
                  <p>新成就达成通知</p>
                </ion-label>
              </ion-item>
            </ion-list>
            <ion-label style="font-size: 12px;color: #999999;position: absolute;top: 25px;right: 20px;">9:20</ion-label>

          </ion-card-content>
        </ion-card>
        <ion-card style="margin: 10px ">
          <ion-card-content>
            <ion-list>
              <ion-item lines="none">
                <ion-thumbnail style="position: relative" slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                  <ion-badge style="position: absolute;top: -10%;right: -20%;" color="danger">2</ion-badge>
                </ion-thumbnail>
                <ion-label>
                  <h2 style="line-height: 200%">系统消息</h2>
                  <p>新成就达成通知</p>
                </ion-label>
              </ion-item>
            </ion-list>
            <ion-label style="font-size: 12px;color: #999999;position: absolute;top: 25px;right: 20px;">9:20</ion-label>

          </ion-card-content>
        </ion-card>

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