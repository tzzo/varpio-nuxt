<template lang="pug">
  .container
    article.product
      .left
        h1.title Munavoi
        span 4 annosta
        span.recipe-title Ainekset:    
        ul 
          li 4 kananmunaa
          li 100 g voita
          li 1/2 ruukkua Varpion persiljaa
          li Hyppysellinen suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Pilko voi kuutioiksi ja laita kulhoon noin tuntia ennen munavoin valmistusta, jotta voi on varmasti pehmeää.
          li Laita vesi kiehumaan ja laske kananmunat varovasti hiljalleen kiehuvaan veteen esim. reikäkauhalla. Laita 7 min ajastin päälle.
          li Hienonna persilja varsineen kananmunien kiehuessa.
          li Kun ajastin soi, valuta kiehuva vesi pois kattilasta ja laske kananmunien päälle jääkylmää vettä.
          li Kun kananmunat ovat hiukan jäähtyneet, kuori ne ja halkaise ne käsissäsi siten, että laitat vielä vähän löysät keltuaiset voin kanssa samaan kulhoon ja valkuaiset työlaudalle.
          li Hienonna valkuainen veitsellä pieneksi kuutioksi.
          li Vatkaa voi ja keltuainen vispilällä kuohkeaksi vaahdoksi.
          li Nostele voikeltuaisvaahdon joukkoon valkuainen, persilja ja suola.
          li Tarjoile.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/recipes/munavoi.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
