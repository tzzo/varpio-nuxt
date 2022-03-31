<template lang="pug">
  .container
    article.product
      .left
        h1.title Tilli
        p Suomalaisten paljon suosima tilli sopii klassisesti yhteen uusien perunoiden, savukalan sekä kalakeiton kanssa. Tilli sopii myös moneen muuhunkin, esimerkiksi lihapatoihin, ruisleivän päälle, kurkkupikkelseihin, salaatteihin, sekä rapujen kanssa tarjoiltavaksi. Tillistä sopii käytettäväksi lehdet ja hennoimmat varret sellaisenaan - paksuimmat varret sopivat esim. perunoiden keitinveden tai kalakeiton liemen maustamiseen. Kokkaillessa tilli tulee lisätä vasta juuri ennen tarjoilua, jotta se säilyy raikkaan makuisena ja kirkkaan vihreänä.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/tilli.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Tilli – Varpio Puutarha'
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