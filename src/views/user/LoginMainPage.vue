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
  IonTitle, createAnimation, alertController, useIonRouter, toastController
} from "@ionic/vue";
import {
  ellipsisHorizontalOutline,
  chevronForwardOutline,
  star,
  starOutline,
  addOutline,
  chevronDownOutline, phonePortraitOutline
} from "ionicons/icons";
import {onMounted, ref, onUpdated} from "vue";

import {client, parsers, utils, server} from '@passwordless-id/webauthn'
import {NativeBiometric} from "capacitor-native-biometric";
import {login} from "@/api/user";

const router = useIonRouter();
// async function login() {
//   const challenge = "56535b13-5d93-4194-a282-f234c1c24500"
//   const authentication = await client.authenticate(["3924HhJdJMy_svnUowT8eoXrOOO6NLP8SK85q2RPxdU"], challenge, {
//     "authenticatorType": "auto",
//     "userVerification": "required",
//     "timeout": 60000
//   })
// }
const radio = ref('false')
let origin = document.location.origin
// let registration: any = {
//   username: "",
//   challenge: utils.randomChallenge,
//   options: {
//     authenticatorType: 'auto',
//     userVerification: 'required',
//     timeout: 60000,
//     attestation: false,
//   },
//   result: '',
//   parsed: {
//     credential: {
//       id: "ZcHZKHDqdUKmnIxdRlaFnEuTn76qQigb4GXJuD3cbIw",
//       publicKey: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7biQ_OU-wQhyBDI-fGn31fAH229PmBNEmMS2-aDRqYFZkfMzhAuWQhZIpdTVG6WmeFywnRovm0tYjaRTGatvbw==",
//       algorithm: 'ES256'
//     }
//   }
// }
// let authentication: any = {
//   credentialId: null,
//   challenge: utils.randomChallenge,
//   options: {
//     authenticatorType: 'auto',
//     userVerification: 'required',
//     timeout: 60000,
//   },
//   result: '',
//   parsed: ''
// }
// let verification: any = {
//   publicKey: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWyyMt1l16_1rzDP63Ayw9EFpn1VbSt4NSJ7BOsDzqed5Z3aTfQSvzPBPHb4uYQuuckOKRbdoH9S0fEnSvNxpRg==", // null,
//   //"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzXUir6UgELFeM9il6id2vgZ1sWbZTk4C5JLIiMpg7lywwTRdp0i+lPP9rEdzcmwKwRLh5QT8DlPFQuKrUc8eXb9r+RPq/CvVOxVCqdK6A9fg0PDnvA3k7c5Ax5V5n/HcSw/uXVAzwstxQsbV5pOk0JDtys7rKiPjdO+XH5TbANNJE7PsS5j90zHLKNQaSybgF8V0v4Oz4I9u7IjVQKEz2V56E4Qfj/D7g0PCu63M5mNz5bGsmUzg5XwSRIaG3J3kDTuyTTGjPYhTnYFyWYXuMu1ZQ7JCe5FUv9m4oj3jH33VQEW3sorea7UOBjnSsLWp8MyE08M4tlY2xgyFL59obQIDAQAB",
//   algorithm: "ES256",
//   authenticatorData: "SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MFAAAAAQ==", // null,
//   //"SZYN5YgOjGh0NBcPZHZgW4/krrmihjLHmVzzuoMdl2MFAAAAAQ==",
//   clientData: "eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiMjRkMjI0ZDMtMWQwZi00MzAxLTg3NTktMzk4ODcwNTg1ZTU1Iiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ==", // null,
//   //"eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiWmpreE5URTBZVGN0TkRKa015MDBOMlU0TFdFME1HTXRZVFEyTkdRNVlqTmpNVGN3Iiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo2MzM0MiIsImNyb3NzT3JpZ2luIjpmYWxzZSwib3RoZXJfa2V5c19jYW5fYmVfYWRkZWRfaGVyZSI6ImRvIG5vdCBjb21wYXJlIGNsaWVudERhdGFKU09OIGFnYWluc3QgYSB0ZW1wbGF0ZS4gU2VlIGh0dHBzOi8vZ29vLmdsL3lhYlBleCJ9",
//   // signature: "MEYCIQDgSy1brw1UVCT4kzaZIiiihNuC7KvV2vm3gO5f1CSscQIhAM6-MihKO2jnF_BHeEJMYZ7jN-kz9TuWqYwJJzm4fOcl", //null,
//   signature: "E/XchoqDlSOanozr0o03DN++EEz5qVymtgiaLbepoysxgdxAz/uH/34wt7/YrUs7ESaH/3ni3/0mk71WRc9SP9GMRNYqKSeZkwAM+ZHMc7e3OEpOETWIBCO+aOKmKPflB/nVzXocNUHnhW/aw5UAOhU43qjjy1X9+5+t+60C6RyGaDXTz6Mk6rmgX3z21M8pOFw8VAAtUojX6ab+Lh48SaMN1Z2BK8Exh//pFjveMVngx4yuYRm6Tu7irRvGZVe7Wnii6GNUz56kT2Q4Fc8hR28c3+qufKWuaHLJUnsw6GILQNxemDzirlKBhXFjz7Ht7tyGaqUwFZr9q+93j/95Ag==",
//   isValid: null
// }

