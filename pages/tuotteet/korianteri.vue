<template lang="pug">
  .container
    article.product
      .left
        h1.title Korianteri
        p Korianteri on yksi maailman vanhimmista maustekasveista. Korianterilla on ruuansulatusta edistävä vaikutus ja se sisältää paljon ravintoaineita ja mineraaleja, kuten kalsiumia, kaliumia, magnesiumia ja fosforia. Sillä voi esimerkiksi maustaa salaatteja ja lämpimiä ruokia, joihin ne lisätään vasta valmistuksen loppuvaiheessa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/korianteri.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
