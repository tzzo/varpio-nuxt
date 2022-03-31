<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtikaali pussissa
        p Lehtikaali on ravintorikas, kuitupitoinen, maukas ja monikäyttöinen lehtivihannes. Lehtiruodin paksuimman osan poistamisen jälkeen lehtikaali voidaan kypsentää pannulla tai uunissa paistamalla, tai lisäämällä se kastikkeiden tai patojen joukkoon kypsennyksen loppuvaiheessa. Lehtikaali voidaan kypsentää myös keittämällä tai höyryttämällä muiden vihannesten tavoin. Kaalin maku sopii parhaiten yhteen sienien, juuresten ja vaalean kalan kanssa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/lehtikaali-pussissa.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Lehtikaali pussissa – Varpio Puutarha'
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