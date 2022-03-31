<template lang="pug">
  .container
    article.product
      .left
        h1.title Tomaatti rasia
        p Erittäin suosittu tomaattimme on meille ylpeydenaihe. Tomaatit poimitaan aina kypsänä, ja lajike on valittu maku edellä. Tomaattia on saatavilla sekä irtomyynnissä että rasioihin pakattuna. Käsin poimitut, maukkaat tomaattimme sopivat mainiosti vaikkapa tuliaiseksi. Keväisin myymme omassa myymälässämme myös tomaatin taimia.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/tomaatti-rasia.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Tomaatti rasia – Varpio Puutarha'
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