import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw, useRouter} from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'
import {alertController} from "@ionic/vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/home',

    },
    {
        path: '/login/',
        component: TabsPage,
        children: [
            {
                path: '',
                props: true,
                name: 'login',
                component: () => import('@/views/user/LoginMainPage.vue'),
            },
            {
                path: 'second',
                component: () => import('@/views/user/loginSecondPage.vue'),
            },
            {
                path: 'register',
                component: () => import('@/views/user/registerPage.vue'),
            },
        ]
    },
    {
        path: '/smartU/',
        component: TabsPage,
        children: [
            {
                path: '',
                component: () => import('@/views/AI/AIPage.vue'),
            },
            {
                path: 'chatWithAI',
                component: () => import('@/views/AI/chatWithAIPage.vue'),
            },
            {
                path: 'mario',
                component: () => import('@/views/AI/marioPage.vue'),
            },
        ]
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/home'
            },
            {
                path: 'home',
                component: () => import('@/views/homePage.vue')
            },
            {
                path: 'study',
                component: () => import('@/views/study/studyPage.vue'),
            },
            // {
            //     path: 'tab3',
            //     component: () => import('@/views/Tab3Page.vue'),
            // },
            {
                path: 'team',
                component: () => import('@/views/team/teamPage.vue'),
            },
            {
                path: 'user',
                component: () => import('@/views/user/userPage.vue'),
                meta: {
                    requireAuth: true
                },
            }
        ]
    },
    {
        path: '/study/',
        component: TabsPage,
        children: [
            {
                path: 'lessons',
                component: () => import('@/views/study/studyLessonPage.vue')
            },
            {
                path: 'lesson/:id/:type',
                component: () => import('@/views/study/lessonDetailPage.vue')
            },
            {
                path: 'section/:id',
                component: () => import('@/views/study/lessonSectionPage.vue')
            },
            {
                path: 'technology',
                component: () => import('@/views/study/technologyPage.vue')
            },
            {
                path: 'video/:id',
                props: true,
                component: () => import('@/views/study/videoPage.vue')
            },
            {
                path: 'myLesson',
                component: () => import('@/views/study/myLessonPage.vue')
            },
            {
                path: 'news',
                component: () => import('@/views/study/newsPage.vue')
            },
            {
                path: 'news/:id',
                props: true,
                component: () => import('@/views/study/newsDetailPage.vue')
            },
            {
                path: 'notice',
                component: () => import('@/views/study/noticePage.vue')
            },
            {
                path: 'noticeDetail/:id',
                props: true,
                component: () => import('@/views/study/noticeDetailPage.vue')
            },
            {
                path: 'test/:id',
                props: true,
                component: () => import('@/views/study/lessonTestPage.vue')
            },
            {
                path: 'analyze',
                component: () => import('@/views/study/myStudyAnalyzePage.vue')
            },
            {
                path: 'schedule',
                component: () => import('@/views/study/mySchedulePage.vue')
            },
            {
                path: 'testReport/:item',
                props: true,
                component: () => import('@/views/study/testReportPage.vue')
            },
            {
                path: 'progress',
                component: () => import('@/views/study/studyProgressPage.vue')
            },
            {
                path: 'testRecording/:id',
                props: true,
                component: () => import('@/views/study/testRecordingPage.vue')
            },
            {
                path: 'learningTime/:id',
                props: true,
                component: () => import('@/views/study/learningTimeDetailPage.vue')
            },
        ]
    },
    {
        path: '/team/',
        component: TabsPage,
        children: [
            {
                path: 'createTeam',
                component: () => import('@/views/team/createTeamPage.vue')
            },
            {
                path: 'lesson/:id',
                component: () => import('@/views/study/lessonDetailPage.vue')
            },
            {
                path: 'section/:id',
                component: () => import('@/views/study/lessonSectionPage.vue')
            },
            {
                path: 'technology',
                component: () => import('@/views/study/technologyPage.vue')
            },
            {
                path: 'video',
                component: () => import('@/views/study/videoPage.vue')
            },
            {
                path: 'myLesson',
                component: () => import('@/views/study/myLessonPage.vue')
            },
            {
                path: 'news',
                component: () => import('@/views/study/newsPage.vue')
            },
            {
                path: 'teamDetail/:id',
                props: true,
                component: () => import('@/views/team/teamDetailPage.vue')
            },
            {
                path: 'submitTask/:id',
                props: true,
                component: () => import('@/views/team/submitTaskPage.vue')
            },
            {
                path: 'groupTeam',
                component: () => import('@/views/team/groupTeamPage.vue')
            },
            {
                path: 'ranking',
                component: () => import('@/views/team/rankingPage.vue')
            },
            {
                path: 'shake',
                component: () => import('@/views/team/shakePage.vue')
            },
        ]
    },
    {
        path: '/user/',
        component: TabsPage,
        children: [
            {
                path: 'setting',
                component: () => import('@/views/user/settingPage.vue'),
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'dormitory',
                component: () => import('@/views/user/dormitoryPage.vue')
            },
            {
                path: 'grade',
                component: () => import('@/views/user/gradePage.vue')
            },
            {
                path: 'gradeDetail/:id',
                props: true,
                component: () => import('@/views/user/gradeDetailPage.vue')
            },
            {
                path: 'RAPInformation',
                component: () => import('@/views/user/RAPInformationPage.vue')
            },
            {
                path: 'kaoQin',
                component: () => import('@/views/user/kaoQinPage.vue')
            },
            {
                path: 'qingJia',
                component: () => import('@/views/user/leaveInformation.vue')
            },
            {
                path: 'history',
                component: () => import('@/views/user/historyPage.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {

    // if (to.meta.title) {
    //     document.title = to.meta.title;
    // }

    if (to.path.includes('/login')) { // 路由条状到login的，直接放行
        next(); // 路由继续往下跳转
        return;
    }

    if (!to.meta.requireAuth) { // 路由不需要验证的，直接放行
        // console.log(`${from.name}跳转到${to.name},目的路由不需要用户认证`); // 控制台调试输出
        next();
        return;
    }

    // 路由需要验证的
    if (false) { // 如果token不存在的，则跳转登录login
        // console.log(`${from}跳转到${to},目的路由需要用户认证，Token不存在！强制跳转到login`);


        const alert = await alertController.create({
            header: 'Alert',
            subHeader: 'Important message',
            message: 'This is an alert!',
            buttons: ['OK'],
        })
        await alert.present()
        alert.onDidDismiss().then(() => {
            next({
                name: 'login',
                params: {
                    redirect: to.path
                }
            });
        }).catch(() => {
            router.push({
                name: "login"
            });
        });
        next({
            name: 'login',
            params: {
                redirect: to.path
            }
        });
        return;
    } else {
        // 其余情况，则路由放行
        next();
    }
});
export default router
