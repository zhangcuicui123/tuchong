import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Find from '@/views/Find'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      alias: '/index',
      component: Home
    },
    {
      path: '/find',
      component: Find
    }
  ]

})

export default router
