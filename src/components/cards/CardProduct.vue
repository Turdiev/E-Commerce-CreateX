<template>
  <div
    class="card-product"
    :class="typeSize"
    @mouseenter="onMouseEnterCard"
    @mouseleave="onMouseLeaveCard"
  >
    <div
      class="card-product__image"
      :style="inlineStyleImg"
    >
      <div class="card-product__image-wrap">
        <div
          v-if="product.sale"
          class="card-product__sale"
        >
          <span>{{ product.sale }}</span>
        </div>
        <CardRating
          v-if="product.rating"
          :ratings="product.rating"
          class="card-product__rating"
        />
      </div>
      <div
        class="card-product__wishlist"
        @mouseenter="onMouseEnterWishlist"
        @mouseleave="onMouseLeaveWishlist"
        @click="onMouseEnterWishlist"
      >
        <IconFavorites
          :is-active="isHoveredWishlist"
          class="card-product__wishlist-icon"
        />
      </div>
    </div>
    <div
      class="card-product__info"
      :class="{'_info-hovered': isHoveredCard || isMobile}"
    >
      <div class="card-product__name">
        <span>{{ product.name }}</span>
      </div>
      <div class="card-product__price">
        <span
          :class="{'_sale': product.sale}"
        >
          {{ product.price }}
        </span>
        <span
          v-if="product.old_price"
          class="_old"
        >
          {{ product.old_price }}
        </span>
      </div>
      <div
        class="card-product__actions"
        :class="{'_card-hover': isHoveredCard || isMobile}"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <div class="card-product__actions-wrap">
            <div class="card-product__actions-params">
              <div class="card-product__sizes">
                <div
                  v-for="size in product.sizes"
                  :key="size"
                  class="card-product__size"
                  :class="{'_size-selected': sizeSelect === size}"
                  @click="selectSizeOption(size)"
                >
                  <span>{{ size }}</span>
                </div>
              </div>
              <div class="card-product__colors">
                <div
                  v-for="color in product.colors"
                  :key="color"
                  class="card-product__color"
                  :class="{'_color-selected': colorSelect === color}"
                >
                  <div
                    class="card-product__color-ellipse"
                    :style="{background: color}"
                    @click="selectColorOption(color)"
                  />
                </div>
              </div>
            </div>
            <UiButton
              class="card-product__button"
              :solid="true"
              :is-icon="true"
              size="small"
              label="Add to cart"
            >
              <template #icon>
                <IconCart />
              </template>
            </UiButton>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import CardRating from "@/components/cards/components/CardRating.vue";

export default {
  name: 'CardProduct',
  components: {
    CardRating,
    UiButton
  },

  props: {
    product: {
      type: Object,
      default: () => {}
    },
    typeSize: { //_large || _small
      type: String,
      default: '_small'
    }
  },

  data() {
    return {
      isHoveredCard: false,
      isHoveredWishlist: false,
      colorSelect: '',
      sizeSelect: '',
    }
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },

    inlineStyleImg() {
      const src = require("@/assets/image/" + this.product.image)
      return  {
        'background-image': `url("${src}")`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      }
    }
  },

  methods: {
    onMouseEnterCard() {
      this.isHoveredCard = true
    },

    onMouseLeaveCard() {
      this.isHoveredCard = false
    },

    onMouseEnterWishlist() {
      this.isHoveredWishlist = true
    },

    onMouseLeaveWishlist() {
      this.isHoveredWishlist = false
    },

    selectColorOption(color) {
      this.colorSelect = color
    },

    selectSizeOption(size) {
      this.sizeSelect = size
    }
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  //background: $white;
  border-radius: 4px;

  &__image {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 16px;

    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
  }

  &__sale {
    width: 54px;
    height: 28px;
    background: $red;
    border-radius: 4px;
    text-align: center;

    & span {
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      color: $white;
    }
  }

  &__rating {

  }

  &__wishlist {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: $white;
    border-radius: 50%;
    cursor: pointer;

    &-icon {
      width: 21px;
      height: 14px;
    }
  }

  &__info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 177px;
    padding: 16px 16px 0;
    background: transparent;
    transition: all 0.3s linear;

    &._info-hovered {
      background: $white;
      box-shadow: 0 80px 80px -20px rgba(154, 156, 165, 0.16),
      0px 30px 24px -10px rgba(154, 156, 165, 0.1),
      0px 12px 10px -6px rgba(154, 156, 165, 0.08),
      0px 4px 4px -4px rgba(30, 33, 44, 0.05);

      @include respond-to(mobile) {
        box-shadow: none;
      }
    }
  }

  &__name {
    margin-bottom: 8px;

    & span {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: $gray-800;
    }
  }

  &__price {
    margin-bottom: 20px;

    & span {
      font-weight: 700;
      line-height: 130%;
      color: $gray-900;
      margin-right: 20px;
    }

    & ._sale {
      color: $red;
    }

    & ._old {
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      text-decoration-line: line-through;
      color: $gray-700
    }
  }

  &__actions {
    position: absolute;
    top: 30px;
    display: flex;
    width: 89%;
    height: 70px;
    transition: all 0.3s linear;
    opacity: 0;

    &._card-hover {
      top: 100px;
      opacity: 1;
    }

    &-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }

    &-params {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  &__sizes {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__size {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid $gray-400;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;

    & span {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: $gray-800;
    }

    &._size-selected {
      border: 1px solid #17696A;
    }
  }

  &__colors {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__color {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid $gray-400;
    border-radius: 50%;
    cursor: pointer;

    &-ellipse {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    &._color-selected {
      border: 1px solid #17696A;
    }
  }

  &__button {
    max-width: 100%;
  }
}

._large {
  width: 390px;

  @include respond-to(mobile) {
    width: 100% ;
  }

  .card-product__image {
    width: 100%;
    height: 440px;

    @include respond-to(mobile) {
      height: 300px;
    }
  }

  .card-product__price {
    & span {
      font-size: 24px;
    }

    &._old {
      font-size: 18px;
    }
  }

  .card-product__actions {
    width: 92%;
  }
}

._small {
  min-width: 285px;

  .card-product__image {
    width: 100%;
    height: 320px;

    @include respond-to(mobile) {
      height: 260px;
    }
  }

  .card-product__price {

    & span  {
      font-size: 20px;
    }

    &._old {
      font-size: 16px;
    }
  }
}

</style>