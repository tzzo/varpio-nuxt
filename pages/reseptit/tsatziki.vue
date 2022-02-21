
<template lang="pug">
  .container
    article.product
      .left
        h1.title Tsatziki
        span.recipe-title Ainekset:
        ul.ingridients
          li 2 kpl Varpion kurkkua
          li 200 g turkkilaista jogurttia
          li 1 valkosipulin kynsi
          li Suolaa
          li Pippuria
          li Pieni loraus oliiviöljyä
        span.recipe-title Valmistusohjeet:
        ol
          li Raasta kurkku karkealla raastimella ja puserra tai raasta valkosipulin kynsi.
          li Laita raaste siivilään ja puristele pois ylimääräinen kurkun mehu.
          li Sekoita raasteen joukkoon jogurtti, valkosipuli ja mausteet.
          li Tarjoa esimerkiksi levitteenä tai grilliruokien lisäkkeenä.
      .right
        nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/tsatziki.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Tsatziki – Varpio Puutarha'
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