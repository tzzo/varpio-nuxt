<template lang="pug">
  .container
    article.product
      .left
        h1.title Varpion Caprese
        span.recipe-title Ainekset:
        ul 
          li 6 Varpion tomaattia
          li 250 g mozzarellajuustoa
          li 1/2 ruukkua Varpion Basilikaa
          li Pussi Varpion Mehevä -salaattia
          li 1 dl itsetehtyä Varpion lehtikaalipestoa
          li Mustapippuria
          li Suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Leikkaa tomaatit ja mozzarellat siivuiksi.
          li Asettele siivut vuorotellen salaattipedille.
          li Lisää basilikanlehtiä ja pestoa tomaatin ja mozzarellan lomaan.
          li Ripaus suolaa ja pari rouhaisua mustapippuria päälle.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/recipes/caprese.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
