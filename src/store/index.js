import Vue from 'vue'
import Vuex from 'vuex'

// IMPORT CUSTOM MODULES
import map from './modules/map'
import tabs from './modules/tabs'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
  	map,
  	tabs
  }
})