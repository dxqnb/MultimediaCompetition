<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar style="padding: 10px;--background: #fff;position:relative;" slot="bottom" ref="bar">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon class="notSelected" aria-hidden="true" :icon="home"/>
          <ion-icon class="selected" aria-hidden="true" :icon="homeSelect"/>
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/study">
          <ion-icon class="notSelected" style="width: 24px;height: 30px;line-height: 30px" :icon="study"></ion-icon>
          <ion-icon class="selected" style="width: 24px;height: 30px;line-height: 30px" :icon="studySelect"></ion-icon>
          <ion-label>学习</ion-label>
        </ion-tab-button>
        <div style="width: 20%;"></div>
        <!--        <ion-tab-button style="position:absolute;bottom: 40px;" tab="mainTab" href="/">-->
        <!--            <ion-icon class="notSelected" :icon="study"></ion-icon>-->
        <!--            <ion-icon class="selected" :icon="studySelect"></ion-icon>-->
        <!--            <ion-label>学习</ion-label>-->
        <!--        </ion-tab-button>-->
        <ion-tab-button tab="tab3" href="/tabs/team">
          <ion-icon class="notSelected" aria-hidden="true" :icon="team"/>
          <ion-icon class="selected" aria-hidden="true" :icon="teamSelect"/>
          <ion-label>学习圈</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/user">
          <ion-icon class="notSelected" aria-hidden="true" :icon="user"/>
          <ion-icon class="selected" aria-hidden="true" :icon="userSelect"/>
          <ion-label>我的</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
      <div
          :style="height">
        <div
            style="width: 65px;height: 65px;border-radius: 100%;background-color: var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));margin-left: -50%;margin-top: 50%;">
          <ion-icon :icon="main" style="width: 100%;height: 100%;"></ion-icon>
        </div>
      </div>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue';
import {onMounted, ref} from "vue";

