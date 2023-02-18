<template>
  <div class="special-offers">
    <div class="special-offers__wrapper">
      <VSwiper
        :is-pagination="false"
      >
        <template #swiperSlide>
          <template
            v-for="(slide, index) in i18nSlides"
          >
            <div
              :key="`${slide.description}_${index}`"
              class="swiper-slide special-offers__item"
            >
              <span>{{ slide.description }}</span>
              <router-link :to="slide.path">
                {{ slide.linkName }}
              </router-link>
            </div>
          </template>
        </template>
      </VSwiper>
    </div>
  </div>
</template>

<script>
import VSwiper from "@/components/core/swiper/VSwiper.vue";

export default {
  name: 'HeaderSpecialOffers',
  components: {
    VSwiper
  },

  computed: {
    i18nSlides() {
      return this.$t('header.specialOffers.slides')
    }
  }
}
</script>

<style lang="scss" scoped>
.special-offers {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 34px;
  background: $primary;

  &__wrapper {
    width: 274px;
    height: 100%;
  }

  &__item {
    & span {
      font-weight: 900;
      font-size: 12px;
      line-height: 150%;
      color: $white;
      padding-right: 4px;
    }

    & a {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      text-decoration-line: underline;
      color: $white;
    }
  }
}
</style>