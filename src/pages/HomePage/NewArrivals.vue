<template>
  <div class="new-arrivals">
    <h2 class="new-arrivals__title">
      {{ i18nNewArrivals.title }}
    </h2>
    <p class="new-arrivals__description">
      {{ i18nNewArrivals.description }}
      <router-link
        :to="i18nNewArrivals.descriptionLink.path"
      >
        {{ i18nNewArrivals.descriptionLink.name }}
      </router-link>
    </p>
    <div class="new-arrivals__slider">
      <VSwiper
        pagination-type="dashed"
        :is-controls="false"
      >
        <template
          v-if="!isMobile"
          #swiperSlide
        >
          <template
            v-for="(product, index) in getProductsList"
          >
            <div
              :key="`${product.name}_${index}`"
              class="swiper-slide new-arrivals__slide"
            >
              <CardProduct
                v-for="(item, idx) in product"
                :key="`${item.name}_${idx}`"
                :product="item"
                type-size="_small"
              />
            </div>
          </template>
        </template>
        <template
          v-else
          #swiperSlide
        >
          <template
            v-for="(product, index) in getProductsListMob"
          >
            <CardProduct
              :key="`${product.name}_${index}`"
              :product="product"
              type-size="_small"
              class="swiper-slide new-arrivals__slide"
            />
          </template>
        </template>
      </VSwiper>
    </div>
  </div>
</template>

<script>
import VSwiper from "@/components/core/swiper/VSwiper.vue";
import CardProduct from "@/components/cards/CardProduct.vue";

export default {
  name: 'NewArrivals',
  components: {CardProduct, VSwiper},

  computed: {
    i18nNewArrivals() {
      console.log(this.getProductsListMob)
      return this.$t('newArrivals')
    },

    isMobile() {
      return this.$mq === 'mobile'
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
  }
}
</script>

<style lang="scss" scoped>
.new-arrivals {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  background: white;

  @include respond-to(mobile) {
    margin-top: 60px;
  }

  &__title {
    font-weight: 900;
    font-size: 46px;
    line-height: 130%;
    color: $gray-900;
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: $gray-700;
    width: 23%;
    text-align: center;

    @include respond-to(tablet) {
      width: 50%;
    }
    @include respond-to(mobile) {
      width: 100%;
    }

    & a {
      color: $primary;
      text-decoration: underline;
    }
  }

  &__slider {
    width: 100%;
    padding: 0 30px;
    margin-top: 60px;
  }

  &__slide {
    display: flex;
    justify-content: space-between;

    @include respond-to(mobile) {
      flex-direction: column;
    }
  }
}
</style>