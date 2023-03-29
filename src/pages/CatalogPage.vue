<template>
  <div class="catalog">
    <BreadCrumbs />
    <div class="container">
      <div class="catalog__wrapper">
        <aside
          v-if="!isMobile"
          class="catalog__aside"
        >
          <FilterWithSearch
            :categories="i18nGetCategories[0].list"
          />
          <FilterWithSearch
            :categories="i18nGetCategories[1].list"
          />
          <FilterColor
            :colors="colors"
          />
          <FilterRange
            :min-price="minPrice"
            :max-price="maxPrice"
            :min-value="minPriceValue"
            :max-value="maxPriceValue"
            @change="onFilterChange"
          />
        </aside>
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
import FilterWithSearch from "@/components/core/filters/FilterWithSearch.vue";
import FilterColor from "@/components/core/filters/FilterColor.vue";
import FilterRange from "@/components/core/filters/FilterRange.vue";
import CardProduct from "@/components/cards/CardProduct.vue";

export default {
  name: 'CatalogPage',
  components: {
    CardProduct,
    FilterRange,
    FilterColor,
    FilterWithSearch,
    BreadCrumbs
  },

  data() {
    return {
      colors: [
          '#19a2e7', '#874E19', '#000000', '#D5A371FF', '#19A2E7FF', '#19a2e7', '#874E19', '#000000', '#D5A371FF', '#19A2E7FF',
        '#19a2e7', '#874E19', '#000000', '#D5A371FF', '#19A2E7FF', '#19a2e7', '#874E19', '#000000', '#D5A371FF', '#19A2E7FF'
      ],
      minPrice: 0,
      maxPrice: 10000,
      minPriceValue: 0,
      maxPriceValue: 10000,
    }
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
    onClick() {
      console.log('SDSDSS')
    },

    onFilterChange(value) {
      this.minPriceValue = value[0]
      this.maxPriceValue = value[1]
    }
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
  }
}
</style>