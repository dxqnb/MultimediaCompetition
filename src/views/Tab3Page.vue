<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Blank</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent id="content" className="content-camera-preview">
      <IonButton style='zIndex: "99999' :onClick='startCamera'>
        Show Front Camera Preview
      </IonButton>
      <IonButton style='zIndex: "99999' :onClick='takePicture'>
        拍照
      </IonButton>
      <IonButton style='zIndex: "99999"' :onClick='stopCamera'>
        Stop
      </IonButton>
      <IonButton style='zIndex: "99999' :onClick='flipCamera'>
        Flip
      </IonButton>
    </IonContent>
  </IonPage>
</template>
<style>
ion-content {
  --background: transparent;
}
</style>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent, ref } from "vue";

import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { Plugins } from "@capacitor/core";

export default defineComponent({
  components: { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  setup() {
    var a = ref("test");
    return {
      a
    }
  },
  created() {
    
  },
  methods: {
    startCamera() {
      CameraPreview.start({
        position: 'rear',
        height: 1920/2,
        width: 1080/2,
        enableZoom: true,
        toBack: true,
      })
    },
    stopCamera() {
      CameraPreview.stop();
    },
    flipCamera() {
      CameraPreview.flip();
    },
    async takePicture() {
      const result = await CameraPreview.capture({
        height: 1920,
        width: 1080
      });
      console.log(result.value);
    }
  }
});

</script>
