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
const props=defineProps(['item'])
const img = ref();

</script>

<template>
  <ion-card style="margin: 10px 0" @click="$router.push('/study/news/'+item.id)">
    <ion-card-content style="padding: 0">
      <div style="width: 100%;height: 200px;overflow:hidden;">
        <!--        <div style="width: 100%;height: 90%;overflow:hidden;">-->
        <ion-img ref="img" style="width: 100%;overflow:hidden;"
                 :src="item.img"></ion-img>
        <!--        </div>-->
      </div>
      <ion-grid style="padding: 10px 0 15px 0">
        <ion-row>
          <ion-col style="margin-left: 10px;margin-bottom: 0;padding-bottom: 0" size="11">
            <ion-text color="dark"><h2>{{ item.title }}</h2></ion-text>
          </ion-col>
          <ion-col style="white-space: nowrap;margin-left: 10px;margin-top: 0;padding-top: 0" size="4">
            <ion-text style="display: inline-block;font-size: 12px">{{ item.createby }}</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

  </ion-card>
</template>

<style scoped>

</style>