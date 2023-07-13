<script setup lang="ts">

import {IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonLabel, IonText} from "@ionic/vue";
import {chevronForwardOutline} from "ionicons/icons";
import {ref} from "vue";

const firstIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"30\" height=\"30.025\" viewBox=\"0 0 30 30.025\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#5d7be5\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#a7aaf6\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <g id=\"组_264\" data-name=\"组 264\" transform=\"translate(-49.711 0)\">\n" +
    "    <path id=\"路径_42\" data-name=\"路径 42\" d=\"M79.329,10.083a2.172,2.172,0,0,0-.462-.462L66,.442A2.168,2.168,0,0,0,63.445.395L50.705,9.1a2.312,2.312,0,0,0-.955,1.495,2.242,2.242,0,0,0,.381,1.732,2.216,2.216,0,0,0,.571.571l14.044,9.431L74.891,15.5v5.646a1.643,1.643,0,0,1-1,.924l-.128.047L65.67,28.006a1.659,1.659,0,0,1-1.91.031l-9.637-6.57a1.745,1.745,0,0,1-.73-1.417v-.431a.378.378,0,0,1,.206-.349.343.343,0,0,1,.365,0l10.289,7.012a.846.846,0,1,0,.955-1.4L54.9,17.875a2.04,2.04,0,0,0-2.147-.078,2.087,2.087,0,0,0-1.083,1.872v.381a3.419,3.419,0,0,0,1.448,2.8L62.8,29.434a3.409,3.409,0,0,0,1.891.59,3.577,3.577,0,0,0,1.957-.606l7.905-5.758A3.341,3.341,0,0,0,76.53,21.6l.047-.128V14.424l2.244-1.479.016-.016a1.97,1.97,0,0,0,.843-1.3,2.032,2.032,0,0,0-.349-1.541Zm-1.32,1.239a.38.38,0,0,1-.128.19l-2.435,1.607a.493.493,0,0,0-.19.1L64.746,20.275,51.672,11.511a.773.773,0,0,1-.159-.159.589.589,0,0,1-.1-.462.654.654,0,0,1,.256-.4L64.4,1.777a.5.5,0,0,1,.59.016L77.885,11l.062.062a.281.281,0,0,1,.062.256Z\" fill=\"url(#linear-gradient)\"/>\n" +
    "    <path id=\"路径_43\" data-name=\"路径 43\" d=\"M515.668,183.552l-6.607-4.708a.462.462,0,0,0-.741.362v9.436a.468.468,0,0,0,.741.379l6.607-4.708a.473.473,0,0,0,0-.762Z\" transform=\"translate(-445.505 -173.718)\" fill=\"url(#linear-gradient)\"/>\n" +
    "  </g>\n" +
    "</svg>\n");
const secondIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"29.887\" height=\"24.541\" viewBox=\"0 0 29.887 24.541\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#607de6\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#b7b5fa\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <path id=\"路径_34\" data-name=\"路径 34\" d=\"M93.721,174.385v-7.418c0-.01.005-.017.005-.026s-.005-.017-.005-.026v-5.849A1.067,1.067,0,0,0,92.654,160H64.912a1.067,1.067,0,0,0-1.067,1.067v5.849c0,.01-.005.017-.005.026s.005.016.005.026v7.418c0,.01-.005.017-.005.026s.005.016.005.026v9.037a1.067,1.067,0,0,0,1.067,1.067H92.654a1.067,1.067,0,0,0,1.067-1.067v-9.037c0-.01.005-.017.005-.026S93.721,174.394,93.721,174.385Zm-18.672-1.041v-5.335h6.935v5.335Zm6.935,2.134v6.929H75.049v-6.929Zm-16-7.469h6.935v5.335H65.979Zm18.139,0h7.469v5.335H84.118Zm7.469-5.875v3.741H65.979v-3.741ZM65.979,175.478h6.935v6.929H65.979Zm18.139,6.929v-6.929h7.469v6.929Z\" transform=\"translate(-63.84 -160)\" fill=\"url(#linear-gradient)\"/>\n" +
    "</svg>\n");
const thirdIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"29\" height=\"20.471\" viewBox=\"0 0 29 20.471\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#5f7ce5\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#c9c1fe\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <path id=\"路径_41\" data-name=\"路径 41\" d=\"M175.992,267.081a1.706,1.706,0,0,0-1.706,1.706v8.529a1.706,1.706,0,1,0,3.412,0v-8.529A1.706,1.706,0,0,0,175.992,267.081Zm8.529-8.529a1.706,1.706,0,0,0-1.706,1.706v17.059a1.706,1.706,0,1,0,3.412,0V260.258A1.706,1.706,0,0,0,184.521,258.552Zm8.529,3.412a1.706,1.706,0,0,0-1.706,1.706v13.647a1.706,1.706,0,1,0,3.412,0V263.67A1.706,1.706,0,0,0,193.051,261.964Zm8.529,8.529a1.705,1.705,0,0,0-1.706,1.706v5.118a1.706,1.706,0,1,0,3.412,0V272.2A1.705,1.705,0,0,0,201.58,270.493Z\" transform=\"translate(-174.286 -258.552)\" fill=\"url(#linear-gradient)\"/>\n" +
    "</svg>\n");
const fourthIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"30.948\" height=\"25.339\" viewBox=\"0 0 30.948 25.339\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#607de6\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#9ea5f4\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <path id=\"路径_40\" data-name=\"路径 40\" d=\"M16.241,13.135a7.16,7.16,0,1,0-7.892,0A11.957,11.957,0,0,0,0,24.424a.921.921,0,0,0,1.836,0A10.29,10.29,0,0,1,12.295,14.331,10.29,10.29,0,0,1,22.754,24.424a.921.921,0,0,0,1.836,0,11.957,11.957,0,0,0-8.349-11.289ZM6.97,7.171A5.324,5.324,0,1,1,12.295,12.5,5.324,5.324,0,0,1,6.97,7.171ZM29.752,22.947a1.2,1.2,0,1,1-1.2,1.2,1.2,1.2,0,0,1,1.2-1.2ZM30.5,21.16a.879.879,0,1,1-1.758,0,7.484,7.484,0,0,0-7.547-7.406.879.879,0,0,1-.879-.879.865.865,0,0,1,.612-.823.83.83,0,0,1,.352-.077,5.1,5.1,0,1,0,0-10.2.879.879,0,1,1,0-1.758,6.851,6.851,0,0,1,3.559,12.71A9.144,9.144,0,0,1,30.5,21.16Z\" transform=\"translate(0 0)\" fill=\"url(#linear-gradient)\"/>\n" +
    "</svg>\n");
