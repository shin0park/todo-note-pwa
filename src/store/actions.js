import {fireApp} from '../firebase'
import store from './index'
const db = fireApp.database();

const getTasks = (state) => {
    state.commit('setLoading', true)
    state.commit('setError', null)
    const tasks = []
    let user = store.state.user
    console.log("getTask")
    console.log(user)
    console.log(user.uid)
    db.ref('todo/').orderByChild('userId').equalTo(user.uid).once("value")
        .then(
            (notes) => {
                notes.forEach((todoItem) => {
                    tasks.push({
                        completed: todoItem.child('completed').val(),
                        item: todoItem.child('item').val(),
                        userId: todoItem.child('userId').val(),
                        ref: todoItem.ref
                    })
                    state.commit('setTodo', tasks)
                })
            }
        )
        .catch((err) => {
            state.commit('setError', err)
        })
        .finally(() => {
            state.commit('setLoading', false)
        })
}
const addOneItem = (state, todoItem) => {
    state.commit('setLoading', true)
    console.log('addOneItem');
    let user = store.state.user
    console.log(user);
    console.log(user.uid);
    const obj = {
        completed: false,
        item: todoItem,
        userId: user.uid
    }
    db.ref('todo/').push(obj).then(r => {
        state.todoItems.push(obj)
    }).catch((err) => {
        state.commit('setError', err)
    }).finally(() => {
        state.commit('setLoading', false)
    })
}
const removeOneItem = (state, payload) => {
    state.commit('setLoading', true);
    console.log('remove')
    console.log(store.state.todoItems[payload.index])
    let todoItemRef = store.state.todoItems[payload.index].ref;
    if (todoItemRef) {
        todoItemRef.remove().then(r => {
            store.state.todoItems.splice(payload.index, 1)
        }).catch((err) => {
            state.commit('setError', err)
        }).finally(() => {
                state.dispatch('getTasks')
                state.commit('setLoading', false)
        });
    }
}
const completedOndItem = (state, payload) => {
    state.commit('setLoading', true);
    let todoItemRef = store.state.todoItems[payload.index].ref;
    if (todoItemRef) {
        todoItemRef.update({
            completed: !payload.todoItem.completed
        }).then(r => {
            store.state.todoItems[payload.index].completed = !store.state.todoItems[payload.index].completed
        }).catch((err) => {
            state.commit('setError', err)
        }).finally(() => {
                state.dispatch('getTasks')
                state.commit('setLoading', false)
        });
    }
}

export {getTasks, addOneItem, removeOneItem, completedOndItem}
