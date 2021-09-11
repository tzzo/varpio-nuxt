<template lang="pug">
  .container
    article.product
      .left
        h1.title Minttu
        p
      .right
        nuxt-img(preset="detail" src="/img/products/minttu.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>