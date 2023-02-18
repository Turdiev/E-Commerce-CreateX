import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from '@/boot/i18n'
import VueMq from 'vue-mq'

import '@/assets/style/main.scss'

import {components} from "@/components/core/icons/icons"

Vue.config.productionTip = false

components.forEach(component => {
  Vue.component(component.name, component)
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 992,
    laptop: 1280,
    desktop: Infinity,
  }
})

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
