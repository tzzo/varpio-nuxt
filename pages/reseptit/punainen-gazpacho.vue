<template lang="pug">
  .container
    article.product
      .left
        h1.title Punainen Gazpacho
        span 4 annosta
        span.recipe-title Ainekset:
        ul 
          li 8 Varpion tomaattia
          li 1 Varpion kurkku
          li 1 punainen paprika
          li 1 keltasipuli
          li 2 valkosipulin kynttä
          li 4 oksaa timjamia
          li (rypsiöljyä freesaukseen)
          li 1 iso viipale vaaleaa leipää
          li 1 dl ekstra-neitsytoliiviöljy
          li 1/2 ruukkua Varpion basilikaa
          li 1 tl suolaa
          li 4 rouhaisua mustapippuria myllystä
        span.recipe-title Valmistusohjeet
        ol
          li Freesaa paistinpannulla pienessä määrässä rypsiöljyä pilkottu paprika, sipuli, valkosipuli ja timjaminoksat noin viisi minuuttia. Pidä lämpö matalana ja älä anna kasvisten ruskistua. Siirrä pieneen kulhoon jäähtymään. Ota timjaminoksat pois kasvisten jäähdyttyä.
          li Halkaise tomaatit, pilko kurkku vähän pienemmäksi, paahda leipäviipale, nypi basilikan lehdet.
          li Laita kaikki ainekset valmistusastiaan. Gazpacho voidaan valmistaa joko blenderissä, monitoimikoneessa tai korkeassa kulhossa sauvasekoittimella.
          li Aja sileäksi keitoksi ja tarjoile kylmänä. Voit keittoa valmistaessa lisätä joukkoon muutaman jääpalan, mikäli tarjoilet keiton välittömästi.
        span * Säilyy hyvänä jääkaapissa kaksi vuorokautta.
      .right
        nuxt-img(preset="detail" src="/img/recipes/gazpacho.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
