<template lang="jade">
  #app
    h1 {{ title }}
    //h1(v-for="issue in issues") {{ issue.text }}
</template>

<script>
  // DATA
  export default {
    data () {
      return {
        title: 'AN-AH-KAY',
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