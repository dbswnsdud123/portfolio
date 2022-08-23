import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [],
  state: {
    
  },
  mutations: {
    mutate(state: any, payload) {
      state[payload[0]] = payload[1];
    },
    updateNavBar(state, newVal) {
      state.navBarTop = newVal;
    },
  },
  actions: {
    
  },

  modules: {},
});
