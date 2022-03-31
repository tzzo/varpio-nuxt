<template lang="pug">
  .container
    article.product
      .left
        h1.title Ruohosipuli
        p Ruohosipuli tuo moneen kotiruokaan hienostuneen lisän. Hienonnettu ruohosipuli sopii hyvin yhteen muun muassa munakokkelin, keitettyjen perunoiden, savustetun kalan, mätien ja katkarapujen kera. Kypsennettäviin ruokiin ruohosipuli tulee lisätä vasta juuri ennen tarjoilua.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/ruohosipuli.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Ruohosipuli – Varpio Puutarha'
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