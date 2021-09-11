<template lang="pug">
  .container
    article.product
      .left
        h1.title Frisee
        p Makeahko ja mieto salaattilajike, joka soveltuu ilmavuutensa ansiosta hyvin esimerkiksi salaattipohjiin tai leivän päälle. Kauniin ulkonäkönsä vuoksi sopii hyvin myös voileipäkakkujen koristeluun. Säilytä omassa pussissaan jääkaapissa.
      .right
        nuxt-img(preset="detail" src="/img/products/frisee.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
