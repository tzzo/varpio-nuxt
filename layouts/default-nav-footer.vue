<template lang="pug">
.layout-wrap
  Nav
  Nuxt
  Footer
  CookieConsent(v-show="!cookie")
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