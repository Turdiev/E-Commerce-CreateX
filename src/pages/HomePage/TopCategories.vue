<template>
  <div class="top-categories ">
    <div class="container">
      <div class="top-categories__wrapper container">
        <template
          v-for="(card, index) in i18nTopCategories"
        >
          <CardTopCategories
            :key="`${card.label}_${index}`"
            :image="card.image"
            :label="card.label"
            :path="card.path"
            class="top-categories__card"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CardTopCategories from "@/components/cards/CardTopCategories.vue";

export default {
  name: 'TopCategories',
  components: {
    CardTopCategories
  },

  computed: {
    i18nTopCategories() {
      return this.$t('topCategories')
    }
  }
}
</script>

<style lang="scss" scoped>
.top-categories {
  position: relative;
  background: $white;
  width: 100%;
  height: 436px;

  @include respond-to(tablet) {
    position: static;
    height: 100%;
    padding-top: 20px;
  }

  &__wrapper {
    position: absolute;
    top: -65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 3;

    @include respond-to(tablet) {
      position: static;
      padding-top: 20px;
    }
  }

  &__card {
    width: 31.71%;
    height: 436px;
  }
}
</style>