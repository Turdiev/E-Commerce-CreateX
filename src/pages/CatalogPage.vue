<template>
  <div class="catalog">
    <BreadCrumbs />
    <div class="container">
      <div class="catalog__wrapper">
        <SidebarFilters
          v-if="!isMobile"
          class="catalog__aside"
          :categories="i18nGetCategories"
        />
        <main class="catalog__main">
          <CardProduct
            v-for="(product, index) in getProductsListMob"
            :key="`${product.name}_${index}`"
            :product="product"
            type-size="_small"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/core/paginations/BreadCrumbs.vue";
import CardProduct from "@/components/cards/CardProduct.vue";
import SidebarFilters from "@/components/core/sidebars/SidebarFilters.vue";

export default {
  name: 'CatalogPage',
  components: {
    SidebarFilters,
    CardProduct,
    BreadCrumbs
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },
    i18nGetCategories() {
      return this.$t('menuDropdown.categories')
    },

    getProductsList() {
      return this.$store.state.product.newArrivals
    },
    getProductsListMob() {
      let newListProduct = []
      let productList = this.getProductsList
      productList.forEach(list => {
        newListProduct.push(...list)
      })
      return newListProduct
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  background: $white;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }

  &__aside {
    width: 255px;
    margin-right: 60px;
  }

  &__main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;

    @include respond-to(mobile) {
      justify-content: center;
    }
  }
}
</style>