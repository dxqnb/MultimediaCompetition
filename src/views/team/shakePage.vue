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
  IonTitle, createAnimation, toastController
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  chevronForwardOutline,
  star,
  starOutline,
  addOutline,
  chevronDownOutline, playCircleOutline
} from "ionicons/icons";
import {onMounted, reactive, ref} from "vue";
import {addFridenTeamUser, getFridenTeamByAttribute, getFridenTeamByAttribute111} from "@/api/team";

const icon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="23.104" height="23" viewBox="0 0 23.104 23">\n' +
    '  <g id="streamlinehq-interface-arrows-synchronize-_flat-48-ico_GN5YOoIRNzxqfcyY" data-name="streamlinehq-interface-arrows-synchronize-          flat-48-ico_GN5YOoIRNzxqfcyY" transform="translate(3)" style="isolation: isolate">\n' +
    '    <path id="Vector" d="M10.423.007A11.551,11.551,0,0,0,2.556,18.749c-.44.4-.8.753-1.089,1.049a1.219,1.219,0,0,0-.323,1.249,1.239,1.239,0,0,0,1,.813,35.415,35.415,0,0,0,4.436.4,1.728,1.728,0,0,0,1.773-1.488,35.552,35.552,0,0,0,.374-4.406A1.248,1.248,0,0,0,8.1,15.226a1.235,1.235,0,0,0-1.3.1c-.311.214-.673.474-1.089.789A7.446,7.446,0,0,1,10.249,4.171a1.736,1.736,0,0,0,1.4-1.078,5.567,5.567,0,0,0,.3-1.795A1.335,1.335,0,0,0,10.423.007Z" transform="translate(-3 0)" fill="#4051bc" style="isolation: isolate"/>\n' +
    '    <path id="Vector-2" data-name="Vector" d="M1.526,22.255a11.533,11.533,0,0,0,8.874-5.72A11.551,11.551,0,0,0,9.393,3.514c.44-.4.8-.753,1.089-1.049a1.219,1.219,0,0,0,.323-1.249A1.239,1.239,0,0,0,9.8.4,35.41,35.41,0,0,0,5.365,0,1.728,1.728,0,0,0,3.591,1.489,35.553,35.553,0,0,0,3.217,5.9a1.248,1.248,0,0,0,.635,1.141,1.235,1.235,0,0,0,1.3-.1c.311-.214.673-.474,1.089-.789a7.446,7.446,0,0,1,.6,8.338A7.427,7.427,0,0,1,1.7,18.091,1.735,1.735,0,0,0,.3,19.17,5.567,5.567,0,0,0,0,20.964,1.335,1.335,0,0,0,1.526,22.255Z" transform="translate(8.154 0.737)" fill="#4051bc" style="isolation: isolate"/>\n' +
    '  </g>\n' +
    '</svg>');
const phoneShake = ref('data:image/svg+xml;utf8,<svg id="组_797" data-name="组 797" xmlns="http://www.w3.org/2000/svg" width="58.67" height="54.157" viewBox="0 0 58.67 54.157">\n' +
    '  <path id="路径_98" data-name="路径 98" d="M280.822,0H262.77A6.77,6.77,0,0,0,256,6.77V47.387a6.77,6.77,0,0,0,6.77,6.77h18.052a6.77,6.77,0,0,0,6.77-6.77V6.77A6.77,6.77,0,0,0,280.822,0ZM262.77,4.513h18.052a2.257,2.257,0,0,1,2.257,2.257V47.387a2.257,2.257,0,0,1-2.257,2.257H262.77a2.257,2.257,0,0,1-2.257-2.257V6.77A2.257,2.257,0,0,1,262.77,4.513Z" transform="translate(-242.461)" fill="#fff"/>\n' +
    '  <path id="路径_99" data-name="路径 99" d="M29.335,262.14a2.257,2.257,0,1,1-2.257,2.257A2.257,2.257,0,0,1,29.335,262.14ZM9.026,232.412a2.257,2.257,0,0,1,2.241,1.995l.016.262v26.648a2.257,2.257,0,0,1-4.5.264l-.016-.264V234.669a2.257,2.257,0,0,1,2.257-2.257Zm40.618-.9a2.256,2.256,0,0,1,2.241,1.992l.016.264v27.079a2.257,2.257,0,0,1-4.5.264l-.016-.264V233.766a2.257,2.257,0,0,1,2.257-2.257Zm6.77,5.808a2.256,2.256,0,0,1,2.241,1.992l.015.264v18.052a2.257,2.257,0,0,1-4.5.264l-.016-.264V239.574a2.257,2.257,0,0,1,2.257-2.257Zm-54.157,0A2.256,2.256,0,0,1,4.5,239.31l.016.264v18.052a2.257,2.257,0,0,1-4.5.264L0,257.627V239.574a2.257,2.257,0,0,1,2.257-2.257Z" transform="translate(0 -219.265)" fill="#fff"/>\n' +
    '</svg>\n');
