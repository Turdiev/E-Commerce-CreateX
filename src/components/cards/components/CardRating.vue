<template>
  <div class="rating">
    <IconStarRating
      v-for="(rating, index) in [1, 2, 3, 4, 5]"
      :key="rating"
      :is-active="rating === ratings[index]"
    />
  </div>
</template>

<script>

export default {
  name: 'CardRating',

  props: {
    ratings: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  gap: 3px;
}
</style>