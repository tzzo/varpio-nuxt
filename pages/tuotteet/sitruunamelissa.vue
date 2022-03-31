<template lang="pug">
  .container
    article.product
      .left
        h1.title Sitruunamelissa
        p Raikas sitruunamelissa tuo kesäisen tunnelman ruokiisi ympäri vuoden. Sopii mintun tavoin makuvesiin, drinkkeihin, jälkiruokiin marjojen kanssa, sekä smoothiehin. Sitruunamelissaa voidaan myös käyttää sitruunankuoren yhteydessä tai asemesta keittoihin, patoihin, kastikkeisiin ja vinegretteihin.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/sitruunamelissa.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Sitruunamelissa – Varpio Puutarha'
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