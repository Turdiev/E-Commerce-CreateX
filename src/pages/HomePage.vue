<template>
  <div class="home">
    <MainBanner />
    <TopCategories />
  </div>
</template>

<script>
import MainBanner from "@/pages/HomePage/MainBanner.vue";
import TopCategories from "@/pages/HomePage/TopCategories.vue";

export default {
  name: 'HomePage',
  components: {TopCategories, MainBanner},
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  background: $white;
}



</style>
