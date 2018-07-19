import axios from 'axios'
import router from '../router'

export default {
  register ({commit}, user) {
    commit('setLoading', true)
    axios.post('/api/signup', {
      name: user.username,
      email: user.email,
      password: user.password
    },
    commit('setUser', user)
    )
    .then(response => {
      commit('setError', {
        title: 'Message',
        message: response.data.message
      })
    })
    .catch(err => {
      console.log(err.message)
      commit('setError', {
        title: 'Error',
        message: err.response.data.message
      })
    })
    .finally(() => {
      commit('setLoading', false)
    })
  },
  login ({commit}, user) {
    commit('setLoading', true)
    axios.post('/api/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      if (res.data.auth) {
        commit('setUser', user)
        commit('setError', {
          title: 'Message',
          message: 'Login success'
        })
      }
    })
    .catch(err => {
      commit('setError', {
        title: 'Error',
        message: err.response.data.message
      })
    })
    .finally(() => {
      commit('setLoading', false)
    })
  },
  logout ({commit}) {
    axios.get('/api/logout')
    .then(() => {
      commit('setUser', {
        username: '',
        email: ''
      })
      router.push('/login')
    })
    .catch(err => {
      console.log('Lỗi đăng xuất', err)
    })
  },
  setError ({commit}) {
    commit('setError', {
      title: '',
      message: ''
    })
  }
}
