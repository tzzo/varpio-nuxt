<template lang="pug">
  .container
    article.product
      .left
        h1.title Salvia
        p
      .right
        nuxt-img(product="detail" width="602" height="451" src="/img/products/salvia.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>