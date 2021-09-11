<template lang="pug">
  .container
    article.product
      .left
        h1.title Salvia
        p
      .right
        nuxt-img(preset="detail" src="/img/products/salvia.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>