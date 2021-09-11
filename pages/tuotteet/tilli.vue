<template lang="pug">
  .container
    article.product
      .left
        h1.title Tilli
        p
      .right
        nuxt-img(preset="detail" src="/img/products/tilli.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>