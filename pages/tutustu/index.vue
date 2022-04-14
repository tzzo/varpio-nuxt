<template lang="pug">
	.index.tutustu
		silent-box(:gallery="kuvat")
</template>

<script>
export default {
	name: 'index',
	layout: 'default-nav-footer',
	data() {
		return {
			kuvat: [
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
.tutustu
	padding: 100px 0 40px
	text-align: center
	max-width: 1000px
	margin: auto
	@media (min-width: 500px)
		padding: 120px 0 40px
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
	@media (max-width: 500px)
		#silentbox-overlay__arrow-buttons .arrow-next
			right: 1rem !important
		#silentbox-overlay__arrow-buttons .arrow-previous
			left: 1rem !important
</style>