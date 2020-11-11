export default {
  state: {
    nomeSegurado: "",
    judicial: "",
  },
  getters: {
    getNomeSegurado(state) {
      return state.nomeSegurado;
    },
    getJudicial(state) {
      return state.judicial;
    },
  },
  mutations: {
    setNomeSegurado(state, newValue) {
      state.nomeSegurado = newValue;
    },
    setJudicial(state, newValue) {
      state.judicial = newValue;
    },
  },
  actions: {
    changeNomeSegurado(context, newValue) {
      context.commit("setNomeSegurado", newValue);
    },
    changeJudicial(context, newValue) {
      context.commit("setJudicial", newValue);
    },
  },
};
