<template>
  <div
    class="button-arrow"
    :class="{
      '_transparent': transparent
    }"
    @mouseenter="color = true"
    @mouseleave="color = false"
    @click="$emit('click')"
  >
    <IconArrow
      class="button-arrow__icon"
      :class="{'_reverse': reverse}"
      :color="color ? 'white' : 'black'"
    />
  </div>
</template>

<script>

export default {
  name: 'UiButtonArrow',

  props: {
    reverse: Boolean,
    transparent: Boolean
  },

  data() {
    return {
      color: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: $white;
  border-radius: 50%;
  transition: $defaultTransition;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &._transparent {
    background: transparent;

    &:hover {
      background: $primary;
      opacity: 1;
    }
  }

  &__icon {
    &._reverse {
      transform: rotate(-180deg);
    }
  }
}
</style>