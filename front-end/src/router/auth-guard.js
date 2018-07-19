import store from '../store/'
export default (to, from, next) => {
  if (store.getters.email !== '') {
    next()
  } else {
    next('/login')
  }
}
