<template lang="pug">
  .container
    article.product
      .left
        h1.title Persiljavinegrette
        span 12 annosta
        span.recipe-title Ainekset:
        ul 
          li 2 dl ekstra-neitsytoliiviöljy
          li 1 ruukku Varpion persiljaa
          li 1 rkl vaaleaa balsamicoa
          li Hyppysellinen suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Hienonna persilja varsineen.
          li Laita kaikki ainesosat blenderiin ja aja hiljaisella teholla sileäksi. Voit myös tehdä tämän korkeassa astiassa sauvasekoittimella.
          li Kaavi pois valmistusastiasta nuolijaa apuna käyttäen ja tarjoile.
        span * Säilyy hyvänä jääkaapissa viisi vuorokautta.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/recipes/persiljavinegrette.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
