import './_sass/main.sass'

import Vue from 'vue'
import Zines from './_vue/Zines.vue'
import Background from './_vue/Background.vue'

new Vue({
  el: 'body',
  components: { Zines, Background }
})