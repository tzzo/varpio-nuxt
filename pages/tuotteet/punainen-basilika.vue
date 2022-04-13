<template lang="pug">
  .container
    article.product
      .left
        h1.title Punainen basilika
        p Punainen basilika on vihreää sukulaistaan voimakkaamman makuinen, ja sen lehdet ovat hieman vahvemmat. Violetit basilikanlehdet tekevät salaateista, alkupalalautasista, pizzoista ja pastoista näyttävän näköisiä.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/products/punainen-basilika.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Punainen basilika – Varpio Puutarha'
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