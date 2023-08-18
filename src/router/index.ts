import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'
import liteTabsPage from "@/views/liteTabsPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tab1',

    },
    {
        path: '/login',
        component: liteTabsPage,
        children: [
            {
                path: '',
                component: () => import('@/views/user/LoginPage.vue'),
            },
        ]
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/Tab1Page.vue')
            },
            {
                path: 'study',
                component: () => import('@/views/study/studyPage.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/Tab3Page.vue')
            },
            {
                path: 'team',
                component: () => import('@/views/team/teamPage.vue')
            }
        ]
    },
    {
        path: '/study/',
        component: liteTabsPage,
        children: [
            {
                path: 'lessons',
                component: () => import('@/views/study/studyLessonPage.vue')
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
                path: 'news/:id',
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
                path: 'test',
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
                path: 'testReport',
                component: () => import('@/views/study/testReportPage.vue')
            },
            {
                path: 'progress',
                component: () => import('@/views/study/studyProgressPage.vue')
            },
        ]
    },
    {
        path: '/team/',
        component: liteTabsPage,
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
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
