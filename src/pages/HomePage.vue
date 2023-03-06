<template>
  <div class="home">
    <MainBanner />
    <TopCategories />
    <NewArrivals />
    <TrendingNow />
  </div>
</template>

<script>
import MainBanner from "@/pages/HomePage/MainBanner.vue";
import TopCategories from "@/pages/HomePage/TopCategories.vue";
import NewArrivals from "@/pages/HomePage/NewArrivals.vue";
import TrendingNow from "@/pages/HomePage/TrendingNow.vue";

export default {
  name: 'HomePage',
  components: {
    TrendingNow,
    MainBanner,
    TopCategories,
    NewArrivals,
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  background: $white;
}



</style>
