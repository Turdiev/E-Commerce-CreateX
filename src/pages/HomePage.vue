<template>
  <div class="home">
    <MainBanner />
  </div>
</template>

<script>
import MainBanner from "@/components/banners/MainBanner.vue";

export default {
  name: 'HomePage',
  components: {MainBanner},
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}



</style>
