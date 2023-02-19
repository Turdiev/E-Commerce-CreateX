<template>
  <header class="header">
    <PreHeader />
    <div class="container">
      <div
        v-if="!isBreakepoints"
        class="header__wrapper"
      >
        <TheLogo class="header__logo" />
        <TheMenu
          class="header__menu"
        />
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
          <HeaderFavorites />
          <div class="divider" />
          <HeaderCart />
        </div>
      </div>
      <HeaderMobile v-if="isBreakepoints" />
    </div>
    <HeaderSpecialOffers />
  </header>
</template>

<script>
import PreHeader from "@/components/header/PreHeader.vue";
import TheLogo from "@/components/TheLogo.vue";
import TheMenu from "@/components/core/menu/TheMenu.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import HeaderSpecialOffers from "@/components/header/HeaderSpecialOffers.vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import HeaderFavorites from "@/components/header/HeaderFavorites.vue";
import HeaderCart from "@/components/header/HeaderCart.vue";
export default {
  name: 'TheHeader',

  components: {
    HeaderCart,
    HeaderFavorites,
    HeaderMobile,
    HeaderSpecialOffers,
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
    },

    isBreakepoints() {
      return ['mobile','tablet'].includes(this.$mq)
    },
  },

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
    margin-right: 12px;
  }

  &__menu {
    margin-right: 83px;
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

    & .divider {
      width: 22px;
      height: 1px;
      transform: rotate(90deg);
      background: $gray-600;
    }
  }
}
</style>