const home = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" class=\'ionicon\' viewBox="0 0 25.4 25.4">\n' +
    '  <g id="组_311" data-name="组 311" transform="translate(-35.2 -735.3)">\n' +
    '    <path id="Vector" d="M12.29.788A4.853,4.853,0,0,0,6.8.918L1.79,4.828A5.153,5.153,0,0,0,0,8.468v6.9A4.631,4.631,0,0,0,4.62,20H15.4a4.622,4.622,0,0,0,4.62-4.62V8.6a5.1,5.1,0,0,0-1.97-3.78Zm-2.28,15.96A.755.755,0,0,1,9.26,16V13a.75.75,0,0,1,1.5,0v3A.755.755,0,0,1,10.01,16.748Z" transform="translate(37.89 738.002)" fill="none" stroke-width="1.4" style="isolation: isolate"/>\n' +
    '    <path id="Vector-2" data-name="Vector" d="M24,0V24H0V0Z" transform="translate(59.9 760) rotate(-180)" fill="none" stroke-width="1.4" opacity="0" style="isolation: isolate"/>\n' +
    '    <ellipse id="椭圆_17" data-name="椭圆 17" cx="1" cy="2.5" rx="1" ry="2.5" transform="translate(47 750)"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const homeSelect = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="vuesax_bold_home-2" data-name="vuesax/bold/home-2" style="isolation: isolate">\n' +
    '    <g id="home-2" style="isolation: isolate">\n' +
    '      <path id="Vector" d="M12.29.788A4.853,4.853,0,0,0,6.8.918L1.79,4.828A5.153,5.153,0,0,0,0,8.468v6.9A4.631,4.631,0,0,0,4.62,20H15.4a4.622,4.622,0,0,0,4.62-4.62V8.6a5.1,5.1,0,0,0-1.97-3.78Zm-2.28,15.96A.755.755,0,0,1,9.26,16V13a.75.75,0,0,1,1.5,0v3A.755.755,0,0,1,10.01,16.748Z" transform="translate(1.99 2.002)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '      <path id="Vector-2" data-name="Vector" d="M24,0V24H0V0Z" transform="translate(24 24) rotate(-180)" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const study = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16.001" viewBox="0 0 18 16.001">\n' +
    '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" transform="translate(-2.138 -2.999)" style="isolation: isolate">\n' +
    '    <g id="vuesax_linear_search-normal-2" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
    '      <g id="Icon" transform="translate(1.138 1)" style="isolation: isolate">\n' +
    '        <path id="Icon-2" data-name="Icon" d="M16.5,13.07a2.746,2.746,0,0,1-.009.322,1,1,0,0,1-1.094.86,2.738,2.738,0,0,1-.316-.067c-.348-.084-.522-.126-.695-.162a10.006,10.006,0,0,0-4.023,0c-.173.035-.347.078-.695.162l-1.044.253a2.08,2.08,0,0,1-.278.057,1,1,0,0,1-.194,0,2.08,2.08,0,0,1-.278-.057l-1.044-.253c-.348-.084-.522-.126-.695-.162a10.006,10.006,0,0,0-4.023,0c-.173.035-.347.078-.695.162a2.739,2.739,0,0,1-.316.067,1,1,0,0,1-1.094-.86A2.745,2.745,0,0,1,0,13.07V1.749a2.345,2.345,0,0,1,.023-.466A1,1,0,0,1,.563.6,2.35,2.35,0,0,1,1.01.465C1.764.282,2.141.191,2.519.13a10.008,10.008,0,0,1,3.212,0c.378.061.755.153,1.509.335l.635.154a2.088,2.088,0,0,0,.278.057,1,1,0,0,0,.194,0A2.088,2.088,0,0,0,8.625.619L9.26.465C10.014.282,10.391.191,10.769.13a10.008,10.008,0,0,1,3.211,0c.378.061.755.153,1.509.335A2.349,2.349,0,0,1,15.937.6a1,1,0,0,1,.54.686,2.348,2.348,0,0,1,.023.466ZM8.25,1v12.99" transform="translate(1.75 2.75)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const studySelect = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16.001" viewBox="0 0 18 16.001">\n' +
    '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" transform="translate(-2.138 -2.999)" style="isolation: isolate">\n' +
    '    <g id="vuesax_linear_search-normal-2" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
    '      <g id="Icon" transform="translate(1.138 1)" style="isolation: isolate">\n' +
    '        <path id="Icon-2" data-name="Icon" d="M16.5,13.07a2.746,2.746,0,0,1-.009.322,1,1,0,0,1-1.094.86,2.738,2.738,0,0,1-.316-.067c-.348-.084-.522-.126-.695-.162a10.006,10.006,0,0,0-4.023,0c-.173.035-.347.078-.695.162l-1.044.253a2.08,2.08,0,0,1-.278.057,1,1,0,0,1-.194,0,2.08,2.08,0,0,1-.278-.057l-1.044-.253c-.348-.084-.522-.126-.695-.162a10.006,10.006,0,0,0-4.023,0c-.173.035-.347.078-.695.162a2.739,2.739,0,0,1-.316.067,1,1,0,0,1-1.094-.86A2.745,2.745,0,0,1,0,13.07V1.749a2.345,2.345,0,0,1,.023-.466A1,1,0,0,1,.563.6,2.35,2.35,0,0,1,1.01.465C1.764.282,2.141.191,2.519.13a10.008,10.008,0,0,1,3.212,0c.378.061.755.153,1.509.335l.635.154a2.088,2.088,0,0,0,.278.057,1,1,0,0,0,.194,0A2.088,2.088,0,0,0,8.625.619L9.26.465C10.014.282,10.391.191,10.769.13a10.008,10.008,0,0,1,3.211,0c.378.061.755.153,1.509.335A2.349,2.349,0,0,1,15.937.6a1,1,0,0,1,.54.686,2.348,2.348,0,0,1,.023.466ZM8.25,1v12.99" transform="translate(1.75 2.75)" fill="#5d73ff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const team = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="vuesax_linear_clock" data-name="vuesax/linear/clock" style="isolation: isolate">\n' +
    '    <g id="clock" style="isolation: isolate">\n' +
    '      <path id="Vector" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Z" transform="translate(2 2)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      <path id="Vector-2" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none" opacity="0" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const teamSelect = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">\n' +
    '  <g id="组_310" data-name="组 310" transform="translate(-244.638 -735.5)">\n' +
    '    <g id="vuesax_linear_clock" data-name="vuesax/linear/clock" transform="translate(245.138 736)" style="isolation: isolate">\n' +
    '      <g id="clock" style="isolation: isolate">\n' +
    '        <path id="Vector" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Z" transform="translate(2 2)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '        <path id="Vector-2" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '        <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g id="vuesax_linear_clock-2" data-name="vuesax/linear/clock" transform="translate(245.138 736)" style="isolation: isolate">\n' +
    '      <g id="clock-2" data-name="clock" style="isolation: isolate">\n' +
    '        <path id="Vector-5" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const user = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="user" style="isolation: isolate">\n' +
    '    <path id="Vector" d="M5,10a5,5,0,1,1,5-5A5,5,0,0,1,5,10Z" transform="translate(7 2)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '    <path id="Vector-2" data-name="Vector" d="M17.18,7c0-3.87-3.85-7-8.59-7S0,3.13,0,7" transform="translate(3.41 15)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '    <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none" opacity="0" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const userSelect = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="user" style="isolation: isolate">\n' +
    '    <path id="Vector" d="M5,10a5,5,0,1,1,5-5A5,5,0,0,1,5,10Z" transform="translate(7 2)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '    <path id="Vector-2" data-name="Vector" d="M17.18,7c0-3.87-3.85-7-8.59-7S0,3.13,0,7" transform="translate(3.41 15)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '    <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>\n')
