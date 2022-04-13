<template lang="pug">
	.nav-wrap
		nav.navigation(:class="{'sticky-nav': scrollPosition > 400 && !menuToggle, 'sticky-nav-exit': scrollPosition > 150 && scrollPosition < 420 && !menuToggle && !scrollingDown, 'nav-index': $nuxt.$route.path === '/'}")
			NuxtLink.logo-wrap(to="/")
				img.white(src="~/assets/img/logo_valkoinen.png" v-if="$nuxt.$route.path === '/'" alt="Varpio puutarha valkoinen logo" aria-label="Etusivu")
				img.green.logo(src="~/assets/img/logo_green.png" alt="Varpio puutarha vihreä logo" aria-label="Etusivu")
			button.nav-toggle.open-toggle(aria-expanded="false" aria-controls="menu")
				span
				span
				span
			ul#menu(hidden)
				li
					NuxtLink(to="/") Etusivu
				li
					NuxtLink(to="/tuotteet") Tuotteet
				li
					NuxtLink(to="/reseptit") Reseptit
				li
					a(href="#footer") Yhteystiedot

</template>

<script>
export default {
	name: 'Nav',
	methods: {
		updateScroll() {
			this.scrollingDown = window.scrollY > this.scrollPosition
			this.scrollPosition = window.scrollY
		}
	},
	props: [
		'page'
	],
	mounted() {
		window.addEventListener('scroll', this.updateScroll);
		const toggleMenu = document.querySelector(".navigation button");
		const menu = document.querySelector(".navigation ul");
		//-const nav = document.querySelector(".navigation");
		const body = document.body;

		toggleMenu.addEventListener("click", function () {
			const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
			toggleMenu.setAttribute("aria-expanded", !open);
			menu.hidden = !menu.hidden;
			body.classList.toggle("noscroll");

	
			if (!menu.hidden) {
				menu.querySelector('a').focus();
			}
		});
		menu.addEventListener("click", function () {
			const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
			toggleMenu.setAttribute("aria-expanded", !open);
			menu.hidden = !menu.hidden;
			body.classList.remove("noscroll");
		});
	},
	data() {
		return {
			scrollPosition: null,
			scrollingDown: undefined,
			menuToggle: false
		}
	}
}
</script>

<style lang="sass" scoped>
	[hidden]
		display: none

	.logo-wrap
		z-index: 1000

	@media (min-width: 40rem)
		.navigation button 
			display: none
		#menu 
			display: flex
	@media (max-width: 40rem)
		#menu:not([hidden]):not(.sticky-nav)
			position: fixed
			top: 0
			left: 0
			right: 0
			bottom: 0
			display: flex
			flex-direction: column
			background: white
			margin: 0
			overflow: hidden
			justify-content: center
			align-items: center
			height: 100vh
			a
				font-family: "Canvas Text Serif"
				font-size: 32px
				line-height: 2
				color: black
				
	nav
		display: flex
		justify-content: space-between
		align-items: center
		z-index: 2000
		ul
			display: flex
			list-style: none
			z-index: 100
			li
				padding-right: 32px
				a
					color: white
					text-decoration: none
					letter-spacing: .4px
					&:hover
						color: black
		&:not(.nav-index)
			background-color: white
			min-height: 77px
			a
				color: #545454
				&:hover
					color: black
	.sticky-nav
		background: rgba(white,.8)
		backdrop-filter: blur(8px)
		position: fixed
		top: 0
		left: 0
		right: 0
		animation: enterNav .3s forwards
	
	.sticky-nav-exit
		animation: exitNav .5s forwards
		position: fixed
		top: 0
		left: 0
		right: 0
		background: rgba(white,.8)
		backdrop-filter: blur(8px)

	.logo
		padding: 8px
		width: 64px
		margin: 0 0 0 4px

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

.nav-toggle 
	width: 30px
	height: 30px
	position: relative
	background: transparent
	padding: 4px
	margin: 0 16px 0 0
	border: none
	z-index: 1000

.nav-toggle span 
	height: 3px
	background-color: black
	display: block
	transition: transform 300ms, opacity 300ms
	will-change: transform

nav.nav-index:not(.sticky-nav) .nav-toggle span
	background-color: white

.nav-toggle[aria-expanded="false"] span:nth-child(1)
	width: 100%

.nav-toggle[aria-expanded="false"] span:nth-child(2)
	width: 100%
	margin: 4px 0

.nav-toggle[aria-expanded="false"] span:nth-child(3)
	width: 100%


.nav-toggle[aria-expanded="true"] span:nth-child(1)
	width: 100%
	transform: rotate(45deg)
	transform-origin: 3px 5px
	background-color: black !important

.nav-toggle[aria-expanded="true"] span:nth-child(2)
	opacity: 0
	background: transparent
	margin: 4px 0
	transform: translateX(-100%)
	background-color: black !important

.nav-toggle[aria-expanded="true"] span:nth-child(3)
	width: 100%
	transform: rotate(-45deg)
	transform-origin: 2px -2px
	background-color: black !important

nav:not(.nav-index)
	.nuxt-link-exact-active
		color: black
		font-weight: bold

.nav-index
	.green
		display: none
		
.nav-index.sticky-nav, .nav-index.sticky-nav-exit
	.white
		display: none
	.green
		display: block
	a
		color: #545454
		&:hover
			color: black

.white
	padding: 24px
	visibility: hidden
body.noscroll
	.white
		display: none
	.green
		display: block

.nav-wrap
	position: absolute
	top: 0
	left: 0
	right: 0

</style>
