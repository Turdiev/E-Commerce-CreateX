<template>
  <div class="toolbar-catalog">
    <UiSelect
      :value="selectParam"
      :options="i18nToolbar.select.options"
      :label="i18nToolbar.select.label"
      class="toolbar-catalog__select"
      @change="onSelectChange"
    />
    <UiInputNumber
      id="input-number"
      v-model="itemsPerPage"
      :min-value="params?.visibleNumElements.min"
      :max-value="params?.visibleNumElements.max"
      :label="i18nToolbar.input.label"
      :text="i18nToolbar.input.text"
      class="toolbar-catalog__input-number"
    />
    <PaginationDefault
      :total-pages="totalPages"
      :current-page="currentPage"
      @pageChanged="changePage"
    />
  </div>
</template>

<script>
import UiSelect from "@/components/ui/UiSelect/UiSelect.vue";
import UiInputNumber from "@/components/ui/UiInput/UiInputNumber.vue";
import PaginationDefault from "@/components/core/paginations/PaginationDefault.vue";

export default {
  name: 'ToolbarCatalog',
  components: {
    PaginationDefault,
    UiInputNumber,
    UiSelect
  },

  props: {
    params: {
      type: Object,
      default: () => {}
    },
    totalPages: {
      type: Number,
      default: 3
    }
  },

  data () {
    return {
      selectParam: this.params.sorting,
      itemsPerPage: this.params.visibleNumElements.value,
      currentPage: this.params.pagination.currentPage,
    }
  },

  computed: {
    i18nToolbar() {
      return this.$t('filter.toolbar')
    },
  },

  methods: {
    onSelectChange(value) {
      this.selectParam = [value]
      this.$emit('change', {type: 'sorting', value: [value]})
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber
      this.$emit('change', {
        type: 'pagination',
        value: {
          currentPage: pageNumber
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar-catalog {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__select {
    width: 233px;
  }

  &__input-number {
    width: 255px;
  }
}
</style>