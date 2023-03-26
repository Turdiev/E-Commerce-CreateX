<template>
  <div class="UiSelectFilter">
    <div class="UiSelectFilter__header">
      <span>{{ label }}</span>
      <div
        class="UiSelectFilter__wrapper"
        @click="onClick()"
      >
        <IconPlus
          v-if="!isShow"
          class="UiSelectFilter__icon"
        />
        <IconMinus
          v-else
          class="UiSelectFilter__icon"
        />
      </div>
    </div>
    <div
      class="UiSelectFilter__body"
      :class="{'_show-body': isShow}"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <slot name="body" />
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UiSelectFilter',

  props: {
    label: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isShow: false
    }
  },

  methods: {
    onClick() {
      this.isShow = !this.isShow
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.UiSelectFilter {
  width: 100%;
  height: 100%;
  background: transparent;
  border-bottom: 1px solid $gray-300;
  //border-bottom: 1px solid $red;
  padding-bottom: 20px;

  & span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: $gray-900;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 26px;
    padding-top: 20px;
  }

  &__body {
    height: 0;
    transition: height .4s ease-out;

    &._show-body {
      height: 100%;
      transition: height .3s ease-out;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__icon {
    display: inline-block;
    cursor: pointer;
    stroke: $primary;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  height: 0;
  opacity: 0;
  transform: translateY(-20px);
}
</style>