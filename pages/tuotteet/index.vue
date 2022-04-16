<template lang="pug">
  .index
    header.sub-page-header
      nuxt-img(src="/img/garden.jpg")
      h1 Tuotteet
    section.products.container
      .sub-page-intro
        p Varpion tuoteperheeseen kuuluu yli neljäkymmentä raikasta, kasvihuoneessa puhtaasti kasvatettua tuotetta. Kasvisten lajikevalinnoissa panostamme aina ensisijaisesti makuun ja pyrimme aktiivisesti löytämään parempia lajikkeita viljeltäväksi. 
        p Teemme jatkuvaa kehitystyötä valikoimamme laajentamiseksi entisestään. Vieraillessasi Orimattilan puutarhan myymälässä voit löytää myynnistä tuotteita, joita ei vielä kaupoista saa!

      .list-preview-wrap
        NuxtLink.list-preview(to="/tuotteet/basilika")
          nuxt-img(preset="product" width="375" height="262" src="/img/products/basilika.jpg")
          span Basilika

        NuxtLink.list-preview(to="/tuotteet/frisee")
          nuxt-img(preset="product" width="375" height="262" src="/img/products/frisee.jpg")
          span Frisee

        NuxtLink.list-preview(to="/tuotteet/jaasalaatti")
          nuxt-img(preset="product" width="375" height="262" src="/img/products/jaasalaatti.jpg")
          span Jääsalaatti
          
        NuxtLink.list-preview(to="/tuotteet/korianteri")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/korianteri.jpg")
          span Korianteri
        
        NuxtLink.list-preview(to="/tuotteet/kurkku")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/kurkku.jpg")
          span Kurkku

        NuxtLink.list-preview(to="/tuotteet/lehtikaali-pussissa")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/lehtikaali-pussissa.jpg")
          span Lehtikaali pussissa

        NuxtLink.list-preview(to="/tuotteet/lehtikaali")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/lehtikaali.jpg")
          span Lehtikaali

        NuxtLink.list-preview(to="/tuotteet/lehtipersilja")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/lehtipersilja.jpg")
          span Lehtipersilja

        NuxtLink.list-preview(to="/tuotteet/makoisa-roomatar")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/makoisa-roomatar.jpg")
          span Makoisa roomatar

        NuxtLink.list-preview(to="/tuotteet/meheva-lehtisalaatti")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/meheva-lehtisalaatti.jpg")
          span Mehevä lehtisalaatti

        NuxtLink.list-preview(to="/tuotteet/meirami")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/meirami.jpg")
          span Meirami

        NuxtLink.list-preview(to="/tuotteet/minttu")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/minttu.jpg")
          span Minttu

        NuxtLink.list-preview(to="/tuotteet/mizuna")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/mizuna.jpg")
          span Mizuna

        NuxtLink.list-preview(to="/tuotteet/mojova-lehtisalaatti")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/mojova-lehtisalaatti.jpg")
          span Mojova lehtisalaatti

        NuxtLink.list-preview(to="/tuotteet/oregano")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/oregano.jpg")
          span Oregano

        NuxtLink.list-preview(to="/tuotteet/persilja")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/persilja.jpg")
          span Persilja

        NuxtLink.list-preview(to="/tuotteet/pinaatti-rasia")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/pinaatti-rasia.jpg")
          span Pinaatti rasia

        NuxtLink.list-preview(to="/tuotteet/pinaatti")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/pinaatti.jpg")
          span Pinaatti
        
        NuxtLink.list-preview(to="/tuotteet/punainen-basilika")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/punainen-basilika.jpg")
          span Punainen basilika

        NuxtLink.list-preview(to="/tuotteet/punainen-frisee")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/punainen-frisee.jpg")
          span Punainen frisee

        NuxtLink.list-preview(to="/tuotteet/punainen-meheva-lehtisalaatti")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/punainen-meheva-lehtisalaatti.jpg")
          span Punainen meheva lehtisalaatti

        NuxtLink.list-preview(to="/tuotteet/rakuuna")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/rakuuna.jpg")
          span Rakuuna

        NuxtLink.list-preview(to="/tuotteet/ravakka-tammenlehti")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/ravakka-tammenlehti.jpg")
          span Ravakka tammenlehti

        NuxtLink.list-preview(to="/tuotteet/romaine-ruukussa")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/romaine-ruukussa.jpg")
          span Romaine ruukussa

        NuxtLink.list-preview(to="/tuotteet/rosmariini")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/rosmariini.jpg")
          span Rosmariini

        NuxtLink.list-preview(to="/tuotteet/rucola")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/rucola.jpg")
          span Rucola

        NuxtLink.list-preview(to="/tuotteet/ruohosipuli")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/ruohosipuli.jpg")
          span Ruohosipuli

        NuxtLink.list-preview(to="/tuotteet/salaattimix-rasia")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/salaattimix-rasia.jpg")
          span Salaattimix rasia

        NuxtLink.list-preview(to="/tuotteet/salvia")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/salvia.jpg")
          span Salvia

        NuxtLink.list-preview(to="/tuotteet/sitruunamelissa")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/sitruunamelissa.jpg")
          span Sitruunamelissa

        NuxtLink.list-preview(to="/tuotteet/thai-basilika")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/thai-basilika.jpg")
          span Thai basilika

        NuxtLink.list-preview(to="/tuotteet/tilli")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/tilli.jpg")
          span Tilli

        NuxtLink.list-preview(to="/tuotteet/timjami")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/timjami.jpg")
          span Timjami

        NuxtLink.list-preview(to="/tuotteet/tomaatti-irto")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/tomaatti-irto.jpg")
          span Tomaatti

        NuxtLink.list-preview(to="/tuotteet/tomaatti-rasia")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/tomaatti-rasia.jpg")
          span Tomaatti rasia

        NuxtLink.list-preview(to="/tuotteet/tumma-frisee")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/tumma-frisee.jpg")
          span Tumma frisee
          
        NuxtLink.list-preview(to="/tuotteet/vesikrassi")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/vesikrassi.jpg")
          span Vesikrassi

        NuxtLink.list-preview(to="/tuotteet/viinisuolaheina")
          nuxt-img(preset="product" width="375" height="262" loading="lazy" src="/img/products/viinisuolaheina.jpg")
          span Viinisuolaheina

</template>

<script>
import { setMetaTitle, setMetaDescription } from '~/plugins/metaTags'
export default {
  name: 'index',
  layout: 'default-nav-footer',
  computed: {
    pageTitle() {
      return 'Tuotteet – Varpio Puutarha'
    },
    metaTitle() {
      return setMetaTitle(this.pageTitle)
    },
    metaDesc() {
      return setMetaDescription('Varpion tuoteperheeseen kuuluu viitisentoista herkullista ja ravitsevaa kasvihuoneessa puhtaasti kasvatettua tuotetta. Kaikki värikkäät herkkumme kerätään ja pakataan käsityönä.')
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