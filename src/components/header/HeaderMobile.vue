<template>
  <div class="header-mobile">
    <TheLogo
      v-if="!isMobile"
      class="header-mobile__logo"
    />
    <div
      class="header-mobile__catalog"
    >
      <button
        class="header-mobile__catalog-btn"
      >
        <IconListBullet />
        <span>{{ i18nHeaderMob.catalog }}</span>
      </button>
    </div>
    <div class="header-mobile__search">
      <UiInput
        v-model="searchValue"
        type="text"
        :placeholder="i18nHeader.inputSearch.placeholder"
      >
        <slot>
          <IconSearch />
        </slot>
      </UiInput>
    </div>
    <MenuBurger
      @click="onOpenMenu"
    />
    <div
      v-if="isOpenMenu"
      class="header-mobile__menu"
      :class="{'_show-menu': isOpenMenu}"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <MenuMobile />
      </transition>
    </div>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import MenuBurger from "@/components/core/menu/MenuBurger.vue";
import MenuMobile from "@/components/core/menu/MenuMobile.vue";

export default {
  name: 'HeaderMobile',

  components: {
    MenuMobile,
    MenuBurger,
    TheLogo,
    UiInput
  },

  data() {
    return {
      searchValue: null,
      isOpenMenu: false
    }
  },

  computed: {
    i18nHeaderMob() {
      return this.$t('header.mobile')
    },
    i18nHeader() {
      return this.$t('header')
    },
    isMobile() {
      return this.$mq === 'mobile'
    }
  },

  methods: {
    onOpenMenu() {
      this.isOpenMenu = !this.isOpenMenu

      if(this.isOpenMenu) {
        document.body.classList.add('o-hidden')
      } else {
        document.body.classList.remove('o-hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &__logo {
    width: 110px;
    margin-right: 12px;
  }

  &__catalog {
    display: flex;
    align-items: center;

    &-btn {
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      width: 115px;
      height: 44px;
      background-color: $primary;
      border-radius: 8px;
      color: #fff;
      padding: 0 12px;

      & span {
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        color: $white;
      }
    }
  }

  &__search {
    width: 60%;
    height: 44px;
    margin: 0 10px;

    @include respond-to(mobile) {
      margin: 0 5px;
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: $white;
    overflow: hidden;
    transition: height 1s ease-out;
    z-index: 2;

    &._show-menu {
      height: 100vh;
      transition: height 1s ease-out;
    }
  }
}
</style>