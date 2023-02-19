<template>
  <div
    class="favorites"
  >
    <div class="favorites__icon">
      <IconFavorites />
    </div>
    <div
      v-if="!mobile"
      class="favorites__counter"
    >
      <span>2</span>
    </div>
    <div
      v-else
      class="favorites__label"
    >
      <span>{{ i18nFavorites }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderFavorites',

  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    i18nFavorites() {
      return this.$t('header.favorites')
    },
  }
}
</script>

<style lang="scss" scoped>
.favorites {
  display: flex;
  align-items: center;

  &__icon {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }

  &__counter {
    margin-left: 8.5px;

    & span {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: $gray-800;
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

  & ._size-md {
    //width: 22px;
    //height: 22px;
  }
}
</style>