import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clicks: 1,
    data_category: 'coffee',
    counter_title: 'Level',
    count: 0,
    app_class: null,
    mistakes: 0,
    pairs: 2,
    api_loading_in_progress: false,
    api_loading_error: false,
    card_small: false,
    card_tiny: false,
    card_minature: false,
    coffee: [
      "espresso","double espresso","latte","flat white","long black","cafe latte","piccolo latte","cappuccino","americano","macchiato","mochaccino","ristretto","long macchiato","affogato",
      "soy latte","soy flat white","soy cafe latte","soy piccolo latte","soy cappuccino",
      "almond latte","almond flat white","almond cafe latte","almond piccolo latte","almond cappuccino",
      "decaf latte","decaf flat white","decaf cafe latte","decaf piccolo latte","decaf cappuccino",
      ]
  },
  mutations: {
    resetGameCount (state) {
      state.count = 0
    },
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
    apiLoadingInProgress(state,hasError) {
      console.log('apiLoadingInProgress called in Store')
      return state.api_loading_in_progress = hasError
    },
    apiLoadingError(state,hasError) {
      console.log('apiLoadingError called in Store')
      return state.api_loading_error = hasError
    },
    increment(state,payload) {
      console.log('## mutations increment called in Store: payload: '+payload)
      return state.clicks = state.clicks*payload
    },
    getDataOfType(state,payload) {
      console.log('## mutations getDataOfType called in Store: payload: '+payload)
      return state.data_category = payload
    },
    // checkCardSelections()
  },
  actions: {
    // call actions > increment using store.dispatch('increment')
    increment (context,payload) {
      // this fires mutations > increment
      context.commit('increment',payload)
    },
    getDataOfType (context,payload) {
      // this fires mutations > increment
      context.commit('getDataOfType',payload)
    }
  
  }
})

