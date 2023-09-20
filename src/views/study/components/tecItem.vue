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
const props = defineProps(['item',"title", 'index','imgUrl','avatar','link','createBy','createTime','likeCount']);
const img = ref();
const style = ref("width: 100%;overflow: hidden;position: relative;");
const height = ref("height: 150px;");
onMounted(() => {
  setTimeout(() => {
    let he = 100 + 50 * +Math.random() * 2;
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
      <div :style="style+height" @click="$router.push('/study/video/'+item.id)">
        <ion-img ref="img" style="height: 100%;object-fit: cover;" :src="imgUrl"></ion-img>
        <!--        <ion-button style="position: absolute;bottom: 0;right: 0;" id="left-start"><ion-icon :icon="ellipsisVerticalOutline"></ion-icon></ion-button>-->
        <!--        <ion-popover trigger="left-start" side="left" alignment="start">-->
        <!--          <ion-content class="ion-padding">Hello World!</ion-content>-->
        <!--        </ion-popover>-->
        <ion-select style="width: 25px;position: absolute;bottom: 0;right: 0;" mode="ios" :value="null" aria-label=""
                    interface="popover" placeholder="" expandedIcon="null">
          <ion-icon slot="label" :icon="ellipsisVerticalOutline"></ion-icon>
          <ion-select-option>点赞</ion-select-option>
          <ion-select-option>收藏</ion-select-option>
          <ion-select-option value="test">test</ion-select-option>
        </ion-select>
      </div>
      <ion-grid>
        <ion-row>
          <ion-col size="8">
            <div style="white-space: nowrap;">
              <ion-avatar style="width: 20px;height: 20px;display:inline-block;margin-right: 8px">
                <img :src="avatar" style="vertical-align: middle;" alt="">
              </ion-avatar>
              <ion-text style="display: inline-block;font-size: 10px;width: 70%;overflow: hidden">{{ title }}</ion-text>
            </div>
          </ion-col>
          <ion-col style="white-space: nowrap;" size="4">
            <ion-icon style="vertical-align: middle;margin-right: 8px;color: #6e6e6e" :icon="thumbsUpOutline"></ion-icon>
            <ion-text style="display: inline-block;font-size: 12px;color: #6e6e6e">{{ likeCount }}</ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

  </ion-card>
</template>

<style scoped>

</style>