
<template lang="pug">
  .container
    article.product
      .left
        h1.title Tomaattikeitto
        span.recipe-title Ainekset:
        ul 
          li 800g Varpion tomaattia
          li 2 punasipulia
          li 2 kynttä valkosipulia
          li 1,5 dl oliivioljyä
          li Pieni loraus vaalea balsamicoa
          li Basilakanlehtiä koristeeksi
          li Suolaa
        span.recipe-title Valmistusohjeet
        ol
          li Leikkaa tomaatit neljään osaan.
          li Lisää kattilaan tomaatit, punasipulit, valkosipulin kynnet ja vaalea balsamico.
          li Keitä hiljalleen 10-15 minuutia välillä sekoittaen.
          li Soseuta sauvasekoittimella ja mausta suolalla oman maun mukaan.
          li Tarjoile keittoannos tuorejuustonokareen, oliiviöljyn ja tuoreiden basilikanlehtien kanssa.Leikkaa tomaatit neljään osaan.
          li Lisää kattilaan tomaatit, punasipulit, valkosipulin kynnet ja vaalea balsamico.
          li Keitä hiljalleen 10-15 minuutia välillä sekoittaen.
          li Soseuta sauvasekoittimella ja mausta suolalla oman maun mukaan.
          li Tarjoile keittoannos tuorejuustonokareen, oliiviöljyn ja tuoreiden basilikanlehtien kanssa.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/recipes/tomaattikeitto.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
