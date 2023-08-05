<template>
  <ion-page>
    <div ref="editorContainer" style="width: 100%; height: 100%;"></div>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
} from '@ionic/vue';
import * as monaco from 'monaco-editor';
import {onBeforeUnmount, onMounted, ref} from "vue";

const editorContainer = ref();
onMounted(() => {
  const MonacoEnvironment = {
      getWorkerUrl: function (moduleId, label) {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = {
            baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@4.2.1/min/'
          };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@4.2.1/min/vs/base/worker/workerMain.js');
        `)}`;
      },
    };
  const editor = monaco.editor.create(editorContainer.value, {
    value: [
      'function x() {',
      'console.log("Hello world!");',
      '}'
    ].join('\n'),
    language: 'javascript',
    theme: 'vs',
    useWorker: false,
  });
  // self.MonacoEnvironment = {
  //   getWorkerUrl: function (moduleId, label) {
  //     if (label === 'json') {
  //       return './json.worker.bundle.js';
  //     }
  //     if (label === 'css' || label === 'scss' || label === 'less') {
  //       return './css.worker.bundle.js';
  //     }
  //     if (label === 'html' || label === 'handlebars' || label === 'razor') {
  //       return './html.worker.bundle.js';
  //     }
  //     if (label === 'typescript' || label === 'javascript') {
  //       return './ts.worker.bundle.js';
  //     }
  //     return './editor.worker.bundle.js';
  //   }
  // };
})

onBeforeUnmount(() => {
  // editor.dispose();
});
</script>