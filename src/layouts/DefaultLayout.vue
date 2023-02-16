<template>
  <div>
    <TheHeader />
    <main>
      <router-view name="contentView" />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: 'DefaultLayout',

  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>

</style>