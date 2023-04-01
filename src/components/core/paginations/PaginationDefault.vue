<template>
  <div class="pagination">
    <ul>
      <transition
        name="fade"
      >
        <li
          v-if="currentPage > 1"
          @click="prevPage"
        >
          <IconArrow class="_reverse"/>
        </li>
      </transition>
      <li
        v-for="pageNumber in pages"
        :key="pageNumber"
        :class="{ active: pageNumber === currentPage }"
        @click="changePage(pageNumber)"
      >
        <span>{{ pageNumber }}</span>
      </li>
      <transition
        name="fade"
      >
        <li
          v-if="currentPage < totalPages"
          @click="nextPage"
        >
          <IconArrow />
        </li>
      </transition>
    </ul>
  </div>
</template>

<script>
import IconArrow from "@/components/core/icons/IconArrow.vue";

export default {
  name: 'PaginationDefault',
  components: {IconArrow},

  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    visiblePages: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pages() {
      const range = Math.floor(this.visiblePages / 2)
      let start = Math.max(1, this.currentPage - range)
      let end = Math.min(this.totalPages, this.currentPage + range)
      if (end - start < this.visiblePages) {
        if (start === 1) {
          end = Math.min(this.totalPages, this.visiblePages)
        } else {
          start = Math.max(1, this.totalPages - this.visiblePages + 1)
        }
      }
      const pagesArray = []
      for (let i = start; i <= end; i++) {
        pagesArray.push(i)
      }
      return pagesArray
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('pageChanged', pageNumber)
    },
    prevPage() {
      this.$emit('pageChanged', this.currentPage - 1)
    },
    nextPage() {
      this.$emit('pageChanged', this.currentPage + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  & ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    cursor: pointer;

    &.active {

      & span {
        color: $primary;
      }
    }

    & span {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      color: $gray-800;
    }
  }
}

._reverse {
  transform: rotate(-180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
