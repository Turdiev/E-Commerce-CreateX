<template>
  <div class="UiInput">
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      class="UiInput__element"
      @input="onInput"
      @change="onChange"
    >
    <div class="UiInput__icon">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    }
  },

  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },

    onChange(e) {
      this.$emit('change', e);
    },
  }
}
</script>

<style lang="scss" scoped>
.UiInput {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  &__element {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid $gray-500;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $gray-900;
    padding: 12px 16px 12px 15px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $gray-600;
    }

    &:hover {
      border: 1px solid $gray-700;
      transition: $defaultTransition;
    }
  }

  &__icon {
    position: absolute;
    top: 13px;
    right: 16px;
  }
}
</style>