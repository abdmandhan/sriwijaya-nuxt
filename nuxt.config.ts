// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Rajdhani', provider: 'google' },
      { name: 'Inter', provider: 'google' }
    ]
  },
  ui: {
    colorMode: false
  },
  vite: {
    server: {
      allowedHosts: ['nuc.test']
    }
  }
})