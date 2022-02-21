<template lang="pug">
  .container
    article.product
      .left
        h1.title Kurkku
        p Varpion perinteikäs kurkku pakataan käsin käteviin pusseihin, jotka on helppo sulkea uudelleen. Kurkku on erittäin vesipitoinen vihannes: siinä on vain 3% kuiva-ainetta ja 97% vettä! Kurkku edistää suolen toimintaa, hiusten kasvua sekä ehkäisee kynsien haurastumista. Säilytä viileäkaapissa tai huoneenlämmössä.
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
