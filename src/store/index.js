import { createStore } from "vuex";

export default createStore({
  state: {
    user:{
      name: "",
      age: 0,
      country: "HongKong",
      package: "standard",
      premium: 0,
      currency: ""
    }
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    setUser(state , payload) {
      state.user = payload  
    }
  },
  actions: {},
  modules: {},
});
