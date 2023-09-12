<!--<template>-->
<!--    <IonPage>-->
<!--      <IonHeader>-->
<!--        <IonToolbar>-->
<!--          <IonTitle>Blank</IonTitle>-->
<!--        </IonToolbar>-->
<!--      </IonHeader>-->
<!--      <IonContent id="content" className="content-camera-preview">-->
<!--        <IonButton style='zIndex: "99999' :onClick='startCamera'>-->
<!--          Show Front Camera Preview-->
<!--        </IonButton>-->
<!--        <IonButton style='zIndex: "99999' :onClick='takePicture'>-->
<!--          拍照-->
<!--        </IonButton>-->
<!--        <IonButton style='zIndex: "99999"' :onClick='stopCamera'>-->
<!--          Stop-->
<!--        </IonButton>-->
<!--        <IonButton style='zIndex: "99999' :onClick='flipCamera'>-->
<!--          Flip-->
<!--        </IonButton>-->
<!--              <applet></applet>-->
<!--      </IonContent>-->
<!--    </IonPage>-->
<!--</template>-->
<!--<style>-->
<!--ion-content {-->
<!--  &#45;&#45;background: transparent;-->
<!--}-->
<!--</style>-->
<!--<script lang="ts">-->
<!--import {IonButton,IonContent,IonHeader,IonPage,-->
<!--  IonTitle,-->
<!--  IonToolbar,-->
<!--} from '@ionic/vue';-->
<!--import {defineComponent, ref} from "vue";-->

<!--import {CameraPreview, CameraPreviewOptions} from '@capacitor-community/camera-preview';-->
<!--import {Plugins} from "@capacitor/core";-->

