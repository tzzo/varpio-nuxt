<template lang="pug">
  .container
    article.product
      .left
        h1.title Smoothie mintusta, pinaatista ja mansikoista
        span 2 annosta
        span.recipe-title Ainekset:
        ul.ingridients 
          li 150 g pakastemansikkaa
          li 1 nektariini tai persikka
          li 1 passionhedelmä
          li 6 oksaa Varpion minttua
          li 1/2 ruukkua Varpion pinaattia
          li 3 dl maitoa tai mieleistäsi kasvimaitoa
          li 1 tl hunajaa tai agavesiirappia
        span.recipe-title Valmistusohjeet:
        ol
          li Poista nektrariinista/persikasta kivi, halkaiset passionhedelmä ja kaavi sisus talteen sekä nypi mintunlehdet ja silppua pinaattia vähän pienemmäksi.
          li Laita kaikki ainekset korkeaan astiaan tai blenderin kulhoon. Aja smoothie sileäksi blenderissä tai sauvasekoittimella ja tarjoile.

      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/smoothie.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