const main = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">\n' +
    '  <defs>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fff"/>\n' +
    '      <stop offset="1" stop-color="#e3ecff"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <g id="Container" transform="translate(3.5 4)" style="isolation: isolate">\n' +
    '    <g id="Container-2" data-name="Container" transform="translate(0.5)" fill="#5d73ff" stroke="#fff" stroke-width="4" style="isolation: isolate">\n' +
    '      <rect width="52" height="52" rx="26" stroke="none"/>\n' +
    '      <rect x="-2" y="-2" width="56" height="56" rx="28" fill="none"/>\n' +
    '    </g>\n' +
    '    <g id="组_1016" data-name="组 1016" transform="translate(16.706 12.608)">\n' +
    '      <path id="路径_119" data-name="路径 119" d="M332.431,108.225a5.9,5.9,0,0,1,11.8,0v7.766a5.9,5.9,0,0,1-11.8,0Zm.4,20.178a.91.91,0,0,1,.915-.9h9.175a.9.9,0,1,1,0,1.808h-9.176a.91.91,0,0,1-.915-.9Z" transform="translate(-328.239 -102.4)" fill="url(#linear-gradient)"/>\n' +
    '      <path id="路径_120" data-name="路径 120" d="M206.631,509.279a.916.916,0,0,0-1.831,0c0,5.18,4.589,9.256,10.09,9.256s10.09-4.076,10.09-9.256a.916.916,0,0,0-1.831,0c0,4.046-3.626,7.448-8.259,7.448s-8.259-3.4-8.259-7.448Z" transform="translate(-204.8 -495.04)" fill="url(#linear-gradient)"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const height = ref('z-index: 9999;position:absolute;bottom: 60px;left: 50%;width: 65px;height: 65px');
const bar = ref();
onMounted(() => {
  setTimeout(() => {
    height.value = 'z-index: 9999;position:absolute;bottom: '+(bar.value.$el.offsetHeight-10)+'px;left: 50%;width: 65px;height: 65px'
  }, 100)
})
</script>
<!--<style scoped>-->
<!--ion-tab-bar {-->
<!--  position: fixed;-->
<!--  bottom: 5%;-->
<!--  left: 5%;-->
<!--  width: 90%;-->
<!--  border-radius: 20px;-->
<!--  box-shadow: 0 0 5px 5px rgba(171, 171, 171, 0.65);-->
<!--}-->

<!--</style>-->
<style scoped>
.selected {
  display: none;
}

.tab-selected .selected {
  display: block;
}

.tab-selected .notSelected {
  display: none;
}

ion-tab-bar {
  --border: 0;
}
</style>