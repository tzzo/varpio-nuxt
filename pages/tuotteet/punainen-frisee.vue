<template lang="pug">
  .container
    article.product
      .left
        h1.title Punainen frisee
        p
      .right
        nuxt-img(preset="detail" src="/img/products/punainen-frisee.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>