import Vue from 'vue'
import Vuex from 'vuex'
import coins from '@/store/modules/coins'
import sidebar from '@/store/modules/sidebar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coins,
    sidebar
  }
})
