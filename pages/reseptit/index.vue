<template lang="pug">
  .index
    header.sub-page-header
      nuxt-img(src="/img/recipes_header.jpg")
      h1 Reseptit
    section.recipes.container
      .sub-page-intro
        p Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Kauniit ja riittoisat yrttimme toimivat mainiosti myös juhlapöydän koristeena. Vihannekset ovat terveellisen ruokavalion perusta, mutta tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme. Vinkkejä hyvistä resepteistä voi lähettää Facebook-sivuillemme tai sähköpostilla osoitteeseen 
          a(href="mailto:tuukka@varpio.fi") tuukka@varpio.fi
          | .
      .list-preview-wrap
        NuxtLink.list-preview(to="/reseptit/bolognese")
          nuxt-img(preset="recipe" width="375" height="261" src="/img/recipes/bolognese.jpg")
          span Bolognese
        NuxtLink.list-preview(to="/reseptit/caesarsalaatti")
          nuxt-img(preset="recipe" width="375" height="261" src="/img/recipes/ceasarsalaatti.jpg")
          span Ceasarsalaatti
        NuxtLink.list-preview(to="/reseptit/lehtikaalipesto")
          nuxt-img(preset="recipe" width="375" height="261" src="/img/recipes/lehtikaalipesto.jpg")
          span Lehtikaalipesto
        NuxtLink.list-preview(to="/reseptit/munavoi")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/munavoi.jpg")
          span Munavoi
        NuxtLink.list-preview(to="/reseptit/nopea-marinara-kastike")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/marinara.jpg")
          span Nopea marinara kastike
        NuxtLink.list-preview(to="/reseptit/persiljavinegrette")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/persiljavinegrette.jpg")
          span Persiljavinegrette
        NuxtLink.list-preview(to="/reseptit/pinaatti")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/pinaatti_nokkoskeitto.jpg")
          span Pinaattikeitto
        NuxtLink.list-preview(to="/reseptit/punainen-gazpacho")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/gazpacho.jpg")
          span Punainen gazpacho
        NuxtLink.list-preview(to="/reseptit/salsa")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/salsa.jpg")
          span Salsa
        NuxtLink.list-preview(to="/reseptit/sienipasta")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/pasta.jpg")
          span Sienipasta
        NuxtLink.list-preview(to="/reseptit/smoothie")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/smoothie.jpg")
          span Smoothie
        NuxtLink.list-preview(to="/reseptit/tomaattikeitto")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/tomaattikeitto.jpg")
          span Tomaattikeitto
        NuxtLink.list-preview(to="/reseptit/tsatziki")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/tsatziki.jpg")
          span Tsatziki
        NuxtLink.list-preview(to="/reseptit/uunikala")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/uunikala.jpg")
          span Uunikala
        NuxtLink.list-preview(to="/reseptit/varpion-caprese")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/caprese.jpg")
          span Varpion caprese
        NuxtLink.list-preview(to="/reseptit/varpion-kanasalaatti")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/kanasalaatti.jpg")
          span Varpion kanasalaatti
        NuxtLink.list-preview(to="/reseptit/vihrea-gazpacho")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/vihrea_gazpacho.jpg")
          span Vihreä caprese
        NuxtLink.list-preview(to="/reseptit/vihrea-harissatahna")
          nuxt-img(preset="recipe" width="375" height="261" loading="lazy" src="/img/recipes/harissa.jpg")
          span Vihreä harissatahna
</template>

<script>
import { setMetaTitle, setMetaDescription } from '~/plugins/metaTags'
export default {
  name: 'index',
  layout: 'default-nav-footer',
  computed: {
    pageTitle() {
      return 'Reseptit – Varpio Puutarha'
    },
    metaTitle() {
      return setMetaTitle(this.pageTitle)
    },
    metaDesc() {
      return setMetaDescription('Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme.')
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        ...this.metaTitle,
        ...this.metaDesc
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
  header
    position: relative
    height: 52vh
    img
      position: absolute
      top: 0
      left: 0
      right: 0
      width: 100%
      height: 100%
      max-height: 52vh
      object-fit: cover
    h1
      text-shadow: 1px 1px 3px #3c3c3c
      z-index: 10
</style>
