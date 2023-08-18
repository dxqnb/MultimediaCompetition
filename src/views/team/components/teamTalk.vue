<script setup lang="ts">

import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonContent,
  IonText,
  IonAvatar,
  IonFooter,
  IonSearchbar,
  IonButton,
} from "@ionic/vue";
import {ellipsisHorizontal} from 'ionicons/icons';
import {onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import * as marked from "marked";
import dayjs from "dayjs";

const text = marked.parse('### Marked in the browser\n\nRendered by **marked**.');
const blank = ref('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'/></svg>');
const sent = ref('data:image/svg+xml;utf8,<svg id="组_858" data-name="组 858" xmlns="http://www.w3.org/2000/svg" width="18.812" height="14.882" viewBox="0 0 18.812 14.882">\n' +
    '  <path id="path" d="M17.722.023.66,3.961a.823.823,0,0,0-.621.592.823.823,0,0,0,.184.838L2.974,8.537l-1.19,4.375a.8.8,0,0,0,.348.956.8.8,0,0,0,1.017-.019l8.313-6.125A.774.774,0,0,0,11.645,6.5a.774.774,0,0,0-1.225-.184l-6.3,4.624.652-2.384a.826.826,0,0,0-.188-.809l-2.1-2.406,13.948-3.22-4.581,10.57L10.1,11.521a.769.769,0,0,0-1.253.213.769.769,0,0,0,.282,1.24l2.625,1.75a.83.83,0,0,0,.481.153.977.977,0,0,0,.249-.035.836.836,0,0,0,.551-.494L18.724,1.222A.816.816,0,0,0,18.6.317.815.815,0,0,0,17.722.023Z" transform="translate(0.006 0.005)" fill="#5b78ec" style="isolation: isolate"/>\n' +
    '</svg>\n');
const sentBar = ref('')
const content = ref()
const remoteMassage = ref([
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我是小明，很高兴认识你')
      }
    ]
)
const myMassage = ref([
      {
        time: '7-19 16:59',
        text: marked.parse('### Marked in the browser\n\nRendered by **marked**.')
      },
      {
        time: '7-19 16:59',
        text: marked.parse('你好，我也很高兴认识你')
      },
    ]
)

function sentEvent() {
  if (sentBar.value === '') {
    return
  }
  console.log(myMassage.value[myMassage.value.length - 1].time.substring(0, 2))
  myMassage.value.push({
    time: !myMassage.value[myMassage.value.length - 1].time.includes(' ') ? myMassage.value[myMassage.value.length - 1].time.substring(0, 2) == dayjs().format('HH:mm').substring(0, 2)||myMassage.value[myMassage.value.length - 1].time=='' ? '' : dayjs().format('HH:mm') : dayjs().format('HH:mm'),
    text: marked.parse(sentBar.value)
  })
  sentBar.value = ''
  content.value.$el.scrollToBottom(300)
}
</script>

<template>
  <div>
    <div style="margin-top: 40px">
      <div v-for="(item , i) in remoteMassage" :key="i" style="margin-top: 1em">
        <div class="time">
          <ion-text
              style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
            {{ item.time }}
          </ion-text>
        </div>
        <div class="text">
          <ion-avatar><img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/></ion-avatar>
          <div v-html="item.text"
               style="display: inline-block;width: 80%;border-radius: 20px;background:#FFFFFF;padding-left: 1.5em;margin-left: 1em">
          </div>
        </div>
      </div>
      <div v-for="(item,i) in myMassage" :key="i" style="margin-top: 1em">
        <div class="time">
          <ion-text
              style="color: #9F9F9F;width: 100%;text-align: center;display: block;font-size: 14px;font-weight: 600">
            {{ item.time }}
          </ion-text>
        </div>
        <div class="text">
          <div v-html="item.text"
               style="display: inline-block;width: 80%;border-radius: 20px;background:#FFFFFF;padding-left: 1.5em;margin-right: 1em">
          </div>
          <ion-avatar><img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/></ion-avatar>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>