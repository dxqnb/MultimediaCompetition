<template>
  <!--  <ion-page>-->
  <!--    <ion-tabs>-->
  <!--    <ion-router-outlet Animation="Animation"></ion-router-outlet>-->
  <ion-fab ref="animations" slot="fixed" vertical="bottom" horizontal="end"
           v-if="$route.path.indexOf('study/noticeDetail')==-1&&$route.path.indexOf('team/teamDetail')==-1">
    <ion-fab-button>
      <ion-icon :icon="chevronUpCircle"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button @click="router.back">
        <ion-icon :icon="backspace"></ion-icon>
      </ion-fab-button>
      <ion-fab-button @click="$router.push('/')">
        <ion-icon :icon="home"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
  <!--  </ion-page>-->
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonFabList,
  useIonRouter,
  createGesture, GestureDetail
} from '@ionic/vue';
import {backspace, chevronUpCircle, home} from 'ionicons/icons';
import {onMounted, ref} from "vue";

const router = useIonRouter()
const animations = ref();
const transition = ref("all 0.5s");
let xpx = ref("28px");
let ypx = ref(28);
const rightPx = ref("0px");
const rightPxNum = ref(0);
onMounted(() => {
  // const animation = createAnimation()
  //     .addElement(animations.value.$el)
  //     .duration(1000)
  //     .fromTo('top', '0', `${x}px`)
  //     .fromTo('left', '0', `${y}px`);
  const gesture = createGesture({
    blurOnStart: false,
    canStart(detail: GestureDetail): boolean | void {
      return undefined;
    },
    direction: undefined,
    disableScroll: false,
    gestureName: "",
    gesturePriority: 0,
    maxAngle: 0,
    notCaptured(detail: GestureDetail): boolean | void {
      return undefined;
    },
    onWillStart(_: GestureDetail): Promise<void> {
      return Promise.resolve(undefined);
    },
    passive: false,
    el: animations.value.$el,
    threshold: 0,
    onStart: () => {
      ypx.value = Number(xpx.value.substring(0, xpx.value.length - 2));
      rightPxNum.value = Number(rightPx.value.substring(0, rightPx.value.length - 2));
      transition.value = "";
    },
    onMove: (ev) => {
      xpx.value = ypx.value - ev.deltaY + "px";
      rightPx.value = rightPxNum.value - ev.deltaX + "px";

    },
    onEnd: () => {
      transition.value = "all 0.5s";
      rightPx.value = "0";
      rightPxNum.value = 0;
    }
  });
  gesture.enable();
});


</script>
<style scoped>
ion-tab-bar {
  position: fixed;
  bottom: 5%;
  left: 5%;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(171, 171, 171, 0.65);
}

ion-fab {
  right: v-bind(rightPx);
  transition: v-bind(transition);
  bottom: v-bind(xpx);
}
</style>
