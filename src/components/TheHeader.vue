<template>
  <header class="header">
    <PreHeader />
    <div class="container">
      <div class="header__wrapper">
        <TheLogo class="header__logo" />
        <TheMenu />
        <div class="header__search">
          <UiInput
            v-model="searchValue"
            type="text"
            :placeholder="i18nHeader.inputSearch.placeholder"
            class="header__search-input"
          >
            <slot>
              <IconSearch />
            </slot>
          </UiInput>
        </div>
        <div class="header__actions">
          <div class="header__actions-wishlist">
            <IconFavorites />
            <div class="counter">
              <span>2</span>
            </div>
          </div>
          <div class="divider" />
          <div class="header__actions-cart">
            <IconCart />
            <div class="cart-counter">
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import PreHeader from "@/components/header/PreHeader.vue";
import TheLogo from "@/components/TheLogo.vue";
import TheMenu from "@/components/TheMenu.vue";
import UiInput from "@/components/ui/UiInput/UIInput.vue";
export default {
  name: 'TheHeader',

  components: {
    UiInput,
    TheMenu,
    TheLogo,
    PreHeader
  },

  data() {
    return {
      searchValue: null
    }
  },

  computed: {
    i18nHeader() {
      return this.$t('header')
    }
  }

}
</script>

<style lang="scss" scoped>
.header {
  background: $white;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  &__logo {
    width: 130px;
  }

  &__search {
    width: 380px;
    height: 44px;

    &-input {}
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 131px;

    &-wishlist {
      display: flex;
      align-items: center;

      & .counter {
        margin-left: 8.5px;

        & span {
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: $gray-800;
        }
      }
    }

    &-cart {
      display: flex;
      align-items: center;

      & .cart-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23px;
        height: 20px;
        background: $green;
        border-radius: 4px;
        margin-left: 9.3px;

        & span {
          font-weight: 900;
          font-size: 12px;
          line-height: 150%;
          color: $white;
        }
      }
    }

    & .divider {
      width: 22px;
      height: 1px;
      transform: rotate(90deg);
      background: $gray-600;
    }
  }
}
</style>