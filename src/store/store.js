import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);// global

export const store = new Vuex.Store({
  state: {
    todoItems: [],
    error: null,
    loading: false,
  },
  getters,
  mutations,
  actions,
});
