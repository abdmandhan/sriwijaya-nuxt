// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-auth-utils',
    'motion-v/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { 
        name: 'Rajdhani', 
        provider: 'google',
        weights: ['400', '500', '600', '700']
      },
      { 
        name: 'Inter', 
        provider: 'google',
        weights: ['400', '500', '600', '700']
      }
    ]
  },
  ui: {
    colorMode: false
  },
  vite: {
    server: {
      allowedHosts: ['nuc.test', '3030.abdmandhan.com']
    },
  }
})