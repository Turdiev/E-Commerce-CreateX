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

    <Transition name="fade">
      <MenuMobile
        v-if="isOpenMenu"
        class="header-mobile__menu"
      />
    </Transition>
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
    //transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-in-out;
}

.fade-enter-from {
  transform: translateY(-900px);
  transition: all 2s ease;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  transform: translateY(0px);
}
.fade-leave-to {
  transform: translateY(-900px);
}
</style>