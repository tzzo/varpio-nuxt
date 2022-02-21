<template lang="pug">
	.container
		article.product
			.left
				h1.title Basilika
				p Tavallista isompi basilika on paitsi riittoisa, myös silmää miellyttävä. Basilika on yksi suosituimmista mausteyrteistä ja toimii hyvin myös salaateissa. Kannattaa kokeilla Varpion basilikapohjaiset reseptit pesto ja caprese! Säilytä lämpimässä ja muista kastella runsaasti.
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