let animation: any;
const iconElement = ref();
const div1 = ref();
const div2 = ref();
const div3 = ref();
const vocabulary = reactive([{
  w: '自律',
  clicked: false
},
  {
    w: '竞赛',
    clicked: false
  },
  {
    w: '活泼',
    clicked: false
  },
  {
    w: '获奖经历',
    clicked: false
  },
  {
    w: '语文',
    clicked: false
  },
  {
    w: '数学',
    clicked: false
  },
  {
    w: '英语',
    clicked: false
  },
])

function choose(index: number) {
  vocabulary[index].clicked = !vocabulary[index].clicked
  for (let i = 0; i < vocabulary.length; i++) {
    if (i == index) continue
    vocabulary[i].clicked = false
  }
}

const shakeTeam = ref({
  id: 0,
  tname: "",
  userid: 0,
  tavatar: "",
  bgimg: "",
  introduction: "",
  number: 0,
  mxnumber: 0,
  attribute: '',
  activity: 0,
  createtime: ""
})

function shake() {
  animation.play()
  for (let i = 0; i < vocabulary.length; i++) {
    if (vocabulary[i].clicked) {
      getFridenTeamByAttribute(vocabulary[i].w).then(async (res) => {
        if (res.data.data.length != 0) {
          shakeTeam.value = res.data.data[0]
          let toast = await toastController.create({
            message: '成功匹配'
          })
          await toast.present().then(() => {
            setTimeout(() => {
              toast.dismiss()
            }, 1000)
          })
        } else {
          let toast = await toastController.create({
            message: '未匹配成功，请重试'
          })
          await toast.present().then(() => {
            setTimeout(() => {
              toast.dismiss()
            }, 1000)
          })
          shakeTeam.value = {
            id: 0,
            tname: "",
            userid: 0,
            tavatar: "",
            bgimg: "",
            introduction: "",
            number: 0,
            mxnumber: 0,
            attribute: '',
            activity: 0,
            createtime: ""
          }
        }
      })
      return;
    }
  }
  getFridenTeamByAttribute111().then(async (res) => {
    if (res.data.data.length != 0) {
      let toast = await toastController.create({
        message: '成功匹配'
      })
      await toast.present().then(() => {
        setTimeout(() => {
          toast.dismiss()
        }, 1000)
      })
      shakeTeam.value = res.data.data[0]
    } else {
      let toast = await toastController.create({
        message: '未匹配成功，请重试'
      })
      await toast.present().then(() => {
        setTimeout(() => {
          toast.dismiss()
        }, 1000)
      })
      shakeTeam.value = {
        id: 0,
        tname: "",
        userid: 0,
        tavatar: "",
        bgimg: "",
        introduction: "",
        number: 0,
        mxnumber: 0,
        attribute: '',
        activity: 0,
        createtime: ""
      }
    }
  })
}

onMounted(() => {
  const div1Animation = createAnimation()
      .addElement(div1.value)
      .keyframes([
        {offset: 0, transform: 'scale(1)'},
        {offset: 0.5, transform: 'scale(1.2)'},
        {offset: 1, transform: 'scale(1) '},
      ]);

  // const div2Animation = createAnimation()
  //   .addElement(div2.value)
  //   .keyframes([
  //     { offset: 0, transform: 'scale(1)', },
  //     { offset: 0.5, transform: 'scale(1.5)'},
  //     { offset: 1, transform: 'scale(1)'},
  //   ]);

  const div3Animation = createAnimation()
      .addElement(iconElement.value.$el)
      .keyframes([
        {offset: 0, transform: 'translate(-80%, -60%)'},
        {offset: 0.33, transform: 'translate(-50%, -50%)'},
        {offset: 0.66, transform: 'translate(-20%, -40%)'},
        {offset: 1, transform: 'translate(-50%, -50%)'},
      ]);

  animation = createAnimation().duration(200).iterations(1).addAnimation([div1Animation, div3Animation]);
});
const userid = Number(JSON.parse(localStorage.getItem('user') || '').id)

