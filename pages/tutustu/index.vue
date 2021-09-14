<template lang="pug">
	.index
		header
		section.recipes.container
			h1 Tutustu puutarhan arkeen
			p Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Kauniit ja riittoisat yrttimme toimivat mainiosti myös juhlapöydän koristeena. Vihannekset ovat terveellisen ruokavalion perusta, mutta tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme. Vinkkejä hyvistä resepteistä voi lähettää Facebook-sivuillemme tai sähköpostilla osoitteeseen tuukka@varpio.fi.

		silent-box(:gallery="gallery")



</template>

<script>
export default {
	name: 'index',
	layout: 'default-nav-footer',
	data() {
		return {
			gallery: [
					{
							src: '/img/tutustu/elokuu-1.jpg',
							description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
							alt: 'Blue starry night photo.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-2.jpg',
							description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
							alt: 'Landscape photo of mountain with fog.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-3.jpg',
							description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
							alt: 'Low angle photo of pine trees.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-4.jpg',
							description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
							alt: 'Blue starry night photo.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-5.jpg',
							description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
							alt: 'Landscape photo of mountain with fog.',
							thumbnailWidth: '300px'
					},
					{
							src: '/img/tutustu/elokuu-6.jpg',
							description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
							alt: 'Low angle photo of pine trees.',
							thumbnailWidth: '300px'
					},
			]
		}
	}
}
</script>

<style lang="sass" scoped>
	header
		background-image: url('~assets/img/tutustu_header.jpg')
		background-size: cover
		background-position: bottom
		height: 40vmin

	#silentbox-gallery
		display: flex
		align-items: center
		justify-content: space-around
		max-width: 1000px
		margin: 0 auto
		flex-wrap: wrap
		padding-bottom: 40px
		img
			padding: 16px
			margin: 16px
		
</style>

<style lang="sass">
	.silentbox-item
		padding: 16px
</style>