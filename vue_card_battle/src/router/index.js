import Vue from 'vue'
import Router from 'vue-router'
import InGame from '@/vews/InGame'
import Top from '@/vews/top'
import introduction from '@/vews/introduction'
import Result from '@/vews/result'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/InGame',
      name: 'InGame',
      component: InGame
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
  ]
})
