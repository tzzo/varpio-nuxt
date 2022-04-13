<template lang="pug">
  .container
    article.product
      .left
        h1.title Viinisuolaheinä
        p Viinisuolaheinän punaisen värinen lehtiruoti tekee siitä näyttävän ja kauniin salaattiyrtin. Maku on kirpeä ja raikas, ja muistuttaa paljon metsästä kerättyä ketunleipää (molemmat ovatkin samaa ”sorrel” sukua). Käytetään tuoreena sellaisenaan, ei kestä kypsentämistä.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/viinisuolaheina.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Viinisuolaheinä – Varpio Puutarha'
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