import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router';

import {IonicVue} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import {defineCustomElements} from '@ionic/pwa-elements/loader';
import {Capacitor} from '@capacitor/core';


/* Theme variables */
import './theme/variables.css';

import 'xgplayer/dist/index.min.css';
import { inject } from '@vercel/analytics';

inject();
// document.addEventListener('deviceready',function(){
const app = createApp(App)
    .use(IonicVue)
    .use(router);
app.config.globalProperties.$httpUrl = 'http://localhost:3000';
router.isReady().then(() => {
    app.mount('#app');
});
// app.component('swiper', Swiper);
// app.component('swiper-slide', SwiperSlide);
defineCustomElements(window).then(r => {
});
// },false);

// if (Capacitor.isNativePlatform()) {
//   console.log("I'm a native app!");
// } else {
//   console.log("I'm a PWA or Web app!");
// }
// const isAvailable = Capacitor.isPluginAvailable('Camera');

// if (!isAvailable) {
//   // Have the user upload a file instead
// } else {
//   // Otherwise, make the call:
//   const image = await Camera.getPhoto({
//     resultType: CameraResultType.Uri,
//   });
// }
console.debug("%c                            \n      _                     \n     | |                     \n   __| | __  __ __  __ __  __\n  / _` | \\ \\/ / \\ \\/ / \\ \\/ /\n | (_| |  >  <   >  <   >  < \n  \\__,_| /_/\\_\\ /_/\\_\\ /_/\\_\\\n                             \n                             \n", 'font-family: monospace;')
