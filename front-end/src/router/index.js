import Vue from 'vue'
import Register from '@/Components/Register'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
