require('dotenv').config()
const OG_IMAGE =
  'https://cssc.utm.utoronto.ca/logos/cssc-logo-without-title.png'
export default {
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  serverMiddleware: ['~/middleware/seo.js'],
  head: {
    title: 'CSSC Website',
    script: [
      {src: 'https://plausible.io/js/plausible.js', async: true, defer: true},
      {
        src: 'https://script.opentracker.net/?site=cssc.utm.utoronto.ca',
        defer: true,
        type: 'text/javascript',
      },
      {
        type: 'text/javascript',
        src: 'http://cdn.matomo.cloud/utoronto.matomo.cloud/matomo.js',
        defer: true,
      },
    ],
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {hid: 'og:title', name: 'og:title', content: 'UTM CSSC'},
      {hid: 'og:image', name: 'og:image', content: OG_IMAGE},
      {hid: 'og:url', name: 'og:url', content: 'https://cssc.utm.utoronto.ca/'},
      {hid: 'og:type', name: 'og:type', content: 'website'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logos/cssc-logo-without-title.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.css', '@/assets/styles/github-markdown.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vue-typed-js.js', '@/plugins/persisted-state.client.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    '@nuxtjs/color-mode',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'xs',
        breakpoints: {
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1600,
        },
      },
    ],
    ['nuxt-matomo', {matomoUrl: '//utoronto.matomo.cloud', siteId: 1}],
  ],
  env: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    nestedProperties: ['resources.tags'],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  vuetify: {
    theme: {
      themes: {
        dark: {
          primary: '#00d097',
        },
        light: {
          primary: '#00d097',
        },
      },
    },
  },
  build: {},
}
