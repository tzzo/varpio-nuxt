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
      { hid: 'description', name: 'description', content: 'Varpio Puutarhan perustivat Pirkko ja Antti Varpio Virkkalaan vuonna 1970. Toiminta alkoi viljelemällä kesäkukkia ja joulutähtiä sekä tomaattia ja kurkkua.' },
      { hid: 'og:description', property: 'og:description', content: 'Varpio Puutarhan perustivat Pirkko ja Antti Varpio Virkkalaan vuonna 1970. Toiminta alkoi viljelemällä kesäkukkia ja joulutähtiä sekä tomaattia ja kurkkua.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:image:width', property: 'og:image:width', content: '' },
      { hid: 'og:image:height', property: 'og:image:height', content: '' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap', rel: 'stylesheet', crossorigin: 'true' },
      { rel: 'preload', href: '/canvastextserif-webfont.woff2', as: "font", type: 'font/woff2', crossorigin: 'true' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'preload', as: 'image', media: "(max-width: 700px)", href: "/img/header-700.jpg" }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/metaTags.js',
    { src: '~/plugins/gallery.js', ssr: false } 
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
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap'
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
          width: 450,
          height: 393,
          quality: 95
        }
      },
      recipe: {
        modifiers: {
          loading: "lazy"
        }
      },
      person: {
        modifiers: {
          width: 480,
          height: 480,
          quality: 95
        }
      },
      detail: {
        modifiers: {
          width: 602,
          height: 451,
          quality: 100
        }
      }
    }
  },
  gtm: {
    id: 'UA-128054030-1'
  },
  sitemap: {
    hostname: 'https://varpio.fi'
  }
}
  