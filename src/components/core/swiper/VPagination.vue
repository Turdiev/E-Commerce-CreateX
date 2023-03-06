<template>
  <div
    v-if="type === 'default'"
    class="pagination-default swiper-pagination"
  />
  <div
    v-else-if="type === 'dashed'"
    class="pagination-dashed swiper-pagination"
  />
</template>

<script>
export default {
  name: 'VPagination',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: v => {
        return [
          'default',
          'dashed',
        ].includes(v);
      }
    }
  }
}
</script>

<style lang="scss">
.pagination-default {
  display: inline-flex;
  align-items: flex-end;
  min-height: 54px;

  .swiper-pagination-bullet {
    position: relative;
    width: 178px;
    height: 2px;
    background-color: $gray-800;
    border-radius: 0;
    transition: all 0.3s ease;

    &.swiper-pagination-bullet-active {
      background-color: $gray-900;
    }

    &:after {
      content: none;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  .swiper-pagination-bullet-num {
    position: absolute;
    bottom: 12px;
    left: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: $gray-800;
  }
}

.pagination-dashed {
  .swiper-pagination-bullet {
    position: relative;
    width: 30px;
    height: 3px;
    background-color: $gray-500;
    border-radius: 0;
    transition: all 0.3s ease;
    opacity: 1;

    &.swiper-pagination-bullet-active {
      background-color: $gray-900;
    }

    &:after {
      content: none;
    }

    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}
</style>