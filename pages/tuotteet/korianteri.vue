<template lang="pug">
  .container
    article.product
      .left
        h1.title Korianteri
        p Korianteri on yksi maailman vanhimmista maustekasveista. Korianterilla on ruuansulatusta edistävä vaikutus ja se sisältää paljon ravintoaineita ja mineraaleja, kuten kalsiumia, kaliumia, magnesiumia ja fosforia. Sillä voi esimerkiksi maustaa salaatteja ja lämpimiä ruokia, joihin ne lisätään vasta valmistuksen loppuvaiheessa.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/korianteri.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Korianteri – Varpio Puutarha'
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
