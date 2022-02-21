<template lang="pug">
  .container
    article.product
      .left
        h1.title Mehevä lehtisalaatti
        p 
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/meheva-lehtisalaatti.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Mehevä lehtisalaatti – Varpio Puutarha'
    },
		metaTitle() {
      return setMetaTitle(this.pageTitle)
    }
	},
	head() {
		return {
			title: this.pageTitle,
      meta: [
        ...this.metaTitle
			]
		}
	}
}
</script>