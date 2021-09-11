<template lang="pug">
  .container
    article.product
      .left
        h1.title Tomaatti rasia
        p
      .right
        nuxt-img(preset="detail" src="/img/products/tomaatti-rasia.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>