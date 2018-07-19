import Vue from 'vue'
import Register from '@/Components/Register'
import SignIn from '@/Components/SignIn'
import Home from '@/Components/Home'
import Alert from '@/share/Alert'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

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
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert,
      beforeEnter: AuthGuard
    }
  ]
})
