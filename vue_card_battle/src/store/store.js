import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user_module'
import enemyModule from './enemy_module'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userModule,
    enemyModule
  }
})
export default store
