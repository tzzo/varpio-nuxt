<template lang="pug">
  .container
    article.product
      .left
        h1.title Mizuna
        p
      .right
        nuxt-img(preset="detail" src="/img/products/mizuna.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>