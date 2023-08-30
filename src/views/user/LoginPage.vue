<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonChip,
  IonRange,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonTitle, createAnimation
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  chevronForwardOutline,
  star,
  starOutline,
  addOutline,
  chevronDownOutline
} from "ionicons/icons";
import {onMounted, ref} from "vue";

</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <ion-icon style="width: 51px;height: 51px;" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51" height="51" viewBox="0 0 51 51">
  <defs>
    <pattern id="pattern" width="1" height="1" viewBox="-10.28 -7.992 71.561 71.561">
      <image preserveAspectRatio="xMidYMid slice" width="51" height="55.577" xlink:href="data:image/jpeg;base64,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"/>
    </pattern>
  </defs>
  <g id="组_238" data-name="组 238" transform="translate(1195.021 -207.979)">
    <rect id="屏幕截图_2023-07-06_142526" data-name="屏幕截图 2023-07-06 142526" width="51" height="51" rx="18" transform="translate(-1195.021 207.979)" fill="#fff"/>
    <rect id="屏幕截图_2023-07-06_142526-2" data-name="屏幕截图 2023-07-06 142526" width="51" height="51" rx="18" transform="translate(-1195.021 207.979)" fill="url(#pattern)"/>
  </g>
</svg>
'></ion-icon>
      <ion-text style="font-size: 30px;color: #FFFFFF;font-weight: bold">校园智U</ion-text>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/loginBackground.png") no-repeat top left;
  background-size: cover;
}


ion-toolbar {
  --background: transparent;
}

</style>