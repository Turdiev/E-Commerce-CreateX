const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/style/shared/_variables.scss";
          @import "@/assets/style/shared/_mixins.scss";
        `,
      },
    },
  },
})
