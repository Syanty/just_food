export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'justfood',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-slick-carousel',
    '~/plugins/vue-tooltip'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //auth nuxt
    '@nuxtjs/auth-next'
  ],
  env: {
    api_KEY: process.env.API_KEY
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL
  },

  //authentication
  auth: {
    redirect: {
      login: '/',
      logout: '/account/signin',
      callback: '/',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/user/login/', method: 'post', propertyName: 'data.token' },
          user: false,
          logout: false
        },
      },

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
