<template lang="pug">
  .container
    article.product
      .left
        h1.title Romaine ruukussa
        p Vihreä roomansalaatti ruukussa. Käytetään perinteisesti Caesar-salaatissa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/romaine-ruukussa.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Romaine ruukussa – Varpio Puutarha'
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