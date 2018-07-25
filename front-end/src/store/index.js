import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(Buefy)

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    loading: false,
    messages: [],
    error: {
      title: '',
      message: ''
    }
  },
  getters,
  mutations,
  actions
})
