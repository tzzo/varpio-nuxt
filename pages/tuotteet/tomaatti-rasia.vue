<template lang="pug">
  .container
    article.product
      .left
        h1.title Tomaatti rasia
        p Erittäin suosittu tomaattimme on tavallista maukkaampi. Lajikevalinnat on tehty maku edellä ja tomaatit kerätään aina kypsänä. Tomaatti sisältää paljon lykopeenia, jonka on todettu ehkäisevän monia sairauksia. Säilytä huoneenlämmössä.


      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/tomaatti-rasia.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Tomaatti rasia – Varpio Puutarha'
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