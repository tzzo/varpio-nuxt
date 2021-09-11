<template lang="pug">
  .container
    article.product
      .left
        h1.title Räväkkä tammenlehti
        p
      .right
        nuxt-img(preset="detail" src="/img/products/ravakka-tammenlehti.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>