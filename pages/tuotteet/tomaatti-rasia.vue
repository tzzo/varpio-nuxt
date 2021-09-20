<template lang="pug">
  .container
    article.product
      .left
        h1.title Tomaatti rasia
        p Erittäin suosittu tomaattimme on tavallista maukkaampi. Lajikevalinnat on tehty maku edellä ja tomaatit kerätään aina kypsänä. Tomaatti sisältää paljon lykopeenia, jonka on todettu ehkäisevän monia sairauksia. Säilytä huoneenlämmössä.


      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/tomaatti-rasia.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>