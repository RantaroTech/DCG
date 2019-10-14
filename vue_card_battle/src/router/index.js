import Vue from 'vue'
import Router from 'vue-router'
import InGame from '@/vews/InGame'
import Top from '@/vews/top'
import introduction from '@/vews/introduction'
import ResultWin from '@/vews/resultWin'
import ResultLose from '@/vews/resultWin'
import ResultDraw from '@/vews/resultDraw'
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
      path: '/ResultDraw',
      name: 'ResultDraw',
      component: ResultDraw
    },
    {
      path: '/ResultWin',
      name: 'ResultWin',
      component: ResultWin
    },
    {
      path: '/ResultLose',
      name: 'ResultLose',
      component: ResultLose
    },
    // 不明パスへのリンクはTopへ飛ばす
    {
      path: '*',
      name: 'Top',
      component: Top

    }
  ]
})
