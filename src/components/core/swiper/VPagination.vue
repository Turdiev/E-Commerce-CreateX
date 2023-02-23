<template>
  <div
    class="pagination-bullets swiper-pagination"
  />
</template>

<script>
export default {
  name: 'VPagination'
}
</script>

<style lang="scss">
.pagination-bullets {
  display: inline-flex;
  align-items: end;
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
</style>