<script setup lang="ts">
import {
  IonAvatar,
  IonAccordionGroup,
  IonAccordion,
  IonCard,
  IonCardContent,
  IonItem, IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonText,
  IonIcon, createAnimation,
} from "@ionic/vue";
import {chevronDown, chevronForward} from "ionicons/icons";
import {onMounted, ref} from "vue";
const props=defineProps(['finalItem','index'])
console.log(props.finalItem)
// let open: any;
// let close: any;
// const click = ref(true)
// const cardEl = ref()
// let height = 0
// onMounted(() => {
//   setTimeout(() => {
//     const height = cardEl.value?.offsetHeight
//     console.log(height)
//     open = createAnimation()
//         .addElement(cardEl.value)
//         .duration(300)
//         .keyframes([
//           {offset: 0, height: '0'},
//           {offset: 1, height: height + 'px'},
//         ]);
//     close = createAnimation()
//         .addElement(cardEl.value)
//         .duration(300)
//         .keyframes([
//           {offset: 0, height: height + 'px'},
//           {offset: 1, height: '0'},
//         ]);
//   }, 200)
//
// });

// function itemClick() {
//   click.value = !click.value;
//   if (click.value) {
//     open.play();
//     setTimeout(() => {
//       open.onFinish(() => {
//         open.destroy(true)
//       })
//     }, 300)
//   } else {
//     close.play()
//     setTimeout(() => {
//       open.onFinish(() => {
//         close.destroy(true)
//
//       })
//     }, 300)
//   }
// }
</script>

<template>
  <ion-card
      style="margin: 12px 0 ;--background: #FAFBFF;border: solid 1px rgba(0,22,161,0.15);box-shadow: none">
    <ion-card-content>
      <ion-accordion-group :multiple="true" :value="['']">
        <ion-accordion value="first">
          <ion-item style="--background: #FAFBFF;--padding-start: 0;--background-activated:#FAFBFF" slot="header">
            <ion-label>
              <p style="color:#333333;font-size: 16px;font-weight: 600">任务{{index}}：{{ finalItem.task }}</p>
            </ion-label>
          </ion-item>
          <div slot="content" style="border-top: solid 1px #E1E1E1">
            <ion-text style="color:#333333;font-size: 16px;font-weight: 400;display: inline-block;margin: 10px 0">
              已提交
            </ion-text>
            <div
                style="border-radius:0 0 10px 10px;padding-top: 10px;">
              <div style="width: 100%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in finalItem.finished">
                <ion-avatar
                    style="display:inline-block;vertical-align: top;margin-top: 1em;width: 2em;height: 2em;margin-right: 6px">
                  <img :src="i.avatar" style="vertical-align: middle;width: 2em;height: 2em;"
                       alt="">
                </ion-avatar>
                <div style="width: 100px;display: inline-block;margin: 0;">
                  <ion-text style="white-space: nowrap;display: flex;">
                    <p style="padding-right: 0.5em;margin: 0;font-size: 12px">{{ i.studentname }}</p>
                    <p style="color: #9A9A9A;font-size: 12px;margin: 0;">{{ `` }}</p>
                  </ion-text>
                  <ion-range disabled style="padding: 0" :value="100"></ion-range>
                </div>
                <div
                    style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
                  <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
                    <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>
                  </ion-radio-group>
                  <ion-text>
                    <p style="display: inline-block;font-size: 12px">{{finalItem.target}}/{{ finalItem.target }}</p>
                  </ion-text>
                </div>
                <div
                    style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #64DD3E">
                  {{ `已完成` }}
                </div>
              </div>
            </div>
            <ion-text style="color:#333333;font-size: 16px;font-weight: 400;display: inline-block;margin: 10px 0">
              未提交
            </ion-text>
            <div
                style="border-radius:0 0 10px 10px;padding-top: 10px;">
              <div style="width: 100%;margin: 0 auto;white-space: nowrap;position: relative" v-for="i in finalItem.unfinished">
                <ion-avatar
                    style="display:inline-block;vertical-align: top;margin-top: 1em;width: 2em;height: 2em;margin-right: 6px">
                  <img :src="i.avatar" style="vertical-align: middle;width: 2em;height: 2em;"
                       alt="">
                </ion-avatar>
                <div style="width: 100px;display: inline-block;margin: 0;">
                  <ion-text style="white-space: nowrap;display: flex;">
                    <p style="padding-right: 0.5em;margin: 0;font-size: 12px">{{ i.studentname }}</p>
                    <p style="color: #9A9A9A;font-size: 12px;margin: 0;">{{ `` }}</p>
                  </ion-text>
                  <ion-range disabled style="padding: 0" :value="5"></ion-range>
                </div>
                <div
                    style="display: inline-block;vertical-align: top;margin-top: 1em;margin-left: 1em;white-space: nowrap">
                  <ion-radio-group value="true" style="vertical-align: middle;margin-right: 0.4em">
<!--                    <ion-radio disabled value="true" mode="ios" aria-label="Custom checkbox"></ion-radio>-->
                  </ion-radio-group>
                  <ion-text>
                    <p style="display: inline-block;font-size: 12px">0/{{ finalItem.target }}</p>
                  </ion-text>
                </div>
                <div
                    style="display: inline-block;vertical-align: top;position: absolute;top: 20px;right: 20px;font-size: 12px;color: #525252">
                  {{ `未完成` }}
                </div>
              </div>
            </div>
          </div>

        </ion-accordion>
      </ion-accordion-group>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
/*.close {
  transition: all 0.3s ease-in-out;
}

.open {
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;
}

.elClose {
  height: 0;
  transition: all 0.6s ease-in-out;
}

.elOpen {
  height: auto;
  transition: all 0.6s ease-in-out;
}*/

.button-disabled {
  opacity: 1;
}

div[slot='content'] {
  background: #FAFBFF;
}

.card-content-ios {
  padding: 10px 20px;
}

.radio-disabled {
  opacity: 1;
}

ion-radio {
  --border-radius: 100%;
  --inner-border-radius: 100%;

  --color: #5065FF;
  --color-checked: #5065FF;
}

ion-radio.ios::part(container) {
  width: 20px;
  height: 20px;

  border: 2px solid #5065FF;
  border-radius: 100%;
}

.radio-checked.ios::part(container) {
  border-color: #5065FF;
}

.area {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

ion-range {
  --bar-background: rgba(80, 101, 255, 0.22);
  --bar-background-active: #5065FF;
  --bar-height: 8px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
}

.range-disabled {
  opacity: 1 !important;
}
</style>