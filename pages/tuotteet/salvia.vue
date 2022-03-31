<template lang="pug">
  .container
    article.product
      .left
        h1.title Salvia
        p Salvia on voimakas mausteyrtti, jonka maku on makea, karvas ja hieman mäntymainen. Salvia on parhaimmillaan kypsennetyissä, raskaissa (rasvaisissa) ruuissa. Se tuo raikkautta ja syvyyttä juustoisiin pastoihin, riistaruokiin, munakkaisiin. Sopii erittäin hyvin yhteen mustapippurin kanssa. Salvian aromi säilyy mainiosti myös kuivatessa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/salvia.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Salvia – Varpio Puutarha'
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