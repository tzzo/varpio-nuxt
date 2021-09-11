
<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtikaalipesto
        span.recipe-title Ainekset:
        ul 
          li 1 ruukku Varpion lehtikaalia
          li 0,5 dl neitsytoliiviöljyä
          li 1 dl cashewpähkinöitä
          li 1 valkosipulin kynsi
          li Loraus sitruunanmehua
          li 0,5 dl ranskankermaa
          li Ripaus ruususuolaa
          li (Mustapippuria)
        span.recipe-title Valmistusohjeet:
        ol
          li Pilko lehtikaali hieman pienemmäksi.
          li Pyöräytä ainekset karkeaksi pestoksi yleiskoneessa, sauvasekoittimella, tai morttelissa. Lisää öljy vähitellen oman maun mukaan.
          li Tarkista maku ja lisää halutessasi mustapippuria.
      .right
        nuxt-img(preset="detail" src="/img/recipes/lehtikaalipesto.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
