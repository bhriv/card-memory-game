import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter_title: 'Level',
    count: 2,
    mistakes: 0,
    pairs: 2,
    coffee: ["espresso","double espresso","latte","flat white","long black","cafe latte","piccolo latte","cappuccino","americano","macchiato","mochaccino","ristretto","long macchiato","affogato"]
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

