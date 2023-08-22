<script setup lang="ts">
import {IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonText, useIonRouter} from "@ionic/vue";
import {chevronForwardOutline} from "ionicons/icons";
import {ref} from "vue";
const searchIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\">\n" +
    "  <path id=\"路径_97\" data-name=\"路径 97\" d=\"M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z\" fill=\"#fff\"/>\n" +
    "  <g id=\"streamlinehq-interface-search-visual-_flat-48-ico_Pzis8eLA07WrzaGr\" data-name=\"streamlinehq-interface-search-visual-          flat-48-ico_Pzis8eLA07WrzaGr\" transform=\"translate(3.5 4.5)\" style=\"isolation: isolate\">\n" +
    "    <path id=\"Vector\" d=\"M10.541,8.409l.241.193c.529.422,1.051.838,1.565,1.3a1.085,1.085,0,0,1,.091,1.631q-.1.1-.221.217t-.226.213a1.189,1.189,0,0,1-1.7-.087c-.48-.495-.913-1-1.351-1.505l-.2-.232a5.848,5.848,0,0,1-3.036.84A5.6,5.6,0,0,1,0,5.489,5.6,5.6,0,0,1,5.707,0a5.6,5.6,0,0,1,5.707,5.489A5.31,5.31,0,0,1,10.541,8.409Z\" transform=\"translate(4.793 4.667)\" fill=\"#ffe36d\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-2\" data-name=\"Vector\" d=\"M3.293,0A3.232,3.232,0,0,1,6.585,3.167,3.232,3.232,0,0,1,3.293,6.333,3.232,3.232,0,0,1,0,3.167,3.232,3.232,0,0,1,3.293,0Z\" transform=\"translate(7.207 6.989)\" fill=\"#fffbdd\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-3\" data-name=\"Vector\" d=\"M6.585,1.023A1.074,1.074,0,0,1,5.521,2.111l-2.771.081a.5.5,0,0,0-.472.453L2.195,5.31a1.08,1.08,0,0,1-1.13,1.023A1.074,1.074,0,0,1,0,5.246L.086,2.562q0-.015,0-.03A2.654,2.654,0,0,1,2.633.083h.031L5.455,0A1.08,1.08,0,0,1,6.585,1.023Z\" transform=\"translate(1.5 1.5)\" fill=\"#ffdf53\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-4\" data-name=\"Vector\" d=\"M5.521,0A1.074,1.074,0,0,1,6.585,1.088L6.5,3.772q0,.015,0,.03A2.654,2.654,0,0,1,3.953,6.25H3.921l-2.791.082a1.056,1.056,0,1,1-.067-2.11l2.771-.081a.5.5,0,0,0,.472-.453l.084-2.665A1.08,1.08,0,0,1,5.521,0Z\" transform=\"translate(14.671 14.167)\" fill=\"#ffdf53\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-5\" data-name=\"Vector\" d=\"M0,1.023A1.074,1.074,0,0,0,1.064,2.111l2.771.081a.5.5,0,0,1,.472.453L4.391,5.31a1.1,1.1,0,0,0,2.194-.064L6.5,2.562q0-.015,0-.03A2.654,2.654,0,0,0,3.953.083H3.922L1.131,0A1.08,1.08,0,0,0,0,1.023Z\" transform=\"translate(14.671 1.5)\" fill=\"#ffdf53\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-6\" data-name=\"Vector\" d=\"M1.064,0A1.074,1.074,0,0,0,0,1.088L.086,3.772q0,.015,0,.03A2.654,2.654,0,0,0,2.633,6.25h.031l2.791.082a1.056,1.056,0,1,0,.067-2.11L2.751,4.142a.5.5,0,0,1-.472-.453L2.195,1.023A1.08,1.08,0,0,0,1.064,0Z\" transform=\"translate(1.5 14.167)\" fill=\"#ffdf53\" style=\"isolation: isolate\"/>\n" +
    "  </g>\n" +
    "</svg>\n");
const refreshIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\">\n" +
    "  <path id=\"路径_97\" data-name=\"路径 97\" d=\"M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z\" fill=\"#fff\"/>\n" +
    "  <g id=\"streamlinehq-interface-arrows-synchronize-_flat-48-ico_GN5YOoIRNzxqfcyY\" data-name=\"streamlinehq-interface-arrows-synchronize-          flat-48-ico_GN5YOoIRNzxqfcyY\" transform=\"translate(5.611 5.509)\" style=\"isolation: isolate\">\n" +
    "    <path id=\"Vector\" d=\"M7.274.005a8.061,8.061,0,0,0-5.49,13.079c-.307.282-.558.525-.76.732a.851.851,0,0,0-.225.872.865.865,0,0,0,.7.567,24.715,24.715,0,0,0,3.1.281A1.206,1.206,0,0,0,5.833,14.5a24.811,24.811,0,0,0,.261-3.075.871.871,0,0,0-.443-.8.862.862,0,0,0-.908.072c-.217.149-.47.331-.76.551A5.2,5.2,0,0,1,7.152,2.911a1.211,1.211,0,0,0,.979-.753A3.885,3.885,0,0,0,8.339.906.932.932,0,0,0,7.274.005Z\" transform=\"translate(1.389 1.491)\" fill=\"#a499ff\" style=\"isolation: isolate\"/>\n" +
    "    <path id=\"Vector-2\" data-name=\"Vector\" d=\"M1.065,15.531A8.049,8.049,0,0,0,7.258,11.54a8.061,8.061,0,0,0-.7-9.088c.307-.282.558-.525.76-.732A.851.851,0,0,0,7.54.848a.865.865,0,0,0-.7-.567A24.711,24.711,0,0,0,3.744,0,1.206,1.206,0,0,0,2.506,1.039a24.811,24.811,0,0,0-.261,3.075.871.871,0,0,0,.443.8A.862.862,0,0,0,3.6,4.839c.217-.149.47-.331.76-.551a5.2,5.2,0,0,1,.422,5.819,5.183,5.183,0,0,1-3.591,2.518,1.211,1.211,0,0,0-.979.753A3.885,3.885,0,0,0,0,14.63.932.932,0,0,0,1.065,15.531Z\" transform=\"translate(9.173 2.005)\" fill=\"#beb6ff\" style=\"isolation: isolate\"/>\n" +
    "  </g>\n" +
    "</svg>\n");
const rankIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"62\" height=\"62\" viewBox=\"0 0 62 62\">\n" +
    "  <g id=\"组_863\" data-name=\"组 863\" transform=\"translate(-5305 -2563)\">\n" +
    "    <path id=\"路径_108\" data-name=\"路径 108\" d=\"M31,31,0,31A31,31,0,1,0,31,0,31,31,0,0,0,0,31Z\" transform=\"translate(5305 2563)\" fill=\"none\"/>\n" +
    "    <path id=\"路径_109\" data-name=\"路径 109\" d=\"M231.335,422.3h8.473a2.479,2.479,0,0,1,2.414,2.54v12.051a2.479,2.479,0,0,1-2.414,2.54h-8.473Zm-15.052-4.88h-7.952a2.479,2.479,0,0,0-2.414,2.54v16.931a2.479,2.479,0,0,0,2.414,2.54h7.952Z\" transform=\"translate(5111.93 2170.447)\" fill=\"#e0b94c\" opacity=\"0.59\"/>\n" +
    "    <path id=\"路径_110\" data-name=\"路径 110\" d=\"M368.736,256.318a3.375,3.375,0,0,1,3.436-3.311h10.657a3.375,3.375,0,0,1,3.436,3.311V284.1H368.736Z\" transform=\"translate(4958.333 2325.779)\" fill=\"#e0b94c\"/>\n" +
    "    <path id=\"路径_111\" data-name=\"路径 111\" d=\"M429.863,488.663a.747.747,0,0,1,1.192,0l1.517,2.008a.747.747,0,0,0,.352.256l2.378.822a.747.747,0,0,1,.368,1.134l-1.441,2.063a.746.746,0,0,0-.134.414l-.047,2.516a.747.747,0,0,1-.965.7l-2.407-.733a.748.748,0,0,0-.435,0l-2.407.733a.747.747,0,0,1-.964-.7l-.047-2.516a.747.747,0,0,0-.135-.414l-1.441-2.063a.747.747,0,0,1,.368-1.134l2.378-.822a.746.746,0,0,0,.352-.256Z\" transform=\"translate(4905.469 2104.031)\" fill=\"#ffeab0\"/>\n" +
    "  </g>\n" +
    "</svg>\n");

const router = useIonRouter();
</script>

<template>
  <div>
    <ion-grid style="flex-wrap: nowrap;display: flex;padding: 0">
      <ion-col>
        <ion-card class="inner"
                  style="background: url('https://www.0030.store/button1.png');background-size: cover"
                  @click="$router.push('/team/groupTeam')">
          <ion-card-content>
            <!--              <ion-text style="font-size: 16px;background: -webkit-linear-gradient(bottom,#6D99FF,#6D99FF,#6D99FF);-webkit-background-clip: text;-webkit-text-fill-color: transparent">-->
            <ion-text style="font-size: 16px;font-weight: 900; color: #E09008">
              发现学友团
              <p style="font-size: 12px;color: #BE9638">
                志同道合
              </p>
              <p style="font-size: 12px;color: #BE9638">
                一起进步
              </p>
            </ion-text>
            <ion-icon class="bottom" aria-hidden="true" :icon="searchIcon" />
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="inner"
                  style="background: url('https://www.0030.store/button2.png') ;background-size: cover"
                  @click="$router.push('/study/news')">
          <ion-card-content>
            <ion-text style="font-size: 16px;font-weight: 900; color: #786BB0">
              摇一摇
              <p style="font-size: 12px;color: #8074B7">
                随机匹配
              </p>
            </ion-text>
            <ion-icon class="bottom" aria-hidden="true" :icon="refreshIcon"/>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card class="inner"
                  style=""
                  @click="$router.push('/team/ranking')">
          <ion-card-content>
            <ion-text style="font-size: 16px;font-weight: 900;color: #EAA720">排行榜
              <p style="font-size: 12px;color: #EAA720">
                数据更新
              </p>
            </ion-text>
            <ion-icon aria-hidden="true" :icon="rankIcon" style="width: 62px; height: 62px;position: absolute;right: 0;bottom: 0;"/>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-grid>
  </div>
</template>

<style scoped>
ion-col {
  padding: 0;
}

ion-card.inner {
  position: relative;
  width: 95%;
  display: inline-block;
  height: 80px;
  border-radius: 13px;
}

ion-card {
  margin: 0;
}

ion-card.inner ion-card-content {
  height: 100%;
}

ion-text {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 14px;
  font-weight: bold;
  vertical-align: bottom;
}

ion-icon.right {
  vertical-align: bottom;
}

.card-content-ios {
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}

ion-icon.bottom {
  vertical-align: bottom;
  position: absolute;
  bottom: 8px;
  right: 12px;
  height: 30px;
  width: 30px;
}
</style>