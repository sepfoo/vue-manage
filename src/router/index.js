import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [{
        path:'/',
        name: 'main',
        components:() => import('@/views/Main'),
        children:[
            {
                path: '/home',
                name: 'home',
                components: () => import('@/views/Home')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router