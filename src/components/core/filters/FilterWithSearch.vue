<template>
  <div class="filter-with-search">
    <UiSelectFilter
      label="Clothes"
      @click="onOpenFilter"
    >
      <template #body>
        <div
          key="body"
          class="filter-with-search__wrapper"
        >
          <div
            v-if="categories.length > 8"
            class="filter-with-search__input-search"
          >
            <UiInput
              id="search"
              v-model="searchValue"
              type="text"
              size="regular"
              placeholder="Search type"
            >
              <slot>
                <IconSearch />
              </slot>
            </UiInput>
          </div>
          <UiScrollContainer
            :class-list="{
              'gap': '8px',
              'max-height': '174px',
            }"
          >
            <UiButtonCheckbox
              v-for="(category, index) in categories"
              :key="`${category.linkName}_${index}`"
              :value="listSelectedCategories.includes(category.linkName)"
              :label="category.linkName"
              :name="`checkbox-filter-${index}`"
              @change="selectedCategories(category.linkName)"
            />
          </UiScrollContainer>
        </div>
      </template>
    </UiSelectFilter>
  </div>
</template>

<script>
import UiSelectFilter from "@/components/ui/UiSelect/UiSelectFilter.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButtonCheckbox from "@/components/ui/UiButton/UiButtonCheckbox.vue";
import UiScrollContainer from "@/components/ui/UiScroll/UiScrollContainer.vue";

export default {
  name: 'FilterWithSearch',
  components: {
    UiScrollContainer,
    UiButtonCheckbox,
    UiInput,
    UiSelectFilter
  },

  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isOpenFilter: false,
      searchValue: '',
      listSelectedCategories: []
    }
  },

  methods: {
    onOpenFilter() {
      this.isOpenFilter = !this.isOpenFilter
    },

    selectedCategories(category) {
      const indexCurrentCategory = this.listSelectedCategories.indexOf(category)
      if(indexCurrentCategory !== -1) {
        this.listSelectedCategories.splice(indexCurrentCategory, 1)
      }
      else {
        this.listSelectedCategories.push(category)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-with-search {
  width: 255px; //TODO

  &__wrapper {
    height: 100%;
    margin-top: 18px;
  }

  &__input-search {
  }

  &__category-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    max-height: 174px;
    overflow-y: auto;
    margin-top: 18px;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: $gray-300;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray-500;
      border-radius: 8px;
    }
  }
}
</style>