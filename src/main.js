import Vue from 'vue'
import App from './App'

import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)

Vue.prototype.HOST = '/api'

import '@/assets/css/app'

import router from '@/router'

import $ from 'jquery'
import boostrap from 'bootstrap'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
