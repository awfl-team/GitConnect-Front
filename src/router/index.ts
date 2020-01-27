import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: (): Promise<object> => import('../views/LandingPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: (): Promise<object> => import('../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
