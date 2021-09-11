<template lang="pug">
  .container
    article.product
      .left
        h1.title Oregano
        p
      .right
        nuxt-img(preset="detail" src="/img/products/oregano.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>