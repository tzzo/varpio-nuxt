
<template lang="pug">
	.container
		article.product
			.left
				h1.title Salsa
				span.recipe-title Ainekset:
				ul 
					li 4 Varpion tomaattia
					li 1 punainen chili
					li 1 pieni punasipuli
					li 5 vartta Varpion korianteria
					li 1 pieni valkosipulinkynsi
					li 1 rkl oliiviöljyä
					li ripaus suolaa ja pippuria
					li pieni loraus sitruunan mehua
				span.recipe-title Valmistusohjeet
				ol
					li Leikkaa tomaateista sisus pois.
					li Hienonna kaikki ainekset pieneksi silpuksi ja sekoita.
					li Anna maustua noin puol tuntia.
			.right
				nuxt-img(preset="detail" src="/img/recipes/salsa.jpg")
</template>

<script>
export default {
	layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped></style>
