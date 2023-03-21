<template>
  <div
    class="button"
    :class="[{
      '_outline': outline,
      '_solid': solid,
    }, size]"
    @click="$emit('click')"
  >
    <div
      v-if="isIcon"
      class="button__icon"
    >
      <slot name="icon"/>
    </div>
    <div
      class="button__label"
    >
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    outline: Boolean,
    solid: Boolean,
    isIcon: Boolean,
    size: {
      type: String,
      default: 'regular',
      validator: v => {
        return [
          'large',
          'regular',
          'small'
        ].includes(v);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  color: $primary;
  cursor: pointer;

  &._outline {
    border: 1px solid $primary;
    transition: $defaultTransition;

    &:hover {
      color: $white;
      background: $primary;
    }
  }

  &._solid {
    color: $white;
    background: $primary;

    &:hover {
      color: $white;
      background: #145C5D;
    }
  }

  &.large {
    height: 52px;
  }

  &.regular {
    height: 44px;
    font-size: 14px;
    line-height: 44px;
  }

  &.small {
    height: 36px;

    font-size: 12px;
    line-height: 36px;
  }

  &__icon {
    height: 78%;
    margin-right: 8px;
    & svg {
      display: inline-block;
      height: 18px;
    }
  }

  &__label {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 0.5px;
  }
}
</style>