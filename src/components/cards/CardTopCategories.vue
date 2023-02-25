<template>
  <router-link
    :to="path"
    class="card-top-categories"
  >
    <div
      class="card-top-categories__image"
      :style="inlineStyleImg"
    />
    <div class="card-top-categories__label">
      <span>{{ label }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardTopCategories',

  props: {
    image: String,
    label: String,
    path: String
  },

  computed: {
    inlineStyleImg() {
      const src = require("@/assets/image/" + this.image)
      return  {
        'background-image': `url("${src}")`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position-x': 'center'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-top-categories {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;

  &__image {
    width: 100%;
    height: 390px;
    transition: $defaultTransition;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__label {
    & span {
      font-weight: 700;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      color: $gray-800;

    }
  }
}
</style>