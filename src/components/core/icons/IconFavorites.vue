<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#1E212C"
    xmlns="http://www.w3.org/2000/svg"
    :class="{'_isHover': isHovered}"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9994 2.10589C8.47019 -1.24772 3.26381 0.138319 1.35872 3.87584C0.313178 5.92706 0.298896 8.57818 1.84178 11.388C3.37099 14.173 6.41989 17.1125 11.5156 19.929L11.9993 20.1964L12.4831 19.9291C17.579 17.1126 20.6281 14.173 22.1574 11.3881C23.7004 8.57821 23.6861 5.92708 22.6406 3.87584C20.7355 0.138247 15.5289 -1.24767 11.9994 2.10589Z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconFavorites',

  props: {
    isHovered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;

  path {
    fill: white;
    stroke: black;
  }
}

._isHover {
  transition: $defaultTransition;

  &:hover {
    path {
      fill: $primary;
      stroke: $primary;
    }
  }
}
</style>