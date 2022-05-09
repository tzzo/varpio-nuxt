<template lang="pug">
.cookie-wrap.fade-in
  .content-wrap
    span Sivustomme käyttää evästeitä käyttökokemuksen parantamiseksi ja kävijäliikenteen tilastointiin
    .button-wrap
      button.approve.button-transparent(@click="acceptCookies()") Hyväksy
</template>

<script>
export default {
	name: 'CookieConsent',
  methods: {
    acceptCookies() {
      document.getElementsByClassName('cookie-wrap')[0].remove()
      this.$cookies.set("cookieConsent", true)
    }
  },
  computed: {
    cookie() {
			return this.$cookies.get('cookieConsent')
    }
	}
}
</script>

<style lang="sass" scoped>
  .cookie-wrap
    background: rgba(white, .85)
    padding: 16px
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 100
  .content-wrap
    display: flex
    justify-content: space-between
    align-items: center
    max-width: 1000px
    margin: auto
  .button-wrap
    display: flex
    button
      font-size: 16px
      padding: 6px 12px
      &:first-child
        margin-right: 8px
      &:not(.approve)
        background: transparent
        border: none
        color: #545454
        &:hover
          text-decoration: underline
      &.approve
        color: black
</style>