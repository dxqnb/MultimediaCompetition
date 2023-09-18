<script setup lang="ts">

import {IonAvatar, IonCard, IonCardContent, IonIcon, IonText, IonThumbnail, IonChip} from "@ionic/vue";
import {reactive, ref} from "vue";
import {getAllFridenTeam, getFridenTeamUserList} from "@/api/team";


interface teamuser {
  id: number,
  tid: number,
  userid: number,
  createtime: string,
  studentname: string,
  avatar: string,
  status: string,
  deptid: number,
  sex: number,
  email: string,
  deptname: string,
  uactivity: number,
}
const items = reactive<teamuser[]>([]);
const props = defineProps(['item', 'index', 'disable']);
getFridenTeamUserList(props.item.id).then((res)=>{
  console.log(res.data.data)
  for (let i = 0; i < res.data.data.length; i++) {
    items.push(res.data.data[i])
  }
})

const circle = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">\n' +
    '  <g id="组_702" data-name="组 702" transform="translate(0 -19)" opacity="0.36">\n' +
    '    <circle id="椭圆_33" data-name="椭圆 33" cx="40.5" cy="40.5" r="40.5" transform="translate(0 19)" fill="#5676f1" opacity="0.22"/>\n' +
    '    <circle id="椭圆_32" data-name="椭圆 32" cx="18.5" cy="18.5" r="18.5" transform="translate(22 41)" fill="#5676f1"/>\n' +
    '  </g>\n' +
    '</svg>\n')


</script>

<template>
  <ion-card v-if="item.number==item.mxnumber&&index=='disable'" @click="$router.push('/team/teamInfo/'+item.id)"
            :style="disable?'margin: 12px 0 ;--background: #ffffff;box-shadow: none;opacity:0.5':'margin: 12px 0 ;--background: #ffffff;box-shadow: none'">
    <ion-card-content style="padding: 10px">
      <ion-chip
          style="position: absolute;top: -4px;right: -4px;font-size: 13px;margin: 0;border-radius: 6px;padding-top: 10px;padding-right: 14px"
          :style="disable?'--background: #949494;--color: #fff;':'--background: #2483FF;--color: #fff;'"
          mode="md">队伍
      </ion-chip>
      <div>
        <div style="display: flex;">
          <ion-thumbnail style="--border-radius: 8px;--size: 104px"><img :src="item.bgimg"
                                                                         alt=""/></ion-thumbnail>
          <div style="margin-left: 10px">
            <ion-chip
                style="font-size: 12px;--color: rgba(16,9,207,0.45);--background: rgba(44,0,255,0.1);padding-top: 0;padding-bottom: 0;margin: 0;">
              {{"@"+item.studentname }}
            </ion-chip>
            <ion-text style="display: block;color: black;font-weight: bold;margin-top: 13px">{{ item.tname }}
            </ion-text>
            <ion-text
                style="display: block;color: rgba(0,0,0,0.32);width: 90%;font-size: 12px;text-align: left;margin-top: 5px;font-weight: bold">
              {{ item.createtime }}
            </ion-text>
          </div>
        </div>
      </div>
      <div style="margin: 10px 0 5px 0">
        <ion-avatar v-for="(i,b) in items"
                    style="width: 22px;height: 22px;display: inline-block;position: relative;vertical-align: middle" :style="b==0?'z-index: '+items.length+';':'z-index: '+(items.length-b)+';margin-left: -6px;'">
          <img alt="Silhouette of a person's head" :src="i.avatar"/>
        </ion-avatar>
        <ion-text style="color: #B5B5B5;font-size: 13px;vertical-align: middle;padding-left: 10px">
          {{ item.number }}人已参加
        </ion-text>
      </div>
      <ion-icon :icon="circle" style="position: absolute;bottom: -30px;right: -20px;font-size: 81px"></ion-icon>
    </ion-card-content>
  </ion-card>
  <ion-card v-if="item.number<item.mxnumber&&index=='able'" @click="$router.push('/team/teamInfo/'+item.id)"
            :style="disable?'margin: 12px 0 ;--background: #ffffff;box-shadow: none;opacity:0.5':'margin: 12px 0 ;--background: #ffffff;box-shadow: none'">
    <ion-card-content style="padding: 10px">
      <ion-chip
          style="position: absolute;top: -4px;right: -4px;font-size: 13px;margin: 0;border-radius: 6px;padding-top: 10px;padding-right: 14px"
          :style="disable?'--background: #949494;--color: #fff;':'--background: #2483FF;--color: #fff;'"
          mode="md">队伍
      </ion-chip>
      <div>
        <div style="display: flex;">
          <ion-thumbnail style="--border-radius: 8px;--size: 104px"><img :src="item.bgimg"
                                                                         alt=""/></ion-thumbnail>
          <div style="margin-left: 10px">
            <ion-chip
                style="font-size: 12px;--color: rgba(16,9,207,0.45);--background: rgba(44,0,255,0.1);padding-top: 0;padding-bottom: 0;margin: 0;">
              {{"@"+ item.studentname }}
            </ion-chip>
            <ion-text style="display: block;color: black;font-weight: bold;margin-top: 13px">{{ item.tname }}
            </ion-text>
            <ion-text
                style="display: block;color: rgba(0,0,0,0.32);width: 90%;font-size: 12px;text-align: left;margin-top: 5px;font-weight: bold">
              {{ item.createtime }}
            </ion-text>
          </div>
        </div>
      </div>
      <div style="margin: 10px 0 5px 0">
        <ion-avatar v-for="(i,b) in items"
            style="width: 22px;height: 22px;display: inline-block;position: relative;vertical-align: middle" :style="b==0?'z-index: '+items.length+';':'z-index: '+(items.length-b)+';margin-left: -6px;'">
                          <img alt="Silhouette of a person's head" :src="i.avatar"/>
<!--          <div style="width: 22px;height: 22px;background-color: #73C2FF;border-radius: 100%"></div>-->
        </ion-avatar>
        <ion-text style="color: #B5B5B5;font-size: 13px;vertical-align: middle;padding-left: 10px">
          {{ item.number }}人已参加
        </ion-text>
      </div>
      <ion-icon :icon="circle" style="position: absolute;bottom: -30px;right: -20px;font-size: 81px"></ion-icon>
    </ion-card-content>
  </ion-card>

</template>

<style scoped>

</style>
