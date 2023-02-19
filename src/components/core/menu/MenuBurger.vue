<template>
  <div
    class="burger"
    :class="{'_opened': isOpen}"
    @click="onOpen()"
  >
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  name: 'MenuBurger',

  props: {
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    onOpen() {
      this.isOpen = !this.isOpen
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  width: 39px;
  height: 46px;
  background-color: transparent;
  border: none;
  z-index: 3;

  & span {
    position: absolute;
    left: 50%;
    width: 26px;
    height: 3px;
    background: $gray-900;
    transform: translate3d(-13px, 0, 0);
    transition: all .6s linear;

    &:nth-child(1) {
      top: 13px;
    }

    &:nth-child(2) {
      top: 23px;
    }

    &:nth-child(3) {
      top: 33px;
    }
  }
}

._opened {
  top: -50px;

  & span {

    &:nth-child(1) {
      transform-origin: left bottom;
      transform: translate3d(-5px, -2.5px, 0) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translate3d(-5px, -3px, 0) rotate(-45deg);
      transform-origin: left top;
    }
  }
}
</style>