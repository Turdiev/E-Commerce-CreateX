<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <nav class="footer__nav">
          <ul
            v-for="(menu, index) in i18nFooter.menu"
            :key="`${menu.title}_${index}`"
          >
            <li class="_title">
              {{ menu.title }}
            </li>
            <li
              v-for="(link, idx) in menu.nav"
              :key="`${link.title}_${idx}`"
            >
              <router-link :to="link.path">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="footer__get-touch">
          <ul>
            <li class="_title">
              {{ i18nFooter.getInTouch.title }}
            </li>
            <li>
              <span>{{ i18nFooter.getInTouch.call }}</span>
              <router-link to="/">
                {{ i18nFooter.getInTouch.callValue }}
              </router-link>
            </li>
            <li>
              <span>{{ i18nFooter.getInTouch.email }}</span>
              <router-link to="">
                {{ i18nFooter.getInTouch.emailValue }}
              </router-link>
            </li>
          </ul>
          <div class="footer__get-touch-socials">
            <router-link
              v-for="(social, idx) in i18nFooter.getInTouch.socials"
              :key="`${social.name}_${idx}`"
              :to="social.path"
              class="footer__get-touch-social"
            >
              <div
                class="footer__get-touch-icon"
                :class="`_${social.name}`"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__divider" />
    <div class="container">
      <div class="footer__wrapper _wrap">
        <div class="footer__copyright">
          <span>{{ i18nFooter.copyright }}</span>
        </div>
        <div
          class="footer__scrollTop"
        >
          <span>{{ i18nFooter.scroll }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  computed: {
    i18nFooter() {
      return this.$t('footer')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: $gray-900;

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 150px;
    padding-top: 60px;
    padding-bottom: 40px;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }

    &._wrap {
      justify-content: space-between;
      align-items: center;
      gap: 0;
      padding-top: 24px;
      padding-bottom: 32px;
    }
  }

  &__nav {
    display: flex;
    align-items: flex-start;
    gap: 150px;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }

    & ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 4px;
      width: 130px;

      @include respond-to(mobile) {
        align-items: center;
      }

      & ._title {
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        text-transform: uppercase;
        color: $white;
        margin-bottom: 12px;
      }

      & a {
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: $white;
        opacity: 0.6;
        transition: $defaultTransition;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  &__get-touch {

    & ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      @include respond-to(mobile) {
        align-items: center;
        width: 100%;
      }

      & ._title {
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        text-transform: uppercase;
        color: $white;
        margin-bottom: 12px;
      }

      & li {
        & span {
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: $white;
        }

        & a {
          font-weight: 400;
          font-size: 16px;
          line-height: 160%;
          color: $white;
          opacity: 0.6;
          transition: $defaultTransition;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    &-socials {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    &-social {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: $gray-800;
      border-radius: 4px;
      transition: $defaultTransition;

      &:hover {
        background-color: $primary;
      }
    }

    &-icon {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      &._facebook {
        background-image: url("@/assets/image/icon/facebook.svg");
      }
      &._instagram {
        background-image: url("@/assets/image/icon/instagram.svg");

      }
      &._twitter {
        background-image: url("@/assets/image/icon/twitter.svg");

      }
      &._youtube {
        background-image: url("@/assets/image/icon/youtube.svg");

      }
      &._pinterest {
        background-image: url("@/assets/image/icon/pinterest.svg");
      }
    }
  }

  &__divider {
    opacity: 0.15;
    border: 1px solid $white;
  }

  &__copyright {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: $white;
  }

  &__scrollTop {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: #FFFFFF;
    opacity: 0.6;
    transition: $defaultTransition;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>