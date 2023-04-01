<template>
  <div class="UiSelect">
    <label class="UiSelect__label">{{ label }}</label>
    <Multiselect
      :value="value"
      :options="options"
      :searchable="searchable"
      :show-labels="false"
      @input="onSelectChange"
    />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: 'UiSelect',
  components: {
    Multiselect
  },

  props: {
    value: {
      type: Array,
      default: null,
    },
    options: {
      type: Array,
      default: null,
    },
    placeholder: {
      type: String,
      default: null
    },
    searchable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
  },

  data () {
    return {
      // select: this.value
    }
  },

  methods: {
    onSelectChange(value) {
      this.$emit('change', value);
    }
  }
}
</script>

<style lang="scss">
.UiSelect {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;

  &__label {
    width: 32%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: $gray-800;
  }

  & .multiselect {
    display: block;
    position: relative;
    width: 90%;
    height: 44px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid $gray-400;
    outline: none;
    cursor: pointer;

    &:hover {
      border: 1px solid $primary;
    }

    &.multiselect--active {
      border-radius: 8px 8px 0 0;
      border: none;
      box-shadow:
          0 0 1px rgba(0, 0, 0, .04),
          0 2px 6px rgba(0, 0, 0, .04),
          0 16px 24px rgba(0, 0, 0, .06);

      & .multiselect__select:after {
        right: 3px;
        transform: translateY(-50%) rotate(-180deg);
      }

      &._changed {
        border: none;
      }
    }

    &._changed {
      border: 1px solid $primary;
    }

    &._changed ~ .multiselect-filter__label {
      color: $primary;
    }
  }

  & .multiselect__select {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 40px;
      height: 100%;
      background-size: 16px 16px;
      background-position: center;
      background-image: url('@/assets/image/icon/down-chevron.svg');
      background-repeat: no-repeat;
      transform: translateY(-50%) rotate(0deg);
      transition: transform .3s ease;
    }
  }

  & .multiselect__tags {
    height: 100%;
    padding: 12px 20px;
    box-sizing: border-box;

    & span {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $gray-800;
    }
  }

  & .multiselect__content-wrapper {
    position: absolute;
    z-index: 3;
    width: 100%;
    border-radius: 0 0 8px 8px;
    background-color: #fff;
    overflow: hidden;
    box-shadow:
        0 0 1px rgba(0, 0, 0, .04),
        0 2px 6px rgba(0, 0, 0, .04),
        0 16px 24px rgba(0, 0, 0, .06);
    border: 0;
    transition: none;
  }

  & .multiselect__content {
    width: 100%;
  }

  & .multiselect__element {
    margin: 0;
    color: $primary;

    &:before {
      display: none;
    }
  }

  & .multiselect__option {
    display: block;
    padding: 14px 21px 12px;
    color: #666;
    font-size: 14px;
    line-height: 1.56;
    background-color: #fff;

    &:hover {
      color: $gray-900;
      background-color: $gray-300;
    }

    &--selected,
    &--selected:hover {
      background-color: #fff;
      color: $primary;
    }
  }

}
</style>