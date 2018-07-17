import axios from 'axios'
// import Buefy from 'buefy'

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
      // this.$dialog.alert(response.data.message)
      alert(response.data.message)
      console.log(response.data.message)
    })
    .catch(err => {
      console.log(err.message)
      alert(err.response.data.message)
      // Buefy.$dialog.alert({
      //   title: 'Lỗi',
      //   message: err.response.data.message,
      //   type: 'is-danger',
      //   hasIcon: true,
      //   icon: 'times-circle'
      // })
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
        alert('Login success')
        console.log('login success')
      }
    })
    .catch(err => {
      alert(err.response.data.message)
    })
    .finally(() => {
      commit('setLoading', false)
    })
  }
}
