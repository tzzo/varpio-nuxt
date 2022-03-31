<template lang="pug">
  .container
    article.product
      .left
        h1.title Oregano
        p 
          | Oregano sopii erityisen hyvin yhteen valkosipulin ja 
          nuxt-link(to="/tuotteet/tomaatti-irto") tomaatin kanssa
          | , ja se onkin paljon käytetty yrtti italiaisessa ruuanlaitossa. Oregano sopii perinteisten pizzojen ja pastojen lisäksi hyvin yhteen myös monien kasvisten, kuten perunan, porkkanan ja herneen, sekä kevyiden lihojen kuten karitsan, vasikan ja kanan kanssa. Oreganosta käytetään joko sen nypityt lehdet, tai koko varsi, samaan tyyliin kuin timjamistakin. Oreganon voi lisätä ruuan joukkoon jo kokkauksen alkuvaiheessa. Oreganon aromi säilyy mainiosti myös kuivatessa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/oregano.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Oregano – Varpio Puutarha'
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