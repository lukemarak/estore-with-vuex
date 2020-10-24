import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import axios from 'axios'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() =>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


