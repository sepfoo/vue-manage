import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [{
        path:'/',
        name: 'main',
        component:() => import('@/views/Main'),
        children:[
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home')
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/User')
            },
            {
                path: 'mall',
                name: 'mall',
                component: () => import('@/views/Mall')
            },
            {
                path: 'page1',
                name: 'page1',
                component: () => import('@/views/Other/pageone')
            },
            {
                path: 'page2',
                name: 'page2',
                component: () => import('@/views/Other/pagetwo')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router