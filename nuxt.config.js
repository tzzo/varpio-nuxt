export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Varpio puutarha',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Varpio Puutarhan perustivat Pirkko ja Antti Varpio Virkkalaan vuonna 1970. Toiminta alkoi viljelemällä kesäkukkia ja joulutähtiä sekä tomaattia ja kurkkua.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap', rel: 'stylesheet' } 
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  styleResources: {
    scss: ['~/assets/css/variables.scss']
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],
  pageTransition: 'page',
  image: {
    presets: {
      product: {
        modifiers: {
          format: 'webp',
          width: 375,
          height: 262
        }
      },
      recipe: {
        modifiers: {
          format: 'webp',
          width: 375,
          height: 261
        }
      },
      person: {
        modifiers: {
          format: 'webp'
        }
      },
      detail: {
        modifiers: {
          format: 'webp',
          width: 602,
          height: 451,
          quality: 90
        }
      }
    }
  }
}
  