import Vue, { VNode } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: (h): VNode => h(App)
}).$mount('#app')
