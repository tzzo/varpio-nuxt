<template lang="pug">
  .container
    article.product
      .left
        h1.title Minttu
        p 
          | Minttu on maultaan erittäin raikas, monikäyttöinen yrtti. Se sopii yhteen monien vihannesten, kuten herneiden, uusien perunoiden, porkkanoiden ja tomaattien kanssa. Sillä voidaan myös maustaa teet, 
          nuxt-link(to="/reseptit/smoothie") smoothiet
          | , drinkit ja makuvedet. Minttua tarjoillaan klassisesti pääsiäisen aikaan paahdetun lampaan kanssa, ja se sopii myös erittäin hyvin moniin jälkiruokiin suklaan ja marjojen kanssa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/minttu.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Minttu – Varpio Puutarha'
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