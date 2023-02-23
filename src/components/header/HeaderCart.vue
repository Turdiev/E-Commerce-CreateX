<template>
  <div class="cart">
    <div class="cart__icon">
      <IconCart />
    </div>
    <div
      v-if="!mobile"
      class="cart__counter"
    >
      <span>4</span>
    </div>
    <div
      v-else
      class="cart__label"
    >
      <span>{{ i18nCart }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCart',

  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    i18nCart() {
      return this.$t('header.cart')
    },
  }
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;

  &__icon {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }

  &__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 20px;
    background: $green;
    border-radius: 4px;

    & span {
      font-weight: 900;
      font-size: 12px;
      line-height: 150%;
      color: $white;
    }
  }

  &__label {
    & span {
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      color: $gray-800;
    }
  }
}
</style>