import Vue from 'vue'
import Router from 'vue-router'
import InGame from '@/vews/InGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InGame',
      component: InGame
    }
  ]
})
