<template lang="pug">
  .container
    article.product
      .left
        h1.title Sienipasta
        span 4 annosta
        span.recipe-title Ainekset:
        ul 
          li 6 Varpion tomaattia
          li 1 rkl tomaattipyrettä
          li 4 isoa valkosipulin kynttä
          li 8 oksaa oreganoa
          li 2 dl ekstra-neitsytoliiviöljy
          li 1/2 tl suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Laita pastan keitinvesi kiehumaan, lisää joukkoon ruokalusikallinen suolaa.
          li Putsaa tarvittaessa sienesi pesemällä tai sieniharjalla. Poista mahdolliset huonot osat.
          li Laita sienet paistumaan pannulle öljyn kanssa, lisää joukkoon vähän suolaa ja timjaminoksat.
          li Laita pastat kiehumaan ja laita ajastin päälle. Pastan pakkauksessa lukee keittoaika al dente -kypsyydelle.
          li Kuori ja viipaloi keltasipuli, lisää sipuli sienten joukkoon pannulle.
          li Lisää pannulle karkeasti silputut nokkoset ja lehtikaalit, paista vielä hetki.
          li Lisää pannulle kerma/kasvikerma, juusto pieninä nokareina sekä mustapippuri.
          li Valuta al dente -kypsyinen pasta lävikköön ja laita pasta sienikastikkeen kanssa samaan pannuun.
          li Kuumenna ja sekoita hetki, maista ja lisää halutessasi suolaa tai pippuria, tarjoile kuumana. Voit poistaa timjaminoksat ennen tarjoilua.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/recipes/pasta.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
