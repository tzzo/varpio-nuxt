import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b258cd8 = () => interopDefault(import('../pages/reseptit/index.vue' /* webpackChunkName: "pages/reseptit/index" */))
const _ea7460b4 = () => interopDefault(import('../pages/tuotteet/index.vue' /* webpackChunkName: "pages/tuotteet/index" */))
const _d2b09bb0 = () => interopDefault(import('../pages/tutustu/index.vue' /* webpackChunkName: "pages/tutustu/index" */))
const _4491b362 = () => interopDefault(import('../pages/reseptit/bolognese.vue' /* webpackChunkName: "pages/reseptit/bolognese" */))
const _c09cc5d4 = () => interopDefault(import('../pages/reseptit/caesarsalaatti.vue' /* webpackChunkName: "pages/reseptit/caesarsalaatti" */))
const _71598f17 = () => interopDefault(import('../pages/reseptit/lehtikaalipesto.vue' /* webpackChunkName: "pages/reseptit/lehtikaalipesto" */))
const _15090a57 = () => interopDefault(import('../pages/reseptit/munavoi.vue' /* webpackChunkName: "pages/reseptit/munavoi" */))
const _212b641c = () => interopDefault(import('../pages/reseptit/nopea-marinara-kastike.vue' /* webpackChunkName: "pages/reseptit/nopea-marinara-kastike" */))
const _70a2d49a = () => interopDefault(import('../pages/reseptit/persiljavinegrette.vue' /* webpackChunkName: "pages/reseptit/persiljavinegrette" */))
const _35c0377c = () => interopDefault(import('../pages/reseptit/pinaattikeitto.vue' /* webpackChunkName: "pages/reseptit/pinaattikeitto" */))
const _1d2b483c = () => interopDefault(import('../pages/reseptit/punainen-gazpacho.vue' /* webpackChunkName: "pages/reseptit/punainen-gazpacho" */))
const _0c7bde6e = () => interopDefault(import('../pages/reseptit/salsa.vue' /* webpackChunkName: "pages/reseptit/salsa" */))
const _796a7533 = () => interopDefault(import('../pages/reseptit/sienipasta.vue' /* webpackChunkName: "pages/reseptit/sienipasta" */))
const _38072510 = () => interopDefault(import('../pages/reseptit/smoothie.vue' /* webpackChunkName: "pages/reseptit/smoothie" */))
const _0c5e7a36 = () => interopDefault(import('../pages/reseptit/tomaattikeitto.vue' /* webpackChunkName: "pages/reseptit/tomaattikeitto" */))
const _cba8d326 = () => interopDefault(import('../pages/reseptit/tsatziki.vue' /* webpackChunkName: "pages/reseptit/tsatziki" */))
const _18513c54 = () => interopDefault(import('../pages/reseptit/uunikala.vue' /* webpackChunkName: "pages/reseptit/uunikala" */))
const _c543366a = () => interopDefault(import('../pages/reseptit/varpion-caprese.vue' /* webpackChunkName: "pages/reseptit/varpion-caprese" */))
const _0ee69c30 = () => interopDefault(import('../pages/reseptit/varpion-kanasalaatti.vue' /* webpackChunkName: "pages/reseptit/varpion-kanasalaatti" */))
const _1b4477ef = () => interopDefault(import('../pages/reseptit/vihrea-gazpacho.vue' /* webpackChunkName: "pages/reseptit/vihrea-gazpacho" */))
const _dc95725a = () => interopDefault(import('../pages/reseptit/vihrea-harissatahna.vue' /* webpackChunkName: "pages/reseptit/vihrea-harissatahna" */))
const _3bf13bc4 = () => interopDefault(import('../pages/tuotteet/basilika.vue' /* webpackChunkName: "pages/tuotteet/basilika" */))
const _10a0eff2 = () => interopDefault(import('../pages/tuotteet/frisee.vue' /* webpackChunkName: "pages/tuotteet/frisee" */))
const _0355d109 = () => interopDefault(import('../pages/tuotteet/jaasalaatti.vue' /* webpackChunkName: "pages/tuotteet/jaasalaatti" */))
const _4cba574c = () => interopDefault(import('../pages/tuotteet/korianteri.vue' /* webpackChunkName: "pages/tuotteet/korianteri" */))
const _c4968fae = () => interopDefault(import('../pages/tuotteet/kurkku.vue' /* webpackChunkName: "pages/tuotteet/kurkku" */))
const _484eff20 = () => interopDefault(import('../pages/tuotteet/lehtikaali.vue' /* webpackChunkName: "pages/tuotteet/lehtikaali" */))
const _3a53ca4c = () => interopDefault(import('../pages/tuotteet/lehtikaali-pussissa.vue' /* webpackChunkName: "pages/tuotteet/lehtikaali-pussissa" */))
const _1bcce428 = () => interopDefault(import('../pages/tuotteet/lehtipersilja.vue' /* webpackChunkName: "pages/tuotteet/lehtipersilja" */))
const _3dbbeaf5 = () => interopDefault(import('../pages/tuotteet/makoisa-lehtisalaatti.vue' /* webpackChunkName: "pages/tuotteet/makoisa-lehtisalaatti" */))
const _32c2dee9 = () => interopDefault(import('../pages/tuotteet/makoisa-roomatar.vue' /* webpackChunkName: "pages/tuotteet/makoisa-roomatar" */))
const _6f726584 = () => interopDefault(import('../pages/tuotteet/meheva-lehtisalaatti.vue' /* webpackChunkName: "pages/tuotteet/meheva-lehtisalaatti" */))
const _f962d7a0 = () => interopDefault(import('../pages/tuotteet/meirami.vue' /* webpackChunkName: "pages/tuotteet/meirami" */))
const _41fd3482 = () => interopDefault(import('../pages/tuotteet/minttu.vue' /* webpackChunkName: "pages/tuotteet/minttu" */))
const _31c25cb4 = () => interopDefault(import('../pages/tuotteet/mizuna.vue' /* webpackChunkName: "pages/tuotteet/mizuna" */))
const _393bd610 = () => interopDefault(import('../pages/tuotteet/mojova-lehtisalaatti.vue' /* webpackChunkName: "pages/tuotteet/mojova-lehtisalaatti" */))
const _4f1d7451 = () => interopDefault(import('../pages/tuotteet/oregano.vue' /* webpackChunkName: "pages/tuotteet/oregano" */))
const _36f8496c = () => interopDefault(import('../pages/tuotteet/persilja.vue' /* webpackChunkName: "pages/tuotteet/persilja" */))
const _7381b1a0 = () => interopDefault(import('../pages/tuotteet/pinaatti.vue' /* webpackChunkName: "pages/tuotteet/pinaatti" */))
const _137005df = () => interopDefault(import('../pages/tuotteet/pinaatti-rasia.vue' /* webpackChunkName: "pages/tuotteet/pinaatti-rasia" */))
const _4eda9d23 = () => interopDefault(import('../pages/tuotteet/punainen-basilika.vue' /* webpackChunkName: "pages/tuotteet/punainen-basilika" */))
const _9a3dc5de = () => interopDefault(import('../pages/tuotteet/punainen-frisee.vue' /* webpackChunkName: "pages/tuotteet/punainen-frisee" */))
const _2473cfc6 = () => interopDefault(import('../pages/tuotteet/punainen-meheva-lehtisalaatti.vue' /* webpackChunkName: "pages/tuotteet/punainen-meheva-lehtisalaatti" */))
const _1e0d6fc3 = () => interopDefault(import('../pages/tuotteet/rakuuna.vue' /* webpackChunkName: "pages/tuotteet/rakuuna" */))
const _13b39dfc = () => interopDefault(import('../pages/tuotteet/ravakka-tammenlehti.vue' /* webpackChunkName: "pages/tuotteet/ravakka-tammenlehti" */))
const _196bf482 = () => interopDefault(import('../pages/tuotteet/romaine-ruukussa.vue' /* webpackChunkName: "pages/tuotteet/romaine-ruukussa" */))
const _7c39a3ff = () => interopDefault(import('../pages/tuotteet/rosmariini.vue' /* webpackChunkName: "pages/tuotteet/rosmariini" */))
const _09b91e80 = () => interopDefault(import('../pages/tuotteet/rucola.vue' /* webpackChunkName: "pages/tuotteet/rucola" */))
const _3fb4dd82 = () => interopDefault(import('../pages/tuotteet/ruohosipuli.vue' /* webpackChunkName: "pages/tuotteet/ruohosipuli" */))
const _3f5bd425 = () => interopDefault(import('../pages/tuotteet/salaattimix.vue' /* webpackChunkName: "pages/tuotteet/salaattimix" */))
const _d09b31d8 = () => interopDefault(import('../pages/tuotteet/salaattimix-rasia.vue' /* webpackChunkName: "pages/tuotteet/salaattimix-rasia" */))
const _7cc18c4c = () => interopDefault(import('../pages/tuotteet/salvia.vue' /* webpackChunkName: "pages/tuotteet/salvia" */))
const _08980b99 = () => interopDefault(import('../pages/tuotteet/sitruunamelissa.vue' /* webpackChunkName: "pages/tuotteet/sitruunamelissa" */))
const _3a8d484d = () => interopDefault(import('../pages/tuotteet/thai-basilika.vue' /* webpackChunkName: "pages/tuotteet/thai-basilika" */))
const _d6bdcbb0 = () => interopDefault(import('../pages/tuotteet/tilli.vue' /* webpackChunkName: "pages/tuotteet/tilli" */))
const _78bd90ff = () => interopDefault(import('../pages/tuotteet/timjami.vue' /* webpackChunkName: "pages/tuotteet/timjami" */))
const _00a6448e = () => interopDefault(import('../pages/tuotteet/tomaatti-irto.vue' /* webpackChunkName: "pages/tuotteet/tomaatti-irto" */))
const _2820e482 = () => interopDefault(import('../pages/tuotteet/tomaatti-rasia.vue' /* webpackChunkName: "pages/tuotteet/tomaatti-rasia" */))
const _f47e0f82 = () => interopDefault(import('../pages/tuotteet/tumma-frisee.vue' /* webpackChunkName: "pages/tuotteet/tumma-frisee" */))
const _77496360 = () => interopDefault(import('../pages/tuotteet/vesikrassi.vue' /* webpackChunkName: "pages/tuotteet/vesikrassi" */))
const _09b9313c = () => interopDefault(import('../pages/tuotteet/viinisuolaheina.vue' /* webpackChunkName: "pages/tuotteet/viinisuolaheina" */))
const _1c2cbe76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/reseptit",
    component: _6b258cd8,
    name: "reseptit"
  }, {
    path: "/tuotteet",
    component: _ea7460b4,
    name: "tuotteet"
  }, {
    path: "/tutustu",
    component: _d2b09bb0,
    name: "tutustu"
  }, {
    path: "/reseptit/bolognese",
    component: _4491b362,
    name: "reseptit-bolognese"
  }, {
    path: "/reseptit/caesarsalaatti",
    component: _c09cc5d4,
    name: "reseptit-caesarsalaatti"
  }, {
    path: "/reseptit/lehtikaalipesto",
    component: _71598f17,
    name: "reseptit-lehtikaalipesto"
  }, {
    path: "/reseptit/munavoi",
    component: _15090a57,
    name: "reseptit-munavoi"
  }, {
    path: "/reseptit/nopea-marinara-kastike",
    component: _212b641c,
    name: "reseptit-nopea-marinara-kastike"
  }, {
    path: "/reseptit/persiljavinegrette",
    component: _70a2d49a,
    name: "reseptit-persiljavinegrette"
  }, {
    path: "/reseptit/pinaattikeitto",
    component: _35c0377c,
    name: "reseptit-pinaattikeitto"
  }, {
    path: "/reseptit/punainen-gazpacho",
    component: _1d2b483c,
    name: "reseptit-punainen-gazpacho"
  }, {
    path: "/reseptit/salsa",
    component: _0c7bde6e,
    name: "reseptit-salsa"
  }, {
    path: "/reseptit/sienipasta",
    component: _796a7533,
    name: "reseptit-sienipasta"
  }, {
    path: "/reseptit/smoothie",
    component: _38072510,
    name: "reseptit-smoothie"
  }, {
    path: "/reseptit/tomaattikeitto",
    component: _0c5e7a36,
    name: "reseptit-tomaattikeitto"
  }, {
    path: "/reseptit/tsatziki",
    component: _cba8d326,
    name: "reseptit-tsatziki"
  }, {
    path: "/reseptit/uunikala",
    component: _18513c54,
    name: "reseptit-uunikala"
  }, {
    path: "/reseptit/varpion-caprese",
    component: _c543366a,
    name: "reseptit-varpion-caprese"
  }, {
    path: "/reseptit/varpion-kanasalaatti",
    component: _0ee69c30,
    name: "reseptit-varpion-kanasalaatti"
  }, {
    path: "/reseptit/vihrea-gazpacho",
    component: _1b4477ef,
    name: "reseptit-vihrea-gazpacho"
  }, {
    path: "/reseptit/vihrea-harissatahna",
    component: _dc95725a,
    name: "reseptit-vihrea-harissatahna"
  }, {
    path: "/tuotteet/basilika",
    component: _3bf13bc4,
    name: "tuotteet-basilika"
  }, {
    path: "/tuotteet/frisee",
    component: _10a0eff2,
    name: "tuotteet-frisee"
  }, {
    path: "/tuotteet/jaasalaatti",
    component: _0355d109,
    name: "tuotteet-jaasalaatti"
  }, {
    path: "/tuotteet/korianteri",
    component: _4cba574c,
    name: "tuotteet-korianteri"
  }, {
    path: "/tuotteet/kurkku",
    component: _c4968fae,
    name: "tuotteet-kurkku"
  }, {
    path: "/tuotteet/lehtikaali",
    component: _484eff20,
    name: "tuotteet-lehtikaali"
  }, {
    path: "/tuotteet/lehtikaali-pussissa",
    component: _3a53ca4c,
    name: "tuotteet-lehtikaali-pussissa"
  }, {
    path: "/tuotteet/lehtipersilja",
    component: _1bcce428,
    name: "tuotteet-lehtipersilja"
  }, {
    path: "/tuotteet/makoisa-lehtisalaatti",
    component: _3dbbeaf5,
    name: "tuotteet-makoisa-lehtisalaatti"
  }, {
    path: "/tuotteet/makoisa-roomatar",
    component: _32c2dee9,
    name: "tuotteet-makoisa-roomatar"
  }, {
    path: "/tuotteet/meheva-lehtisalaatti",
    component: _6f726584,
    name: "tuotteet-meheva-lehtisalaatti"
  }, {
    path: "/tuotteet/meirami",
    component: _f962d7a0,
    name: "tuotteet-meirami"
  }, {
    path: "/tuotteet/minttu",
    component: _41fd3482,
    name: "tuotteet-minttu"
  }, {
    path: "/tuotteet/mizuna",
    component: _31c25cb4,
    name: "tuotteet-mizuna"
  }, {
    path: "/tuotteet/mojova-lehtisalaatti",
    component: _393bd610,
    name: "tuotteet-mojova-lehtisalaatti"
  }, {
    path: "/tuotteet/oregano",
    component: _4f1d7451,
    name: "tuotteet-oregano"
  }, {
    path: "/tuotteet/persilja",
    component: _36f8496c,
    name: "tuotteet-persilja"
  }, {
    path: "/tuotteet/pinaatti",
    component: _7381b1a0,
    name: "tuotteet-pinaatti"
  }, {
    path: "/tuotteet/pinaatti-rasia",
    component: _137005df,
    name: "tuotteet-pinaatti-rasia"
  }, {
    path: "/tuotteet/punainen-basilika",
    component: _4eda9d23,
    name: "tuotteet-punainen-basilika"
  }, {
    path: "/tuotteet/punainen-frisee",
    component: _9a3dc5de,
    name: "tuotteet-punainen-frisee"
  }, {
    path: "/tuotteet/punainen-meheva-lehtisalaatti",
    component: _2473cfc6,
    name: "tuotteet-punainen-meheva-lehtisalaatti"
  }, {
    path: "/tuotteet/rakuuna",
    component: _1e0d6fc3,
    name: "tuotteet-rakuuna"
  }, {
    path: "/tuotteet/ravakka-tammenlehti",
    component: _13b39dfc,
    name: "tuotteet-ravakka-tammenlehti"
  }, {
    path: "/tuotteet/romaine-ruukussa",
    component: _196bf482,
    name: "tuotteet-romaine-ruukussa"
  }, {
    path: "/tuotteet/rosmariini",
    component: _7c39a3ff,
    name: "tuotteet-rosmariini"
  }, {
    path: "/tuotteet/rucola",
    component: _09b91e80,
    name: "tuotteet-rucola"
  }, {
    path: "/tuotteet/ruohosipuli",
    component: _3fb4dd82,
    name: "tuotteet-ruohosipuli"
  }, {
    path: "/tuotteet/salaattimix",
    component: _3f5bd425,
    name: "tuotteet-salaattimix"
  }, {
    path: "/tuotteet/salaattimix-rasia",
    component: _d09b31d8,
    name: "tuotteet-salaattimix-rasia"
  }, {
    path: "/tuotteet/salvia",
    component: _7cc18c4c,
    name: "tuotteet-salvia"
  }, {
    path: "/tuotteet/sitruunamelissa",
    component: _08980b99,
    name: "tuotteet-sitruunamelissa"
  }, {
    path: "/tuotteet/thai-basilika",
    component: _3a8d484d,
    name: "tuotteet-thai-basilika"
  }, {
    path: "/tuotteet/tilli",
    component: _d6bdcbb0,
    name: "tuotteet-tilli"
  }, {
    path: "/tuotteet/timjami",
    component: _78bd90ff,
    name: "tuotteet-timjami"
  }, {
    path: "/tuotteet/tomaatti-irto",
    component: _00a6448e,
    name: "tuotteet-tomaatti-irto"
  }, {
    path: "/tuotteet/tomaatti-rasia",
    component: _2820e482,
    name: "tuotteet-tomaatti-rasia"
  }, {
    path: "/tuotteet/tumma-frisee",
    component: _f47e0f82,
    name: "tuotteet-tumma-frisee"
  }, {
    path: "/tuotteet/vesikrassi",
    component: _77496360,
    name: "tuotteet-vesikrassi"
  }, {
    path: "/tuotteet/viinisuolaheina",
    component: _09b9313c,
    name: "tuotteet-viinisuolaheina"
  }, {
    path: "/",
    component: _1c2cbe76,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
