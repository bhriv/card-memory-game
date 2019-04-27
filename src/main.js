import Vue from 'vue'
import underscore from 'vue-underscore'
import App from './App.vue'
import router from './router'
import store from './store'

// Vendor UI Framework
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(underscore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
