<template lang="pug">
  .container
    article.product
      .left
        h1.title Timjami
        p Timjami on voimakas mausteyrtti, joka sopii hyvin monenlaiseen maustamiseen, erityisesti lihan, rasvaisen kalan, kanan, valkosipulin ja sitruunan makupariksi. Timjami kestää kuumennusta ja se voidaan lisätä patoihin ja paistoksiin jo heti kokkaamisen alkuvaiheessa. Usein timjamista ei syödä sen varsia, joten timjaminoksat on hyvä noukkia pois ruuasta ennen sen tarjoilua.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/timjami.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Timjami – Varpio Puutarha'
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