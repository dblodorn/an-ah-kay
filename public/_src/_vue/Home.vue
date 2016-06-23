<template lang="jade">
  #app
    h1 {{ title }}
    //nav
      h1
        a(v-link="{ path: '/zines' }") ZINES
</template>

<script>
  // DATA - Variable in v-link? v-link="{ path: '/{{ issue.text }}' }")
  export default {
    data () {
      return {
        title: 'SASS ALL DAY - SPANK ALL NIGHT'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">
  body
    font-family: arial
  #app
    position: fixed
    top: 0
    left: 0
    z-index: 10
    padding: 1rem
</style>