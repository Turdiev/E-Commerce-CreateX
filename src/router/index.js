import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from "@/router/routers";
// import store from "@/store";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach(async (to) => {
//   // let status = store.getters["auth/authStatus"]
//   console.log("TO", to)
//   // if(status && to.path === 'account') {
//   //   return false
//   // }
// })

export default router
