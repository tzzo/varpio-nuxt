<template lang="pug">
  .container
    article.product
      .left
        h1.title Pinaatti rasia
        span 
          | Pinaatti on monipuolinen, erittäin maukas, kypsentämiseenkin sopiva lehtivihannes. Ravintorikas pinaatti sopii kevyesti paistettuna vaikkapa brunssin lisukkeeksi tai sellaisenaan salaatteihin ja 
          nuxt-link(to="/reseptit/smoothie") smoothiehin
          | . Perinteisesti Suomessa pinaattia on käytetty pinaattikeittoon ja -ohukaisiin. 
        br
        span Saatavilla myös 
          nuxt-link(to="/tuotteet/pinaatti") ruukussa
          | .
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/pinaatti-rasia.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Pinaatti rasia – Varpio Puutarha'
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