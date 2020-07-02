import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

const store = new vuex.Store({
  state: {
    footer_data: []
  },
  getters: {
    GET_FOOTER_DATA(state) {
      return state.footer_data;
    }
  },
  mutations: {
    ADD_FOOTER_DATA(state, payload) {
      return (state.footer_data = payload);
    }
  },
  actions: {
    ADD_FOOTER_DATA({ commit }, payload) {
      commit("ADD_FOOTER_DATA", payload);
    }
  }
});

export default store;
