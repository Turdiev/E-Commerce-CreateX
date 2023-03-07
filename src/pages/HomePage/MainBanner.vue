<template>
  <div class="banner">
    <VSwiper
      :is-btn-arrow="true"
      :is-controls="!isMobile"
      pagination-type="default"
    >
      <template #swiperSlide>
        <template
          v-for="(slide, index) in i18nBanners"
        >
          <div
            :key="`${slide.title}_${index}`"
            class="swiper-slide banner__item"
            :style="inlineStyleImg(slide.banner)"
          >
            <div class="container">
              <div class="banner__wrapper">
                <div class="banner__pre-title">
                  <span>{{ slide.preTitle }}</span>
                </div>
                <div class="banner__title">
                  <span>{{ slide.title }}</span>
                </div>
                <div class="banner__actions">
                  <UiButton
                    v-for="item in slide.links"
                    :key="item.labelLink"
                    :solid="item.solid"
                    :outline="item.outline"
                    size="large"
                    class="banner__actions-button"
                    :class="{'_small': item.outline}"
                  >
                    {{ item.labelLink }}
                  </UiButton>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
    </VSwiper>
  </div>
</template>

<script>
import VSwiper from "@/components/core/swiper/VSwiper.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
export default {
  name: 'MainBanner',
  components: {
    UiButton,
    VSwiper,
  },

  computed: {
    i18nBanners() {
      return this.$t('mainBanner.slides')
    },
    isMobile() {
      return this.$mq === 'mobile'
    }
  },

  methods: {
    inlineStyleImg(url) {
      const src = require("@/assets/image/" + url)
      const styleOptions = {
        'background-image': `url("${src}")`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position-x': 'center'
      }
      if(this.isMobile) {
        styleOptions["background-position-x"] = '58%'
      }
      return styleOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: calc(100vh - 121px);

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 542px;

    @include respond-to(mobile) {
      align-items: center;
      width: 100%;
    }
  }

  &__pre-title {

    & span {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $gray-900;
    }
  }

  &__title {
    & span {
      font-weight: 900;
      font-size: 72px;
      line-height: 130%;
      letter-spacing: 1px;
      color: $gray-900;

      @include respond-to(mobile) {
        font-size: 62px;
      }

      @include respond-to(sm-mobile) {
        font-size: 40px;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 255px;

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 15px;
      margin-bottom: 55px;
    }

    &-button {
      width: 229px;

      @include respond-to(mobile) {
        width: 250px;
      }

      &:not(:last-child) {
        margin-right: 24px;

        @include respond-to(mobile) {
          margin-right: 0;
        }
      }
    }

    & ._small {
      width: 152px;

      @include respond-to(mobile) {
        width: 100%;
      }
    }
  }
}
</style>