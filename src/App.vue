<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet, useIonRouter} from '@ionic/vue';
const router=useIonRouter()
if (localStorage.getItem('isFirst')==undefined){
  localStorage.setItem('isFirst','false')
  router.replace('/login/guide')
}
</script>
<style>
.picker .picker-opt {
  font-size: 16px;
}
</style>