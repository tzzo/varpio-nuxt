<template lang="pug">
  .index
    header.sub-page-header
      h1 Reseptit
    section.recipes.container
      .sub-page-intro
        p Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Kauniit ja riittoisat yrttimme toimivat mainiosti myös juhlapöydän koristeena. Vihannekset ovat terveellisen ruokavalion perusta, mutta tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme. Vinkkejä hyvistä resepteistä voi lähettää Facebook-sivuillemme tai sähköpostilla osoitteeseen 
          a(href="mailto:tuukka@varpio.fi") tuukka@varpio.fi
          | .
      .list-preview-wrap
        NuxtLink.list-preview(to="reseptit/bolognese")
          nuxt-img(width="375" height="261" src="/img/recipes/bolognese.jpg")
          span Bolognese
        NuxtLink.list-preview(to="reseptit/ceasarsalaatti")
          nuxt-img(width="375" height="261" src="/img/recipes/ceasarsalaatti.jpg")
          span Ceasarsalaatti
        NuxtLink.list-preview(to="reseptit/lehtikaalipesto")
          nuxt-img(width="375" height="261" src="/img/recipes/lehtikaalipesto.jpg")
          span Lehtikaalipesto
        NuxtLink.list-preview(to="reseptit/munavoi")
          nuxt-img(width="375" height="261" src="/img/recipes/munavoi.jpg")
          span Munavoi
        NuxtLink.list-preview(to="reseptit/nopea-marinara-kastike")
          nuxt-img(width="375" height="261" src="/img/recipes/marinara.jpg")
          span Nopea marinara kastike
        NuxtLink.list-preview(to="reseptit/persiljavinegrette")
          nuxt-img(width="375" height="261" src="/img/recipes/persiljavinegrette.jpg")
          span Persiljavinegrette
        NuxtLink.list-preview(to="reseptit/pinaatti-nokkoskeitto")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/pinaatti_nokkoskeitto.jpg")
          span Pinaatti-nokkoskeitto
        NuxtLink.list-preview(to="reseptit/punainen-gazpacho")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/gazpacho.jpg")
          span Punainen gazpacho
        NuxtLink.list-preview(to="reseptit/salsa")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/salsa.jpg")
          span Salsa
        NuxtLink.list-preview(to="reseptit/sienipasta")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/pasta.jpg")
          span Sienipasta
        NuxtLink.list-preview(to="reseptit/smoothie")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/smoothie.jpg")
          span Smoothie
        NuxtLink.list-preview(to="reseptit/tomaattikeitto")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/tomaattikeitto.jpg")
          span Tomaattikeitto
        NuxtLink.list-preview(to="reseptit/tsatziki")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/tsatziki.jpg")
          span Tsatziki
        NuxtLink.list-preview(to="reseptit/uunikala")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/uunikala.jpg")
          span Uunikala
        NuxtLink.list-preview(to="reseptit/varpion-caprese")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/caprese.jpg")
          span Varpion caprese
        NuxtLink.list-preview(to="reseptit/varpion-kanasalaatti")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/kanasalaatti.jpg")
          span Varpion kanasalaatti
        NuxtLink.list-preview(to="reseptit/vihrea-caprese")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/caprese.jpg")
          span Vihreä caprese
        NuxtLink.list-preview(to="reseptit/vihrea-harissatahna")
          nuxt-img(loading="lazy" width="375" height="261" src="/img/recipes/harissa.jpg")
          span Vihreä harissatahna
</template>

<script>
export default {
  name: 'index',
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped>
  header
    background-image: url('~assets/img/recipes_header.jpg')
    background-size: cover
    background-position: top
    height: 40vmin
    h1
      text-shadow: 1px 1px 3px black
</style>
