import Vue from 'vue'
import Vuex from 'vuex'

import language from "@/store/language";
import product from "@/store/product";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    language,
    product
  }
})
