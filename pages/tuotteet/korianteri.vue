<template lang="pug">
  .container
    article.product
      .left
        h1.title Korianteri
        p 
          | Korianterin maku on hienostunut ja sitruksinen, joka säilyy parhaiten kun korianteri lisätään ruokaan vasta juuri ennen tarjoilua, kuumennusta korianteri ei kestä. Korianterista tulee käyttää kaikki osat, varsinkin varret ovat korianterissa erittäin maukkaita. Käytä esim. tortilloiden kanssa sellaisenaan, shakshukan, dippikastikkeiden, 
          nuxt-link(to="/reseptit/salsa") salsan
          | , 
          nuxt-link(to="/reseptit/vihrea-harissatahna") harissatahnan
          |  tai coleslawin maustamiseen. 
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/korianteri.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Korianteri – Varpio Puutarha'
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

<style lang="sass" scoped></style>
