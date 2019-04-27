import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter_title: 'Level',
    count: 0,
    mistakes: 0,
    pairs: 2
  },
  mutations: {
    incrementGameCount (state) {
      state.count++
    },
    incrementPairsCount (state) {
      state.pairs++
    },
  },
  actions: {

  }
})

