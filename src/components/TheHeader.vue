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
          @mouseenter="onMouseEnterLink"
          @mouseleave="onMouseLeaveLink"
        />
        <div class="header__search">
          <UiInput
            v-model="searchValue"
            type="text"
            size="regular"
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

    <div
      class="header__hidden-dropdown"
      :class="{'_height-dropdown': isOpenDropdown}"
      @mouseenter="onMouseEnterLink"
      @mouseleave="onMouseLeaveLink"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <MenuDropdown />
      </transition>
    </div>
    <transition name="fade">
      <div
        v-if="isOpenDropdown"
        class="header__overlay"
      />
    </transition>
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
import MenuDropdown from "@/components/core/menu/MenuDropdown.vue";
export default {
  name: 'TheHeader',

  components: {
    MenuDropdown,
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
      searchValue: null,
      isOpenDropdown: false
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

  methods: {
    onMouseEnterLink(val) {
      console.log('VAL', val)
      this.isOpenDropdown = true
    },
    onMouseLeaveLink(val) {
      console.log('VAL leave', val)
      this.isOpenDropdown = false
    },
  }

}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background: $white;
  z-index: 10;

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

  &__hidden-dropdown {
    position: absolute;
    top: 120px;
    left: 0;
    height: 0;
    width: 100%;
    overflow: hidden;
    transition: height 0.3s ease;
    z-index: 3;

    &._height-dropdown {
      height: 487px;

      body {
        overflow-y: hidden;
      }
    }
  }

  &__overlay {
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: calc(100vh - 120px);
    pointer-events: none;
    background: rgba($gray-900, 0.75);
    z-index: 2;
  }
}
</style>