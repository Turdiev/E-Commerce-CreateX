<template>
  <div
    class="UiScrollContainer"
    :style="classList"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiScrollContainer',

  props: {
    classList: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.UiScrollContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: $gray-300;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $gray-500;
    border-radius: 8px;
  }
}
</style>