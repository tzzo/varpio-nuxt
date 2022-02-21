
<template lang="pug">
	.container
		article.product
			.left
				h1.title Varpion kanasalaatti
				span.recipe-title Ainekset:
				ul.ingridients 
					li Varpion salaattimixiä
					li Varpion jääsalaattia
					li Varpion kurkku
					li Varpion punaista basilikaa
					li Punasipulia
					li Oliiveja
					li 200 g broilerin fileetä
					li Loraus oliiviöljyä
					li (Varpion itsetehtyä pestoa tai tzatzikia)
				span.recipe-title Valmistusohjeet:
				ol
					li Revi salaatteja oman maun mukaisessa suhteessa ja pilko kurkut.
					li Paista broilerinfileet oliiviöljyssä pannulla kypsäksi. Halutessasi voit kuullottaa myös punasipulia oliiviöljyssä.
					li Sekoita salaatit, kurkku ja basilikanlehtiä kulhossa.
					li Lisää joukkoon oliivit, punasipuli ja viipaloitu broilerin filee.
					li Mausta itsetehdyllä Varpion pestolla, tzatzikilla tai oliiviöljyllä.
			.right
				nuxt-img(preset="detail" width="602" height="451" src="/img/recipes/kanasalaatti.jpg")
</template>

<script>
import { setMetaTitle } from '~/plugins/metaTags'
export default {
	layout: 'default-nav-footer',
	computed: {
    pageTitle() {
      return 'Varpion kanasalaatti – Varpio Puutarha'
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