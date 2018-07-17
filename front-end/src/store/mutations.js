export default {
  setLoading (state, status) {
    state.loading = status
  },
  setUser (state, user) {
    state.username = user.username
    state.email = user.email
  }
}
