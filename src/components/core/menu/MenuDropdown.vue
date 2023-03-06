<template>
  <div class="dropdown">
    <div class="container">
      <div class="dropdown__wrapper">
        <div class="dropdown__categories">
          <div class="dropdown__categories-special-offers">
            <ul>
              <li
                v-for="(link, index) in i18nDropdown.specialOffers"
                :key="`${link.linkName}_${index}`"
              >
                <router-link :to="link.path">
                  {{ link.linkName }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="dropdown__categories-items">
            <ul
              v-for="(category, index) in i18nDropdown.categories"
              :key="`${category.title}_${index}`"
            >
              <span class="dropdown__categories-title">{{ category.title }}</span>
              <li
                v-for="(link, idx) in category.list"
                :key="`${link.linkName}_${idx}`"
                class="dropdown__categories-link"
              >
                <router-link :to="link.path">
                  {{ link.linkName }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="divider" />
        <div class="dropdown__banner">
          <UiButton
            :outline="true"
          >
            {{ i18nDropdown.banner.button }}
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/ui/UiButton/UiButton.vue";

export default {
  name: 'MenuDropdown',
  components: {UiButton},

  computed: {
    i18nDropdown() {
      return this.$t('menuDropdown')
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  height: 100%;
  background: $white;
  border: 1px solid #E5E8ED;
  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16), 0px 26px 24px -10px rgba(30, 33, 44, 0.1), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 0px 0px 4px 4px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }

  &__categories {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 15px;

    &-special-offers {

      & ul {
        display: flex;
        flex-direction: column;
        width: 180px;
        gap: 8px;

        & li {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: $gray-800;
        }
      }
    }

    &-items {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 71.5%;

      & ul {
        display: flex;
        flex-direction: column;
        width: 30%;
        gap: 8px;

        & li {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: $gray-800;
        }
      }
    }

    &-title {
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 1px;
      color: $gray-900;
    }

    &-link {

    }
  }

  &__banner {
    min-width: 285px;
    margin-left: 68px;
  }
}

.divider {
  width: 1px;
  height: 300px;
  background: $divider-gradient;
  transform: rotate(180deg);
}
</style>