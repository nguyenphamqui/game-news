const resolve = require('path').resolve
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Game News',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Game News Description' },
      ],
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true,
    },
  ],
  css: ['@/assets/css/global.scss'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  /**
* Root dir
*/
  rootDir: resolve(__dirname),

  /**]
   * Source directory
   */
  srcDir: resolve(__dirname, 'src'),
})