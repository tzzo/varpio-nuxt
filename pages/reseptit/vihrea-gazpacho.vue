<template lang="pug">
  .container
    article.product
      .left
        h1.title Vihreä Gazpacho
        span.recipe-title Ainekset:
        ul.ingridients 
          li 1 Varpion kurkkua
          li 2 Varpion tomaattia
          li 1 vihreä paprika
          li 1 dl turkkilaista jogurttia
          li Loraus oliiviöljyä
          li 1/2 sitruunan mehu
          li 1 rkl pikkelöityjä jalepenoja
          li Suolaa
          li Kourallinen Varpion korianteria
          li 1/2 ruukkua Varpion lehtikaalia
          li 2 dl kivennäisvettä
          li Viipale hyvää vaaleaa leipää
        span.recipe-title Valmistusohjeet:
        ol
          li Poista tomaateista kannat.
          li Soseuta kaikki ainekset tehosekoittimella, yleiskoneella tai sauvasekoittimella.
          li Jäähdytä kylmäksi ja nauti.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/vihrea_gazpacho.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Vihreä Gazpacho – Varpio Puutarha'
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