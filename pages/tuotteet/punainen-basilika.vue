<template lang="pug">
  .container
    article.product
      .left
        h1.title Punainen basilika
        p
      .right
        nuxt-img(preset="detail" src="/img/products/punainen-basilika.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>