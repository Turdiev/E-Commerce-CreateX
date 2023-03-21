<template>
  <VModal
    class="login"
    :width="'width: 486px'"
    @click="$emit('click')"
  >
    <template #header>
      <div class="login__header">
        <div class="login__title">
          <span>{{ i18nLogin.title }}</span>
        </div>
        <div class="login__description">
          <span>{{ i18nLogin.description }}</span>
        </div>
      </div>
    </template>
    <template #body>
      <div class="login__body">
        <form
          class="form"
        >
          <UiInput
            id="email"
            v-model="user.userName"
            type="email"
            :placeholder="i18nLogin.userNamePlaceholder"
            :label="i18nLogin.userNameLabel"
            size="regular"
            class="form__input"
          />
          <UiInput
            id="password"
            v-model="user.password"
            type="password"
            :placeholder="i18nLogin.passwordPlaceholder"
            :label="i18nLogin.passwordLabel"
            size="regular"
          />
          <div class="form__actions">
            <UiButtonCheckbox
              :value="checkboxKeepMe"
              :label="i18nLogin.keepMe"
              name="checkboxKeepMe"
              @change="onClickCheckbox"
            />
            <router-link to="/">
              {{ i18nLogin.forgot }}
            </router-link>
          </div>
          <UiButton
            :solid="true"
            :label="i18nLogin.button"
            size="regular"
            class="form__button"
            @click="onSubmit"
          />
          <div class="form__dontAcc">
            <span>{{ i18nLogin.noAcc }}</span>
            <span
              class="_another"
              @click="onOpenSignUpForm"
            >
              {{ i18nLogin.anotherForm }}
            </span>
          </div>
        </form>
      </div>
    </template>
    <template #footer>
      <div class="login__footer">
        <div class="login__footer-label">
          <span>{{ i18nSocials.label }}</span>
        </div>
        <div class="login__footer-socials">
          <router-link
            v-for="(social, index) in i18nSocials.socials"
            :key="`${social.name}_${index}`"
            :to="social.path"
            class="login__footer-social"
          >
            <div
              class="login__footer-social-icon"
              :class="`_${social.name}`"
            />
          </router-link>
        </div>
      </div>
    </template>
    <template #alert>
      <transition
        name="fade"
      >
        <VAlert
          v-if="isShowAlert"
          :answer="operationStatus"
          :message="alertMessage"
          class="login__alert"
        />
      </transition>
    </template>
  </VModal>
</template>

<script>
import VModal from "@/components/core/modal/VModal.vue";
import UiInput from "@/components/ui/UiInput/UiInput.vue";
import UiButtonCheckbox from "@/components/ui/UiButton/UiButtonCheckbox.vue";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import VAlert from "@/components/core/modal/VAlert.vue";

export default {
  name: 'LogIn',
  components: {
    VAlert,
    UiButton,
    UiButtonCheckbox,
    UiInput,
    VModal
  },

  data() {
    return {
      user: {
        userName: 'Admin',
        password: 'simpledimple4',
      },
      checkboxKeepMe: false,
      isPasswordShow: false,
      isShowAlert: false,
      operationStatus: '',
      alertMessage: ''
    }
  },

  computed: {
    i18nLogin() {
      return this.$t('auth.login')
    },
    i18nSocials() {
      return this.$t('auth.orSign')
    },
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('auth/loginUser', this.user)
          .then(res => {
            console.log('RES', res)
            if (res.token) {
              this.operationStatus = 'success'
              this.alertMessage = res.message
            }
            else {
              this.operationStatus = 'error'
              this.alertMessage = res.message
            }
            this.isShowAlert = true
          })
      setTimeout(() => {
        this.isShowAlert = false
        this.$store.dispatch('auth/changeStateModal', {
          form: 'signIn',
          value: false
        })
      }, 2000)
    },
    onOpenSignUpForm() {
      this.$store.dispatch('auth/changeStateModal', {
        form: 'signIn',
        value: false
      })
      this.$store.dispatch('auth/changeStateModal', {
        form: 'signUp',
        value: true
      })
    },
    onClickCheckbox() {
      this.checkboxKeepMe = !this.checkboxKeepMe
    }
  },
}
</script>

<style lang="scss" scoped>
.login {

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__body {

  }

  &__alert {
    //transform: translateY(-50px);
  }

  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    &-label {
      & span {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: $gray-700;
      }
    }

    &-socials {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    &-social {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: $gray-700;
      opacity: .50;
      border-radius: 4px;
      transition: $defaultTransition;

      &:hover {
        background-color: $primary;
      }

      &-icon {
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &._facebook {
          background-image: url("@/assets/image/icon/facebook.svg");
        }
        &._instagram {
          background-image: url("@/assets/image/icon/instagram.svg");

        }
        &._twitter {
          background-image: url("@/assets/image/icon/twitter.svg");

        }
        &._youtube {
          background-image: url("@/assets/image/icon/youtube.svg");

        }
        &._pinterest {
          background-image: url("@/assets/image/icon/pinterest.svg");
        }
      }
    }
  }

  &__title {
    margin-bottom: 24px;

    & span {
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
      color: $gray-900;
    }
  }

  &__description {
    margin-bottom: 53px;

    & span {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $gray-700;
    }
  }
}

.form {

  &__input {
    margin-bottom: 49px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 24px;

    & a {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $gray-700;

      &:hover {
        color: #17696A;
      }
    }
  }

  &__button {

  }

  &__dontAcc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    width: 100%;
    margin-top: 24px;

    & span {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $gray-800;
    }

    & ._another {
      color: $primary;
      cursor: pointer;
    }
  }
}

.fade-enter-active {
  transition: all 1s linear;
  animation: fade-in 1s;
}
.fade-leave-active {
  transition: all 1s linear;
  animation: fade-in 1s reverse;
}
@keyframes fade-in {
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
</style>