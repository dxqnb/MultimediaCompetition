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
  IonList,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonChip,
  IonButton, pickerController,
  IonText, IonSelect, IonInput, IonSelectOption, toastController
} from "@ionic/vue";
import {addOutline, ellipsisHorizontal} from 'ionicons/icons';
import {reactive, ref} from "vue";
import {chevronForwardOutline} from 'ionicons/icons';
import {addFridenTeam} from "@/api/team";
import router from "@/router";

const vocabulary = ref('请选择');
const days = ref('请选择');
const tname = ref('');
const introduction = ref('');
const maxNumber = ref('2');
const flag = ref(false);
const textarea = ref('');
const attribute = ref('自定义');

const pickerColumns = [
  {
    name: 'vocabulary',
    options: [
      {
        text: '请选择每日单词数',
        value: '请选择',
      },
      {
        text: '10个',
        value: '10',
      },
      {
        text: '15个',
        value: '15',
      },
      {
        text: '20个',
        value: '20',
      },
      {
        text: '25个',
        value: '25',
      },
      {
        text: '30个',
        value: '30',
      },
      {
        text: '40个',
        value: '40',
      },
      {
        text: '50个',
        value: '50',
      },
      {
        text: '60个',
        value: '60',
      },
      {
        text: '70个',
        value: '70',
      },
      {
        text: '80个',
        value: '80',
      },
      {
        text: '90个',
        value: '90',
      },
      {
        text: '100个',
        value: '100',
      },
    ],
  },
  {
    name: 'days',
    options: [
      {
        text: '请选学习时长',
        value: '请选择',
      },
      {
        text: '1小时',
        value: '1',
      },
      {
        text: '2小时',
        value: '14',
      },
      {
        text: '3小时',
        value: '3',
      },
      {
        text: '4小时',
        value: '4',
      },
      {
        text: '5小时',
        value: '5',
      },
      {
        text: '6小时',
        value: '6',
      },
      {
        text: '7小时',
        value: '7',
      },
      {
        text: '8小时',
        value: '8',
      },
    ],
  },
];
const pickerButtons = [
  {
    text: 'Cancel',
    role: 'cancel',
  },
  {
    text: 'Confirm',
    handler: (value: any) => {
      window.alert(`单词数:${value.vocabulary.value} 天数:${value.days.value}`);
      vocabulary.value = value.vocabulary.text;
      days.value = value.days.text;
    },
  },
];

async function openPicker() {
  const picker = await pickerController.create(
      {
        columns: pickerColumns,
        buttons: pickerButtons,
        mode: 'ios',
        cssClass: ['picker'],
      }
  );
  await picker.present();
}

const user = localStorage.getItem('user') || ''
const userid = JSON.parse(user).id

function post() {
  let a = {
    tname: tname.value,
    userid: userid,
    tavatar: '',
    introduction: introduction.value,
    in_type: 0,
    number: 1,
    mxnumber: maxNumber.value,
    attribute: attribute.value == '自定义' ? '' : attribute.value,
  }
  addFridenTeam(a).then(async (res) => {
    console.log(res)
    const toast = await toastController.create({
      message: res.data.msg
    })
    await toast.present().then(() => {
      setTimeout(() => {
        toast.dismiss()
      }, 1000)
    })
    router.back()
  })

}

</script>

<template>
  <IonPage>
    <IonHeader style="background-color: #f7f7f7" class="ion-no-border ion-padding">
      <IonToolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/team"></ion-back-button>
        </ion-buttons>
        <IonTitle>自建组队</IonTitle>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisHorizontal"/>
          </ion-button>
        </ion-buttons>
      </IonToolbar>
    </IonHeader>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-card style="margin: 0">
        <ion-card-content>
          <ion-list>
            <ion-item lines="none">
              <ion-input
                  v-model="tname"
                  label="队伍名"
                  label-placement="stacked"
                  :clear-on-edit="true"
                  placeholder="请输入队伍名"
              >
              </ion-input>
            </ion-item>
            <ion-item lines="none">
              <ion-input
                  v-model="introduction"
                  label="团队说明"
                  label-placement="stacked"
                  :clear-on-edit="true"
                  placeholder="请输入队伍说明"
              >
              </ion-input>
            </ion-item>
            <ion-item lines="none">
              <ion-select label="组队人数" placeholder="4"
                          v-model="maxNumber"
                          class="always-flip"
                          :toggle-icon="chevronForwardOutline"
                          interface="popover"
                          value="2">
                <ion-select-option value="4">4</ion-select-option>
                <ion-select-option value="5">5</ion-select-option>
                <ion-select-option value="6">6</ion-select-option>
                <ion-select-option value="7">7</ion-select-option>
                <ion-select-option value="8">8</ion-select-option>
                <ion-select-option value="9">9</ion-select-option>
                <ion-select-option value="10">10</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item lines="none">
              <ion-label>设置学友属性</ion-label>
              <ion-chip slot="end" @click="flag=true">
                <ion-icon style="margin: 0" v-if="!flag" :icon="addOutline"></ion-icon>
                <span v-if="!flag">
                  {{ attribute }}
                </span>
                <ion-textarea @keydown.enter="()=>{flag=false;attribute=textarea}" v-model="textarea" v-if="flag"
                              style="--padding-start: 0;--padding-top: 0;--padding-bottom: 0;--padding-end: 0;width: 50px;"></ion-textarea>
              </ion-chip>
            </ion-item>
            <ion-item lines="none" style="padding: 20px 0">
              <ion-button @click="post"
                          style="width: 100%;--background: #515EFF;color: #FFFFFF;--padding-top: 0.8em;--padding-bottom: 0.8em;font-size: 1em">
                创建队伍
              </ion-button>
            </ion-item>
          </ion-list>
          <!--          <ion-picker trigger="open-picker" :columns="pickerColumns" :buttons="pickerButtons"></ion-picker>-->

        </ion-card-content>
      </ion-card>

    </ion-content>

  </IonPage>
</template>

<style scoped lang="scss">
ion-content::part(background) {
  background: #f1f1f1;
}

.item-lines-full {
  --border-width: 0.55px 0px 0px 0px;
}

ion-thumbnail {
  --border-radius: 4px;
}

ion-item {
  --padding-start: 0px;
}

.card-content-ios {
  padding: 10px 20px;
}

ion-button.topButton {
  --ion-color-base: #E3E7FF !important;
  --ion-color-contrast: #4257DF !important;
}

ion-select.always-flip::part(icon) {
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

ion-select.always-flip.select-expanded::part(icon) {
  transform: rotate(90deg);
}

ion-select.never-flip::part(icon) {
  transform: none;
}
</style>