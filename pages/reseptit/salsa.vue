
<template lang="pug">
	.container
		article.product
			.left
				h1.title Salsa
				span.recipe-title Ainekset:
				ul.ingridients 
					li 4 Varpion tomaattia
					li 1 punainen chili
					li 1 pieni punasipuli
					li 5 vartta Varpion korianteria
					li 1 pieni valkosipulinkynsi
					li 1 rkl oliiviöljyä
					li ripaus suolaa ja pippuria
					li pieni loraus sitruunan mehua
				span.recipe-title Valmistusohjeet
				ol
					li Leikkaa tomaateista sisus pois.
					li Hienonna kaikki ainekset pieneksi silpuksi ja sekoita.
					li Anna maustua noin puol tuntia.
			.right
				nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/salsa.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Salsa – Varpio Puutarha'
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