<template>
  <div class="UiInputRange">
    <vue-slider
      v-model="value"
      :min="minPrice"
      :max="maxPrice"
      :tooltip="tooltip"
      :tooltip-formatter="tooltipFormatter"
      :clickable="false"
      @change="onChange"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
export default {
  name: 'UiInputRange',

  components: {
    VueSlider
  },

  props: {
    minPrice: {
      type: Number,
      required: true
    },
    maxPrice: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      required: true
    },
    maxValue: {
      type: Number,
      required: true
    },
    tooltip: {
      type: String,
      default: 'active',
      validator: v => {
        return [
          'none',
          'always',
          'hover',
          'focus',
          'active'
        ].includes(v);
      }
    },
    tooltipFormatter: {
      type: Function, // val => `$${val}`
      default: undefined
    }
  },

  data() {
    return {
      value: [this.minValue, this.maxValue],
    }
  },

  watch: {
    minValue() {
      this.value = [this.minValue, this.maxValue]
    },
    maxValue() {
      this.value = [this.minValue, this.maxValue]
    }
  },

  methods: {
    onChange() {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="scss">
.UiInputRange {
  position: relative;

  & .vue-slider-rail {
    background: $gray-400;
    border-radius: 8px;
  }

  & .vue-slider-process {
    background-color: $primary;
  }

  & .vue-slider-dot {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover .vue-slider-dot-handle {
      transform: scale(1.3);
    }
  }

  & .vue-slider-dot-handle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $primary;
    box-sizing: border-box;
    transition: transform .3s ease;
  }

  & .vue-slider-dot-tooltip {
    display: flex;
    justify-content: center;
    min-width: 48px;
    height: 22px;
    background: $gray-800;
    border-radius: 4px;
    padding: 0 4px;

    & span {
      display: inline-block;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: $white;
    }
  }
}
</style>