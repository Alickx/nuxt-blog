export default defineNuxtConfig({
  css: ['@/assets/sytles/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  srcDir: 'src/'
})
