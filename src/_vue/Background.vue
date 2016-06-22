<template lang="jade">
  #logo-horizontal
    img(v-bind:src="logo")
  .landing-video
    video(autoplay='' muted='' loop='' poster='https://s3-us-west-1.amazonaws.com/db13/video/cover.jpg')
      source(v-bind:src="video" type='video/mp4')
</template>

<script>
  export default {
    data () {
      return {
        title: 'VIDEO',
        logo: 'imgs/logos/anahkay-logo-horizontal.svg',
        video: 'https://s3-us-west-1.amazonaws.com/db13/video/anahkay-mix.mp4',
      }
    }
  }

  setTimeout(function() {
    document.querySelector('.landing-video').classList.add("fade-in");
  }, 1000);

</script>

<style lang="sass?indentedSyntax" scoped>
  .landing-video
    position: absolute
    display: block
    top: 0
    left: 0
    z-index: 0
    height: 100vh
    width: 100vw
    overflow: hidden
    opacity: 0
    video
      position: absolute
      min-width: 100%
      min-height: 100%
      width: auto
      height: auto
      z-index: -1000
      overflow: hidden
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      background-color: rgba(0,0,0,0)
</style>