<template lang="pug">
  .container
    article.product
      .left
        h1.title Salaattimix
        span
          | Salaattimiximme on ravintorikas sekoitus punaista paksoita, vihreää tatsoita, punaista ja vihreää sareptansinappia, sekä rucolaa. Tämä värikäs, kaalinsukuinen yhdistelmä tuo ruokaasi mausteisuutta ja täyttävyyttä. Sopii kevyesti kuumennettavaksi lämpimien ruokien viimeistelyyn, 
          nuxt-link(to="/reseptit/varpion-kanasalaatti") ruokaisiin salaatteihin
          |  ja pizzan päälle. 
        br
        span Saatavilla ruukun lisäksi myös 
          nuxt-link(to="/tuotteet/salaattimix-rasia") 50 g rasioissa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/salaattimix.jpg")
</template>
<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Salaattimix – Varpio Puutarha'
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