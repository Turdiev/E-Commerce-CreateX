<template>
  <div class="pre-header">
    <div class="container">
      <div class="pre-header__wrapper">
        <div class="pre-header__available">
          <span
            v-if="!isMobile"
            class="_not-hover"
          >{{ i18nPreHeader.available }}</span>
          <span class="_font-weight">{{ i18nPreHeader.contact }}</span>
        </div>
        <nav
          v-if="!isMobile"
          class="pre-header__nav"
        >
          <ul>
            <li
              v-for="(menu, index) in i18nPreHeader.menu"
              :key="`${menu.path}_${index}`"
            >
              <router-link :to="menu.path">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="pre-header__actions">
          <div
            v-if="!isMobile"
            class="pre-header__currency"
          >
            <IconFlagUsa class="icon-flag" />
            <span>{{ i18nPreHeader.currency }}</span>
            <IconDownArrow class="icon-down-arrow" />
          </div>
          <div
            class="pre-header__account"
            @click="!getAccount ? onOpenModalAuth() : goToProfilePage()"
          >
            <IconProfile class="icon-profile" />
            <span>{{ getAccount || i18nPreHeader.logIn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreHeader',

  computed: {
    i18nPreHeader() {
      return this.$t('header.preHeader')
    },
    isMobile() {
      return this.$mq === 'mobile'
    },
    getAccount() {
      return this.$store.getters["auth/user"]
    }
  },

  methods: {
    onOpenModalAuth() {
      this.$store.dispatch('auth/changeStateModal', {
        form: 'signIn',
        value: true
      })
      document.body.classList.add('o-hidden')
    },

    goToProfilePage() {
      this.$router.push('/account/my-profile')
    }
  }
}
</script>

<style lang="scss" scoped>
  .pre-header {
    width: 100%;
    background: $gray-900;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
    }

    &__available {

      & span {
        @include text-style()
      }

      & ._font-weight {
        font-weight: 900;
      }

      & ._not-hover {
        &:hover {
          opacity: 0.6;
        }
      }
    }

    &__nav {
      width: 364px;

      & ul {
        display: flex;
        justify-content: space-between;

        & li a{
          @include text-style();

          &:hover {
            opacity: 1;
            transition: $defaultTransition;
          }
        }
      }
    }

    &__actions {
      display: flex;
      justify-content: space-between;
      width: 275px;

      @include respond-to(mobile) {
        justify-content: flex-end;
        width: 150px;
      }
    }

    &__currency {
      display: flex;
      align-items: center;

      & span {
        @include text-style();
        line-height: 0;
      }

      &:hover {
        & span {
          opacity: 1;
        }

        .icon-down-arrow {
          stroke: white;
          transition: $defaultTransition;
        }
      }
    }

    &__account {
      display: flex;
      align-items: center;
      color: $white;
      cursor: pointer;

      & span {
        @include text-style();
        line-height: 0;
      }

      &:hover {
        & span {
          opacity: 1;
        }

        .icon-profile {
          opacity: 1;
          transition: $defaultTransition;
        }
      }
    }
  }

  .icon-flag {
    width: 20px;
    height: 12px;
    margin-right: 12px;
  }

  .icon-profile {
    width: 16px;
    height: 16px;
    opacity: 0.6;
    margin-right: 8px;
    fill: $white;
  }

  .icon-down-arrow {
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
</style>