<template>
  <div class="catalog">
    <BreadCrumbs />
    <div class="container">
      <div class="catalog__actions">
        <UiButton
          :label="isShowSidebar ? i18nToolbarButton.labelHide : i18nToolbarButton.labelShow"
          :solid="true"
          :is-icon="true"
          size="regular"
          class="catalog__button"
          @click="onHidesFilterSidebar"
        >
          <template #icon>
            <IconFilter />
          </template>
        </UiButton>
        <ToolbarCatalog
          class="catalog__toolbar _width"
          :params="toolbarParams"
          :total-pages="totalPaginatedPages"
          @change="onToolbarChange"
        />
      </div>
      <div class="catalog__wrapper">
        <transition
          name="fade"
          mode="in-out"
        >
          <SidebarFilters
            v-if="isShowSidebar && !isMobile"
            class="catalog__aside"
            :categories="i18nGetCategories"
          />
        </transition>
        <main class="catalog__main">
          <div class="catalog__main-products">
            <CardProduct
              v-for="(product, index) in paginatedData"
              :key="`${product.name}_${index}`"
              :product="product"
              type-size="_small"
            />
          </div>
          <ToolbarCatalog
            :params="toolbarParams"
            :total-pages="totalPaginatedPages"
            @change="onToolbarChange"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/core/paginations/BreadCrumbs.vue";
import CardProduct from "@/components/cards/CardProduct.vue";
import SidebarFilters from "@/components/core/interface/sidebars/SidebarFilters.vue";
import ToolbarCatalog from "@/components/core/interface/toolbars/ToolbarCatalog.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";

export default {
  name: 'CatalogPage',
  components: {
    ToolbarCatalog,
    SidebarFilters,
    CardProduct,
    BreadCrumbs,
    UiButton
  },

  data() {
    return {
      isShowSidebar: true,
      toolbarParams: {
        sorting: ['popular'],
        visibleNumElements: {
          value: 12,
          min: 3,
          max: 20
        },
        pagination: {
          currentPage: 1
        }
      }
    }
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },
    i18nGetCategories() {
      return this.$t('menuDropdown.categories')
    },
    i18nToolbarButton() {
      return this.$t('filter.toolbar.button')
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
    },
    paginatedData() {
      const startIndex = (this.toolbarParams.pagination.currentPage - 1) * this.toolbarParams.visibleNumElements.value
      return this.getProductsListMob.slice(startIndex, startIndex + this.toolbarParams.visibleNumElements.value)
    },
    totalPaginatedPages() {
      return Math.ceil(this.getProductsListMob.length / this.toolbarParams.visibleNumElements.value)
    }
  },

  methods: {
    onHidesFilterSidebar() {
      this.isShowSidebar = !this.isShowSidebar
    },
    onToolbarChange(params) {
      console.log('PARAMS', params)
      this.toolbarParams[params.type] = params.value
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  background: $white;

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    width: 100%;
    margin-top: 32px;
  }

  &__toolbar {
    width: 74.8%;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__aside {
    position: sticky;
    top: 95px;
    width: 255px;
    margin-right: 60px;
    margin-bottom: 180px;
    transition: $defaultTransition;
    //transform: translateX(0);
    //opacity: 1;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 180px;

    &-products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 100%;
      height: 100%;
      margin-top: 18px;

      @include respond-to(mobile) {
        justify-content: center;
      }
    }
  }

  &__button {
    width: 20.8%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>