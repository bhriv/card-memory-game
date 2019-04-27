import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter_title: 'Game Count',
    count: 1
  },
  mutations: {
    increment (state) {
      state.counter_title++
    }
  },
  actions: {

  }
})

