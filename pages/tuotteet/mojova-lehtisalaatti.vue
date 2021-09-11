<template lang="pug">
  .container
    article.product
      .left
        h1.title Mojova lehtisalaatti
        p
      .right
        nuxt-img(preset="detail" src="/img/products/mojova-lehtisalaatti.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>