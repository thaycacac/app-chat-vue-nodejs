export default {
  setLoading (state, status) {
    state.loading = status
  },
  setRegister (state, user) {
    state.user.username = user.username
    state.user.email = user.email
  }
}