const searchIcon = ref("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.499\" height=\"48.477\" viewBox=\"0 0 48.499 48.477\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#4f78e9\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#a7b6f5\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <path id=\"路径_25\" data-name=\"路径 25\" d=\"M3.707,38.969A3.667,3.667,0,0,1,1.085,37.88a3.726,3.726,0,0,1,0-5.257L6.6,27.1l2.988-3a15.731,15.731,0,0,1-1.953-4.88A15.832,15.832,0,1,1,34.3,27.051,15.714,15.714,0,0,1,23.1,31.7a15.924,15.924,0,0,1-4.32-.594,15.6,15.6,0,0,1-3.947-1.732l-2.988,2.992L6.334,37.88a3.682,3.682,0,0,1-2.626,1.089Zm3.753-9.28L2.809,34.352a1.273,1.273,0,0,0,1.8,1.8l0,0,4.651-4.659-1.8-1.8Zm3.578-3.582-1.85,1.854,1.8,1.8,1.85-1.854c-.156-.133-.3-.266-.453-.4l-.061-.057c-.164-.156-.3-.282-.423-.407s-.247-.251-.4-.415c-.023-.027-.046-.049-.069-.076l0,0c-.141-.152-.266-.3-.388-.438ZM23.1,2.4a13.429,13.429,0,0,0-10.913,21.2c.2.285.419.563.639.83l.046.053c.107.129.221.259.339.384.015.015.03.034.046.049l.011.011c.133.145.251.266.362.377s.247.24.388.373l.042.042c.137.126.274.247.407.362l.015.011c.289.244.594.48.9.7l.015.011.011.008A13.413,13.413,0,1,0,23.146,2.4H23.1Zm0,23.912A10.482,10.482,0,0,1,12.618,15.834v-.19a1.223,1.223,0,0,1,1.218-1.2h.023a1.223,1.223,0,0,1,1.2,1.245,8.028,8.028,0,1,0,11.1-7.316,7.907,7.907,0,0,0-3.049-.605,8.1,8.1,0,0,0-3.136.632,1.222,1.222,0,1,1-.944-2.253A10.451,10.451,0,0,1,20.714,5.6a10.618,10.618,0,0,1,2.4-.278,10.325,10.325,0,0,1,3.974.792,10.5,10.5,0,0,1-3.993,20.2ZM16.55,10.486a1.222,1.222,0,1,1,.86-.358,1.2,1.2,0,0,1-.86.358Z\" transform=\"translate(0.651 38.443) rotate(-76)\" stroke=\"rgba(0,0,0,0)\" stroke-miterlimit=\"10\" stroke-width=\"1\" fill=\"url(#linear-gradient)\"/>\n" +
    "</svg>\n");
const bookIcon = ref("data:image/svg+xml;utf8,<svg id=\"组_263\" data-name=\"组 263\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"45.296\" height=\"36.769\" viewBox=\"0 0 45.296 36.769\">\n" +
    "  <defs>\n" +
    "    <linearGradient id=\"linear-gradient\" x1=\"-0.699\" y1=\"0.088\" x2=\"1\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\n" +
    "      <stop offset=\"0\" stop-color=\"#544fe9\"/>\n" +
    "      <stop offset=\"1\" stop-color=\"#a7b1f5\"/>\n" +
    "    </linearGradient>\n" +
    "  </defs>\n" +
    "  <path id=\"路径_35\" data-name=\"路径 35\" d=\"M597.454,57.059a1.333,1.333,0,0,1,1.326,1.2l.006.136V84.575a1.332,1.332,0,0,1-1.2,1.325l-.136.007h-6.5c-4.8,0-8.031,1.249-9.584,4.082a1.332,1.332,0,1,1-2.336-1.28c2.07-3.776,6.052-5.387,11.51-5.464l.411,0h5.171V59.722h-5.171c-4.657,0-7.84,1.179-9.443,3.838l-.142.245a1.332,1.332,0,1,1-2.336-1.28c2.07-3.775,6.053-5.387,11.51-5.464l.411,0h6.5Z\" transform=\"translate(-557.976 -55.72)\" fill=\"url(#linear-gradient)\"/>\n" +
    "  <path id=\"路径_36\" data-name=\"路径 36\" d=\"M123.536,57.06a1.332,1.332,0,0,1,.136,2.657l-.136.007h-2.6v23.52h5.17c5.531,0,9.6,1.521,11.764,5.188l.16.279a1.332,1.332,0,1,1-2.336,1.281c-1.509-2.75-4.6-4.008-9.168-4.08l-.42,0h-6.5a1.332,1.332,0,0,1-1.326-1.2l-.007-.136V58.392a1.333,1.333,0,0,1,1.2-1.326l.135-.006h3.933Zm6.086.243c3.872.581,6.771,2.238,8.409,5.222a1.332,1.332,0,0,1-2.336,1.282c-1.188-2.167-3.351-3.4-6.469-3.87a1.332,1.332,0,0,1,.261-2.648Z\" transform=\"translate(-114.64 -55.721)\" fill=\"url(#linear-gradient)\"/>\n" +
    "  <path id=\"路径_37\" data-name=\"路径 37\" d=\"M263.437,27.3a1.333,1.333,0,0,1,1.326,1.2l.006.136V54.212a1.332,1.332,0,0,1-2.658.136l-.006-.136V28.634a1.333,1.333,0,0,1,1.332-1.332Zm-6.768-5.968h-7.78V33.969l3.884-3.118,3.9,3.108V21.333ZM254,24v4.427l-1.236-.986-1.215.974V24Z\" transform=\"translate(-240.363 -21.333)\" fill=\"url(#linear-gradient)\"/>\n" +
    "  <path id=\"路径_38\" data-name=\"路径 38\" d=\"M65.3,157.708a1.333,1.333,0,0,1,1.326,1.2l.006.136v26.973a1.332,1.332,0,0,1-1.2,1.326l-.136.006H50.466l-.149.241-.133.2a3.13,3.13,0,0,1-2.264,1.57l-.2.009H40.248a3.026,3.026,0,0,1-2.468-1.579l-.133-.2-.149-.241H22.665a1.332,1.332,0,0,1-1.326-1.2l-.006-.136V159.04a1.332,1.332,0,0,1,2.658-.136l.006.136V184.68H38.305a1.333,1.333,0,0,1,1.161.678l.064.128a4.647,4.647,0,0,0,.437.774,2.436,2.436,0,0,0,.3.362l.078.07,7.278.005s0,0,0-.005l.014-.013a2.142,2.142,0,0,0,.364-.421,4.724,4.724,0,0,0,.437-.773,1.337,1.337,0,0,1,1.081-.8l.144-.007h14.3V159.04a1.333,1.333,0,0,1,1.2-1.326Z\" transform=\"translate(-21.333 -152.592)\" fill=\"url(#linear-gradient)\"/>\n" +
    "</svg>\n");

