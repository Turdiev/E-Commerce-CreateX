<template>
  <div class="UiInputNumber">
    <label
      :for="id"
      class="UiInputNumber__label"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      type="number"
      :value="value"
      :min="minValue"
      :max="maxValue"
      class="UiInputNumber__element"
    >
    <label
      :for="id"
      class="UiInputNumber__text"
    >
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiInputNumber',

  props: {
    id: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    },
    minValue: {
      type: Number,
      required: true
    },
    maxValue: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
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
.UiInputNumber {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  &__element {
    width: 80px;
    height: 100%;
    background: transparent;
    border: 1px solid $gray-500;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $gray-900;
    padding: 12px 16px 12px 15px;

    &:hover {
      border: 1px solid $primary;
      transition: $defaultTransition;
    }
  }

  &__label {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: $gray-800;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $gray-700;
  }
}
</style>