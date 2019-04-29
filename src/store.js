import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter_title: 'Level',
    count: 0,
    app_class: null,
    mistakes: 0,
    pairs: 2,
    card_small: false,
    card_tiny: false,
    card_minature: false,
    coffee: ["espresso","double espresso","latte","flat white","long black","cafe latte","piccolo latte","cappuccino","americano","macchiato","mochaccino","ristretto","long macchiato","affogato"]
  },
  mutations: {
    incrementGameCount (state) {
      state.count++
      if (state.count > 2){
        state.card_small = true
      }
      if (state.count > 3){
        state.card_tiny = true
      }
      if (state.count > 4){
        state.card_minature = true
      }
    },
    incrementPairsCount (state) {
      state.pairs++
    },
    incrementAppClass(state) {
      return 'applevel-'+state.count
    },
  },
  actions: {

  }
})

