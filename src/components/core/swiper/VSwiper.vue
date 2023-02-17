<template>
  <!-- Slider main container -->
  <div
    ref="swiper"
    class="swiper"
  >
    <div class="swiper-wrapper">
      <slot name="swiperSlide" />
    </div>

    <div
      v-show="isPagination"
      ref="pagination"
      class="swiper-pagination"
    />

    <div
      ref="prev"
      class="swiper-button-prev"
    />
    <div
      ref="next"
      class="swiper-button-next"
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

export default {
  name: 'VSwiper',

  components: {
  },

  props: {
    isPagination: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      swiper: null
    }
  },

  computed: {
    defaultParams() {
      return {
        modules: [Navigation, Pagination],
        loop: true,

        pagination: {
          el: this.$refs.pagination
        },
        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev,
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
</style>