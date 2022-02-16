import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$6f7b from '/Users/konsta/projektit/varpio-nuxt/node_modules/@nuxt/image/dist/runtime/providers/static.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {
    "product": {
      "modifiers": {
        "width": 450,
        "height": 393
      }
    },
    "recipe": {
      "modifiers": {
        "loading": "lazy"
      }
    },
    "person": {
      "modifiers": {
        "width": 480,
        "height": 480,
        "quality": 90
      }
    },
    "detail": {
      "modifiers": {
        "width": 602,
        "height": 451,
        "quality": 90
      }
    }
  },
  "provider": "static",
  "domains": [],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$6f7b, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
