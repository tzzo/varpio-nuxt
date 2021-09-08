<template lang="pug">
	.index
		section.header
			Nav(:page="'index'")
			.container
				h1 Varpio puutarha

		section.intro.container
			.intro-block
				h2.title.title-25 Korkealaatuista lähiruokaa
				p Varpio Puutarha viljelee ja myy laadukkaita kotimaisia vihanneksia. Puutarhamme Orimattilassa tarjoaa Päijät-Hämeen ja Uudenmaan asukkaille mahdollisuuden nauttia lähellä kasvatettuja, maukkaita ja tuoreita kasviksia ympäri vuoden. Orimattilan puutarhalla on myös suoramyynti torstaisin ja perjantaisin.
			.intro-block
				h2.title.title-25 Puhtaasti. Mukana myös maku
				p Kaikki Varpio Puutarhan antimet on kasvatettu huolellisesti puhtauteen panostaen. Suosittujen vihannesten maku syntyy harkittujen lajikevalintojen lisäksi hyvistä ja puhtaista viljelykäytännöistä. Lajittelemme tuotteet tarkasti käsityönä. Asiakas voi aina luottaa saavansa tavallista parempia, lähellä tuotettuja kotimaisia kasviksia.

		section.divider
			img(src="~assets/img/divider.jpg")
		
		section.products.container.text-center
			h2.title-25 Tuotteet
			p Varpion tuoteperheeseen kuuluu viitisentoista herkullista ja ravitsevaa kasvihuoneessa puhtaasti kasvatettua tuotetta. Kaikki värikkäät herkkumme kerätään ja pakataan käsityönä. Omat kuskimme toimittavat tuotteet kauppoihin parhaimmillaan parin tunnin sisällä sadonkorjuusta.
			p Lajikevalinnoissa panostamme aina määrän sijasta makuun. Pyrimme jatkuvasti löytämään parempia lajikkeita ja myös kokonaan uusia tuotteita viljeltäväksi. Orimattilan puutarhan myymälästä voit löytää tuotteita, joita ei vielä kaupoista saa!
			.list-preview-wrap
				NuxtLink.list-preview(to="tuotteet/basilika")
					nuxt-img(loading="lazy" width="375" height="262" quality="100" src="/img/products/basilika.jpg")
					span Basilika
				NuxtLink.list-preview(to="tuotteet/tilli")
					nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tilli.jpg")
					span Tilli
				NuxtLink.list-preview(to="tuotteet/persilja")
					nuxt-img(loading="lazy" width="375" height="262" src="/img/products/persilja.jpg")
					span Persilja
				NuxtLink.list-preview(to="tuotteet/tomaatti-irto")
					nuxt-img(loading="lazy" width="375" height="262" src="/img/products/tomaatti-irto.jpg")
					span Tomaatti
				NuxtLink.list-preview(to="tuotteet/kurkku")
					nuxt-img(loading="lazy" width="375" height="262" src="/img/products/kurkku.jpg")
					span Kurkku
				NuxtLink.list-preview(to="tuotteet/minttu")
					nuxt-img(loading="lazy" width="375" height="262" src="/img/products/minttu.jpg")
					span Minttu
				
			NuxtLink.button-transparent(to="/tuotteet") Katso kaikki tuotteet

		section.recipes
			.container
				h2.white Varpion Reseptit
				NuxtLink.button-transparent-white(to="/reseptit") Katso kaikki reseptit
		
		section.about.container.text-center
			h2.title-25 Kolmannen polven perheyritys
			p Varpio Puutarhan perustivat Pirkko ja Antti Varpio Virkkalaan vuonna 1970. Toiminta alkoi viljelemällä kesäkukkia ja joulutähtiä sekä tomaattia ja kurkkua. Varpio Puutarha laajeni vuonna 1987, kun Orimattilaan rakennettiin uudet kasvihuoneet. Sittemmin vastuu yrityksestä on siirtynyt nuoremmalle sukupolvelle ja molemmat puutarhat jatkavat edelleen toimintaansa.
			.person-wrap
				.person
					img(loading="lazy" src="~assets/img/hannu.jpg")
					span.font-canvas Hannu
				.person
					img(loading="lazy" src="~assets/img/tuukka.jpg")
					span.font-canvas Tuukka
				.person
					img(loading="lazy" src="~assets/img/iitu.jpg")
					span.font-canvas Iitu
		
		section.garden
			h2.white Tutustu puutarhan arkeen
			NuxtLink.button-transparent-white(to="/tutustu") Katso lisää
</template>

<script>
export default {
	name: 'index',
	layout: 'default',
	transition: 'page'
}
</script>

<style lang="sass" scoped>
	nav
		display: flex
		justify-content: space-between
		align-items: center
		position: absolute
		top: 0
		left: 0
		right: 0
		.green
			display: none
		ul
			display: flex
			list-style: none
			li
				padding-right: 32px
				a
					color: white
					text-decoration: none
	.header
		background-image: url('~assets/img/header.jpg')
		background-size: cover
		min-height: 70vh
		display: flex
		background-position: center
		.container
			display: flex
			align-items: center
			padding-top: 114px
			h1 
				font-size: 77px
				color: white
				line-height: 1
				text-align: center
				text-shadow: 1px 1px 3px black
	.intro
		display: flex
		max-width: 1000px
		margin: auto
		text-align: center
		flex-wrap: wrap
		padding: 80px 0 64px
	.intro-block
		padding: 16px
		flex: 1
		@media (min-width: 500px)
			min-width: 400px	
	.divider
		img 
			width: 100% 
	.recipes
		display: flex
		align-items: center
		justify-content: center
		flex-direction: column
		padding: 140px 16px 
		background-image: url('~assets/img/recipes.jpg')
		background-size: cover
		background-position: center
		text-align: center
		h2
			font-size: 55px
			line-height: 1
			text-shadow: 1px 1px 3px black
	.person-wrap
		display: flex
		justify-content: center
		.person
			display: flex
			flex-direction: column
			justify-content: center
			align-items: center
			padding: 16px
			img
				display: inline-block
				width: 100%
			span
				padding: 32px 0
				font-size: 20px
				letter-spacing: .6px
			@media (min-width: 768px)
				padding: 32px
		@media (max-width: 500px)
			flex-wrap: wrap
	.garden
		display: flex
		align-items: center
		justify-content: center
		flex-direction: column
		background-image: url('~assets/img/garden.jpg')
		background-size: cover
		background-position: center
		padding-top: 120px
		padding-bottom: 120px
		text-align: center
		h2
			text-shadow: 1px 1px 3px black
			font-size: 55px
			line-height: 1


	.sticky-nav
		background: white
		position: fixed
		top: 0
		left: 0
		right: 0
		animation: enterNav .3s forwards
		a
			color: black
		.white
			display: none
		.green
			display: block
	
	.sticky-nav-exit
		animation: exitNav .5s forwards
		position: fixed
		top: 0
		left: 0
		right: 0
		background: white
		.white
			display: none
		.green
			display: block
	@keyframes enterNav
		from 
			transform: translateY(-100%)
		to
			transform: translateY(0)
	@keyframes exitNav
		from 
			transform: translateY(0)
		to
			transform: translateY(-100%)
	.products
		padding-top: 80px
		padding-bottom: 120px
		p
			max-width: 700px
			text-align: center
			margin: 32px auto
</style>
