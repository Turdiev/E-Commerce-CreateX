<template>
  <div
    class="UiInput"
    :class="size"
  >
    <label
      :for="id"
      class="UiInput__label"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      class="UiInput__element"
      :class="{
        '_success': success,
        '_error': error,
      }"
      :style="classList"
      @input="onInput"
      @change="onChange"
    >
    <label
      v-if="success || error"
      :for="id"
      class="UiInput__message"
      :class="{
        '_success-message': success,
        '_error-message': error
      }"
    >
      {{ message }}
    </label>
    <div class="UiInput__icon">
      <slot />
      <IconSuccess v-if="success" />
      <IconError v-if="error" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',

  props: {
    id: {
      type: [Number, String],
      default: ''
    },
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
    },
    label: {
      type: String,
      default: ''
    },
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
    },
    classList: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      success: false,
      error: false,
      message: ''
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

  &.small {
    height: 36px;
  }

  &.regular {
    height: 44px;
  }

  &.large {
    height: 52px;
  }

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

    &:focus {
      border: 1px solid $primary;
    }

    &:hover {
      border: 1px solid $primary;
      transition: $defaultTransition;
    }

    &._success {

    }

    &._error {
      border: 1px solid $red;
    }
  }

  &__label {
    position: absolute;
    top: -25px;
    left: 0;
  }

  &__message {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    &._success-message {
      color: $green;
    }

    &._error-message {
      color: $red;
    }
  }

  &__icon {
    position: absolute;
    top: 13px;
    right: 16px;
  }
}
</style>