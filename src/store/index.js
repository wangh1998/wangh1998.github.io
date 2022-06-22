import Vue from "vue";
import Vuex from "vuex";
import User from './user'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalInfo: {
      a: 123
    }
  },
  mutations: {},
  actions: {},
  modules: {
    User
  },
});
