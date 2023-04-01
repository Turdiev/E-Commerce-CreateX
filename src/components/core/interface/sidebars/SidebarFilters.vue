<template>
  <aside
    class="sidebar-filters"
  >
    <FilterWithSearch
      :categories="categories[0].list"
    />
    <FilterWithSearch
      :categories="categories[1].list"
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
</template>

<script>
import FilterWithSearch from "@/components/core/filters/FilterWithSearch.vue";
import FilterColor from "@/components/core/filters/FilterColor.vue";
import FilterRange from "@/components/core/filters/FilterRange.vue";
export default {
  name: 'SidebarFilters',

  components: {
    FilterRange,
    FilterColor,
    FilterWithSearch,
  },

  props: {
    categories: {
      type: Array,
      default: () => []
    }
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

  methods: {
    onFilterChange(value) {
      this.minPriceValue = value[0]
      this.maxPriceValue = value[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-filters {
  width: 100%;
}
</style>