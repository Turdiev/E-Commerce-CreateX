<template>
  <div class="sidebar-account">
    <div class="sidebar-account__header">
      <span>{{ user || user.userName }}</span>
      <span> {{ user || user.email }}</span>
    </div>
    <div class="sidebar-account__body">
      <router-link
        v-for="(item, index) in i18nAccount.nav"
        :key="`${item.path}_${index}`"
        :to="`${item.path}`"
        :class="{'_active-link': currentNameLink === item.name}"
        class="sidebar-account__link"
      >
        <template
          v-for="icon in icons"
        >
          <div
            v-if="icon.name === item.icon"
            :key="icon.name"
            class="sidebar-account__icon"
          >
            <component :is="icon" />
          </div>
        </template>
        <span>{{ item.name }}</span>
      </router-link>
      <div
        class="sidebar-account__link"
        @click="onLogout()"
      >
        <div
          class="sidebar-account__icon"
        >
          <IconLogOut />
        </div>
        <span>{{ i18nAccount.logOut }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { components } from '@/components/core/icons/icons'
export default {
  name: 'SidebarAccount',

  props: {
    user: {
      type: String,
      default: '',
      required: true
    }
  },

  data() {
    return {
      currentNameLink: this.$router.history.current.name
    }
  },

  computed: {
    i18nAccount() {
      return this.$t('account')
    },

    icons() {
      return components
    },
  },

  watch: {
    '$route'(newValue) {
      console.log('RO', newValue)
      this.currentNameLink = newValue.name
    }
  },

  methods: {
    onLogout() {
      this.$store.dispatch('auth/logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-account {
  width: 285px;
  height: 100%;
  background: $white;
  border: 1px solid $gray-300;
  box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
  border-radius: 4px;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
  }

  &__body {
    width: 100%;
  }

  &__link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 9.5px;
    height: 50px;
    transition: $defaultTransition;
    border-top: 1px solid $gray-300;
    padding: 18px;
    cursor: pointer;

    &:hover {
      background: $primary;

      & span {
        color: $white;
      }

      .sidebar-account__icon {
        color: $white;
      }
    }

    &._active-link {
      background: $primary;

      & span {
        color: $white;
      }

      .sidebar-account__icon {
        color: $white;
      }
    }

    & span {
      display: inline-block;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: $gray-800;
    }
  }

  &__icon {
    & svg {
      display: inline-block;
      width: 24px;
      height: 18px;
      fill: $gray-800;
    }
  }
}
</style>