<template lang="pug">
  .container
    article.product
      .left
        h1.title Kepeä tumma frisee
        p 
      .right
        nuxt-img(preset="detail" src="/img/products/tumma-frisee.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
