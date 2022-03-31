<template lang="pug">
  .container
    article.product
      .left
        h1.title Frisee
        p Vaaleanvihreä friseesalaatti. Säilytä omassa pussissaan jääkaapissa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/frisee.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Frisee – Varpio Puutarha'
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

<style lang="sass" scoped></style>
