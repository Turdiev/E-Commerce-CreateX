<template>
  <div>
    <PreHeader v-if="!isMobile" />
    <TheHeader />
    <HeaderSpecialOffers />
    <main>
      <router-view name="contentView" />
    </main>
    <FormSubscribe />
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
import FormSubscribe from "@/components/core/forms/FormSubscribe.vue";
import TheFooter from "@/components/TheFooter.vue";
import PreHeader from "@/components/header/PreHeader.vue";
import HeaderSpecialOffers from "@/components/header/HeaderSpecialOffers.vue";
import LogIn from "@/components/auth/LogIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
export default {
  name: 'DefaultLayout',

  components: {
    SignUp,
    LogIn,
    HeaderSpecialOffers,
    PreHeader,
    TheFooter,
    FormSubscribe,
    TheHeader
  },

  data() {
    return {
      //
    }
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },

    isOpenModal() {
      console.log('ssds')
      return this.$store.state.auth.isOpenModal
    },
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>