</script>

<template>
  <ion-card>
    <!--        <ion-card-header>-->
    <!--          <ion-card-title>Card Title</ion-card-title>-->
    <!--          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>-->
    <!--        </ion-card-header>-->

    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-icon aria-hidden="true" :icon="firstIcon" size="large"/>
            <ion-label style="display: block;font-size: 10px;margin-top: 5px">通知公告</ion-label>
          </ion-col>
          <ion-col>
            <ion-icon aria-hidden="true" :icon="secondIcon" size="large"/>
            <ion-label style="display: block;font-size: 10px;margin-top: 5px">我的课表</ion-label>
          </ion-col>
          <ion-col>
            <ion-icon aria-hidden="true" :icon="thirdIcon" size="large"/>
            <ion-label style="display: block;font-size: 10px;margin-top: 5px">我的学习</ion-label>
          </ion-col>
          <ion-col>
            <ion-icon aria-hidden="true" :icon="fourthIcon" size="large"/>
            <ion-label style="display: block;font-size: 10px;margin-top: 5px">队友动态</ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid style="flex-wrap: nowrap;display: flex">
        <ion-col>
          <ion-card class="inner" color="secondary">
            <ion-card-content>
              <ion-text>技术前言
                <ion-icon class="right" :icon="chevronForwardOutline" size="small"></ion-icon>
              </ion-text>
              <ion-icon class="bottom" aria-hidden="true" :icon="searchIcon" size="large"/>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card class="inner" color="tertiary">
            <ion-card-content>
              <ion-text>今日要闻
                <ion-icon class="right" :icon="chevronForwardOutline" size="small"></ion-icon>
              </ion-text>
              <ion-icon class="bottom" aria-hidden="true" :icon="bookIcon" size="large"/>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-col {
  text-align: center;
}

ion-card.inner {
  position: relative;
  width: 90%;
  display: inline-block;
  margin: 0;
  height: 80px;
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

ion-icon.bottom {
  vertical-align: bottom;
  position: absolute;
  bottom: 8px;
  right: 12px;
  height: 1.3em;
  width: 1.3em;
}

</style>
<!--ion-text::after{-->
<!--  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>");-->
<!--  display: inline-block;-->
<!--  width: 10px;-->
<!--  color: #f2f2f2;-->
<!--  height: 10px;-->
<!--}-->