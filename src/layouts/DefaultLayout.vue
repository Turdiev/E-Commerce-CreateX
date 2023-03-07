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
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import FormSubscribe from "@/components/core/forms/FormSubscribe.vue";
import TheFooter from "@/components/TheFooter.vue";
import PreHeader from "@/components/header/PreHeader.vue";
import HeaderSpecialOffers from "@/components/header/HeaderSpecialOffers.vue";
export default {
  name: 'DefaultLayout',

  components: {
    HeaderSpecialOffers,
    PreHeader,
    TheFooter,
    FormSubscribe,
    TheHeader
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>