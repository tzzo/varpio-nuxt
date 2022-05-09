<template lang="pug">
div
	Nuxt
	Footer
	CookieConsent(v-show="!cookie")
	span {{cookie}}
</template>

<script>
export default {
	computed: {
    cookie() {
			return this.$cookies.get('cookieConsent')
    }
	}
}
</script>

<style lang="sass">
	body
		margin: 0
</style>
