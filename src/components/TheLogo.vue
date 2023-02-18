<template>
  <router-link
    to="/"
    class="logo"
  >
    <img
      src="@/assets/image/logo.svg"
      alt="CreateX"
      class="logo__img"
    >
  </router-link>
</template>

<script>
export default {
  name: 'TheLogo',
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;

  &__img {
    display: block;
    width: 100%;
    min-height: 22px;
  }
}
</style>