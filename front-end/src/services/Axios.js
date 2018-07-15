import axios from 'axios'

export default {
  register (User) {
    axios.post('/api/signup', {
      name: User.username,
      email: User.email,
      password: User.password
    })
    .then(res => {
      alert(res.data.message)
    })
    .catch(err => {
      console.log(err.message)
      alert(err.response.data.message)
    })
    .then(() => {
      this.loading = false
    })
  },
  login (User) {
    axios.post('/api/login', {
      email: User.email,
      password: User.password
    })
    .then(res => {
      if (res.data.auth) {
        this.$emit('auth', [res.data.name, res.data.email])
      }
    })
    .catch(err => {
      alert(err.response.data.message)
    })
    .then(() => {
      this.loading = false
    })
  }
}
