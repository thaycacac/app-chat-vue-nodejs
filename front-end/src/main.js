import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App'
import router from './router'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import Vuex from 'vuex'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.use(VueSocketIO, process.env.NODE_ENV === 'development' ? io('localhost:5000') : io())
Vue.use(Buefy)
Vue.use(Vuex)

Vue.material.registerTheme({
  main: {
    primary: 'blue',
    accent: 'black'
  },
  login: {
    primary: 'blue',
    accent: {
      color: 'light-green',
      hue: 'A700'
    },
    warn: {
      color: 'red',
      hue: 'A700'
    }
  },
  success: {
    primary: {
      color: 'light-green',
      hue: 'A700'
    },
    accent: {
      color: 'light-green',
      hue: 'A700'
    },
    warn: {
      color: 'light-green',
      hue: 'A700'
    }
  },
  warning: {
    primary: {
      color: 'red',
      hue: 'A700'
    },
    accent: {
      color: 'red',
      hue: 'A700'
    },
    warn: {
      color: 'red',
      hue: 'A700'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
