<template lang="pug">
  .container
    article.product
      .left
        h1.title Persilja
        p Erittäin monikäyttöinen mausteyrtti kaikkeen ruuanlaittoon. Kokeile vaikka keittoihin tai kastikkeisiin. Persiljalla on lisäksi lukuisia terveysvaikutuksia etenkin tuoreena nautittuna; se muun muassa raikastaa hengityksen ja auttaa ruuansulatusvaivoihin ja sisältää paljon mineraaleja ja antioksidantteja. Säilytä jääkaapissa tai ikkunalaudalla ja muista kastella.
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