<template>
  <div class="bread-crumbs">
    <div class="container">
      <div class="bread-crumbs__wrapper">
        <router-link
          to="/"
          class="bread-crumbs__home _chevron"
        >
          <IconHome />
        </router-link>
        <router-link
          v-for="(link, index) in breadCrumbs"
          :key="`${link.name}_${index}`"
          :to="link.path"
          class="bread-crumbs__link _chevron"
          :class="{'_disabled': currentNameLink === link.name}"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BreadCrumbs',

  data() {
    return {
      breadCrumbs: this.$router.history.current.matched,
      currentNameLink: this.$router.history.current.name,
    }
  },

  watch: {
    '$route'(newValue) {
      console.log('VAL', newValue)
      this.breadCrumbs = newValue.matched
      this.currentNameLink = newValue.name
    }
  },

  methods: {

  }

}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  display: flex;
  align-items: center;
  height: 53px;
  background: $gray-200;

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__home {
    position: relative;
    margin-right: 33px;
  }

  &__link {
    position: relative;
    font-size: 14px;
    margin-right: 33px;

    &._disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}

._chevron:not(:last-child) {
  &:before {
    content: "";
    position: absolute;
    right: -24px;
    top: 50%;
    width: 8px;
    height: 8px;
    border:  solid $gray-600;
    border-width: 1px 0 0 1px;
    transform: translate(-50%, -50%) rotate(135deg);
  }
}
</style>