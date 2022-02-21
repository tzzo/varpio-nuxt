<template lang="pug">
  .container
    article.product
      .left
        h1.title Lehtikaali
        p Lehtikaali on tunnettu ravinnepitoisuudestaan. Varpion lehtikaalin pehmeä maku ja rakenne kätkevät sisäänsä paljon C- ja K-vitamiineja sekä karoteenia. Lehtikaali on kasvissyöjien suosikki rauta-, kalsium-, ja proteiinipitoisuutensa ansiosta. Tätä nuorta lehtikaalia ei tarvitse käsitellä, vaan voit nauttia sen suoraan ruukusta. Säilytä jääkaapissa tai ikkunalaudalla ja muista kastella.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/lehtikaali.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Lehtikaali – Varpio Puutarha'
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