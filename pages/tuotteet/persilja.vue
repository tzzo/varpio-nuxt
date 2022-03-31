<template lang="pug">
  .container
    article.product
      .left
        h1.title Persilja
        p 
          | Persilja on rakenteeltaan tukeva, pitkään hyvänä säilyvä yrtti. Sen voimakas vihreä väri ja raikas maku tuovat ryhtiä ruokiin. Persilja sopii maultaan hyvin yhteen monien perinteisten suomalaisten ruokien, kuten lihapatojen, siskonmakkarakeiton tai 
          nuxt-link(to="/reseptit/munavoi") munavoin
          |  kanssa. Persiljaa voidaan käyttää sellaisenaan, mutta se ei myöskään säikähdä pientä kuumennusta. Kypsennettäviin ruokiin hienonnettu persilja tulee kuitenkin lisätä vasta aivan kokkauksen loppuvaiheessa, jotta se säilyttää makunsa ja värinsä. 
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/persilja.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Persilja – Varpio Puutarha'
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