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
      ref="filterBody"
      class="UiSelectFilter__body"
    >
      <div
        ref="hiddenHeightBody"
      >
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
import TweenLite from 'gsap';

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
      isShow: false,
      hiddenHeightBody: 0,
      duration: 0.3
    }
  },

  methods: {
    onClick() {
      this.isShow = !this.isShow
      this.calculateHeight()
      if (this.isShow) {
        TweenLite.to(this.$refs.filterBody, this.duration, {height: this.hiddenHeightBody, opacity: 1});
      } else {
        TweenLite.to(this.$refs.filterBody, this.duration, {height: 0, opacity: 0});
      }
      this.$emit('click')
    },

    calculateHeight() {
      this.hiddenHeightBody = 0;

      [...this.$refs.hiddenHeightBody.children].forEach((child) => {
        let elementStyles = window.getComputedStyle(child),
            elementHeight =
            child.offsetHeight +
            parseInt(elementStyles.marginTop, 10) +
            parseInt(elementStyles.marginBottom, 10);

        this.hiddenHeightBody += elementHeight
      })
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
    height: 46px;
    padding-top: 20px;
  }

  &__body {
    height: 0;
    opacity: 0;
    overflow: hidden;
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
</style>