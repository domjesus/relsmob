export default {
  state: {
    nomeSegurado: "",
  },
  getters: {
    getNomeSegurado(state) {
      return state.nomeSegurado;
    },
  },
  mutations: {
    setNomeSegurado(state, newValue) {
      state.nomeSegurado = newValue;
    },
  },
  actions: {
    changeNomeSegurado(context, newValue) {
      context.commit("setNomeSegurado", newValue);
    },
  },
};
