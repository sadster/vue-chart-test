import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './js/store'
import HighchartsVue from 'highcharts-vue'
import './scss/style.scss'

Vue.use(Vuex)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')