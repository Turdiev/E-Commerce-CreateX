<template>
  <div class="trending-now">
    <div class="container">
      <div class="trending-now__wrapper">
        <h2 class="trending-now__title">
          {{ i18nTrendingNow.title }}
        </h2>
        <div class="trending-now__controls">
          <UiButtonArrow
            ref="prevArr"
            :reverse="true"
            :transparent="true"
          />
          <UiButtonArrow
            ref="nextArr"
            :transparent="true"
          />
        </div>
      </div>
      <div class="trending-now__slider">
        <VSwiper
          :is-controls="false"
          :is-pagination="isMobile"
          :is-btn-arrow="true"
          :pagination-type="isMobile && 'dashed'"
          :slider-params="sliderParams"
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
                class="swiper-slide trending-now__slide"
              >
                <CardProduct
                  v-for="(item, idx) in product"
                  :key="`${item.name}_${idx}`"
                  :product="item"
                  type-size="_large"
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
                type-size="_large"
                class="swiper-slide trending-now__slide"
              />
            </template>
          </template>
        </VSwiper>
      </div>
    </div>
  </div>
</template>

<script>
import VSwiper from "@/components/core/swiper/VSwiper.vue";
import CardProduct from "@/components/cards/CardProduct.vue";
import UiButtonArrow from "@/components/ui/UiButton/UiButtonArrow.vue";
export default {
  name: 'TrendingNow',

  components: {
    UiButtonArrow,
    VSwiper,
    CardProduct
  },

  data() {
    return {
      //
    }
  },

  computed: {
    i18nTrendingNow() {
      return this.$t('trendingNow')
    },

    isMobile() {
      return this.$mq === 'mobile'
    },

    getProductsList() {
      return this.$store.state.product.trendingNow
    },
    getProductsListMob() {
      let newListProduct = []
      let productList = this.getProductsList
      productList.forEach(list => {
        newListProduct.push(...list)
      })
      return newListProduct
    },
    sliderParams() {
      console.log('thisParams', this.$refs)
      return {
        navigation: {
          refs: this.$refs
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.trending-now {
  background: $gray-300;
  margin-top: 80px;
  padding: 80px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;

    @include respond-to(mobile) {
      margin-bottom: 24px;
    }
  }

  &__title {
    font-weight: 900;
    font-size: 46px;
    line-height: 130%;
    color: $gray-900;

    @include respond-to(mobile) {
      font-size: 34px;
    }
  }

  &__controls {
    display: flex;
    justify-content: space-around;
  }

  &__slider {

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