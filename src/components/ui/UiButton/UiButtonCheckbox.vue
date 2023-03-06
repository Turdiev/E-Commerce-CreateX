<template>
  <div
    class="checkbox"
    :class="{
      '_checked': value === true
    }"
  >
    <div
      class="checkbox__checkbox"
      :class="{
        '_disabled': disabled
      }"
      @click="!disabled && $emit('change', {[name]: !value})"
    >
      <transition name="fade">
        <IconCheckbox
          v-if="value === true"
          class="checkbox__mark"
        />
      </transition>
    </div>
    <span class="checkbox__label">{{ label }}</span>
  </div>
</template>

<script>

export default {
  name: 'UiButtonCheckbox',

  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  display: flex;
  align-items: center;

  &._checked {
    color: $primary;

    & .checkbox__checkbox {
      border-color: $primary;
      background-color: $primary;
    }
  }

  &__checkbox {
    box-sizing: border-box;
    position: relative;
    height: 16px;
    min-width: 16px;
    margin-right: 12px;
    border-radius: 2px;
    border: 1px solid $gray-500;
    cursor: pointer;

    &._disabled {
      background-color: $gray-500;
      cursor: default;
    }
  }

  &__mark {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    fill: #fff;
    transform: translate(-50%, -50%);
  }

  &__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: $gray-800;
  }
}
</style>
