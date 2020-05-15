const setError = (state, payload) => {
  state.error = payload
}
const setLoading = (state, payload) => {
  state.loading = payload
}
const setTodo = (state, payload) => {
  state.todoItems = payload
}

export { setError, setLoading, setTodo }
