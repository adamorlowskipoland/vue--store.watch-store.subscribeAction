import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    update: (state, payload) => (state.count += payload)
  },
  actions: {
    countAction({ commit }, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("update", payload);
          resolve();
        }, 2000);
      });
    },
    justALogAction({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log("teeeeeeest");
          resolve();
        }, 1000);
      });
    }
  }
});

store.watch(
  state => {
    return { a: state.count };
  },
  watched => {
    console.log("Count is:", watched.a);
  },
  {}
);

export default store;
