import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './modules/Setting/index'
import Ecommerce from './modules/Ecommerce/index'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Setting,
    Ecommerce
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