function isLogin() {
  if (localStorage.getItem('user') == null) {
    localStorage.setItem('isLogin', 'false')
    return false
  } else return localStorage.getItem('isLogin') == 'true';
}

onMounted(async () => {
  if (isLogin()) {
    const alert = await alertController.create({
      header: '提示',
      subHeader: '您已登录',
      message: '无需再次登陆',
      buttons: ['好'],
    })
    await alert.present()
    alert.onDidDismiss().then(() => {
      router.push('/')
    })
  }
})

// function newChallenge() {
//   return utils.randomChallenge()
// }

async function login1() {
  if (radio.value == 'false') {
    const alert = await alertController.create({
      header: '提示',
      subHeader: '请阅读相关协议',
      message: '请在阅读相关协议后登录',
      buttons: ['好'],
    })
    await alert.present()
  } else if (radio.value == 'true') {
    if (localStorage.getItem('isRegister') == 'true') {
      const verified = await NativeBiometric.verifyIdentity({
        reason: "为了方便登录",
        title: "提示",
        subtitle: "生物识别登录",
        description: "是否继续",
      })
          .then(() => true)
          .catch(() => false);
      if (verified) {
        const credentials = await NativeBiometric.getCredentials({
          server: "www.dxxx.live",
        });
        login({userName: credentials.username, password: credentials.password}).then(async (res) => {
          if (res.data.code == 200) {
            localStorage.setItem('isLogin', 'true')
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(res.data.data))
            const toast = await toastController.create({
              message: '登录成功'
            })
            await toast.present().then(() => {
              setTimeout(() => {
                toast.dismiss()
              }, 1000)
            })
            router.push('/')
          } else {
            const alert3 = await alertController.create({
              header: '提示',
              message: '密码已经改变',
              buttons: ['好'],
            })
            await alert3.present()
            router.push('/login/second')

          }
        })
      } else {
        const alert3 = await alertController.create({
          header: '提示',
          message: '生物识别登录错误',
          buttons: ['好'],
        })
        await alert3.present()
      }

      // authentication.result = null
      // authentication.parsed = null
      // try {
      //   const credentialId = JSON.parse(register).credential.id
      //   const res = await client.authenticate(credentialId ? [credentialId] : [], authentication.challenge, authentication.options)
      //   console.log(res)
      //
      //   authentication.result = res
      //
      //   const credentialKey = {
      //     id: JSON.parse(register).credential.id,
      //     publicKey: JSON.parse(register).credential.publicKey,
      //     algorithm: JSON.parse(register).credential.algorithm
      //   }
      //
      //   const parsed = await server.verifyAuthentication(res, credentialKey, {
      //     challenge: authentication.challenge,
      //     origin: origin,
      //     userVerified: authentication.userVerification === 'required',
      //     counter: -1 // Fixes #27 since counter is 0 on first auth with ios/macOS
      //   })
      //   console.log(parsed)
      //   authentication.parsed = parsed
      //   localStorage.setItem('reLogin', JSON.stringify(parsed))
      //   localStorage.setItem('isLogin', 'true')
      //   const toast = await toastController.create({
      //     message: '登录成功'
      //   })
      //   await toast.present().then(() => {
      //     setTimeout(() => {
      //       toast.dismiss()
      //     }, 1000)
      //   })
      //   router.push('/')
      // } catch (e) {
      //   console.warn(e)
      // }
      // router.push('/login/second')

    } else {
      router.push('/login/second')
    }
  }
}

// async function verifySignature() {
//   try {
//     verification.isValid = await server.verifySignature(verification)
//   } catch (e) {
//     console.warn(e)
//     verification.isValid = false
//   }
// }

// function parseAuthData(authData: any) {
//   return parsers.parseAuthenticator(authData)
// }

// function parseClientData(clientData: any) {
//   return parsers.parseClient(clientData)
// }
</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div style="margin: 15% auto 0 auto;width: 200px;">
        <ion-avatar style="width: 51px;height: 51px;margin-right: 10px;display: inline-block;--border-radius: 0">
          <img src="@/img/icon.png"/>
        </ion-avatar>
        <ion-text
            style="font-size: 30px;color: #FFFFFF;font-weight: bold;letter-spacing: 2px;vertical-align: text-bottom">
          校园智U
        </ion-text>
      </div>
      <img style="width: 172px;height: 208px;margin: 20% auto 10% auto;display: block" src="@/img/小U-02.png" alt=""/>
      <ion-button @click="login1()"
                  style="--color: #fff;font-size: 13px;width: 90%;margin: 30px auto;display:block;--background: #5676F1;min-height: 47px">
        <ion-icon :icon="phonePortraitOutline"></ion-icon>
        用户名登录
      </ion-button>
      <div style="margin: 10% auto;width: 226px;">
        <ion-radio-group :allow-empty-selection="true" v-model="radio">
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