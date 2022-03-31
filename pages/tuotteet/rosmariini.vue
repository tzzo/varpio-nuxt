<template lang="pug">
  .container
    article.product
      .left
        h1.title Rosmariini
        p Rosmariini on yksi valikoimamme vahvimmista ja täten riittoisimmista yrteistä. Rosmariinin aromi on kompleksinen ja erottuva, hieman metsäinen/mäntyinen, mentolinen ja pippurinen. Rosmariini sopii yhteen raskaiden ruokien, kuten lihapatojen, sienten, paahdettujen perunoiden ja juuresten kanssa, sekä makupariksi punaviinille, valkosipulille ja mustapippurille. Kokeile rosmariinia myös Gin & Tonicin mausteena yhdessä karpaloiden kanssa. Rosmariinin aromi säilyy mainiosti myös kuivatessa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/rosmariini.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Rosmariini – Varpio Puutarha'
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