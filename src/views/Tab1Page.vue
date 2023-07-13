<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar ios :debounce="500"></ion-searchbar>
      </ion-toolbar>
    </ion-header>


    <ion-content>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
      <ion-button @click="takePicture">test</ion-button>
      <ion-button @click="test">test</ion-button>

    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <!-- <ion-title>Footer Toolbar</ion-title> -->
        <ion-toolbar>
          <ion-searchbar search-icon="none" placeholder="imageUrl" id="input"></ion-searchbar>
        </ion-toolbar>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>
<style lang="less">
#input {
  margin-top: 10px;
}


</style>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonItem,
  IonList,
  IonCard,
  IonCardHeader,
  IonFooter,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/vue';
import {defineComponent, onMounted, ref} from "vue";
import {Camera, CameraResultType} from '@capacitor/camera';
import {Flashlight} from '@awesome-cordova-plugins/flashlight';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonItem,
    IonList,
    IonCard,
    IonCardHeader,
    IonFooter,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonButton
  },
  setup() {
    const data = [
      'Amsterdam',
      'Buenos Aires',
      'Cairo',
      'Geneva',
      'Hong Kong',
      'Istanbul',
      'London',
      'Madrid',
      'New York',
      'Panama City',
    ];
    const results = ref(data);
    // var test = ref('');
    return {
      data, results,

    };

  },
  created() {
    // console.log(this.$httpUrl);
  },
  methods: {
    // handleInput(event) {
    //     const query = event.target.value.toLowerCase();
    //     this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    // },
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      var imageUrl = image.webPath;
      return imageUrl;
    },
    async test() {
      await Flashlight.toggle();
    },
  },
});
</script>
