<template>
  <div
    class="UiColor"
  >
    <div
      class="UiColor__wrapper"
      :class="[
        {'_active': isActive},
        `_ellipse-${size}`
      ]"
      @click="$emit('click', color)"
    >
      <div
        class="UiColor__color-ellipse"
        :style="{background: color}"
      />
    </div>
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'UiColor',

  props: {
    size: {
      type: String, //small or medium
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.UiColor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid $gray-400;
    border-radius: 50%;

    &._ellipse-small {
      width: 24px;
      height: 24px;

      .UiColor__color-ellipse {
        width: 16px;
        height: 16px;
      }
    }

    &._ellipse-medium {
      width: 32px;
      height: 32px;

      .UiColor__color-ellipse {
        width: 24px;
        height: 24px;
      }
    }

    &._active {
      border: 1px solid #17696A;
    }
  }

  &__color-ellipse {
    border-radius: 50%;
  }

  & span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: $gray-700;
  }
}
</style>