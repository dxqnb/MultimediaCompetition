<script setup lang="ts">

import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem, IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonText,
    IonIcon
} from "@ionic/vue";
import {chevronForward, chevronDown} from 'ionicons/icons';
import TaskProcessItem from "@/views/team/components/taskProcessItem.vue";

</script>

<template>
  <div>
    <ion-text style="color:#333333;font-size: 16px;font-weight: 600;display: inline-block;margin: 10px 0">当前任务进度
    </ion-text>
    <ion-button
        style="width: 100%;--background: #E9EFFF;color: #5C82FF;--box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;"
        :disabled="true">{{ `任务点A` }}
    </ion-button>
    <task-process-item v-for="i in 3"></task-process-item>
  </div>
</template>

<style scoped>

</style>