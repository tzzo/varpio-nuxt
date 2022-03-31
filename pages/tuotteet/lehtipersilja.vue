<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtipersilja
        p 
          | Lehtipersilja eli lepe on maultaan raikas ja ryhdikäs yrtti, joka on välimeren ruokakulttuurissa paljon käytetty. Lehtipersilja sopii hyvin käytettäväksi grillatun kalan, pastaruokien ja salaattien kanssa, esim. 
          nuxt-link(to="/reseptit/persiljavinegrette") vinegreten muodossa
          | . Muita oivia makupareja lepelle ovat sitruuna, oliivit, tomaatti ja kaprikset.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/lehtipersilja.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Lehtipersilja – Varpio Puutarha'
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