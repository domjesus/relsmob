export default {
  state: {
    dtAtuCadUnico: "",
    statusCadUnicoAtual: "atualizado",
    statusCadUnico: ["atualizado", "desatualizado", "inexistente"],
  },
  getters: {
    getDtAtuCadUnico(state) {
      return state.dtAtuCadUnico;
    },
    getStatusCadUnicoAtual(state) {
      return state.statusCadUnicoAtual;
    },
    getStatusCadUnico(state) {
      return state.statusCadUnico;
    },
  },
  mutations: {
    setDtAtuCadUnico(state, newValue) {
      state.dtAtuCadUnico = newValue;
    },
    setStatusCadUnicoAtual(state, newValue) {
      state.statusCadUnicoAtual = newValue;
    },
  },
  actions: {
    changeDtAtuCadUnico(context, newValue) {
      context.commit("setDtAtuCadUnico", newValue);
    },
    changeStatusCadUnicoAtual(context, newValue) {
      context.commit("setStatusCadUnicoAtual", newValue);
    },
  },
};
