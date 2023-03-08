<template>
  <div
    class="button-close"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'UiButtonClose'
}
</script>

<style lang="scss" scoped>
.button-close {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all .3s ease;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 3px;
      background-color: $gray-700;
    }

    &:before {
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
    }

    &:after {
      transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    }

    &:hover {
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
}
</style>