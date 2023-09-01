<script setup lang="ts">
import {
  IonRadio,
  IonButton,
  IonRadioGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonChip,
  IonRange,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonTitle, createAnimation
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  chevronForwardOutline,
  star,
  starOutline,
  addOutline,
  chevronDownOutline, phonePortraitOutline
} from "ionicons/icons";
import {onMounted, ref} from "vue";

import {client, parsers, utils, server} from '@passwordless-id/webauthn'

// async function login() {
//   const challenge = "56535b13-5d93-4194-a282-f234c1c24500"
//   const authentication = await client.authenticate(["3924HhJdJMy_svnUowT8eoXrOOO6NLP8SK85q2RPxdU"], challenge, {
//     "authenticatorType": "auto",
//     "userVerification": "required",
//     "timeout": 60000
//   })
// }

let origin = document.location.origin
let registration: any = {
  username: "Arnaud",
  challenge: utils.randomChallenge(),
  options: {
    authenticatorType: 'auto',
    userVerification: 'required',
    timeout: 60000,
    attestation: false,
  },
  result: '',
  parsed: ''
}
let authentication: any = {
  credentialId: null,
  challenge: utils.randomChallenge(),
  options: {
    authenticatorType: 'auto',
    userVerification: 'required',
    timeout: 60000,
  },
  result: '',
  parsed: ''
}
let verification: any = {
  publicKey: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWyyMt1l16_1rzDP63Ayw9EFpn1VbSt4NSJ7BOsDzqed5Z3aTfQSvzPBPHb4uYQuuckOKRbdoH9S0fEnSvNxpRg==", // null,
  //"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzXUir6UgELFeM9il6id2vgZ1sWbZTk4C5JLIiMpg7lywwTRdp0i+lPP9rEdzcmwKwRLh5QT8DlPFQuKrUc8eXb9r+RPq/CvVOxVCqdK6A9fg0PDnvA3k7c5Ax5V5n/HcSw/uXVAzwstxQsbV5pOk0JDtys7rKiPjdO+XH5TbANNJE7PsS5j90zHLKNQaSybgF8V0v4Oz4I9u7IjVQKEz2V56E4Qfj/D7g0PCu63M5mNz5bGsmUzg5XwSRIaG3J3kDTuyTTGjPYhTnYFyWYXuMu1ZQ7JCe5FUv9m4oj3jH33VQEW3sorea7UOBjnSsLWp8MyE08M4tlY2xgyFL59obQIDAQAB",
  algorithm: "ES256",
  authenticatorData: "SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MFAAAAAQ==", // null,
  //"SZYN5YgOjGh0NBcPZHZgW4/krrmihjLHmVzzuoMdl2MFAAAAAQ==",
  clientData: "eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiMjRkMjI0ZDMtMWQwZi00MzAxLTg3NTktMzk4ODcwNTg1ZTU1Iiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ==", // null,
  //"eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiWmpreE5URTBZVGN0TkRKa015MDBOMlU0TFdFME1HTXRZVFEyTkdRNVlqTmpNVGN3Iiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo2MzM0MiIsImNyb3NzT3JpZ2luIjpmYWxzZSwib3RoZXJfa2V5c19jYW5fYmVfYWRkZWRfaGVyZSI6ImRvIG5vdCBjb21wYXJlIGNsaWVudERhdGFKU09OIGFnYWluc3QgYSB0ZW1wbGF0ZS4gU2VlIGh0dHBzOi8vZ29vLmdsL3lhYlBleCJ9",
  signature: "MEYCIQDgSy1brw1UVCT4kzaZIiiihNuC7KvV2vm3gO5f1CSscQIhAM6-MihKO2jnF_BHeEJMYZ7jN-kz9TuWqYwJJzm4fOcl", //null,
  //"E/XchoqDlSOanozr0o03DN++EEz5qVymtgiaLbepoysxgdxAz/uH/34wt7/YrUs7ESaH/3ni3/0mk71WRc9SP9GMRNYqKSeZkwAM+ZHMc7e3OEpOETWIBCO+aOKmKPflB/nVzXocNUHnhW/aw5UAOhU43qjjy1X9+5+t+60C6RyGaDXTz6Mk6rmgX3z21M8pOFw8VAAtUojX6ab+Lh48SaMN1Z2BK8Exh//pFjveMVngx4yuYRm6Tu7irRvGZVe7Wnii6GNUz56kT2Q4Fc8hR28c3+qufKWuaHLJUnsw6GILQNxemDzirlKBhXFjz7Ht7tyGaqUwFZr9q+93j/95Ag==",
  isValid: null
}

