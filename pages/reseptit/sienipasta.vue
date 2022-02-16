<template lang="pug">
  .container
    article.product
      .left
        h1.title Sienipasta
        span 4 annosta
        span.recipe-title Ainekset:
        ul.ingridients
          li 300 g kuivapastaa
          li 1 rkl suolaa
          li 300 g tuoreita kauden sieniä
          li 1 ruukkua Varpion lehtikaalia
          li 2 keltasipulia
          li 1 oksaa timjamia
          li (rypsiöljyä paistamiseen)
          li 2 dl kermaa tai kasvikermaa
          li 150 g mieleistäsi pehmeää juustoa, esim. sinihome-, vuohen- tai tuorejuustoa
          li 10 rouhaisua mustapippuria myllystä
          li Hyppysellinen suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Laita pastan keitinvesi kiehumaan, lisää joukkoon ruokalusikallinen suolaa.
          li Putsaa tarvittaessa sienesi pesemällä tai sieniharjalla. Poista mahdolliset huonot osat.
          li Laita sienet paistumaan pannulle öljyn kanssa, lisää joukkoon vähän suolaa ja timjaminoksat.
          li Laita pastat kiehumaan ja laita ajastin päälle. Pastan pakkauksessa lukee keittoaika al dente -kypsyydelle.
          li Kuori ja viipaloi keltasipuli, lisää sipuli sienten joukkoon pannulle.
          li Lisää pannulle karkeasti silputut lehtikaalit, paista vielä hetki.
          li Lisää pannulle kerma/kasvikerma, juusto pieninä nokareina sekä mustapippuri.
          li Valuta al dente -kypsyinen pasta lävikköön ja laita pasta sienikastikkeen kanssa samaan pannuun.
          li Kuumenna ja sekoita hetki, maista ja lisää halutessasi suolaa tai pippuria, tarjoile kuumana. Voit poistaa timjaminoksat ennen tarjoilua.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/pasta.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
