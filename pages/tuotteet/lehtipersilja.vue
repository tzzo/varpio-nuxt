<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtipersilja
        p 
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/lehtipersilja.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>