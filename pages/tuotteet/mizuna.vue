<template lang="pug">
  .container
    article.product
      .left
        h1.title Mizuna
        p Mizuna on kaunis, kapealehtinen salaattiyrtti. Sen suomalaiset nimet, japaninkaali ja japaninsinappi, pyrkivät kuvaamaan sen makua, joka on hieman rucolan kaltainen. Mizunasta voidaan käyttää sen kaikki osat. Mizuna kestää hieman kuumennusta, joten sillä voidaan viimeistellä lämpimiä ruokia. Käytä mizunaa esim. nuudelikeitoissa tai wokeissa, tortilloiden kanssa tai sellaisenaan salaateissa. Mizunamme on sekoitus punaista ja vihreää lajiketta.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/mizuna.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Mizuna – Varpio Puutarha'
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