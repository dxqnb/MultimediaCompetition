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
  IonList,
  IonInput,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonTitle,
  createAnimation,
  IonBackButton,
  IonButtons,
  alertController,
  useIonRouter,
  toastController,
  onIonViewDidEnter
} from "@ionic/vue";
import {onMounted, onUpdated, ref} from "vue";
import {login} from "@/api/user";
import {client, parsers, server, utils} from "@passwordless-id/webauthn";
import {getPlatforms} from '@ionic/vue';
import {BiometryType, NativeBiometric} from "capacitor-native-biometric";

const num = ref('');
const pw = ref('');
const radio = ref('false');
const router = useIonRouter()
// let origin = document.location.origin
// let registration: any = {
//   username: "Arnaud",
//   challenge: utils.randomChallenge,
//   options: {
//     authenticatorType: 'auto',
//     userVerification: 'required',
//     timeout: 60000,
//     attestation: false,
//   },
//   result: '',
//   parsed: ''
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
//   signature: "MEYCIQDgSy1brw1UVCT4kzaZIiiihNuC7KvV2vm3gO5f1CSscQIhAM6-MihKO2jnF_BHeEJMYZ7jN-kz9TuWqYwJJzm4fOcl", //null,
//   //"E/XchoqDlSOanozr0o03DN++EEz5qVymtgiaLbepoysxgdxAz/uH/34wt7/YrUs7ESaH/3ni3/0mk71WRc9SP9GMRNYqKSeZkwAM+ZHMc7e3OEpOETWIBCO+aOKmKPflB/nVzXocNUHnhW/aw5UAOhU43qjjy1X9+5+t+60C6RyGaDXTz6Mk6rmgX3z21M8pOFw8VAAtUojX6ab+Lh48SaMN1Z2BK8Exh//pFjveMVngx4yuYRm6Tu7irRvGZVe7Wnii6GNUz56kT2Q4Fc8hR28c3+qufKWuaHLJUnsw6GILQNxemDzirlKBhXFjz7Ht7tyGaqUwFZr9q+93j/95Ag==",
//   isValid: null
// }

// async function register() {
//   try {
//     let user = localStorage.getItem('user')
//     if (user == null) return;
//     let res = await client.register(JSON.parse(user).studentname, registration.challenge, registration.options)
//     console.log(res)
//
//     registration.result = res
//     registration.parsed = await server.verifyRegistration(res, {
//       challenge: registration.challenge,
//       origin: origin,
//     })
//     authentication.credentialId = res.credential.id
//     localStorage.setItem('register', JSON.stringify(res))
//   } catch (e) {
//     console.warn(e)
//     registration.result = {}
//   }
// }

function isLogin() {
  if (localStorage.getItem('user') == null) {
    localStorage.setItem('isLogin', 'false')
    return false
  } else return localStorage.getItem('isLogin') == 'true';
}

// onMounted(async () => {
//   if (isLogin()) {
//     const alert = await alertController.create({
//       header: '提示',
//       subHeader: '请阅读相关协议',
//       message: '请在阅读相关协议后登录',
//       buttons: ['好'],
//     })
//     await alert.present()
//     alert.onDidDismiss().then(() => {
//       console.log(111)
//     })
//   }
// })
async function performBiometricVerificatin() {
  const result = await NativeBiometric.isAvailable();

  if (!result.isAvailable) return;

  const isFaceID = result.biometryType == BiometryType.FACE_ID;

  const verified = await NativeBiometric.verifyIdentity({})
      .then(() => {
        console.log(1111)
      })
      .catch(() => false);
  if (!verified) return;

  const credentials = await NativeBiometric.getCredentials({
    server: "www.example.com",
  });
  console.log(credentials)
}

