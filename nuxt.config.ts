const isDev = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-viewport'],
  viewport: {
    breakpoints: {
      desktop: 1921,
      desktop_sm: 1601,
      laptop_lg: 1441,
      laptop: 1281,
      tablet: 1001,
      mobile: 601,
    },
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },
  },
  googleFonts: {
    families: {
      Lato: true,
      inter: [400, 800],
      Oxanium: true,
    },
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  plugins: ['~/plugins/directives.js'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/variables.scss";',
        },
      },
    },
  },
  ssr: false,
  css: ['~/assets/styles/main.scss'],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  build: {
    transpile: ['primevue'],
  },
})
