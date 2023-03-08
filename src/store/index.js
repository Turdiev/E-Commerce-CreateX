import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/auth";
import language from "@/store/language";
import product from "@/store/product";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    language,
    product
  }
})
