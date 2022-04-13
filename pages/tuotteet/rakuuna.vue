<template lang="pug">
  .container
    article.product
      .left
        h1.title Rakuuna
        p Rakuuna on klassinen ranskalainen mausteyrtti, jonka tunnetuimmat käyttökohteet lienevät bearnaise ja tartar -kastikkeet. Rakuunan erityinen, aniksinen/fenkolinen, hieman karvas, vaniljainen ja sinappinen aromi sopii hyvin pikkelsien ja sinappien valmistukseen. Rakuuna muodostaa hyviä makupareja porkkanan, hunajan, vaalean kalan, valkoviinin, ja vähärasvaisen lihan kanssa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/rakuuna.jpg")
</template>
<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Rakuuna – Varpio Puutarha'
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