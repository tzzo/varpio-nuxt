<template lang="pug">
	.container
		article.product
			.left
				h1.title Basilika
				p 
					| Basilika on lempeän makuinen ja hyväntuoksuinen yrtti. Se sopii loistavasti yhteen tomaatin kanssa. Tunnetuimmat käyttökohteet lienevät 
					nuxt-link(to="/reseptit/varpion-caprese") caprese -salaatti
					|, 
					nuxt-link(to="/reseptit/vihrea-gazpacho") gazpacho -keitto
					|  ja 
					nuxt-link(to="/reseptit/lehtikaalipesto") pestokastike
					| . Basilika maistuu myös leivän päällä salaatin tavoin, pizzassa, salaateissa, salaatinkastikkeissa ja currykastikkeissa.
			.right
				nuxt-img(preset="detail" width="602" height="451" src="/img/products/basilika.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Basilika – Varpio Puutarha'
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
