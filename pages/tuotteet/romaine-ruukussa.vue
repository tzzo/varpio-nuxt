<template lang="pug">
  .container
    article.product
      .left
        h1.title Romaine ruukussa
        p
      .right
        nuxt-img(preset="detail" src="/img/products/romaine-ruukussa.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>