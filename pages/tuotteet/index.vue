<template lang="pug">
  .index
    header.sub-page-header
      h1 Tuotteet
    section.products.container
      .sub-page-intro
        p Varpion tuoteperheeseen kuuluu viitisentoista herkullista ja ravitsevaa kasvihuoneessa puhtaasti kasvatettua tuotetta. Kaikki värikkäät herkkumme kerätään ja pakataan käsityönä. Omat kuskimme toimittavat tuotteet kauppoihin parhaimmillaan parin tunnin sisällä sadonkorjuusta.
        p Lajikevalinnoissa panostamme aina määrän sijasta makuun. Pyrimme jatkuvasti löytämään parempia lajikkeita ja myös kokonaan uusia tuotteita viljeltäväksi. Orimattilan puutarhan myymälästä voit löytää tuotteita, joita ei vielä kaupoista saa!

      .list-preview-wrap
        NuxtLink.list-preview(to="tuotteet/basilika")
          nuxt-img(width="375" height="262" src="/img/products/basilika.jpg")
          span Basilika

        NuxtLink.list-preview(to="tuotteet/frisee")
          nuxt-img(width="375" height="262" src="/img/products/frisee.jpg")
          span Frisee

        NuxtLink.list-preview(to="tuotteet/jaasalaatti")
          nuxt-img(width="375" height="262" src="/img/products/jaasalaatti.jpg")
          span Jääsalaatti
          
        NuxtLink.list-preview(to="tuotteet/korianteri")
          nuxt-img(width="375" height="262" src="/img/products/korianteri.jpg")
          span Korianteri
        
        NuxtLink.list-preview(to="tuotteet/kurkku")
          nuxt-img(width="375" height="262" src="/img/products/kurkku.jpg")
          span Kurkku

        NuxtLink.list-preview(to="tuotteet/lehtikaali-pussissa")
          nuxt-img(width="375" height="262" src="/img/products/lehtikaali-pussissa.jpg")
          span Lehtikaali pussissa

        NuxtLink.list-preview(to="tuotteet/lehtikaali")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/lehtikaali.jpg")
          span Lehtikaali

        NuxtLink.list-preview(to="tuotteet/lehtipersilja")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/lehtipersilja.jpg")
          span Lehtipersilja

        NuxtLink.list-preview(to="tuotteet/makoisa-roomatar")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/makoisa-roomatar.jpg")
          span Makoisa roomatar

        NuxtLink.list-preview(to="tuotteet/meheva-lehtisalaatti")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/meheva-lehtisalaatti.jpg")
          span Mehevä lehtisalaatti

        NuxtLink.list-preview(to="tuotteet/meirami")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/meirami.jpg")
          span Meirami

        NuxtLink.list-preview(to="tuotteet/minttu")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/minttu.jpg")
          span Minttu

        NuxtLink.list-preview(to="tuotteet/mizuna")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/mizuna.jpg")
          span Mizuna

        NuxtLink.list-preview(to="tuotteet/mojova-lehtisalaatti")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/mojova-lehtisalaatti.jpg")
          span Mojova lehtisalaatti

        NuxtLink.list-preview(to="tuotteet/oregano")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/oregano.jpg")
          span Oregano

        NuxtLink.list-preview(to="tuotteet/persilja")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/persilja.jpg")
          span Persilja

        NuxtLink.list-preview(to="tuotteet/pinaatti-rasia")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/pinaatti-rasia.jpg")
          span Pinaatti rasia

        NuxtLink.list-preview(to="tuotteet/pinaatti")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/pinaatti.jpg")
          span Pinaatti
        
        NuxtLink.list-preview(to="tuotteet/punainen-basilika")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/punainen-basilika.jpg")
          span Punainen basilika

        NuxtLink.list-preview(to="tuotteet/punainen-frisee")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/punainen-frisee.jpg")
          span Punainen frisee

        NuxtLink.list-preview(to="tuotteet/punainen-meheva-lehtisalaatti")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/punainen-meheva-lehtisalaatti.jpg")
          span Punainen meheva lehtisalaatti

        NuxtLink.list-preview(to="tuotteet/rakuuna")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/rakuuna.jpg")
          span Rakuuna

        NuxtLink.list-preview(to="tuotteet/ravakka-tammenlehti")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/ravakka-tammenlehti.jpg")
          span Ravakka tammenlehti

        NuxtLink.list-preview(to="tuotteet/romaine-ruukussa")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/romaine-ruukussa.jpg")
          span Romaine ruukussa

        NuxtLink.list-preview(to="tuotteet/rosmariini")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/rosmariini.jpg")
          span Rosmariini

        NuxtLink.list-preview(to="tuotteet/rucola")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/rucola.jpg")
          span Rucola

        NuxtLink.list-preview(to="tuotteet/ruohosipuli")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/ruohosipuli.jpg")
          span Ruohosipuli

        NuxtLink.list-preview(to="tuotteet/salaattimix-rasia")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/salaattimix-rasia.jpg")
          span Salaattimix rasia

        NuxtLink.list-preview(to="tuotteet/salvia")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/salvia.jpg")
          span Salvia

        NuxtLink.list-preview(to="tuotteet/sitruunamelissa")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/sitruunamelissa.jpg")
          span Sitruunamelissa

        NuxtLink.list-preview(to="tuotteet/thai-basilika")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/thai-basilika.jpg")
          span Thai basilika

        NuxtLink.list-preview(to="tuotteet/tilli")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tilli.jpg")
          span Tilli

        NuxtLink.list-preview(to="tuotteet/timjami")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/timjami.jpg")
          span Timjami

        NuxtLink.list-preview(to="tuotteet/tomaatti-irto")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tomaatti-irto.jpg")
          span Tomaatti

        NuxtLink.list-preview(to="tuotteet/tomaatti-rasia")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tomaatti-rasia.jpg")
          span Tomaatti rasia

        NuxtLink.list-preview(to="tuotteet/tumma-frisee")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tumma-frisee.jpg")
          span Tumma frisee
          
        NuxtLink.list-preview(to="tuotteet/vesikrassi")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/vesikrassi.jpg")
          span Vesikrassi

        NuxtLink.list-preview(to="tuotteet/viinisuolaheina")
          nuxt-img(loading="lazy" width="375" height="262" src="/img/products/viinisuolaheina.jpg")
          span Viinisuolaheina

</template>

<script>
export default {
  name: 'index',
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped>
  header
    background-image: url('~assets/img/divider.jpg')
    background-size: cover
    background-position: top
    height: 40vmin
    h1
      text-shadow: 1px 1px 3px black
</style>