function join() {
  addFridenTeamUser(shakeTeam.value.id, userid).then(async (res) => {
    const toast = await toastController.create({
      message: res.data.code == 0 ? '加入成功' : '加入失败'
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
  })
}
</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/tabs/team"></ion-back-button>
        </ion-buttons>
        <ion-title style="--color:white;">摇一摇</ion-title>
        <ion-buttons slot="end">
          <ion-button color="light">
            <ion-icon :icon="ellipsisHorizontalOutline"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div
          style="margin: 10px auto;width: 80%;background: linear-gradient(to bottom, #E4E1FF, #DBEAFF, #F0FFFF ,#F5F9FF,#F7FAFF,#F9FBFF,#FBFCFF,#FDFDFF,#FFFFFF);border-radius: 24px">
        <ion-text
            style="display: block;width: 100%;text-align: center;color: #4051BC;font-size: 28px;font-weight: 900;padding: 20px 0;">
          摇一摇&nbsp;<ion-icon style="vertical-align: sub" :icon="icon"></ion-icon>
        </ion-text>
        <div ref="div1"
             style="width: 182px;height: 182px;background: rgba(93,109,255,0.13);margin: 0 auto 20px auto;position:relative;border-radius: 100%;">
          <div ref="div2"
               style="width: 138px;height: 138px;background: rgba(93,120,255,0.42);top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 100%;position:absolute;">
            <div ref="div3"
                 style="width: 100px;height: 100px;background: rgba(93,120,255,0.72);top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 100%;position:absolute;">
              <ion-icon :icon="phoneShake" ref="iconElement" @click="shake()"
                        style="display: block;width: 58px;height: 54px;top: 50%;left: 50%;transform: translate(-50%, -50%);position:absolute;"></ion-icon>
            </div>
          </div>
        </div>
        <div
            style="display: flex;justify-content: center;padding-bottom: 20px;border-bottom: 1px solid rgba(130,147,255,0.18)">
          <!--          <ion-chip mode="md"-->
          <!--                    style="border-radius: 8px;min-width: 48px;&#45;&#45;background: #D6DBFF;&#45;&#45;color: #7D8DFF;font-weight: 900">-->
          <!--            <ion-text style="width: 100%;text-align: center;font-size: 11px;">自律</ion-text>-->
          <!--          </ion-chip>-->
          <ion-chip mode="md" v-if="shakeTeam.attribute!=''"
                    style="border-radius: 8px;min-width: 48px;--background: #D6F5FF;--color: #6DDBFF;font-weight: 900">
            <ion-text style="width: 100%;text-align: center;font-size: 11px;">{{ shakeTeam.attribute }}</ion-text>
          </ion-chip>
          <!--          <ion-chip mode="md"-->
          <!--                    style="border-radius: 8px;min-width: 48px;&#45;&#45;background: #FFF8D6;&#45;&#45;color: #F9BE00;font-weight: 900">-->
          <!--            <ion-text style="width: 100%;text-align: center;font-size: 11px;">活泼</ion-text>-->
          <!--          </ion-chip>-->
        </div>

        <div style="padding: 16px" v-if="shakeTeam.id!=0">
          <div style="display: flex;position:relative;">
            <ion-thumbnail style="--border-radius: 8px;--size: 42px"><img
                :src="shakeTeam.tavatar"
                alt=""/></ion-thumbnail>
            <div style="margin-left: 10px">
              <ion-text style="display: block;color: #505050;font-weight: bold;font-size: 14px">{{ shakeTeam.tname }}
              </ion-text>
            </div>
            <ion-text
                style="position:absolute;bottom: 0;right: 0;color: rgba(64,81,188,0.66);font-size: 12px;font-weight: bold;display: block">
              <ion-button
                  expand="block" @click="join()"
                  style="--background: #FFAC3A;--background-activated: #c2832c;--color: white;font-size: 12px;height: 26px;min-height: 0;--padding-start: 3px;--padding-end: 3px;--border-radius: 10px">
                点击加入&nbsp;
              </ion-button>
              相距2.1公里
            </ion-text>

          </div>
        </div>
      </div>

      <ion-accordion-group expand="inset" value="main" style="--background: #fff">
        <ion-accordion ref="accordion" value="main">
          <ion-item slot="header" style="--background: #fff">
            <ion-label style="width: 100%;text-align: center;color: #4051BC;font-size: 14px">关键词</ion-label>
            <ion-icon class="ion-accordion-toggle-icon" :icon="chevronDownOutline" aria-hidden="true"
                      style="width: 14px;height: 14px;color: #6076FF"></ion-icon>
          </ion-item>
          <div class="ion-padding" slot="content"
               style="display: flex;justify-content: center;background-color: #fff;flex-wrap: wrap">
            <ion-chip mode="md" v-for="(item,i) in vocabulary" :disabled="!item.clicked" @click="choose(i)"
                      style="border-radius: 8px;min-width: 48px;margin: 10px 5px;font-weight: 900"
                      :style="i%4==0?'--background: #D6DBFF;--color: #7D8DFF;':i%4==1?'--background: #D6F5FF;--color: #6DDBFF;':i%4==2?'--background: #FFF8D6;--color: #F9BE00;':'--background: #DAFFD6;--color: #00E286;'">
              <ion-text style="width: 100%;text-align: center;font-size: 11px;">{{ item.w }}</ion-text>
            </ion-chip>
            <ion-chip mode="md"
                      style="border-radius: 8px;min-width: 48px;--background: #F2F2F2;--color: #909090;margin: 10px 5px">
              <ion-icon style="margin: 0" :icon="addOutline"></ion-icon>
              <ion-text style="width: 100%;text-align: center;font-size: 11px;">自定义</ion-text>
            </ion-chip>
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/shake.png") no-repeat bottom right, linear-gradient(to bottom, #5D73FF, #D6DCFF);
  background-size: 120%;
  z-index: -2;
}

.chip-disabled {
  cursor: pointer;
  pointer-events: all;

}

ion-toolbar {
  --background: transparent;
}

</style>