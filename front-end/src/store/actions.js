import axios from 'axios'

export default {
  register ({commit}, user) {
    commit('setLoading', true)
    axios.post('/api/signup', {
      name: user.username,
      email: user.email,
      password: user.password
    },
    commit('setRegister', user)
    )
    .then(response => {
      this.$dialog.alert(response.data.message)
    })
    .catch(err => {
      console.log(err.message)
      this.$dialog.alert({
        title: 'Lỗi',
        message: err.response.data.message,
        type: 'is-danger',
        hasIcon: true,
        icon: 'times-circle'
      })
    })
    .finally(() => {
      commit('setLoading', false)
    })
  }
}
