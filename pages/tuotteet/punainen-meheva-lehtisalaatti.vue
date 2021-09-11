<template lang="pug">
  .container
    article.product
      .left
        h1.title Punainen mehevä lehtisalaatti
        p
      .right
        nuxt-img(preset="detail" src="/img/products/punainen-meheva-lehtisalaatti.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>