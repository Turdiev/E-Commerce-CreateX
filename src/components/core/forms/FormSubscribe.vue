<template>
  <div class="form-subscribe">
    <div class="container">
      <div class="form-subscribe__wrapper">
        <div class="form-subscribe__form form">
          <div class="form__title">
            <span>{{ i18nForm.title }}</span>
          </div>
          <p class="form__description">
            {{ i18nForm.description }}
          </p>
          <div class="form__params">
            <div
              v-for="(item, index) in i18nForm.params"
              :key="`${item.name}_${index}`"
              class="form__params-item"
              :class="{'_active': parameter?.name === item.name}"
              @click="parameter = item"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="form__subscribe">
            <UiInput
              id="subscribe"
              label="Email"
              size="large"
              :placeholder="i18nForm.placeholder"
              :class-list="{
                'border-top-right-radius': 0,
                'border-bottom-right-radius': 0
              }"
              class="form__input"
            />
            <UiButton
              :solid="true"
              size="large"
              class="form__button"
            >
              {{ i18nForm.button }}
            </UiButton>
          </div>
          <div class="form__agree">
            <UiButtonCheckbox
              :value="checkbox"
              :label="i18nForm.agree"
              name="checkbox"
              @change="onClickCheckbox()"
            />
          </div>
        </div>
        <div class="form-subscribe__image">
          <img
            src="@/assets/image/subscribe.png"
            alt="subscribe"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import UiButtonCheckbox from "@/components/ui/UiButton/UiButtonCheckbox.vue";

export default {
  name: 'FormSubscribe',
  components: {
    UiButtonCheckbox,
    UiButton,
    UiInput
  },

  data() {
    return {
      checkbox: false,
      parameter: null
    }
  },

  computed: {
    i18nForm() {
      return this.$t('formSubscribe')
    }
  },

  methods: {
    onClickCheckbox() {
      this.checkbox = !this.checkbox
    }
  }
}
</script>

<style lang="scss" scoped>
.form-subscribe {
  background: $gray-200;

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 65px 0;

    @include respond-to(mobile) {
      justify-content: center;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    z-index: 1;

    @include respond-to(mobile) {
      width: 100%;
    }
  }

  &__image {
    width: 461px;

    @include respond-to(mobile) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
      z-index: 0;
    }
  }
}

.form {

  &__title {
    margin-bottom: 24px;

    @include respond-to(mobile) {
      text-align: center;
    }

    & span {
      font-weight: 900;
      font-size: 46px;
      line-height: 130%;
      color: $gray-900;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: $gray-700;
    margin-bottom: 0;

    @include respond-to(mobile) {
      text-align: center;
    }
  }

  &__params {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-top: 32px;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 32px;
      border: 1px solid $gray-400;
      border-radius: 4px;
      transition: $defaultTransition;
      cursor: pointer;

      & span {
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        color: $gray-700;
      }

      &._active {
        background: $primary;

        & span {
          color: $white;
        }
      }
    }
  }

  &__subscribe {
    display: flex;
    align-items: center;
    margin-top: 66px;
    margin-bottom: 24px;

    @include respond-to(mobile) {
      margin-top: 45px;
    }
  }

  &__input {
    width: 291px;
  }

  &__button {
    width: 154px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &__agree {

  }
}
</style>