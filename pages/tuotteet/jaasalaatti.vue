<template lang="pug">
  .container
    article.product
      .left
        h1.title Jääsalaatti
        p Suosittu jääsalaatti on rapean keräsalaatin ja lehtisalaatin risteytys, joka on lehtevää ja rapeaa. Sopii hyvin salaattisekoituksiin antamaan jämäkkyyttä salaatille. Se ei myöskään nuudu niin nopeasti kuin pehmeälehtiset salaatit. Kestää myös jonkin verran kuumennusta. Säilytä omassa pussissaan jääkaapissa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/jaasalaatti.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Jääsalaatti – Varpio Puutarha'
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
