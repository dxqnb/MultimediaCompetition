System.register(["./index-legacy-10509cd4.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.W}],execute:function(){e("CameraPreviewWeb",class extends a{constructor(){super({name:"CameraPreview",platforms:["web"]})}async start(e){return new Promise((async(t,a)=>{await navigator.mediaDevices.getUserMedia({audio:!e.disableAudio,video:!0}).then((e=>{e.getTracks().forEach((e=>e.stop()))})).catch((e=>{a(e)}));const i=document.getElementById("video"),r=document.getElementById(e.parent);if(i)a({message:"camera already started"});else{const i=document.createElement("video");i.id="video",i.setAttribute("class",e.className||""),"rear"!==e.position&&i.setAttribute("style","-webkit-transform: scaleX(-1); transform: scaleX(-1);");const s=navigator.userAgent.toLowerCase();if(s.includes("safari")&&!s.includes("chrome")&&(i.setAttribute("autoplay","true"),i.setAttribute("muted","true"),i.setAttribute("playsinline","true")),r.appendChild(i),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const r={video:{width:{ideal:e.width},height:{ideal:e.height}}};"rear"===e.position?(r.video.facingMode="environment",this.isBackCamera=!0):this.isBackCamera=!1,navigator.mediaDevices.getUserMedia(r).then((function(e){i.srcObject=e,i.play(),t({})}),(e=>{a(e)}))}}}))}async startRecordVideo(){throw this.unimplemented("Not implemented on web.")}async stopRecordVideo(){throw this.unimplemented("Not implemented on web.")}async stop(){const e=document.getElementById("video");if(e){e.pause();const t=e.srcObject.getTracks();for(let e=0;e<t.length;e++)t[e].stop();e.remove()}}async capture(e){return new Promise(((t,a)=>{const i=document.getElementById("video"),r=document.createElement("canvas"),s=r.getContext("2d");let o;r.width=i.videoWidth,r.height=i.videoHeight,this.isBackCamera||(s.translate(i.videoWidth,0),s.scale(-1,1)),s.drawImage(i,0,0,i.videoWidth,i.videoHeight),o=null!=e.quality?r.toDataURL("image/jpeg",e.quality/100).replace("data:image/jpeg;base64,",""):r.toDataURL("image/png").replace("data:image/png;base64,",""),t({value:o})}))}async captureSample(e){return this.capture(e)}async getSupportedFlashModes(){throw new Error("getSupportedFlashModes not supported under the web platform")}async setFlashMode(e){throw new Error("setFlashMode not supported under the web platform")}async flip(){throw new Error("flip not supported under the web platform")}async setOpacity(e){const t=document.getElementById("video");t&&e.opacity&&t.style.setProperty("opacity",e.opacity.toString())}})}}}));