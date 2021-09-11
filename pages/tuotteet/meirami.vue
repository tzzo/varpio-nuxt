<template lang="pug">
  .container
    article.product
      .left
        h1.title Meirami
        p 
      .right
        nuxt-img(preset="detail" src="/img/products/meirami.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>