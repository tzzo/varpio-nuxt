<template lang="pug">
	.index
		section.header
			img.fade-in.header-bg(src="/img/header-og.jpg" 
				alt="Varpio puutarha kasvihuone" 
				srcset="/img/header-700.jpg 700w, /img/header-1200.jpg 1200w, /img/header-og.jpg 1400w")

			//-nuxt-img(fit="cover" width="1600" src="/img/header.jpg" alt="Varpio puutarha logo" loading="eager")
			Nav(:page="'index'")
			.container
				//-h1 Varpio puutarha
				h1
					nuxt-img.fade-in.lander-logo(src="/img/logo-lander.svg" alt="Varpio puutarha")

		section.intro-wrapper.container
			.intro-block-header.lg
				h2 Kotimaisia vihanneksia ympäri vuoden Orimattilasta
			.intro
				.intro-block.intro-block-header.xl
					h2 Kotimaisia vihanneksia ympäri vuoden Orimattilasta
				.intro-block
					h3.title.title-25 Korkealaatuista lähiruokaa
					p Varpio Puutarha viljelee ja myy laadukkaita kotimaisia vihanneksia. Puutarhamme Orimattilassa tarjoaa Hämeen, Uudenmaan ja Kymenlaakson asukkaille mahdollisuuden nauttia lähellä kasvatettuja, maukkaita ja tuoreita kasviksia ympäri vuoden. Kuljetamme tuotteet suoraan lähialueen kauppoihin ja puutarhalla toimii myös oma myymälä.
				.intro-block
					h3.title.title-25 Puhtaasti, mukana myös maku
					p Kaikki Varpio Puutarhan antimet ovat kasvatettu huolellisesti laatuun panostaen. Suosittujen vihannesten maku syntyy harkittujen lajikevalintojen lisäksi hyvistä ja puhtaista viljelykäytännöistä. Lajittelemme ja pakkaamme kaikki tuotteet käsityönä. Meiltä ostaessaan asiakas voi aina luottaa saavansa laadukkaita, lähellä kasvatettuja kasviksia. 

		section.divider
			nuxt-img(loading="lazy" width="2000" src="/img/hannu_divider.jpg" alt="Varpio puutarhan kasvihuone")
		
		section.products.container.text-center
			h2.title-25 Tuotteet
			p Varpion tuoteperheeseen kuuluu yli neljäkymmentä raikasta, kasvihuoneessa puhtaasti kasvatettua tuotetta. Kasvisten lajikevalinnoissa panostamme aina ensisijaisesti makuun ja pyrimme aktiivisesti löytämään parempia lajikkeita viljeltäväksi. Teemme jatkuvaa kehitystyötä valikoimamme laajentamiseksi entisestään. Vieraillessasi Orimattilan puutarhan myymälässä voit löytää myynnistä tuotteita, joita ei vielä kaupoista saa!
			.list-preview-wrap
				NuxtLink.list-preview(to="tuotteet/basilika")
					nuxt-img(preset="product" loading="lazy" src="/img/products/basilika.jpg" alt="Varpio puutarha basilika yrttiruukku")
					span Basilika
				NuxtLink.list-preview(to="tuotteet/tilli")
					nuxt-img(preset="product" loading="lazy" src="/img/products/tilli.jpg" alt="Varpio puutarha tilli yrttiruukku")
					span Tilli
				NuxtLink.list-preview(to="tuotteet/persilja")
					nuxt-img(preset="product" loading="lazy" src="/img/products/persilja.jpg" alt="Varpio puutarha persilja yrttiruukku")
					span Persilja
				NuxtLink.list-preview(to="tuotteet/tomaatti-irto")
					nuxt-img(preset="product" loading="lazy" src="/img/products/tomaatti-irto.jpg" alt="Varpio puutarha irto tomaatti")
					span Tomaatti
				NuxtLink.list-preview(to="tuotteet/kurkku")
					nuxt-img(preset="product" loading="lazy" src="/img/products/kurkku.jpg" alt="Varpio puutarha kurkku")
					span Kurkku
				NuxtLink.list-preview(to="tuotteet/minttu")
					nuxt-img(preset="product" loading="lazy" src="/img/products/minttu.jpg" alt="Varpio puutarha minttu yrttiruukku")
					span Minttu
				
			NuxtLink.button-transparent(to="/tuotteet") Katso kaikki tuotteet

		section.recipes
			nuxt-img(src="/img/resepti_divider.jpg" alt="Marinara kastike" loading="lazy")
			.container
				h2.white Varpion Reseptit
				NuxtLink.button-transparent-white(to="/reseptit") Katso kaikki reseptit
		
		section.about.container
			.text-center
				h2.title-25 Kolmannen polven perheyritys 
				p Varpio Puutarhan perustivat Virkkalaan vuonna 1970 Pirkko ja Antti Varpio yhdessä. Tuolloin toiminta käynnistyi kurkun viljelyllä. Puutarhan toiminta laajeni vuonna 1987, kun perustajasukupolven poika Hannu ryhtyi yrittäjäksi 23 vuoden iässä rakentaen Orimattilaan uudet kasvihuoneet, jotka ovat edelleen käytössä.
				br
				p Vuonna 2018 Hannun poika Tuukka yhdessä puolisonsa Iitun kanssa lähti Hannun kumppaniksi kehittämään perheyrityksen toimintaa.
			.person-wrap
				.person
					nuxt-img(preset="person" loading="lazy" src="/img/hannu.jpg" alt="Varpio puutarha Hannu")
					.person-text
						span.font-canvas Hannu
						p Yli 30 vuotta yrittäjänä toiminut Hannu tekee työtään väsymättä ja kelloa katsomatta. Hannu tuntee Orimattilan kasvihuoneet kuin omat taskunsa ja viljelyn lisäksi hänellä pysyy kädessä niin vasara, jakoavain kuin hitsipillikin.
						p Työn ulkopuolella Hannu pitää kunnostaan huolta harrastamalla judoa sekä koskimelontaa.
				.person
					nuxt-img(preset="person" loading="lazy" src="/img/tuukka.jpg" alt="Varpio puutarha Tuukka")
					.person-text
						span.font-canvas Tuukka
						p Tuukka toimii yrityksen operatiivisena johtajana. Paperitöiden ohella arkeen mahtuu paljon myös käytännön työtehtäviä. Kehitysprojektien lisäksi Tuukka suunnittelee ja osallistuu viljelytyöhön,  ylläpitää puutarhalla tarvittavia laitteita ja tuuraa tarvittaessa kuskiakin.
						p Koulutukseltaan Tuukka on rakennustekniikan insinööri. Hän nauttii suuresti puutarhatyön monipuolisuudesta ja lähes rajattomilta tuntuvista kehittymismahdollisuuksista.
				.person
					nuxt-img(preset="person" loading="lazy" src="/img/iitu.jpg" alt="Varpio puutarha Iitu")
					.person-text
						span.font-canvas Iitu
						p Iitu toimii puutarhalla tuotantopäällikkönä ja vastaa tuotannon ja töiden suunnittelusta. Hän vetää puutarhan noin 20 henkilön tuotantotiimiä. 
						p Iitun tausta on kaupan alalla ja hän on tuonut puutarhalle asiakaslähtöisyyttä ja ymmärrystä vihanneskaupasta päivittäistavarakaupan näkökulmasta.

		
		section.garden
			nuxt-img(src="/img/garden.jpg" loading="lazy" width="1600" height="536" alt="Varpio puutarha kasvihuone ja työntekijä")
			.container
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
		min-height: 100vh
		display: flex
		.header-bg
			height: 100%
			max-height: 100vh
			position: absolute
			top: 0
			left: 0
			right: 0
			width: 100%
			object-fit: cover
		.container
			display: flex
			align-items: center
			h1 
				font-size: 50px
				color: white
				line-height: 1
				text-align: center
				text-shadow: 1px 1px 3px #3c3c3c
				margin: 0
				@media (min-width: 500px)
					font-size: 77px
	.intro
		display: flex
		margin: auto
		text-align: center
		flex-wrap: wrap
	.intro-wrapper
		padding: 80px 0 64px
	.intro-block
		padding: 32px
		flex: 1
		@media (min-width: 500px)
			min-width: 400px	
			max-width: 530px
			margin: 0 auto
	.divider
		img
			width: 100%
			min-height: 260px
			max-height: 500px
			object-fit: cover
	.recipes
		display: flex
		align-items: center
		justify-content: center
		flex-direction: column
		padding: 160px 16px 
		position: relative
		.container
			z-index: 10
		img
			position: absolute
			top: 0
			left: 0
			right: 0
			width: 100%
			height: 100%
			object-fit: cover
		h2
			font-size: 55px
			line-height: 1
			text-shadow: 1px 1px 3px #3c3c3c
	.person-wrap
		display: flex
		justify-content: center
		flex-direction: column
		@media (min-width: 1600px)
			flex-direction: row
			align-items: flex-start
		.person
			display: flex
			justify-content: center
			align-items: center
			padding: 16px
			flex-direction: column
			text-align: center
			padding-bottom: 64px
			img
				display: inline-block
				width: 100%
				max-width: 280px
				object-fit: contain
				padding-bottom: 32px
			@media (min-width: 768px) and (max-width: 1600px)
				padding: 52px 32px
				flex-direction: row
				text-align: left
				&:nth-child(2)
					flex-direction: row-reverse
				img
					padding-right: 32px
					padding-bottom: 0
			@media (min-width: 1600px)
				padding: 80px 16px 100px
		@media (max-width: 500px)
			flex-wrap: wrap

	.garden
		display: flex
		align-items: center
		justify-content: center
		flex-direction: column
		padding-top: 160px
		padding-bottom: 160px
		text-align: center
		position: relative
		h2
			text-shadow: 1px 1px 3px #3c3c3c
			font-size: 55px
			line-height: 1
		img
			position: absolute
			top: 0
			left: 0
			right: 0
			width: 100%
			height: 100%
			object-fit: cover
		.container
			z-index: 100

	.products
		padding-top: 80px
		padding-bottom: 120px
		p
			max-width: 700px
			text-align: center
			margin: 32px auto
	.person-text
		max-width: 600px
		padding: 0 32px
		.font-canvas
			font-size: 25px
			letter-spacing: .6px
			display: block
			padding-bottom: 16px
			color: #545454
	.lander-logo
		max-width: 290px
		max-height: 290px
		display: inline-block
		width: 100%
		z-index: 0
	.intro-block-header
		@media (min-width: 768px)
			margin: 32px 0
		h2
			font-size: 42px
			line-height: 1.2
			color: #545454
			text-align: center
			margin: 0

	.intro-block-header.xl
		display: none
	@media (min-width: 1400px)
		.intro-block-header.lg
			display: none
		.intro-block-header.xl
			display: block
		.intro-block, .intro-block-header h2
			text-align: left !important
			min-width: 0
		

</style>
