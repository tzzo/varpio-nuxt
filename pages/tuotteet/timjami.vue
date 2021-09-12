<template lang="pug">
  .container
    article.product
      .left
        h1.title Timjami
        p
      .right
        nuxt-img(preset="detail" src="/img/products/timjami.jpg")
</template>

<script>
export default {
  layout: 'default-nav-footer'
}
</script>