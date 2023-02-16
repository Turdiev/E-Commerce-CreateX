<template>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="12"
    class="UiIcon"
  >
    <use
      :xlink:href="`#icn-${name}`"
      xli
    />
  </svg>
</template>

<script>
export default {
  name: 'UiIcon',

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.UiIcon {
  display: block;
  fill: currentColor;
}
</style>