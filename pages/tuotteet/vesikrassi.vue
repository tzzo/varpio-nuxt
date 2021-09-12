<template lang="pug">
  .container
    article.product
      .left
        h1.title Vesikrassi
        p 
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/products/vesikrassi.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
