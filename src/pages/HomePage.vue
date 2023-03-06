<template>
  <div class="home">
    <MainBanner />
    <TopCategories />
    <NewArrivals />
    <ProductCarousel
      type-product="trendingNow"
      :products="getProductsTrendingNow"
    />
    <ProductCarousel
      type-product="saleUp"
      :products="getProductsSaleUp"
    />
  </div>
</template>

<script>
import MainBanner from "@/pages/HomePage/MainBanner.vue";
import TopCategories from "@/pages/HomePage/TopCategories.vue";
import NewArrivals from "@/pages/HomePage/NewArrivals.vue";
import ProductCarousel from "@/pages/HomePage/ProductCarousel.vue";

export default {
  name: 'HomePage',
  components: {
    ProductCarousel,
    MainBanner,
    TopCategories,
    NewArrivals,
  },

  computed: {
    getProductsTrendingNow() {
      return this.$store.state.product.trendingNow
    },
    getProductsSaleUp() {
      return this.$store.state.product.saleUp
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  background: $white;
}



</style>
