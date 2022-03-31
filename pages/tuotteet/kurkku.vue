<template lang="pug">
  .container
    article.product
      .left
        h1.title Kurkku
        p Rouskuvan rapea, raikkaan makuinen tuore kurkku toimii salaateissa, leivän päällä, tuorepalana tai vaikkapa dippivihanneksena. Kätevän pussin ansiosta kurkku on helppo käyttää pala palalta. Säilytys viileäkaapissa tai huoneenlämmössä.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/kurkku.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Kurkku – Varpio Puutarha'
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
