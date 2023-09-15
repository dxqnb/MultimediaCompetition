<script setup lang="ts">
import {IonCard, IonCardContent, IonIcon, IonText} from "@ionic/vue";
import {getNotice} from "@/api/team";
import {ref} from "vue";

interface noticeItem {
  noticeid: number
  noticetitle: string
  noticetype: string
  noticecontent: string
  status: string,
  createby: string,
  createtime: string,
  updateby: string,
  studentname: string,
  avatar: string
}

const notice = ref<noticeItem>({
  noticeid: 0,
  noticetitle: "",
  noticetype: "",
  noticecontent: "",
  status: "",
  createby: "",
  createtime: "",
  updateby: "",
  studentname: "",
  avatar: ""
})
getNotice().then((res) => {
  notice.value = res.data.data[0]

})
</script>

<template>
  <div>
    <ion-card class="inner"
              style="">
      <ion-card-content>
        <!--              <ion-text style="font-size: 16px;background: -webkit-linear-gradient(bottom,#6D99FF,#6D99FF,#6D99FF);-webkit-background-clip: text;-webkit-text-fill-color: transparent">-->
        <ion-text style="font-size: 12px; color: #7B7B7B">
          通知:
        </ion-text>
        <ion-text style="font-size: 12px !important; color: #586DEF">
          <!--              "背单词"不简单队"达成"百日单词"目标-->
          <div style="display: inline-block;font-size: 12px; color: #586DEF">
            “背单词”学友小队 达成“百日单词”目标
          </div>
        </ion-text>
        <ion-text style="font-size: 12px; color: #FFBB00">
          &nbsp;恭喜他们!
        </ion-text>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<style scoped>
ion-card.inner {
  position: relative;
  width: 100%;
  display: inline-block;
  height: 2em;
  border-radius: 13px;
  margin: 20px 0 0 0;
}


ion-card.inner ion-card-content {
  height: 100%;
  padding: 0 10px;
}

</style>
<style>
p {
  font-size: 12px !important;
}
</style>