onIonViewDidEnter(async () => {
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

async function doLogin() {
  if (radio.value == 'false') {
    const alert = await alertController.create({
      header: '提示',
      subHeader: '请阅读相关协议',
      message: '请在阅读相关协议后登录',
      buttons: ['好'],
    })
    await alert.present()
  } else if (radio.value == 'true') {
    login({userName: num.value, password: pw.value}).then(async (res) => {
      console.log(res)
      if (res.data.code == 200) {
        localStorage.setItem('isLogin', 'true')
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(res.data.data))
        const toast = await toastController.create({
          message: '登录成功'
        })
        if (res.data.data.userstatus == 0) {
          const alert2 = await alertController.create({
            header: '提示',
            subHeader: '第一次登录，请进行密码修改',
            message: '请确认',
            buttons: [
              {
                text: '确认',
                role: 'ok',
              },
            ],
          })
          await alert2.present()
          alert2.onDidDismiss().then(() => {
            router.push('/login/register')
          })
          return
        }
        const alert1 = await alertController.create({
          header: '提示',
          subHeader: '是否允许之后使用生物识别登录',
          message: '请选择',
          buttons: [
            {
              role: 'cancel',
              text: '取消',
            },
            {
              text: '好',
              role: 'ok',
            },
          ],
        })
        await alert1.present()
        alert1.onDidDismiss().then(async (res) => {
          if (res.role == 'ok') {
            // register().then(async () => {
            //   localStorage.setItem('isRegister', 'true')
            //   await toast.present().then(() => {
            //     setTimeout(() => {
            //       toast.dismiss()
            //     }, 1000)
            //   })
            //   router.push('/')
            //   window.location.reload()
            // })

            const verified = await NativeBiometric.verifyIdentity({
              reason: "为了方便登录",
              title: "提示",
              subtitle: "生物识别注册",
              description: "是否继续",
            })
                .then(() => true)
                .catch(() => false);

            if (verified) {
              localStorage.setItem('isRegister', 'true')
              NativeBiometric.setCredentials({
                username: num.value,
                password: pw.value,
                server: "www.dxxx.live",
              }).then();
              await toast.present().then(() => {
                setTimeout(() => {
                  toast.dismiss()
                }, 1000)
              })
              router.push('/')
            } else {
              const alert3 = await alertController.create({
                header: '提示',
                message: '注册生物识别错误',
                buttons: ['好'],
              })
              await alert3.present()
            }


          } else {
            await toast.present().then(() => {
              setTimeout(() => {
                toast.dismiss()
              }, 1000)
            })
            router.push('/')
          }
        })

      } else {
        const alert = await alertController.create({
          header: '提示',
          subHeader: '账号密码错误',
          message: '请重试',
          buttons: ['好'],
        })
        await alert.present()
      }

    })
  }
}
</script>

<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-no-border ion-padding">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button style="color: #f4f5f8" text="" default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button style="font-size: 15px" color="light">
            帮助
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="false">
      <div style="height: 18%;position:relative;">
        <div style="color: white;font-size: 30px;width: 50%;margin: 30px 0 0 0;font-weight: bold">
          <ion-text style="display:block;text-align: center">欢迎来到</ion-text>
          <ion-text style="display:block;text-align: center">校园智U</ion-text>
        </div>
        <img
            style="width: 227px;height: 362px;position:absolute;top: -100px;right: -50px;object-fit: contain;transform: rotate(-21deg)"
            src="@/img/小U-02.png" alt=""/>
      </div>
      <ion-card style="height: 82%;margin: 0;--background: white;border-radius: 30px">
        <ion-card-content>
          <ion-text style="color: #323232;font-size: 19px;margin: 20px 10px;display: block;font-weight: 500">登录
          </ion-text>
          <form method="get">
            <ion-label style="margin: 20px 0 10px 10px;display: block">用户名</ion-label>
            <ion-input fill="outline" inputmode="numeric" :autofocus="true" enterkeyhint="next" type="number"
                       shape="round" placeholder="输入你的学号" mode="md" v-model="num"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
              <!--              <div slot="label">Email-->
              <!--                <ion-text color="danger">(Required)</ion-text>-->
              <!--              </div>-->
            </ion-input>
            <ion-label style="margin: 20px 0 10px 10px;display: block">密码</ion-label>
            <ion-input fill="outline" inputmode="text" :autofocus="false" enterkeyhint="send" type="password"
                       shape="round" placeholder="输入你的密码" mode="md" v-model="pw"
                       style="--background: #F1F1F1;--border-radius:16px;--border-color:#F1F1F1;min-height: 44px;font-size: 14px">
              <!--              <div slot="label">Email-->
              <!--                <ion-text color="danger">(Required)</ion-text>-->
              <!--              </div>-->
            </ion-input>
            <ion-button @click="doLogin"
                        style="--color: #fff;font-size: 13px;width: 100%;margin: 30px auto;display:block;--background: #5676F1;min-height: 47px">
              登录
            </ion-button>
            <div style="margin: 10px auto;width: 226px;">
              <ion-radio-group :allow-empty-selection="true" v-model="radio">
                <ion-radio style="font-size: 9px;" mode="md" value="true" labelPlacement="end">
                  <ion-text style="color: #515151">我已阅读并同意app</ion-text>
                  <ion-text style="color: #5E88F8">《用户协议》</ion-text>
                  <ion-text style="color: #515151">和</ion-text>
                  <ion-text style="color: #5E88F8">《隐私政策》</ion-text>
                </ion-radio>
              </ion-radio-group>
            </div>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(background) {
  background: url("@/img/login2.png") no-repeat top left;
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