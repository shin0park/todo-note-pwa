import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoItems: [],
        error: null,
        loading: false,
        user: null,
        pages: [],
    },
    getters,
    mutations,
    actions
})
