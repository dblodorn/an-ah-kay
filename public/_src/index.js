import './_sass/main.sass'

import Vue from 'vue'
import VueRouter from 'vue-router'

import Background from './_vue/Background.vue'
import Home from './_vue/Home.vue'
import Zines from './_vue/Zines.vue'


new Vue({
  el: '#bg',
  components: { Background }
})

// VUE ROUTER

Vue.use(VueRouter);

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/': {
      component: Home
    },
    '/zines': {
      component: Zines
    }
})

router.start(App, '#app-zines')