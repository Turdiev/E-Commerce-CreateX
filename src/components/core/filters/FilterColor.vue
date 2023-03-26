<template>
  <div class="filter-color">
    <UiSelectFilter
      label="Colors"
      @click="onOpenFilter"
    >
      <template #body>
        <div
          v-if="isOpenFilter"
          class="filter-color__body"
        >
          <UiScrollContainer
            :class-list="{
              'gap': '8px',
              'max-height': '174px',
              'margin-top': '18px'
            }"
          >
            <div class="filter-color__wrapper">
              <UiColor
                v-for="(color, index) in colors"
                :key="`${color}_${index}`"
                :is-active="colorSelect === color"
                :color="color"
                :label="color"
                size="medium"
                @click="selectColorOption(color)"
              />
            </div>
          </UiScrollContainer>
        </div>
      </template>
    </UiSelectFilter>
  </div>
</template>

<script>
import UiSelectFilter from "@/components/ui/UiSelect/UiSelectFilter.vue";
import UiScrollContainer from "@/components/ui/UiScroll/UiScrollContainer.vue";
import UiColor from "@/components/ui/UiColor.vue";

export default {
  name: 'FilterColor',

  components: {
    UiColor,
    UiScrollContainer,
    UiSelectFilter
  },

  props: {
    colors: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isOpenFilter: false,
      colorSelect: null
    }
  },

  methods: {
    onOpenFilter() {
      this.isOpenFilter = !this.isOpenFilter
    },
    selectColorOption(color) {
      this.colorSelect = color
    },
  }
}
</script>

<style lang="scss" scoped>
.filter-color {
  width: 255px; //TODO

  &__body {
    width: 100%;
    height: 100%;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    //gap: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>