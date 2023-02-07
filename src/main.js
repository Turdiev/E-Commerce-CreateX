import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from '@/boot/i18n'

import '@/assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
