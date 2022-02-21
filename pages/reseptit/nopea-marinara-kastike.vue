<template lang="pug">
  .container
    article.product
      .left
        h1.title Nopea Marinara kastike
        span 4 annosta
        span.recipe-title Ainekset:
        ul.ingridients 
          li 6 Varpion tomaattia
          li 1 rkl tomaattipyrettä
          li 4 isoa valkosipulin kynttä
          li 8 oksaa oreganoa
          li 2 dl ekstra-neitsytoliiviöljy
          li 1/2 tl suolaa
        span.recipe-title Valmistusohjeet:
        ol
          li Pilko tomaatit neljään osaan, kuori ja viipaloi valkosipulin kynnet, nypi oreganon lehdet.
          li Laita pieni määrä oliiviöljyä ja kaikki loput ainekset teflonpinnoitettuun kasariin ja freesaa noin kolme minuuttia.
          li Aja sileäksi blenderissä, sauvasekoittimella kulhossa tai monitoimikoneessa. Lisää ajaessa joukkoon loppu oliiviöljy.
          li Käytä esim. pizza- tai pastakastikkeena.
        span * Säilyy hyvänä jääkaapissa neljä vuorokautta.
          
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/marinara.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Nopea Marinara kastike – Varpio Puutarha'
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