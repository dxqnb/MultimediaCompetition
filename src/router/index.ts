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
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
