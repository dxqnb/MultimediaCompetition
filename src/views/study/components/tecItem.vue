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
const style = ref("width: 100%;overflow: hidden;position: relative;");

const height = ref("height: 150px;");
onMounted(() => {
  setTimeout(() => {
    console.log(img.value.offsetHeight)
    let he = 100 + 50 * +Math.random() * 2;
    console.log(he)
    if (he > img.value.offsetHeight) {
      height.value = "height: " + img.value.offsetHeight + "px;";
    } else {
      height.value = "height: " + he + "px;";
    }
  }, 50)
})

</script>

<template>
  <ion-card style="margin: 10px 0">
    <ion-card-content style="padding: 0">
      <div :style="style+height">
        <ion-img ref="img" style="width: 100%;" src="https://www.0030.store/%E5%9F%BA%E6%9C%AC%E7%A7%AF%E5%88%86%E5%85%AC%E5%BC%8F.jpeg"></ion-img>
        <!--        <ion-button style="position: absolute;bottom: 0;right: 0;" id="left-start"><ion-icon :icon="ellipsisVerticalOutline"></ion-icon></ion-button>-->
        <!--        <ion-popover trigger="left-start" side="left" alignment="start">-->
        <!--          <ion-content class="ion-padding">Hello World!</ion-content>-->
        <!--        </ion-popover>-->
        <ion-select style="width: 25px;position: absolute;bottom: 0;right: 0;" mode="ios" :value="null" aria-label=""
                    interface="popover" placeholder="" expandedIcon="null">
          <ion-icon slot="label" :icon="ellipsisVerticalOutline"></ion-icon>
          <ion-select-option>Apples</ion-select-option>
          <ion-select-option>Oranges</ion-select-option>
          <ion-select-option value="test">Bananas</ion-select-option>
        </ion-select>
      </div>
      <ion-grid>
        <ion-row>
          <ion-col size="8">
            <div style="white-space: nowrap;">
              <ion-avatar style="width: 20px;height: 20px;display:inline-block;margin-right: 8px">
                <img src="https://www.0030.store/favicon.png" style="vertical-align: middle;" alt="">
              </ion-avatar>
              <ion-text style="display: inline-block;font-size: 10px">技术大牛</ion-text>
            </div>
          </ion-col>
          <ion-col style="white-space: nowrap;" size="4">
            <ion-icon style="vertical-align: middle;margin-right: 8px" :icon="thumbsUpOutline"></ion-icon>
            <ion-text style="display: inline-block;font-size: 8px">256</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

  </ion-card>
</template>

<style scoped>

</style>