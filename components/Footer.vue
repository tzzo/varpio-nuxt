<template lang="pug">
	footer#footer
		.footer-left
			.footer-content
				.footer-row
					h3.title.big Yhteystiedot
				.footer-row
					span.title.font-canvas Varpio Puutarha
					.wrap
						.footer-row-50
							span Varpio Puutarha Oy
							span Luhtaistentie 11
							span 16300 Orimattila
						.footer-row-50
							a(href="tel:+358405506879") 040 550 6879
							a(href="mailto:hannu@varpio.fi") hannu@varpio.fi
				.footer-row
					span.title.font-canvas Puutarhamyymälä
					.wrap
						.footer-row-50
							span Myymälä avoinna:
							span To-pe 10-14
						.footer-row-50
							span Luhtaistentie 11
							span 16300 Orimattila
				.footer-row
					span.title.font-canvas Seuraa somessa:
					.social-wrap
						a(href="https://www.facebook.com/varpiopuutarha/" target="_blank" title="Varpio Puutarha Facebook" rel="noopener")
							svg(data-name='Group 3' xmlns='http://www.w3.org/2000/svg' width='35.328' height='35.327')
								g(data-name='Group 2')
									g(data-name='Group 1')
										path(data-name='Path 1' d='M22.339 17.584h-3.058l.012 10.908-4.534.012-.012-10.908h-2.156v-3.851h2.156v-2.5a4.251 4.251 0 014.564-4.578l3.357.009v3.741h-2.437a.92.92 0 00-.959 1.048v2.269h3.457zM17.645.004a17.663 17.663 0 1017.683 17.641A17.665 17.665 0 0017.645.004z' fill='#545454')
						
						a(href="https://www.instagram.com/varpiopuutarha/" target="_blank" title="Varpio Puutarha Instagram" rel="noopener")
							svg(data-name='Group 13' xmlns='http://www.w3.org/2000/svg' width='34.972' height='34.972')
								g(data-name='Group 6')
									g(data-name='Group 5')
										g(data-name='Group 4')
											circle(data-name='Ellipse 1' cx='3.128' cy='3.128' r='3.128' fill='#545454' transform='translate(14.216 14.5)')
								g(data-name='Group 9')
									g(data-name='Group 8')
										g(data-name='Group 7')
											path(data-name='Path 2' d='M22.396 13.725a1.137 1.137 0 111.138-1.135 1.122 1.122 0 01-1.138 1.135zm-5.06 8.736a4.834 4.834 0 11.014-9.667 4.834 4.834 0 11-.014 9.667zm3.927-12.5l-7.817-.016a3.887 3.887 0 00-2.774.992 3.88 3.88 0 00-1 2.77l-.011 7.82a3.915 3.915 0 001.062 2.843 4 4 0 002.771 1l7.748.011a3.882 3.882 0 002.773-.991 3.637 3.637 0 001.071-2.771l.011-7.819a4.01 4.01 0 00-.991-2.774 3.806 3.806 0 00-2.842-1.069z' fill='#545454')
								g(data-name='Group 12')
									g(data-name='Group 11')
										g(data-name='Group 10')
											path(data-name='Path 3' d='M26.792 21.621a5.637 5.637 0 01-1.57 4.049 5.535 5.535 0 01-3.983 1.487l-7.748-.011a5.534 5.534 0 01-3.978-1.5 5.352 5.352 0 01-1.558-4.054l.011-7.819a5.26 5.26 0 015.553-5.536l7.819.011a5.243 5.243 0 015.465 5.554l-.011 7.819zM17.51.002a17.486 17.486 0 1017.462 17.507A17.474 17.474 0 0017.51.002z' fill='#545454')

		.footer-right
			iframe(title="Varpio puutarha kartalla" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.7469375379019!2d25.755445452077744!3d60.81191758211462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691dc0720a967bb%3A0x68b4674717ac9e8b!2sVarpio+Puutarha!5e0!3m2!1sfi!2sfi!4v1489871307128&z=5&output=embed" width="600" height="450" frameborder="0" style="border:0" allowfullscreen)
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="sass" scoped>
	footer
		width: 100%
		display: flex
		flex-wrap: wrap
		background: #F4F4F4
		.footer-content
			max-width: 400px
			margin: auto
			height: 100%
			display: flex
			flex-direction: column
			justify-content: center
		.footer-left, .footer-right
			flex: 1
			min-width: 320px
			min-height: 320px
		.footer-right
			iframe
				width: 100%
		.wrap
			display: flex
			justify-content: space-around
		.footer-row-50
			//-width: 50%
			span, a
				display: block
				color: #545454
		.big
			font-size: 29px
			margin-bottom: 0
		.social-wrap
			display: flex
			align-items: center
			justify-content: center
			padding-bottom: 40px
			a
				margin: 0 8px
		iframe
			height: 100%
	.title
		display: flex
		align-items: center
		justify-content: center
		padding: 24px 0
		color: #545454
		&:not(.big)
			font-size: 20px
	.footer-row
		margin-bottom: 16px
</style>