<template lang="pug">
  .container
    article.product
      .left
        h1.title Rucola
        p Rucola, eli sinappikaali, on väkevä ja edukseen erottuva salaattiyrtti. Sitä käytetään paljon italialaisessa ruuanlaitossa leikkeleiden, pizzojen ja keittojen maustamiseen, se on loistava makupari parmesaanijuuston kanssa. Se sopii myös mainiosti kotimaisten hunajapaahdettujen juuresten kanssa tarjoiltavaksi. Rucolasta voidaan käyttää kaikki osat sellaisenaan, eikä se myöskään säikähdä pientä kuumennusta.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/rucola.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Rucola – Varpio Puutarha'
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