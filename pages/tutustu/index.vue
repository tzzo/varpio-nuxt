<template lang="pug">
  .index
    header
    section.recipes.container
      h1 Tutustu puutarhan arkeen
      p Varpio Puutarhan antimista löydät parhaita ainesosia moniin arkisiin herkkuihin. Kauniit ja riittoisat yrttimme toimivat mainiosti myös juhlapöydän koristeena. Vihannekset ovat terveellisen ruokavalion perusta, mutta tälle sivulle kokoamme parhaimman makuiset tavat hyödyntää tuotteitamme. Vinkkejä hyvistä resepteistä voi lähettää Facebook-sivuillemme tai sähköpostilla osoitteeseen tuukka@varpio.fi.
</template>

<script>
export default {
  name: 'index',
  layout: 'default-nav-footer'
}
</script>

<style lang="sass" scoped>
  header
    background-image: url('~assets/img/tutustu_header.jpg')
    background-size: cover
    background-position: bottom
    height: 40vmin
</style>
