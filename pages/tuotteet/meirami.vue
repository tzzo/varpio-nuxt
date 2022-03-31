<template lang="pug">
  .container
    article.product
      .left
        h1.title Meirami
        p Meirami on pitkään suomessa käytetty, wanhan kansan mausteyrtti. Sen tunnetuin käyttökohde lienee perinteinen suomalainen hernekeitto. Sen maku on hento ja hienostunut, sukulaisiaan oreganoa ja minttua miedompi. Se sopii parhaiten kevyiden lämpimien ruokien mausteeksi, kuten kanalle tai vaalealle kalalle, haudutetuille kasviksille tai risotolle. 
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/meirami.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Meirami – Varpio Puutarha'
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