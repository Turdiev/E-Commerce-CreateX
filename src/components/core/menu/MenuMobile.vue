<template>
  <div class="menu-mobile">
    <div class="menu-mobile__header" />
    <div class="menu-mobile__wrapper">
      <HeaderCart :mobile="true" />
      <HeaderFavorites :mobile="true" />
    </div>
  </div>
</template>

<script>
import HeaderCart from "@/components/header/HeaderCart.vue";
import HeaderFavorites from "@/components/header/HeaderFavorites.vue";

export default {
  name: 'MenuMobile',
  components: {HeaderFavorites, HeaderCart}
}
</script>

<style lang="scss" scoped>
.menu-mobile {
  width: 100%;
  height: 100%;
  background: $white;

  &__header {
    width: 100%;
    height: 70px;
    border-bottom: 2px solid $primary;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 20px;
  }
}
</style>