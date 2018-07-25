export default {
  setLoading (state, status) {
    state.loading = status
  },
  setUser (state, user) {
    state.username = user.username
    state.email = user.email
  },
  setError (state, status) {
    state.error.title = status.title
    state.error.message = status.message
  },
  setMessages (state, status) {
    state.messages = status
  }
}
