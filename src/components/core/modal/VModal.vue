<template>
  <div
    class="VModal"
  >
    <div
      class="VModal__overlay"
      @click="onCloseModal"
    />
    <div class="VModal__content">
      <div
        class="modal"
        :style="width"
      >
        <div class="modal__header">
          <slot name="header" />
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
        <div class="modal__divider" />
        <div class="modal__footer">
          <slot name="footer" />
        </div>
        <UiButtonClose
          class="modal__close"
          @click="onCloseModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UiButtonClose from "@/components/ui/UiButton/UiButtonClose.vue";

export default {
  name: 'VModal',
  components: {
    UiButtonClose
  },

  props: {
    width: {
      type: String,
      default: '',
      required: true
    }
  },

  methods: {
    onCloseModal() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.VModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($gray-900, 0.75);
  }
}

.modal {
  position: relative;
  width: 100%;
  background: $white;
  border: 1px solid $gray-300;
  box-shadow: 0 60px 80px -20px rgba(30, 33, 44, 0.16), 0px 26px 24px -10px rgba(30, 33, 44, 0.1), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 4px;
  padding: 48px 0;

  &__close {
    position: absolute;
    top: 28px;
    right: 28px;
  }

  &__header {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 48px;
  }

  &__body {
    padding: 0 48px;
  }

  &__footer {
    padding: 0 48px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: $gray-300;
    margin: 24px 0;
  }
}
</style>