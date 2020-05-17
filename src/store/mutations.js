const setError = (state, payload) => {
  state.error = payload;
}
const setLoading = (state, payload) => {
  state.loading = payload;
}
const setTodo = (state, payload) => {
  state.todoItems = payload;
  console.log('setTodo')
  console.log(state.todoItems);
}
const setUser = (state, payload) => {
  state.user = payload.user;
  console.log(state.user);
  console.log(state.user.uid);
}
export { setError, setLoading, setTodo, setUser }
