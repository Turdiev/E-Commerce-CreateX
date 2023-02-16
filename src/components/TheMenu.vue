<template>
  <nav class="menu">
    <ul class="menu__wrapper">
      <li
        v-for="(menu, index) in i18nMenuList"
        :key="`${menu.name}_${index}`"
        class="menu__link"
      >
        <router-link :to="menu.path">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheMenu',

  computed: {
    i18nMenuList() {
      return this.$t('header.menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 350px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: $gray-800;

    &:last-child {
      & a {
        color: $red;

        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>