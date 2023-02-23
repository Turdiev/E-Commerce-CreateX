<template>
  <div
    ref="swiper"
    class="swiper"
  >
    <div class="swiper-wrapper">
      <slot name="swiperSlide" />
    </div>

    <!--    <div-->
    <!--      v-show="isPagination"-->
    <!--      ref="pagination"-->
    <!--      class="swiper-pagination"-->
    <!--    />-->
    <div class="container">
      <div class="pagination">
        <VPagination
          v-show="isPagination"
          ref="pagination"
        />
      </div>
    </div>
    <div
      v-show="!isBtnArrow"
      ref="prev"
      class="swiper-button-prev"
    />
    <div
      v-show="!isBtnArrow"
      ref="next"
      class="swiper-button-next"
    />

    <UiButtonArrow
      v-if="isBtnArrow"
      ref="prevArr"
      :reverse="true"
      class="swiper-button-prev button-arrow"
    />
    <UiButtonArrow
      v-if="isBtnArrow"
      ref="nextArr"
      class="swiper-button-next button-arrow"
    />

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar" />
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination'
import UiButtonArrow from "@/components/ui/UiButton/UiButtonArrow.vue";
import VPagination from "@/components/core/swiper/VPagination.vue";

export default {
  name: 'VSwiper',

  components: {
    VPagination,
    UiButtonArrow
  },

  props: {
    isPagination: {
      type: Boolean,
      default: true
    },
    isBtnArrow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      swiper: null,
    }
  },

  computed: {
    defaultParams() {
      return {
        modules: [Navigation, Pagination],
        loop: true,

        pagination: {
          el: this.$refs.pagination.$el,
          renderBullet: (index, className) => {
            return `<div class="${className}">
                      <span class="swiper-pagination-bullet-num">
                       0${(index + 1)}
                      </span>
                    </div>`;
          },
        },
        navigation: {
          nextEl: this.$refs.nextArr ? this.$refs.nextArr.$el : this.$refs.next,
          prevEl: this.$refs.nextArr ? this.$refs.prevArr.$el : this.$refs.prev,
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      }
    }
  },

  mounted() {
    this.initSlider()
  },

  methods: {
    initSlider() {
      this.swiper = new Swiper(this.$refs.swiper, this.defaultParams)
      console.log('Swiper' ,this.swiper.pagination)
    },
  }
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
  top: 90%;
  width: 16px;
  height: 16px;
  color: $white;

  &:after {
    font-size: 16px;
  }
}

.swiper-button-prev{
  left: 0;
}
.swiper-button-next {
  right: 0;
}

.button-arrow {
  top: 50%;

  &:after {
    content: '';
  }
}

.pagination {
  position: relative;
  bottom: 185px;

  @include respond-to(mobile) {
    bottom: 20px;
  }
}
</style>