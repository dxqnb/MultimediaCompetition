<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar style="margin: 10px" slot="bottom" ref="bar">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon class="notSelected" aria-hidden="true" :icon="home"/>
          <ion-icon class="selected" aria-hidden="true" :icon="homeSelect"/>
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/study">
          <ion-icon class="notSelected" :icon="study"></ion-icon>
          <ion-icon class="selected" :icon="studySelect"></ion-icon>
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
        <ion-tab-button tab="tab4" href="/tabs/tab3">
          <ion-icon class="notSelected" aria-hidden="true" :icon="user"/>
          <ion-icon class="selected" aria-hidden="true" :icon="userSelect"/>
          <ion-label>我的</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
      <div
          :style="height">
        <div
            style="width: 15vw;height: 15vw;border-radius: 100%;background-color: #5D73FF;margin-left: -50%;margin-top: 50%;"></div>
      </div>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue';
import {schoolOutline, square, triangle, schoolSharp} from 'ionicons/icons';
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
const study = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
    '    <g id="search-normal" style="isolation: isolate">\n' +
    '      <path id="Vector" d="M9,18a9,9,0,1,1,9-9A9,9,0,0,1,9,18Z" transform="translate(2 2)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      <path id="Vector-2" data-name="Vector" d="M2.77,2.33C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97C.63,3.57,1.84,3.73,2.77,2.33Z" transform="translate(18.83 18.72)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
    '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none" opacity="0" style="isolation: isolate"/>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
const studySelect = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
    '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
    '    <g id="search-normal" style="isolation: isolate">\n' +
    '      <path id="Vector" d="M9,18a9,9,0,1,1,9-9A9,9,0,0,1,9,18Z" transform="translate(2 2)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '      <path id="Vector-2" data-name="Vector" d="M2.77,2.33C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97C.63,3.57,1.84,3.73,2.77,2.33Z" transform="translate(18.83 18.72)" fill="#5d73ff" style="isolation: isolate"/>\n' +
    '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
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
const height = ref('z-index: 9999;position:absolute;bottom: 60px;left: 50%;width: 15vw;height: 15vw');
const bar = ref();
onMounted(() => {
  setTimeout(() => {
    let temp = bar.value.$el.offsetHeight
    height.value = 'z-index: 9999;position:absolute;bottom: calc('+bar.value.$el.offsetHeight+'px + '+bar.value.$el.style.margin+');left: 50%;width: 15vw;height: 15vw'
  }, 200)
})
// function Select(event: any) {
//   home.value = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25.4" height="25.4" viewBox="0 0 25.4 25.4">\n' +
//       '  <g id="组_311" data-name="组 311" transform="translate(-35.2 -735.3)">\n' +
//       '    <path id="Vector" d="M12.29.788A4.853,4.853,0,0,0,6.8.918L1.79,4.828A5.153,5.153,0,0,0,0,8.468v6.9A4.631,4.631,0,0,0,4.62,20H15.4a4.622,4.622,0,0,0,4.62-4.62V8.6a5.1,5.1,0,0,0-1.97-3.78Zm-2.28,15.96A.755.755,0,0,1,9.26,16V13a.75.75,0,0,1,1.5,0v3A.755.755,0,0,1,10.01,16.748Z" transform="translate(37.89 738.002)" fill="none" stroke="#484c52" stroke-width="1.4" style="isolation: isolate"/>\n' +
//       '    <path id="Vector-2" data-name="Vector" d="M24,0V24H0V0Z" transform="translate(59.9 760) rotate(-180)" fill="none" stroke="#484c52" stroke-width="1.4" opacity="0" style="isolation: isolate"/>\n' +
//       '    <ellipse id="椭圆_17" data-name="椭圆 17" cx="1" cy="2.5" rx="1" ry="2.5" transform="translate(47 750)" fill="#484c52"/>\n' +
//       '  </g>\n' +
//       '</svg>\n';
//   study.value = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
//       '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
//       '    <g id="search-normal" style="isolation: isolate">\n' +
//       '      <path id="Vector" d="M9,18a9,9,0,1,1,9-9A9,9,0,0,1,9,18Z" transform="translate(2 2)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
//       '      <path id="Vector-2" data-name="Vector" d="M2.77,2.33C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97C.63,3.57,1.84,3.73,2.77,2.33Z" transform="translate(18.83 18.72)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
//       '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none" opacity="0" style="isolation: isolate"/>\n' +
//       '    </g>\n' +
//       '  </g>\n' +
//       '</svg>\n'
//   team.value = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
//     '  <g id="vuesax_linear_clock" data-name="vuesax/linear/clock" style="isolation: isolate">\n' +
//     '    <g id="clock" style="isolation: isolate">\n' +
//     '      <path id="Vector" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Z" transform="translate(2 2)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
//     '      <path id="Vector-2" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="none" stroke="#484c52" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
//     '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="none" opacity="0" style="isolation: isolate"/>\n' +
//     '    </g>\n' +
//     '  </g>\n' +
//     '</svg>\n';
//   if (event.tab == 'tab2') {study.value = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n' +
//       '  <g id="vuesax_linear_search-normal" data-name="vuesax/linear/search-normal" style="isolation: isolate">\n' +
//       '    <g id="search-normal" style="isolation: isolate">\n' +
//       '      <path id="Vector" d="M9,18a9,9,0,1,1,9-9A9,9,0,0,1,9,18Z" transform="translate(2 2)" fill="#5d73ff" style="isolation: isolate"/>\n' +
//       '      <path id="Vector-2" data-name="Vector" d="M2.77,2.33C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97C.63,3.57,1.84,3.73,2.77,2.33Z" transform="translate(18.83 18.72)" fill="#5d73ff" style="isolation: isolate"/>\n' +
//       '      <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
//       '    </g>\n' +
//       '  </g>\n' +
//       '</svg>\n';}
//   if (event.tab == 'tab3') {team.value = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">\n' +
//       '  <g id="组_310" data-name="组 310" transform="translate(-244.638 -735.5)">\n' +
//       '    <g id="vuesax_linear_clock" data-name="vuesax/linear/clock" transform="translate(245.138 736)" style="isolation: isolate">\n' +
//       '      <g id="clock" style="isolation: isolate">\n' +
//       '        <path id="Vector" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Z" transform="translate(2 2)" fill="#5d73ff" style="isolation: isolate"/>\n' +
//       '        <path id="Vector-2" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="#5d73ff" style="isolation: isolate"/>\n' +
//       '        <path id="Vector-3" data-name="Vector" d="M24,0V24H0V0Z" fill="#5d73ff" opacity="0" style="isolation: isolate"/>\n' +
//       '      </g>\n' +
//       '    </g>\n' +
//       '    <g id="vuesax_linear_clock-2" data-name="vuesax/linear/clock" transform="translate(245.138 736)" style="isolation: isolate">\n' +
//       '      <g id="clock-2" data-name="clock" style="isolation: isolate">\n' +
//       '        <path id="Vector-5" data-name="Vector" d="M4.08,7.67.98,5.82A2.215,2.215,0,0,1,0,4.1V0" transform="translate(11.63 7.51)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="isolation: isolate"/>\n' +
//       '      </g>\n' +
//       '    </g>\n' +
//       '  </g>\n' +
//       '</svg>\n';}
//   console.log();
// }
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