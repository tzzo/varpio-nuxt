<template lang="pug">
	.index
		header
			nuxt-img(src="/img/tutustu_header.jpg")
		section.container
			h1.text-center Laskutustiedot
			.billing-wrap
				div
					p.font-bold Verkkolaskutustiedot:
					p Verkkolaskuosoite: 
						span.bold 003702895709
					p Operaattori: 
						span.bold Maventa (003721291126)
				div
					p.font-bold Paperilaskut:
					p Varpio Puutarha Oy 
					p 02895709
					p PL 100
					p 80020 Kollektor Scan
				div
					p.font-bold Sähköpostilaskut: 
					p.bold 02895709@scan.netvisor.fi
</template>

<script>
export default {
	name: 'yhteystiedot',
	layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped>
	.container
		padding-top: 40px
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
	.index
		padding-bottom: 40px
	.billing-wrap
		display: flex
		margin: auto
		flex-wrap: wrap
		@media (min-width: 670px)
			justify-content: center
			flex-wrap: nowrap
		div
			padding: 0 32px 32px
		.font-bold
			font-weight: 600
			font-size: 18px
		p:not(:first-child):not(.top-spacing)
			margin: 4px 0
		.top-spacing
			margin-bottom: 4px
		.bold
			font-weight: bold
</style>