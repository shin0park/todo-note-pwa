import { firestore } from '../firebase'

const getTasks = (state) => {
  state.commit('setLoading', true)
  state.commit('setError', null)
  let data
  const tasks = []
  firestore
    .collection('todo')
    .get()
    .then(docs => {
      docs.forEach(doc => {
        data = doc.data()
        console.log(data)
        tasks.push({
          completed: data.completed,
          item: data.item,
          id: doc.id
        })
        console.log(tasks)
      })
      state.commit('setTodo', tasks)
    })
    .catch((err) => {
      state.commit('setError', err)
    })
    .finally(() => {
      state.commit('setLoading', false)
    })
}

const addOneItem = (state, todoItem) => {
  state.commit('setLoading', true)
  const obj = {
    completed: false,
    item: todoItem
  }
  firestore.collection('todo').add(obj).then(r => {
    state.todoItems.push({
      completed: false,
      item: todoItem,
      id: r.id
    })
    console.log({
      completed: false,
      item: todoItem,
      id: r.id
    })
  }).catch((err) => {
    state.commit('setError', err)
  })
    .finally(() => {
      state.commit('setLoading', false)
    })
}
const removeOneItem = (state, payload) => {
  state.commit('setLoading', true)

  firestore.collection('todo').doc(payload.todoItem.id).delete().then(r => {
    state.todoItems.splice(payload.index, 1)
  }).catch((err) => {
    state.commit('setError', err)
  })
    .finally(() => {
      state.dispatch('getTasks')
      state.commit('setLoading', false)
    })
}
const completedOndItem = (state, payload) => {
  firestore.collection('todo').doc(payload.todoItem.id).update({
    completed: !payload.todoItem.completed
  }).then(r => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
  }).catch((err) => {
    state.commit('setError', err)
  })
    .finally(() => {
      state.dispatch('getTasks')
      state.commit('setLoading', false)
    })

}

export { getTasks, addOneItem, removeOneItem, completedOndItem }
