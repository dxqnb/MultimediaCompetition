<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonLabel,
  IonButton,
  IonImg,
  IonText,
  IonAvatar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import {ellipsisVerticalOutline, thumbsUpOutline} from 'ionicons/icons';
import {onMounted, ref} from "vue";
import {tr} from "vuetify/locale";

const img = ref();

</script>

<template>
  <ion-card style="margin: 10px 0">
    <ion-card-content style="padding: 0">
      <div style="width: 100%;height: 200px;overflow:hidden;">
        <!--        <div style="width: 100%;height: 90%;overflow:hidden;">-->
        <ion-img ref="img" style="width: 100%;overflow:hidden;"
                 src="https://www.0030.store/%E5%9F%BA%E6%9C%AC%E7%A7%AF%E5%88%86%E5%85%AC%E5%BC%8F.jpeg"></ion-img>
        <!--        </div>-->
      </div>
      <ion-grid style="padding: 10px 0 15px 0">
        <ion-row>
          <ion-col style="margin-left: 10px" size="11">
            <ion-text color="dark"><h2>8组数据带你看2023年上半年经济活力</h2></ion-text>
          </ion-col>
          <ion-col style="white-space: nowrap;margin-left: 10px" size="4">
            <ion-text style="display: inline-block;font-size: 8px">新华网</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

  </ion-card>
</template>

<style scoped>

</style>