<template lang="jade">
  #app
    h1 {{ title }}
    nav
      h1
        a(v-link="{ path: '/no-01' }") no-01
        a(v-link="{ path: '/no-02' }") no-02
        a(v-link="{ path: '/no-03' }") no-03
        a(v-link="{ path: '/no-04' }") no-04
        a(v-link="{ path: '/no-04-5' }") no-04.5
        a(v-link="{ path: '/no-05' }") no-05
</template>

<script>
  // DATA - Variable in v-link? v-link="{ path: '/{{ issue.text }}' }")
  export default {
    data () {
      return {
        title: 'SASS ALL DAY - SPANK ALL NIGHT',
        issues: [
          { text: 'no-01' },
          { text: 'no-02' },
          { text: 'no-03' }
        ]
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