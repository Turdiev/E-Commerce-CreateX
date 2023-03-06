<template>
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{'_active': isActive}"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.93208 1.28492C6.33735 0.350338 7.66273 0.350337 8.068 1.28492L9.29394 4.11205L12.3615 4.40436C13.3756 4.50099 13.7852 5.7615 13.0216 6.43573L10.7116 8.4753L11.3816 11.4831C11.603 12.4774 10.5308 13.2564 9.65359 12.7385L7.00004 11.1719L4.34649 12.7385C3.46929 13.2564 2.39703 12.4774 2.6185 11.4831L3.28844 8.4753L0.978516 6.43573C0.214907 5.7615 0.62447 4.50099 1.63855 4.40436L4.70614 4.11205L5.93208 1.28492Z"
      fill="#F89828"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconStarRating',

  props: {
    isActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
svg {
  path {
    fill: white;
    stroke: black;

    &:hover {
      fill: #F89828;
      stroke: #F89828;
    }
  }
}

._active {
  path {
    fill: #F89828;
    stroke: #F89828;

    &:hover {
      fill: white;
      stroke: black;
    }
  }
}
</style>