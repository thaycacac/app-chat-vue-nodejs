import Vue from 'vue'
import Register from '@/Components/Register'
import SignIn from '@/Components/SignIn'
import Home from '@/Components/Home'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
