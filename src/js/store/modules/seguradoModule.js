export default {
  state: {
    nomeSegurado: "",
    judicial: "",
    obsBpcLeiNova: "",
  },
  getters: {
    getNomeSegurado(state) {
      return state.nomeSegurado;
    },
    getJudicial(state) {
      return state.judicial;
    },
    getObsBpcLeiNova(state) {
      return state.obsBpcLeiNova;
    },
  },
  mutations: {
    setNomeSegurado(state, newValue) {
      state.nomeSegurado = newValue;
    },
    setJudicial(state, newValue) {
      state.judicial = newValue;
    },
    setObsBpcLeiNova(state, newValue) {
      state.obsBpcLeiNova = newValue;
    },
  },
  actions: {
    changeNomeSegurado(context, newValue) {
      context.commit("setNomeSegurado", newValue);
    },
    changeJudicial(context, newValue) {
      context.commit("setJudicial", newValue);
    },
    changeObsBpcLeiNova(context, newValue) {
      context.commit("setObsBpcLeiNova", newValue);
    },
  },
};
