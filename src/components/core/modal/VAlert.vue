<template>
  <div
    class="alert"
    :class="{
      '_success': answer === 'success',
      '_error': answer === 'error',
    }"
  >
    <IconSuccess
      v-if="answer === 'success'"
      class="alert__icon"
    />
    <IconError
      v-if="answer === 'error'"
      class="alert__icon"
    />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import IconSuccess from "@/components/core/icons/IconSuccess.vue";
import IconError from "@/components/core/icons/IconError.vue";

export default {
  name: 'VAlert',
  components: {IconError, IconSuccess},

  props: {
    answer: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 0;
  left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 50%;
  height: 50px;
  background: white;
  border-radius: 4px;
  z-index: 99;

  &._success {
    background: $green;
  }

  &._error {
    background: $red;
  }

  & span {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: $white;
  }

  &__icon {
    display: block;
    width: 25px;
    height: 25px;
    stroke: white;
  }
}
</style>