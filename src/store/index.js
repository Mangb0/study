import { createStore } from "vuex";

export default createStore({
  state: {
    user: "",
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
});
