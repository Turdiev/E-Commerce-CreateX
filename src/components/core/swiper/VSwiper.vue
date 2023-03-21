<template>
  <div
    ref="swiper"
    class="swiper"
    :class="{'_container': paginationType === 'dashed'}"
  >
    <div class="swiper-wrapper">
      <slot name="swiperSlide" />
    </div>

    <div
      v-show="!isBtnArrow && isControls"
      ref="prev"
      class="swiper-button-prev"
    />
    <div
      v-show="!isBtnArrow && isControls"
      ref="next"
      class="swiper-button-next"
    />

    <UiButtonArrow
      v-if="isBtnArrow && isControls"
      ref="prevArr"
      :reverse="true"
      class="swiper-button-prev swiper-button-arrow"
    />
    <UiButtonArrow
      v-if="isBtnArrow && isControls"
      ref="nextArr"
      class="swiper-button-next swiper-button-arrow"
    />

    <template
      v-if="isPagination && paginationType === 'default'"
    >
      <div class="container">
        <div class="pagination _default">
          <VPagination
            ref="pagination"
            :type="paginationType"
          />
        </div>
      </div>
    </template>
    <template
      v-else-if="isPagination && paginationType === 'dashed'"
    >
      <div class="pagination _dashed">
        <VPagination
          ref="pagination"
          :type="paginationType"
        />
      </div>
    </template>
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
    paginationType: {
      type: String,
      default: 'default'
    },
    isBtnArrow: {
      type: Boolean,
      default: false
    },
    isControls: {
      type: Boolean,
      default: true
    },
    sliderParams: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      swiper: null,
    }
  },

  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    },

    defaultParams() {
      return {
        modules: [Navigation, Pagination],
        loop: true,

        pagination: {
          el: this.$refs.pagination?.$el,
          dynamicBullets: this.isMobile && this.paginationType === 'dashed',
          renderBullet: this.paginationType === 'default' ?
              (index, className) => this.renderPaginationDefault(className, index)
              : ''
        },
        navigation: {
          nextEl: this.$refs.nextArr ? this.$refs.nextArr.$el : this.$refs.next,
          prevEl: this.$refs.nextArr ? this.$refs.prevArr.$el : this.$refs.prev,
        },
      }
    }
  },

  mounted() {
    this.initSlider()
  },

  methods: {
    initSlider() {
      if(this.sliderParams && Object.keys(this.sliderParams)) {
        this.defaultParams.navigation = {
          nextEl: this.sliderParams.navigation.refs.nextArr.$el,
          prevEl: this.sliderParams.navigation.refs.prevArr.$el,
        }
      }
      this.swiper = new Swiper(this.$refs.swiper, this.defaultParams)
    },

    renderPaginationDefault(className, index) {
      return `<div class="${className}">
                <span class="swiper-pagination-bullet-num">
                 0${(index + 1)}
                </span>
              </div>`;
    }
  }
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;

  &._container {
    padding-bottom: 30px;
  }
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

.swiper-button-arrow {
  top: 50%;
  margin: 0 32px;

  &:after {
    content: '';
  }
}

.pagination {
  position: relative;

  &._default {
    bottom: 185px;

    @include respond-to(mobile) {
      bottom: 20px;
    }
  }

  &._dashed {
    bottom: -40px;

    @include respond-to(mobile) {
      bottom: -30px;
    }
  }

}
</style>