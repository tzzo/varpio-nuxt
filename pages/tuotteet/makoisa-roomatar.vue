<template lang="pug">
  .container
    article.product
      .left
        h1.title Makoisa roomatar
        p Vihreä roomansalaatti. Käytetään perinteisesti Caesar-salaatissa. Säilytä omassa pussissaan jääkaapissa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/makoisa-roomatar.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Makoisa roomatar – Varpio Puutarha'
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