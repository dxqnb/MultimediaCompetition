<template>
  <ion-page>
    <ion-header collapse="fade" class="ion-padding" style="padding-bottom:0">
      <ion-toolbar color="primary" class="head">
        <div slot="end" style="color: #FFFFFF">
          <ion-icon @click="$router.push('/user/setting')" :icon="settingsOutline"
                    style="margin-right: 10px;width: 20px;height: 20px;"></ion-icon>
          <ion-icon :icon="notificationsOutline" style="width: 20px;height: 20px;"></ion-icon>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div>
        <ion-avatar @click="$router.push('/login')" slot="start"
                    style="margin: 20px 20px 0 20px;width: 66px;height: 66px;display: inline-block"><img
            src="https://www.0030.store/favicon.png" alt=""></ion-avatar>
        <div style="display: inline-block;margin-top: 30px;vertical-align: top">
          <ion-text style="color: #FFFFFF;font-size: 20px;font-weight: bold;display: block">学生1006</ion-text>
          <ion-text style="color: rgba(255,255,255,0.65);font-size: 10px;display: block">学号：202010807</ion-text>
        </div>
        <ion-chip
            style="margin: 25px;font-size: 10px;border-radius: 6px;--background: #B0957D;--color: #fff;vertical-align: top;height: auto;">
          答题LV.1
        </ion-chip>
      </div>
      <div class="ion-padding" style="padding-bottom: 0">
        <div style="background-color: #262A3C;width: 100%;height: 70px;border-radius: 20px 20px 0 0;position:relative;">
          <div style="display: inline-block">
            <ion-icon style="height: 20px;width: 45px;margin: 12px" :icon="vipIcon"></ion-icon>
            <ion-text style="font-size: 10px;color:#FFFFFF;display: block;margin: 0 0 0 12px">开通VIP 获取更多优质服务
            </ion-text>
          </div>
          <ion-text
              style="font-size: 12px;color:#FFFFFF;width: 94%;position:absolute;top: 30px;left: 0;text-align: right">
            立即参与
          </ion-text>
        </div>
      </div>
      <div class="ion-padding" style="background-color: #F5F8FF">
        <ion-card style="--background: #fff;margin: 0">
          <ion-card-content style="display: flex">
            <div style="border-right: 1px solid rgba(112,112,112,0.14);width: 50%;">
              <ion-avatar style="width: 44px;height: 44px;--border-radius: 0;display: inline-block"><img
                  src="@/img/myStudy.png"></ion-avatar>
              <div style="display: inline-block;vertical-align: top;margin: 6px">
                <div
                    style="font-size: 15px;color: #333333;border-left: 2px solid #6266EE;padding-left: 3px;font-weight: bold">
                  我的学习
                </div>
                <div style="font-size: 11px;color: rgba(51,51,51,0.4);margin-left: 6px">
                  查看课程信息
                </div>
              </div>
            </div>
            <div style="width: 50%;padding-left: 16px">
              <ion-avatar style="width: 44px;height: 44px;--border-radius: 0;display: inline-block"><img
                  src="@/img/myTeam.png"></ion-avatar>
              <div style="display: inline-block;vertical-align: top;margin: 6px">
                <div
                    style="font-size: 15px;color: #333333;border-left: 2px solid #5EBAEE;padding-left: 3px;font-weight: bold">
                  学友团
                </div>
                <div style="font-size: 11px;color: rgba(51,51,51,0.4);margin-left: 6px">
                  按时完成任务
                </div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
        <div style="width: 100%;margin-top: 20px;position: relative;height: 170px;">
          <div
              style="width: 100%;border-radius: 8px;height: 63px;background: #FFFFFF">
            <ion-item lines="none" style="--background: none">
              <ion-text slot="start" style="color: #303030;font-weight: bold">我的雷达图</ion-text>
              <ion-text slot="end" style="color: #FFFFFF;font-weight: bold;font-size: 11px">
                <ion-icon style="vertical-align: middle;font-size: 14px;color: #AEAEAE" :icon="removeOutline">
                </ion-icon>
                <span style="vertical-align: middle;color: #AEAEAE">删除</span>
              </ion-text>
            </ion-item>
          </div>
          <div
              style="width: 100%;height: 136px;background: repeating-linear-gradient(to bottom,#6B63B0,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61,#3F3B61);overflow: hidden;border-radius: 8px;position: absolute;top: 45px;z-index: 100;display: flex;justify-content: space-evenly;flex-wrap: nowrap">
            <ion-icon :icon="except" style="width: 100%;position: absolute;bottom: -6.5%;"></ion-icon>

            <div style="display: inline-block;vertical-align: top;margin: 20px 0 0 0">
              <div style="color: #C4C4C4;font-size: 15px;font-weight: 500;letter-spacing: 1px">
                个人能力分析-雷达图
              </div>
              <div style="display: flex;justify-content: space-around;margin-top: 6px">
                <div>
                  <ion-text style="color: #E9E9E9;font-size: 21px;display: block;font-weight: 900;letter-spacing: 2px">
                    98<span style="font-size: 15px">分</span></ion-text>
                  <ion-text style="color: #E9E9E9;font-size: 12px;display: block;text-align: center;margin-top: 3px">
                    目标值
                  </ion-text>
                </div>
                <div>
                  <ion-text style="color: #E9E9E9;font-size: 21px;display: block;font-weight: 900;letter-spacing: 2px">
                    80<span style="font-size: 15px">分</span></ion-text>
                  <ion-text style="color: #E9E9E9;font-size: 12px;display: block;text-align: center;margin-top: 3px">
                    当前
                  </ion-text>
                </div>
              </div>
              <div style="color: #868686;font-size: 10px;text-align: center">2021-2023学年</div>
            </div>
            <div ref="radar" style="width: 178px;height: 120px;margin-top: 16px"></div>
          </div>
        </div>
        <div style="width: 100%;margin-top: 20px;position: relative;height: 190px;" @click="$router.push('/user/history')">
          <div
              style="width: 100%;border-radius: 8px;height: 63px;background: repeating-linear-gradient(to bottom,#5E8EFD,#4F7AF8)">
            <ion-item lines="none" style="--background: none">
              <ion-text slot="start" style="color: #FFFFFF;font-weight: bold">最近课程</ion-text>
              <ion-text slot="end" style="color: #FFFFFF;font-weight: bold;font-size: 11px">
                <ion-icon style="vertical-align: middle;font-size: 14px" :icon="addOutline">
                </ion-icon>
                <span style="vertical-align: middle">添加</span>
              </ion-text>
            </ion-item>
          </div>
          <div
              style="width: 100%;height: 120px;background: repeating-linear-gradient(to bottom,#F2F6FF,#FFFFFF,#FFFFFF);overflow: hidden;border-radius: 8px;position: absolute;top: 45px;z-index: 100;display: flex;justify-content: space-evenly">
            <ion-icon :icon="except" style="width: 100%;position: absolute;bottom: -6.5%;"></ion-icon>
            <ion-avatar style="width: 88px;height: 88px;margin-top: 12px;display: inline-block"><img
                src="https://www.0030.store/test.jpg" alt=""></ion-avatar>
            <div style="display: inline-block;vertical-align: top;margin: 20px 0 0 0">
              <div style="color: #AFAFAF;font-size: 15px;font-weight: 500;letter-spacing: 1px">
                《java编程基础》/老师名字
              </div>
              <div style="display: flex;justify-content: space-around;margin-top: 6px">
                <div>
                  <ion-text style="color: #52566B;font-size: 21px;display: block;font-weight: 900;letter-spacing: 2px">
                    20<span style="font-size: 15px">课</span></ion-text>
                  <ion-text style="color: #AFAFAF;font-size: 12px;display: block;text-align: center;margin-top: 3px">
                    已学
                  </ion-text>
                </div>
                <div>
                  <ion-text style="color: #52566B;font-size: 21px;display: block;font-weight: 900;letter-spacing: 2px">
                    20<span style="font-size: 15px">题</span></ion-text>
                  <ion-text style="color: #AFAFAF;font-size: 12px;display: block;text-align: center;margin-top: 3px">
                    测试
                  </ion-text>
                </div>
                <div>
                  <ion-text style="color: #52566B;font-size: 21px;display: block;font-weight: 900;letter-spacing: 2px">3<span
                      style="font-size: 15px">题</span></ion-text>
                  <ion-text style="color: #AFAFAF;font-size: 12px;display: block;text-align: center;margin-top: 3px">
                    实操
                  </ion-text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            :autoplay="{ delay: 3000, disableOnInteraction: false, }"
            :initialSlide="1"
            :loop="true"
            :space-between="50"
            @swiper="onSwiper"
            :pagination="true" :scrollbar="true" :zoom="true"
        >
          <swiper-slide>
            <img src="https://www.0030.store/swiperAd/ad1.png" alt="">
          </swiper-slide>
          <swiper-slide><img src="https://www.0030.store/swiperAd/ad2.png" alt=""></swiper-slide>
          <swiper-slide>
            <ion-img src="https://www.0030.store/sw1.png"></ion-img>
          </swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
        </swiper>

        <ion-card style="--background: #fff;margin: 0">
          <ion-card-header style="padding: 16px;border-bottom: 2px solid #F3F3F3;position: relative">
            <ion-text style="font-size: 15px;color: #333333;font-weight: bold">我的信息</ion-text>
            <ion-text style="font-size: 13px;color: #818181;position:absolute;right: 16px;">查看全部信息</ion-text>
          </ion-card-header>
          <ion-card-content style="display: flex;flex-wrap: nowrap;padding: 0;justify-content: space-evenly">
            <div style="margin: 22px 0" @click="$router.push('/user/dormitory')">
              <ion-icon style="width: 34px;height: 34px;display: block;margin: 0 auto;"
                        icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34"><defs><linearGradient id="linear-gradient" x1="1" y1="0.901" x2="0.121" y2="0.127" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#a3a0ff"/><stop offset="1" stop-color="#48afff"/></linearGradient><linearGradient id="linear-gradient-2" x1="0.082" y1="0.074" x2="0.917" y2="0.928" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d9e9ff"/></linearGradient></defs><g id="组_1102" data-name="组 1102" transform="translate(-1854.015 -13896.015)"><g id="组_1100" data-name="组 1100" transform="translate(1854 13896)"><g id="组_1093" data-name="组 1093" transform="translate(0 0)"><rect id="矩形_428" data-name="矩形 428" width="34" height="34" rx="6" transform="translate(0.015 0.015)" fill="url(#linear-gradient)"/></g><g id="组_1101" data-name="组 1101" transform="translate(6.962 6.962)" style="isolation: isolate"><rect id="streamlinehq-chat-two-bubbles-square-_flat-14-ico_Pg7AOOxU8e5ACNER" data-name="streamlinehq-chat-two-bubbles-square-flat-14-ico_Pg7AOOxU8e5ACNER" width="20.105" height="20.105" fill="none" style="isolation: isolate"/></g></g><path id="联合_12" data-name="联合 12" d="M2.124,17.342a2.12,2.12,0,0,1-1.6-.732H.405v-.145A2.108,2.108,0,0,1,0,15.218V2.124A2.127,2.127,0,0,1,2.124,0H17.419a2.127,2.127,0,0,1,2.124,2.124V15.218a2.115,2.115,0,0,1-.5,1.371v.02h-.017a2.12,2.12,0,0,1-1.6.732Zm8.27-7.768,1.286.776V1.329H8.4v8.982l1.237-.688c0-.005.015-.025.044-.042a.692.692,0,0,1,.577-.059l.008-.015ZM1.329,2.228V5.735l5.68.009V1.329H2.228A.9.9,0,0,0,1.329,2.228ZM13.067,5.735l5.147.009V2.228a.9.9,0,0,0-.9-.9H13.067Z" transform="translate(1861.292 13904.103)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)"/></g></svg>'></ion-icon>
              <ion-text style="display: block;text-align: center;font-size: 13px">我的寝室</ion-text>
            </div>
            <div style="margin: 22px 0" @click="$router.push('/user/grade')">
              <ion-icon style="width: 34px;height: 34px;display: block;margin: 0 auto;"
                        icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.901" x2="0.121" y2="0.127" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#a3a0ff"/>
      <stop offset="1" stop-color="#48afff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.082" y1="0.074" x2="0.917" y2="0.928" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#d9e9ff"/>
    </linearGradient>
  </defs>
  <g id="组_1182" data-name="组 1182" transform="translate(-1600.1 -13718.1)">
    <rect id="矩形_427" data-name="矩形 427" width="34" height="34" rx="6" transform="translate(1600.1 13718.1)" fill="url(#linear-gradient)"/>
    <g id="slider-02" transform="translate(1607.994 13725.994)" style="isolation: isolate">
      <path id="union-1" d="M8.882,1.746H.873a.873.873,0,1,0,0,1.746H8.882a2.621,2.621,0,0,0,4.941,0h2.769a.873.873,0,0,0,0-1.746H13.823a2.621,2.621,0,0,0-4.941,0Zm2.471,0a.873.873,0,1,1-.873.873A.873.873,0,0,1,11.352,1.746ZM6.113,7.859a.873.873,0,1,1-.873.873A.873.873,0,0,1,6.113,7.859Zm-2.471,0H.873a.873.873,0,1,0,0,1.746H3.642a2.621,2.621,0,0,0,4.941,0h8.008a.873.873,0,0,0,0-1.746H8.583a2.621,2.621,0,0,0-4.941,0Zm5.239,6.113H.873a.873.873,0,1,0,0,1.746H8.882a2.621,2.621,0,0,0,4.941,0h2.769a.873.873,0,0,0,0-1.746H13.823a2.621,2.621,0,0,0-4.941,0Zm2.471,0a.873.873,0,1,1-.873.873A.873.873,0,0,1,11.352,13.972Z" transform="translate(0 0)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
    </g>
  </g>
</svg>
'></ion-icon>
              <ion-text style="display: block;text-align: center;font-size: 13px">成绩查询</ion-text>
            </div>
            <div style="margin: 22px 0" @click="$router.push('/user/RAPInformation')">
              <ion-icon style="width: 34px;height: 34px;display: block;margin: 0 auto;"
                        icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.901" x2="0.121" y2="0.127" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#a3a0ff"/>
      <stop offset="1" stop-color="#48afff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.082" y1="0.074" x2="0.917" y2="0.928" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#d9e9ff"/>
    </linearGradient>
  </defs>
  <g id="组_1183" data-name="组 1183" transform="translate(782 -14781)">
    <rect id="矩形_482" data-name="矩形 482" width="34" height="34" rx="6" transform="translate(-782 14781)" fill="url(#linear-gradient)"/>
    <g id="streamlinehq-interface-text-formatting-paragraph-bullets-_flat-48-ico_x1BOmuiF2CnbYf7x" data-name="streamlinehq-interface-text-formatting-paragraph-bullets-          flat-48-ico_x1BOmuiF2CnbYf7x" transform="translate(-776 14787)" style="isolation: isolate">
      <path id="Vector" d="M.914.059a.942.942,0,0,0-.9.888C.007,1.093,0,1.275,0,1.5s.007.408.016.554a.942.942,0,0,0,.9.888C1.327,2.971,2.079,3,3.43,3s2.1-.03,2.516-.059a.942.942,0,0,0,.9-.888c.01-.146.016-.328.016-.554s-.007-.408-.016-.554a.942.942,0,0,0-.9-.888C5.533.03,4.781,0,3.43,0S1.327.03.914.059Z" transform="translate(11.291 17.436)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-2" data-name="Vector" d="M.926.071A.93.93,0,0,0,.027.9,5.889,5.889,0,0,0,0,1.5a5.889,5.889,0,0,0,.027.6.93.93,0,0,0,.9.831C1.441,2.963,2.519,3,4.717,3s3.275-.039,3.79-.071a.93.93,0,0,0,.9-.831,5.889,5.889,0,0,0,.027-.6A5.889,5.889,0,0,0,9.406.9a.93.93,0,0,0-.9-.831C7.992.039,6.914,0,4.717,0S1.441.039.926.071Z" transform="translate(11.291 12.719)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-3" data-name="Vector" d="M.914.059a.942.942,0,0,0-.9.888C.007,1.093,0,1.275,0,1.5s.007.408.016.554a.942.942,0,0,0,.9.888C1.327,2.971,2.079,3,3.43,3s2.1-.03,2.516-.059a.942.942,0,0,0,.9-.888c.01-.146.016-.328.016-.554s-.007-.408-.016-.554a.942.942,0,0,0-.9-.888C5.533.03,4.781,0,3.43,0S1.327.03.914.059Z" transform="translate(11.291 7.145)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-4" data-name="Vector" d="M.926.071A.93.93,0,0,0,.027.9,5.889,5.889,0,0,0,0,1.5a5.889,5.889,0,0,0,.027.6.93.93,0,0,0,.9.831C1.441,2.963,2.519,3,4.717,3s3.275-.039,3.79-.071a.93.93,0,0,0,.9-.831,5.889,5.889,0,0,0,.027-.6A5.889,5.889,0,0,0,9.406.9a.93.93,0,0,0-.9-.831C7.992.039,6.914,0,4.717,0S1.441.039.926.071Z" transform="translate(11.291 2.429)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-5" data-name="Vector" d="M6.771.069A1.835,1.835,0,0,1,8.507,1.8c.037.6.069,1.415.069,2.483s-.031,1.887-.069,2.483A1.835,1.835,0,0,1,6.771,8.507c-.6.037-1.415.069-2.483.069S2.4,8.544,1.8,8.507A1.835,1.835,0,0,1,.069,6.771C.031,6.175,0,5.356,0,4.288S.031,2.4.069,1.8A1.835,1.835,0,0,1,1.8.069C2.4.031,3.22,0,4.288,0S6.175.031,6.771.069Z" transform="translate(1 12.291)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-6" data-name="Vector" d="M6.771.069A1.835,1.835,0,0,1,8.507,1.8c.037.6.069,1.415.069,2.483s-.031,1.887-.069,2.483A1.835,1.835,0,0,1,6.771,8.507c-.6.037-1.415.069-2.483.069S2.4,8.544,1.8,8.507A1.835,1.835,0,0,1,.069,6.771C.031,6.175,0,5.356,0,4.288S.031,2.4.069,1.8A1.835,1.835,0,0,1,1.8.069C2.4.031,3.22,0,4.288,0S6.175.031,6.771.069Z" transform="translate(1 2)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
    </g>
  </g>
</svg>
'></ion-icon>
              <ion-text style="display: block;text-align: center;font-size: 13px">奖惩信息</ion-text>
            </div>
            <div style="margin: 22px 0" @click="$router.push('/user/kaoQin')">
              <ion-icon style="width: 34px;height: 34px;display: block;margin: 0 auto;"
                        icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.901" x2="0.121" y2="0.127" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#a3a0ff"/>
      <stop offset="1" stop-color="#48afff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.082" y1="0.074" x2="0.917" y2="0.928" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#d9e9ff"/>
    </linearGradient>
  </defs>
  <g id="组_1181" data-name="组 1181" transform="translate(782 -14721)">
    <rect id="矩形_482" data-name="矩形 482" width="34" height="34" rx="6" transform="translate(-782 14721)" fill="url(#linear-gradient)"/>
    <g id="streamlinehq-interface-login-finger-password-_flat-48-ico_XIAGqPyV0Gx0rZ6U" data-name="streamlinehq-interface-login-finger-password-          flat-48-ico_XIAGqPyV0Gx0rZ6U" transform="translate(-775.5 14727.5)" style="isolation: isolate">
      <path id="Vector" d="M1.989.027a2.135,2.135,0,0,0-1.4.566A1.933,1.933,0,0,0,0,2.015,1.933,1.933,0,0,0,.586,3.438,2.135,2.135,0,0,0,1.989,4c.377.016.85.027,1.437.027S4.486,4.02,4.863,4a2.135,2.135,0,0,0,1.4-.566,1.933,1.933,0,0,0,.586-1.422A1.933,1.933,0,0,0,6.267.593a2.135,2.135,0,0,0-1.4-.566C4.486.011,4.013,0,3.426,0S2.367.011,1.989.027Z" transform="translate(1.5 1.5)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-2" data-name="Vector" d="M1.989.027a2.135,2.135,0,0,0-1.4.566A1.933,1.933,0,0,0,0,2.015,1.933,1.933,0,0,0,.586,3.438,2.135,2.135,0,0,0,1.989,4c.377.016.85.027,1.437.027S4.486,4.02,4.863,4a2.135,2.135,0,0,0,1.4-.566,1.933,1.933,0,0,0,.586-1.422A1.933,1.933,0,0,0,6.267.593a2.135,2.135,0,0,0-1.4-.566C4.486.011,4.013,0,3.426,0S2.367.011,1.989.027Z" transform="translate(1.5 6.337)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-3" data-name="Vector" d="M1.989.027a2.135,2.135,0,0,0-1.4.566A1.933,1.933,0,0,0,0,2.015,1.933,1.933,0,0,0,.586,3.438,2.135,2.135,0,0,0,1.989,4c.377.016.85.027,1.437.027S4.486,4.02,4.863,4a2.135,2.135,0,0,0,1.4-.566,1.933,1.933,0,0,0,.586-1.422A1.933,1.933,0,0,0,6.267.593a2.135,2.135,0,0,0-1.4-.566C4.486.011,4.013,0,3.426,0S2.367.011,1.989.027Z" transform="translate(9.159 1.5)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
      <path id="Vector-4" data-name="Vector" d="M5.547.042A1.519,1.519,0,0,0,4.281,1.507c-.077,1.168-.187,3.2-.2,5.45l-.158-.114c-.307-.22-.746-.522-1.279-.852a1.471,1.471,0,0,0-1.932.17A3.429,3.429,0,0,0,.041,7.44a1.185,1.185,0,0,0,.171.979,20.087,20.087,0,0,0,3.781,4.309,1.652,1.652,0,0,0,.787.335,20.667,20.667,0,0,0,6.385.085,1.585,1.585,0,0,0,1.178-.91,10.229,10.229,0,0,0,.885-4.646A2.347,2.347,0,0,0,11.62,5.471a12.041,12.041,0,0,0-2.406-.531c-.32-.038-.585-.057-.771-.066l-.095,0c-.016-.818-.12-2.337-.195-3.355A1.537,1.537,0,0,0,6.874.042,5.292,5.292,0,0,0,5.547.042Z" transform="translate(6.4 6.345)" stroke="rgba(0,0,0,0)" stroke-width="1" fill="url(#linear-gradient-2)" style="isolation: isolate"/>
    </g>
  </g>
</svg>
'></ion-icon>
              <ion-text style="display: block;text-align: center;font-size: 13px">考勤</ion-text>
            </div>
            <div style="margin: 22px 0" @click="$router.push('/user/qingJia')">
              <ion-icon style="width: 34px;height: 34px;display: block;margin: 0 auto;"
                        icon='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <linearGradient id="linear-gradient" x1="1" y1="0.901" x2="0.121" y2="0.127" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#a3a0ff"/>
      <stop offset="1" stop-color="#48afff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.082" y1="0.074" x2="0.917" y2="0.928" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#d9e9ff"/>
    </linearGradient>
  </defs>
  <g id="组_1084" data-name="组 1084" transform="translate(-1655.78 -13743.78)">
    <rect id="矩形_428" data-name="矩形 428" width="34" height="34" rx="6" transform="translate(1655.78 13743.78)" fill="url(#linear-gradient)"/>
    <g id="folder-edit" transform="translate(1663.192 13751.99)" style="isolation: isolate">
      <path id="联合_4" data-name="联合 4" d="M9.019,18.039a1,1,0,1,1,0-2h6.011a3.006,3.006,0,0,0,3.005-3.009V8.016A3.006,3.006,0,0,0,15.031,5.01H11.093a3,3,0,0,1-2.5-1.337L7.776,2.451l.805-.537-.805.537A.992.992,0,0,0,6.943,2H3.006a1,1,0,0,0-1,1V9.02a1,1,0,0,1-2,0V3.006A3.006,3.006,0,0,1,3.006,0H6.943a3,3,0,0,1,2.5,1.34l.816,1.219a1,1,0,0,0,.833.447h3.938a5.01,5.01,0,0,1,5.01,5.01v5.01a5.011,5.011,0,0,1-5.01,5.014ZM1,18.039a1,1,0,0,1-1-1V14.247a1,1,0,0,1,.292-.708l5.9-5.9a2.117,2.117,0,0,1,2.995,0L10.4,8.846a1.744,1.744,0,0,1,.425.606A2.2,2.2,0,0,1,10.4,11.84l-5.9,5.9a1,1,0,0,1-.709.3ZM7.613,9.052,6.436,10.229l1.37,1.37,1.177-1.177a.108.108,0,0,0,0-.159L7.773,9.052a.115.115,0,0,0-.16,0Z" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" fill="url(#linear-gradient-2)"/>
    </g>
  </g>
</svg>
'></ion-icon>
              <ion-text style="display: block;text-align: center;font-size: 13px">请假信息</ion-text>
            </div>
          </ion-card-content>
        </ion-card>

      </div>

    </ion-content>

  </ion-page>
</template>
<style scoped>

ion-toolbar.head {
  --opacity: 0;
}

ion-content::part(background) {
  /*background: url("https://www.0030.store/background.png") top right no-repeat, linear-gradient(to bottom, #5D7BE5, #ffffff, #ffffff);
  background-size: 140%;
  filter: blur(1.5px);*/
  background: linear-gradient(to bottom, #5A00E1, #5788FC, #ADC5FE, #F5F8FF, #F5F8FF, #F5F8FF, #F5F8FF, #F5F8FF, #F5F8FF, #F5F8FF);
}

.swiper {
  width: 90%;
  height: 120px;
  overflow: visible;
  margin: 0 auto 1em auto;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

img {
  width: 100%;
  object-fit: cover !important;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}

</style>

<script setup lang="ts">
import {
  IonPage,
  IonItem,
  IonToolbar,
  IonContent,
  IonIcon,
  IonText,
  IonImg,
  IonicSlides, IonHeader, IonAvatar, IonChip,
  IonCard
  , IonCardContent
  , IonCardHeader
} from '@ionic/vue';
import {defineComponent, onMounted, onUnmounted, ref} from "vue";
import io from 'socket.io-client';
import {EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper/modules';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';
import Robot from "@/components/robot.vue";
import {addOutline, notificationsOutline, removeOutline, settingsOutline} from "ionicons/icons";
import * as echarts from "echarts";


const modules = ref([EffectCards, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
type EChartsOption = echarts.EChartsOption;
const sw = ref();
const radar = ref();
const onSwiper = (swiper: any) => {
  sw.value = swiper;

  setTimeout(function () {
    swiper.slidePrev()
  }, 100);
};
let radarOption: EChartsOption = {
  color: ['#6368F0'],
  radar: [
    {
      indicator: [
        {text: '社交能力', min: 0, max: 5},
        {text: '学习能力', min: 0, max: 5},
        {text: '实操得分', min: 0, max: 5},
        {text: '测试', min: 0, max: 5},
        {text: '体育', min: 0, max: 5},
        {text: '卫生', min: 0, max: 5},
        {text: '考试', min: 0, max: 5}
      ],
      center: ['50%', '50%'],
      radius: '80%',
      startAngle: 90,
      splitNumber: 4,
      axisName: {
        color: '#428BD4',
        padding: 0,
        fontSize: 10,
      },
      axisNameGap: 2,
      splitArea: {
        areaStyle: {
          color: ['rgba(73,66,255,0.59)', '#FFFFFF', 'rgba(119,234,223,0.15)', 'rgba(198,197,234,0.76)', 'rgba(120,115,255,0.17)'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    }
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [
        {
          value: [3, 2, 1, 1, 1, 2, 4],
          name: 'Data A',
          areaStyle: {
            color: new echarts.graphic.RadialGradient(1, 1, 1, [
              {
                color: '#7C63FD',
                offset: 0
              },
              {
                color: '#73AAF3',
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
};
onMounted(() => {

  setTimeout(function () {
    let radarChart = echarts.init(radar.value);
    radarOption && radarChart.setOption(radarOption);
  }, 100);
})

const vipIcon = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.157" height="15.834" viewBox="0 0 45.157 15.834">\n' +
    '  <defs>\n' +
    '    <linearGradient id="linear-gradient" x1="0.185" x2="0.923" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#dcbe8a"/>\n' +
    '      <stop offset="0.539" stop-color="#8c6e54"/>\n' +
    '      <stop offset="1" stop-color="#d7b986"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <path id="路径_220" data-name="路径 220" d="M199.621,195.034c-.693,0-1.386-.621-1.732-1.863L192,179.2h4.5l4.157,9.625,6.582-9.625h4.85l-10.046,13.971C201.006,194.724,200.314,195.034,199.621,195.034Zm11.085-.31,2.425-15.213h4.157l-2.425,15.213Zm26.326-9.625a6.854,6.854,0,0,1-2.771,4.347,8.892,8.892,0,0,1-4.85,1.552h-7.274l-.693,3.726h-4.157l1.386-7.762h11.778a1.873,1.873,0,0,0,1.386-.621,2.268,2.268,0,0,0,.693-1.242c0-.621,0-.931-.346-1.242a2.755,2.755,0,0,0-1.386-.621H219.019l3.464-4.036h8.66a7.024,7.024,0,0,1,4.5,1.552A4.68,4.68,0,0,1,237.032,185.1Z" transform="translate(-192 -179.2)" fill="url(#linear-gradient)"/>\n' +
    '</svg>')
const except = ref('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="332" height="8" viewBox="0 0 332 8">\n' +
    '  <defs>\n' +
    '    <clipPath id="clip-path">\n' +
    '      <rect width="332" height="8" fill="none"/>\n' +
    '    </clipPath>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#fff"/>\n' +
    '      <stop offset="0.07" stop-color="#f1f6ff"/>\n' +
    '      <stop offset="0.194" stop-color="#f2f6ff"/>\n' +
    '      <stop offset="1" stop-color="#fff"/>\n' +
    '    </linearGradient>\n' +
    '    <filter id="椭圆_186" x="-7.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-2" x="6.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-2"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-2"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-3" x="20.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-3"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-3"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-4" x="34.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-4"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-4"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-5" x="48.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-5"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-5"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-6" x="62.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-6"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-6"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-7" x="76.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-7"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-7"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-8" x="90.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-8"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-8"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-9" x="104.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-9"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-9"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-10" x="118.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-10"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-10"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-11" x="132.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-11"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-11"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-12" x="146.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-12"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-12"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-13" x="160.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-13"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-13"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-14" x="174.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-14"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-14"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-15" x="188.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-15"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-15"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-16" x="202.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-16"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-16"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-17" x="216.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-17"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-17"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-18" x="230.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-18"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-18"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-19" x="244.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-19"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-19"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-20" x="258.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-20"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-20"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-21" x="272.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-21"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-21"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-22" x="286.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-22"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-22"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-23" x="300.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-23"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-23"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '    <filter id="椭圆_186-24" x="314.5" y="-1.5" width="23" height="23" filterUnits="userSpaceOnUse">\n' +
    '      <feOffset dy="6" input="SourceAlpha"/>\n' +
    '      <feGaussianBlur stdDeviation="2.5" result="blur-24"/>\n' +
    '      <feFlood flood-color="#e2eeff" flood-opacity="0.302"/>\n' +
    '      <feComposite operator="in" in2="blur-24"/>\n' +
    '      <feComposite in="SourceGraphic"/>\n' +
    '    </filter>\n' +
    '  </defs>\n' +
    '  <g id="重复网格_38" data-name="重复网格 38" clip-path="url(#clip-path)">\n' +
    '    <g transform="translate(-15 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, 15, 257)" filter="url(#椭圆_186)">\n' +
    '        <circle id="椭圆_186-25" data-name="椭圆 186" cx="4" cy="4" r="4" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(-1 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, 1, 257)" filter="url(#椭圆_186-2)">\n' +
    '        <circle id="椭圆_186-26" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(14)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(13 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -13, 257)" filter="url(#椭圆_186-3)">\n' +
    '        <circle id="椭圆_186-27" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(28)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(27 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -27, 257)" filter="url(#椭圆_186-4)">\n' +
    '        <circle id="椭圆_186-28" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(42)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(41 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -41, 257)" filter="url(#椭圆_186-5)">\n' +
    '        <circle id="椭圆_186-29" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(56)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(55 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -55, 257)" filter="url(#椭圆_186-6)">\n' +
    '        <circle id="椭圆_186-30" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(70)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(69 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -69, 257)" filter="url(#椭圆_186-7)">\n' +
    '        <circle id="椭圆_186-31" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(84)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(83 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -83, 257)" filter="url(#椭圆_186-8)">\n' +
    '        <circle id="椭圆_186-32" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(98)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(97 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -97, 257)" filter="url(#椭圆_186-9)">\n' +
    '        <circle id="椭圆_186-33" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(112)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(111 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -111, 257)" filter="url(#椭圆_186-10)">\n' +
    '        <circle id="椭圆_186-34" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(126)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(125 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -125, 257)" filter="url(#椭圆_186-11)">\n' +
    '        <circle id="椭圆_186-35" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(140)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(139 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -139, 257)" filter="url(#椭圆_186-12)">\n' +
    '        <circle id="椭圆_186-36" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(154)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(153 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -153, 257)" filter="url(#椭圆_186-13)">\n' +
    '        <circle id="椭圆_186-37" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(168)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(167 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -167, 257)" filter="url(#椭圆_186-14)">\n' +
    '        <circle id="椭圆_186-38" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(182)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(181 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -181, 257)" filter="url(#椭圆_186-15)">\n' +
    '        <circle id="椭圆_186-39" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(196)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(195 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -195, 257)" filter="url(#椭圆_186-16)">\n' +
    '        <circle id="椭圆_186-40" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(210)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(209 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -209, 257)" filter="url(#椭圆_186-17)">\n' +
    '        <circle id="椭圆_186-41" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(224)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(223 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -223, 257)" filter="url(#椭圆_186-18)">\n' +
    '        <circle id="椭圆_186-42" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(238)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(237 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -237, 257)" filter="url(#椭圆_186-19)">\n' +
    '        <circle id="椭圆_186-43" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(252)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(251 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -251, 257)" filter="url(#椭圆_186-20)">\n' +
    '        <circle id="椭圆_186-44" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(266)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(265 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -265, 257)" filter="url(#椭圆_186-21)">\n' +
    '        <circle id="椭圆_186-45" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(280)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(279 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -279, 257)" filter="url(#椭圆_186-22)">\n' +
    '        <circle id="椭圆_186-46" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(294)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(293 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -293, 257)" filter="url(#椭圆_186-23)">\n' +
    '        <circle id="椭圆_186-47" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(308)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '    <g transform="translate(307 -257)">\n' +
    '      <g transform="matrix(1, 0, 0, 1, -307, 257)" filter="url(#椭圆_186-24)">\n' +
    '        <circle id="椭圆_186-48" data-name="椭圆 186" cx="4" cy="4" r="4" transform="translate(322)" fill="url(#linear-gradient)"/>\n' +
    '      </g>\n' +
    '    </g>\n' +
    '  </g>\n' +
    '</svg>\n')
</script>
