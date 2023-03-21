<template>
  <div>
    <PreHeader v-if="!isMobile" />
    <TheHeader />
    <HeaderSpecialOffers />
    <main class="main container">
      <aside class="sidebar">
        <SidebarAccount :user="getAccount" />
      </aside>
      <section>
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view name="contentView" />
        </transition>
      </section>
    </main>
    <TheFooter />
    <transition name="bounce">
      <LogIn
        v-if="isOpenModal.form === 'signIn' && isOpenModal.value"
        @click="onCloseModal"
      />
    </transition>
    <transition name="bounce">
      <SignUp
        v-if="isOpenModal.form === 'signUp' && isOpenModal.value"
        @click="onCloseModal"
      />
    </transition>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import PreHeader from "@/components/header/PreHeader.vue";
import HeaderSpecialOffers from "@/components/header/HeaderSpecialOffers.vue";
import LogIn from "@/components/auth/LogIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import SidebarAccount from "@/components/core/sidebars/SidebarAccount.vue";
export default {
  name: 'AccountLayout',

  components: {
    SidebarAccount,
    SignUp,
    LogIn,
    HeaderSpecialOffers,
    PreHeader,
    TheFooter,
    TheHeader
  },

  data() {
    return {
      user: {
        userName: 'Admin',
        email: 'ggfff@gmail.com'
      }
    }
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },

    isOpenModal() {
      return this.$store.state.auth.isOpenModal
    },

    getAccount() {
      return this.$store.getters["auth/user"]
    }
  },

  methods: {
    onCloseModal() {
      this.$store.dispatch('auth/changeStateModal', {
        form: this.isOpenModal.form,
        value: false
      })
      document.body.classList.remove('o-hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: flex-start;
  gap: 135px;
  padding-top: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>