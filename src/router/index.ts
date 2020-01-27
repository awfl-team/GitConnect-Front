import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import LandingPage from '@/views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = new VueRouter({
    routes
})

export default router