function newChallenge() {
  return utils.randomChallenge()
}

async function register() {
  try {
    let res = await client.register(registration.username, registration.challenge, registration.options)
    console.log(res)

    registration.result = res
    registration.parsed = await server.verifyRegistration(res, {
      challenge: registration.challenge,
      origin: origin,
    })

    authentication.credentialId = res.credential.id
  } catch (e) {
    console.warn(e)
    registration.result = {}
  }
}

async function login() {
  authentication.result = null
  authentication.parsed = null
  try {
    const credentialId = authentication.credentialId
    const res = await client.authenticate(credentialId ? [credentialId] : [], authentication.challenge, authentication.options)
    console.log(res)

    authentication.result = res

    const credentialKey = {
      id: registration.parsed.credential.id,
      publicKey: registration.parsed.credential.publicKey,
      algorithm: registration.parsed.credential.algorithm
    }

    const parsed = await server.verifyAuthentication(res, credentialKey, {
      challenge: authentication.challenge,
      origin: origin,
      userVerified: authentication.userVerification === 'required',
      counter: -1 // Fixes #27 since counter is 0 on first auth with ios/macOS
    })
    console.log(parsed)
    authentication.parsed = parsed
  } catch (e) {
    console.warn(e)

  }
}

async function verifySignature() {
  try {
    verification.isValid = await server.verifySignature(verification)
  } catch (e) {
    console.warn(e)
    verification.isValid = false
  }
}

function parseAuthData(authData: any) {
  return parsers.parseAuthenticator(authData)
}

function parseClientData(clientData: any) {
  return parsers.parseClient(clientData)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div style="margin: 15% auto 0 auto;width: 200px;">
        <ion-icon style="width: 51px;height: 51px;margin-right: 17px" icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51" height="51" viewBox="0 0 51 51">
  <defs>
    <pattern id="pattern" width="1" height="1" viewBox="-10.28 -7.992 71.561 71.561">
      <image preserveAspectRatio="xMidYMid slice" width="51" height="55.577" xlink:href="data:image/jpeg;base64,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"/>
    </pattern>
  </defs>
  <g id="组_238" data-name="组 238" transform="translate(1195.021 -207.979)">
    <rect id="屏幕截图_2023-07-06_142526" data-name="屏幕截图 2023-07-06 142526" width="51" height="51" rx="18" transform="translate(-1195.021 207.979)" fill="#fff"/>
    <rect id="屏幕截图_2023-07-06_142526-2" data-name="屏幕截图 2023-07-06 142526" width="51" height="51" rx="18" transform="translate(-1195.021 207.979)" fill="url(#pattern)"/>
  </g>
</svg>
'></ion-icon>
        <ion-text
            style="font-size: 30px;color: #FFFFFF;font-weight: bold;letter-spacing: 2px;vertical-align: text-bottom">
          校园智U
        </ion-text>
      </div>
      <img style="width: 172px;height: 208px;margin: 20% auto 10% auto;display: block" src="@/img/小U-02.png" alt=""/>
      <ion-button @click="login()"
                  style="--color: #fff;font-size: 13px;width: 100%;margin: 30px auto;display:block;--background: #5676F1;min-height: 47px">
        <ion-icon :icon="phonePortraitOutline"></ion-icon>
        用户名登录
      </ion-button>
      <ion-button @click="register()"
                  style="--color: #fff;font-size: 13px;width: 100%;margin: 30px auto;display:block;--background: #5676F1;min-height: 47px">
        注册
      </ion-button>
      <div style="margin: 10% auto;width: 226px;">
        <ion-radio-group :allow-empty-selection="true" value="false">
          <ion-radio style="font-size: 9px;" mode="md" value="true" labelPlacement="end">
            <ion-text style="color: #515151">我已阅读并同意app</ion-text>
            <ion-text style="color: #5E88F8">《用户协议》</ion-text>
            <ion-text style="color: #515151">和</ion-text>
            <ion-text style="color: #5E88F8">《隐私政策》</ion-text>
          </ion-radio>
        </ion-radio-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/loginBackground.png") no-repeat top left;
  background-size: cover;
}


ion-toolbar {
  --background: transparent;
}

ion-radio::part(container) {
  width: 13px;
  height: 13px;
}
</style>