<template>
  <div class="filter-range">
    <UiSelectFilter
      label="Price"
      @click="onOpenFilter"
    >
      <template #body>
        <div
          class="filter-range__wrapper"
        >
          <div class="filter-range__input-range">
            <UiInputRange
              v-model="priceRange"
              :min-price="minPrice"
              :max-price="maxPrice"
              :min-value="minValue"
              :max-value="maxValue"
              tooltip="always"
              :tooltip-formatter="val => `$${val}`"
              @change="onRangeChange($event)"
            />
          </div>
          <div class="filter-range__inputs">
            <UiInput
              id="input1"
              v-model="priceRange[0]"
              type="number"
              size="small"
              @change="onInputChange($event, 0)"
            />
            <div class="divider" />
            <UiInput
              id="input2"
              v-model="priceRange[1]"
              type="number"
              size="small"
              @change="onInputChange($event, 1)"
            />
          </div>
        </div>
      </template>
    </UiSelectFilter>
  </div>
</template>

<script>
import UiSelectFilter from "@/components/ui/UiSelect/UiSelectFilter.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiInputRange from "@/components/ui/UiInput/UiInputRange.vue";

export default {
  components: {
    UiInputRange,
    UiInput,
    UiSelectFilter,
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
  },

  data() {
    return {
      isOpenFilter: false,
      priceRange: [this.minValue, this.maxValue],
      priceInputMin: this.minValue,
      priceInputMax: this.maxValue,
    }
  },

  watch: {
    minValue(val) {
      this.priceRange = [this.minValue, this.maxValue]
      this.priceInputMin = val
    },
    maxValue(val) {
      this.priceRange = [this.minValue, this.maxValue]
      this.priceInputMax = val
    },
  },

  methods: {
    onOpenFilter() {
      this.isOpenFilter = !this.isOpenFilter
    },
    onRangeChange(value) {
      this.$emit('change', value)
    },
    onInputChange(event, index) {
      let val = Number(event.target.value)
      if (index === 0) {
        if (val >= this.priceRange[1]) val = this.priceRange[1] - 1;
        if (val < this.minPrice) val = this.minPrice;
        this.priceRange = [val, this.priceRange[1]]
      } else {
        if (val <= this.priceRange[0]) val = this.priceRange[0] + 1;
        if (val > this.maxPrice) val = this.maxPrice;
        this.priceRange = [this.priceRange[0], val]
      }
      this.$emit('change', this.priceRange)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-range {
  position: relative;
  width: 100%;

  &__wrapper {
    width: 100%;
    height: 100%;
    margin-top: 52px;
  }

  &__input-range {
    width: 80%;
    margin: 0 auto;
  }

  &__inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
}

.divider {
  width: 10px;
  height: 2px;
  background: $gray-800;
  margin: 0 12px;
}
</style>