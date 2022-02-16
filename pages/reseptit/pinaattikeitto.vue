
<template lang="pug">
  .container
    article.product
      .left
        h1.title Pinaattikeitto
        span.recipe-title Ainekset:
        ul.ingridients 
          li 100 g voita
          li 1 dl vehnäjauhoja
          li 1 litra maitoa
          li 2 ruukkua Varpion pinaattia
          li 1 kourallinen Varpion persiljaa
          li Ripaus suolaa
          li Hyppysellinen raastettua muskottipähkinä
          li Tilkka vaaleaa balsamicoa tai sitruunan mehua, maun mukaan
        span.recipe-title Valmistusohjeet
        ol
          li Esilämmitä maito kattilassa, silppua yrtit ja raasta muskottipähkinä valmiiksi.
          li Sulata voi toisessa kattilassa miedolla lämmöllä.
          li Vispaa voin sekaan jauho.
          li Lisää lämmin maito voi-vehnäjauhoseokseen kokoajan vispilällä sekoittaen.
          li Keitä hiljalleen kokoajan sekoittaen noin 10 minuuttia.
          li Lisää silputut yrtit ja soseuta.
          li Lisää valkopippuri ja muskottipähkinäraaste sekä balsamico tai sitruunanmehu oman maun mukaan.
          li Lisää tarvittaessa loraus maitoa, jos keitto on liian paksua.
          li Tarjoile kananmunan kanssa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/pinaatti_nokkoskeitto.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