<!--export default defineComponent({-->
<!--  components: {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar},-->
<!--  setup() {-->
<!--    var a = ref("test");-->
<!--    return {-->
<!--      a-->
<!--    }-->

<!--    async function f() {-->
<!--      await cheerpjInit();-->
<!--      cheerpjCreateDisplay(300, 600);-->
<!--      cheerpjAddStringFile("/str/temp.txt", "xxx&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;x-&#45;&#45;\n" +-->
<!--          "&#45;&#45;&#45;&#45;x&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;x-\n" +-->
<!--          "&#45;&#45;&#45;&#45;&#45;&#45;x\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "-&#45;&#45;&#45;&#45;&#45;&#45;\n" +-->
<!--          "&#45;&#45;&#45;&#45;E&#45;&#45;\n" +-->
<!--          "XXX<>XX");-->
<!--      const mariosheet = new Image();-->
<!--      mariosheet.src = 'img/mariosheet.png'-->
<!--      mariosheet.onload = () => {-->
<!--        const canvas1 = document.createElement("canvas")-->
<!--        canvas1.width = mariosheet.width;-->
<!--        canvas1.height = mariosheet.height;-->
<!--        const context1 = canvas1.getContext("2d");-->
<!--        context1?.drawImage(mariosheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/mariosheet.txt", canvas1.toDataURL());-->
<!--      }-->

<!--      const smallmariosheet = new Image();-->
<!--      smallmariosheet.src = 'img/smallmariosheet.png'-->
<!--      smallmariosheet.onload = () => {-->
<!--        const canvas2 = document.createElement("canvas");-->
<!--        const context2 = canvas2.getContext("2d");-->
<!--        canvas2.width = smallmariosheet.width;-->
<!--        canvas2.height = smallmariosheet.height;-->
<!--        context2?.drawImage(smallmariosheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/smallmariosheet.txt", canvas2.toDataURL());-->
<!--      }-->

<!--      const firemariosheet = new Image();-->
<!--      firemariosheet.src = 'img/firemariosheet.png'-->
<!--      firemariosheet.onload = () => {-->
<!--        const canvas3 = document.createElement("canvas");-->
<!--        const context3 = canvas3.getContext("2d");-->
<!--        canvas3.width = firemariosheet.width;-->
<!--        canvas3.height = firemariosheet.height;-->
<!--        context3?.drawImage(firemariosheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/firemariosheet.txt", canvas3.toDataURL());-->
<!--      }-->

<!--      const enemysheet = new Image();-->
<!--      enemysheet.src = 'img/enemysheet.png'-->
<!--      enemysheet.onload = () => {-->
<!--        const canvas4 = document.createElement("canvas");-->
<!--        const context4 = canvas4.getContext("2d");-->
<!--        canvas4.width = enemysheet.width;-->
<!--        canvas4.height = enemysheet.height;-->
<!--        context4?.drawImage(enemysheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/enemysheet.txt", canvas4.toDataURL());-->
<!--      }-->

<!--      const itemsheet = new Image();-->
<!--      itemsheet.src = 'img/itemsheet.png'-->
<!--      itemsheet.onload = () => {-->
<!--        const canvas5 = document.createElement("canvas");-->
<!--        const context5 = canvas5.getContext("2d");-->
<!--        canvas5.width = itemsheet.width;-->
<!--        canvas5.height = itemsheet.height;-->
<!--        context5?.drawImage(itemsheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/itemsheet.txt", canvas5.toDataURL());-->
<!--      }-->

<!--      const mapsheet = new Image();-->
<!--      mapsheet.src = 'img/mapsheet.png'-->
<!--      mapsheet.onload = () => {-->
<!--        const canvas6 = document.createElement("canvas");-->
<!--        const context6 = canvas6.getContext("2d");-->
<!--        canvas6.width = mapsheet.width;-->
<!--        canvas6.height = mapsheet.height;-->
<!--        context6?.drawImage(mapsheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/mapsheet.txt", canvas6.toDataURL());-->
<!--      }-->

<!--      const particlesheet = new Image();-->
<!--      particlesheet.src = 'img/particlesheet.png'-->
<!--      particlesheet.onload = () => {-->
<!--        const canvas7 = document.createElement("canvas");-->
<!--        canvas7.width = particlesheet.width;-->
<!--        canvas7.height = particlesheet.height;-->
<!--        const context7 = canvas7.getContext("2d");-->
<!--        context7?.drawImage(particlesheet, 0, 0)-->
<!--        cheerpjAddStringFile("/str/particlesheet.txt", canvas7.toDataURL());-->
<!--      }-->

<!--      const font = new Image();-->
<!--      font.src = 'img/font.gif'-->
<!--      font.onload = () => {-->
<!--        const canvas8 = document.createElement("canvas");-->
<!--        canvas8.width = font.width;-->
<!--        canvas8.height = font.height;-->
<!--        const context8 = canvas8.getContext("2d");-->
<!--        context8?.drawImage(font, 0, 0)-->
<!--        cheerpjAddStringFile("/str/font.txt", canvas8.toDataURL());-->
<!--      }-->


<!--      const favicon = new Image();-->
<!--      favicon.src = 'img/favicon.png'-->
<!--      favicon.onload = () => {-->
<!--        const canvas9 = document.createElement("canvas");-->
<!--        canvas9.width = favicon.width;-->
<!--        canvas9.height = favicon.height;-->
<!--        const context9 = canvas9.getContext("2d");-->
<!--        context9?.drawImage(favicon, 0, 0)-->
<!--        cheerpjAddStringFile("/str/favicon.txt", canvas9.toDataURL());-->
<!--        console.log(canvas9.toDataURL())-->
<!--      }-->

<!--      const frameworkAD = new Image();-->
<!--      frameworkAD.src = 'img/frameworkAD.gif'-->
<!--      frameworkAD.onload = () => {-->
<!--        const canvas10 = document.createElement("canvas");-->
<!--        canvas10.width = frameworkAD.width;-->
<!--        canvas10.height = frameworkAD.height;-->
<!--        const context10 = canvas10.getContext("2d");-->
<!--        context10?.drawImage(frameworkAD, 0, 0)-->
<!--        cheerpjAddStringFile("/str/frameworkAD.txt", canvas10.toDataURL());-->
<!--      }-->

<!--      setTimeout(() => {-->
<!--        cheerpjRunJar("/app/PlayLevel.jar", '/str/temp.txt', '/str/')-->
<!--      }, 1000);-->
<!--    }-->
<!--    f();-->
<!--  },-->
<!--  created() {-->

<!--  },-->
<!--  methods: {-->
<!--    startCamera() {-->
<!--      CameraPreview.start({-->
<!--        position: 'rear',-->
<!--        height: 1920 / 2,-->
<!--        width: 1080 / 2,-->
<!--        enableZoom: true,-->
<!--        toBack: true,-->
<!--      })-->
<!--    },-->
<!--    stopCamera() {-->
<!--      CameraPreview.stop();-->
<!--    },-->
<!--    flipCamera() {-->
<!--      CameraPreview.flip();-->
<!--    },-->
<!--    async takePicture() {-->
<!--      const result = await CameraPreview.capture({-->
<!--        height: 1920,-->
<!--        width: 1080-->
<!--      });-->
<!--      console.log(result.value);-->
<!--    }-->
<!--  }-->
<!--});-->


<!--</script>-->
