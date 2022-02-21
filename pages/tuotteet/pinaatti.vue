<template lang="pug">
  .container
    article.product
      .left
        h1.title Pinaatti
        span Herkullinen ruukkupinaatti soveltuu hyvin tuoreeltaan salaatteihin ja smoothieen tai kypsänä moniin eri ruokiin, kuten kasvispihvit, pinaattiletut tai pinaattikeitto. Katso herkullinen Varpion pinaattikeiton ohje sivujemme reseptiosiosta. Tätä nuorta ja pehmeää pinaattia ei tarvitse ryöpätä. Säilytä viileässä tai ikkunalaudalla ja muista kastella.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="img/products/pinaatti.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Pinaatti – Varpio Puutarha'
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