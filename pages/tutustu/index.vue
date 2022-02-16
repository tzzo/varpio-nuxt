<template lang="pug">
	.index.text-center
		header
			nuxt-img(src="/img/tutustu_header.jpg")
		section.recipes.container
			h1 Tutustu puutarhan arkeen
			p Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Kauniit ja riittoisat yrttimme toimivat mainiosti myös juhlapöydän koristeena. Vihannekset ovat terveellisen ruokavalion perusta, mutta tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme. Vinkkejä hyvistä resepteistä voi lähettää Facebook-sivuillemme tai sähköpostilla osoitteeseen tuukka@varpio.fi.

		span.gallery-title.font-canvas Elokuu puutarhalla
		silent-box(:gallery="elokuu")
		span.gallery-title.font-canvas Orimattilan puutarha 2020
		silent-box(:gallery="puutarha")
		span.gallery-title.font-canvas Virkkala syksyllä 2019
		silent-box(:gallery="virkkala")



</template>

<script>
export default {
	name: 'index',
	layout: 'default-nav-footer',
	data() {
		return {
			elokuu: [
					{
							src: '/img/tutustu/elokuu-1.jpg',
							//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
							//-alt: 'Blue starry night photo.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-2.jpg',
							//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
							//-alt: 'Landscape photo of mountain with fog.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-3.jpg',
							//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
							//-alt: 'Low angle photo of pine trees.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-4.jpg',
							//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
							//-alt: 'Blue starry night photo.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-5.jpg',
							//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
							//-alt: 'Landscape photo of mountain with fog.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-6.jpg',
							//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
							//-alt: 'Low angle photo of pine trees.',
							thumbnailWidth: '300px'
					},
			],
			puutarha: [
				{
						src: '/img/tutustu/puutarha-1.jpg',
						//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
						//-alt: 'Blue starry night photo.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/puutarha-2.jpg',
						//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
						//-alt: 'Landscape photo of mountain with fog.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/puutarha-3.jpg',
						//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
						//-alt: 'Low angle photo of pine trees.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/puutarha-4.jpg',
						//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
						//-alt: 'Blue starry night photo.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/puutarha-5.jpg',
						//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
						//-alt: 'Landscape photo of mountain with fog.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/puutarha-6.jpg',
						//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
						//-alt: 'Low angle photo of pine trees.',
						thumbnailWidth: '300px'
				},
			],
			virkkala: [
				{
						src: '/img/tutustu/virkkala-1.jpg',
						//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
						//-alt: 'Blue starry night photo.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/virkkala-2.jpg',
						//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
						//-alt: 'Landscape photo of mountain with fog.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/virkkala-3.jpg',
						//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
						//-alt: 'Low angle photo of pine trees.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/virkkala-4.jpg',
						//-description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
						//-alt: 'Blue starry night photo.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/virkkala-5.jpg',
						//-description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
						//-alt: 'Landscape photo of mountain with fog.',
						thumbnailWidth: '300px'
				},
				{
						src: '/img/tutustu/virkkala-6.jpg',
						//-description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
						//-alt: 'Low angle photo of pine trees.',
						thumbnailWidth: '300px'
				},
			]
		}
	}
}
</script>

<style lang="sass" scoped>
	.recipes
		padding-top: 40px
		padding-bottom: 40px
	header
		position: relative
		height: 52vh
		img
			position: absolute
			top: 0
			left: 0
			right: 0
			width: 100%
			height: 52vh
			object-fit: cover

	#silentbox-gallery
		display: flex
		align-items: center
		justify-content: space-evenly
		max-width: 1000px
		margin: 0 auto
		flex-wrap: wrap
		padding-bottom: 40px
		img
			padding: 16px
			margin: 16px
	.gallery-title
		font-size: 25px
		line-height: 1.5
		padding-top: 32px
		padding-bottom: 16px
		display: block
	.index
		padding-bottom: 40px
</style>

<style lang="sass">
	#silentbox-overlay
		z-index: 2500 !important
	.silentbox-item
		padding: 16px
</style>