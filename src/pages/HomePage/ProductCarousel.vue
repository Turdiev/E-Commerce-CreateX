<template>
  <div
    class="product-carousel"
    :class="{'_sale': typeProduct === 'saleUp'}"
  >
    <div class="container">
      <div class="product-carousel__wrapper">
        <h2 class="product-carousel__title">
          {{ i18nProduct.title }}
        </h2>
        <div class="product-carousel__controls">
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
      <div class="product-carousel__slider">
        <VSwiper
          :is-controls="false"
          :is-pagination="isMobile"
          :is-btn-arrow="true"
          :pagination-type="isMobile ? 'dashed': ''"
          :slider-params="sliderParams"
        >
          <template
            v-if="!isMobile"
            #swiperSlide
          >
            <template
              v-for="(product, index) in products"
            >
              <div
                :key="`${product.name}_${index}`"
                class="swiper-slide product-carousel__slide"
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
                class="swiper-slide product-carousel__slide"
              />
            </template>
          </template>
        </VSwiper>
      </div>
      <div class="product-carousel__button">
        <UiButton
          :outline="true"
          size="large"
          class="_size"
        >
          {{ i18nProduct.button.name }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script>
import VSwiper from "@/components/core/swiper/VSwiper.vue";
import CardProduct from "@/components/cards/CardProduct.vue";
import UiButtonArrow from "@/components/ui/UiButton/UiButtonArrow.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
export default {
  name: 'ProductCarousel',

  components: {
    UiButton,
    UiButtonArrow,
    VSwiper,
    CardProduct
  },

  props: {
    typeProduct: {
      type: String,
      default: 'trendingNow'
    },
    products: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      //
    }
  },

  computed: {
    i18nProduct() {
      return this.$t(`${this.typeProduct}`)
    },

    isMobile() {
      return this.$mq === 'mobile'
    },

    getProductsListMob() {
      let newListProduct = []
      let productList = this.products
      productList.forEach(list => {
        newListProduct.push(...list)
      })
      return newListProduct
    },
    sliderParams() {
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
.product-carousel {
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

  &__button {
    margin-top: 12px;

    @include respond-to(mobile) {
      margin-top: 34px;
    }

    & ._size {
      width: 210px;
      margin: 0 auto;
    }
  }
}

._sale {
  background: transparent;
}
</style>