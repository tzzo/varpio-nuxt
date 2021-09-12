<template lang="pug">
  .container
    article.product
      .left
        h1.title Irto tomaatti
        p Erittäin suosittu tomaattimme on tavallista maukkaampi. Lajikevalinnat on tehty maku edellä ja tomaatit kerätään aina kypsänä. Tomaatti sisältää paljon lykopeenia, jonka on todettu ehkäisevän monia sairauksia. Säilytä huoneenlämmössä.
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/products/tomaatti-irto.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>