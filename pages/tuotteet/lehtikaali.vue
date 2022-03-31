<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtikaali
        p Lehtikaali on ravintorikas, kuitupitoinen, maukas ja monikäyttöinen lehtivihannes. Babylehtikaalin ideana on päästä nauttimaan lehtikaalin ravinteista ja mausta ilman kypsentämistä, sellaisenaan. Lehtiruotia ei tarvitse poistaa, eikä lehtiä tarvitse ryöpätä. Sopii hyvin salaatteihin, lämpimien ruokien viimeistelyyn ja vihersmoothieiden joukkoon.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/lehtikaali.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Lehtikaali – Varpio Puutarha'
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