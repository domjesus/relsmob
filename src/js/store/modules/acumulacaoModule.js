export default {
  state: {
    nbAcumuladoFirst: "",
    nbAcumuladoSecond: "",
    origemApuracaoAcumulacao: "",
  },
  getters: {
    getNbAcumuladoFirst(state) {
      return state.nbAcumuladoFirst;
    },
    getNbAcumuladoSecond(state) {
      return state.nbAcumuladoSecond;
    },
    getOrigemApuracaoAcumulacao(state) {
      return state.origemApuracaoAcumulacao;
    },
  },
  mutations: {
    setNbAcumuladoFirst(state, newValue) {
      state.nbAcumuladoFirst = newValue;
    },
    setNbAcumuladoSecond(state, newValue) {
      state.nbAcumuladoSecond = newValue;
    },
    setOrigemApuracaoAcumulacao(state, newValue) {
      state.origemApuracaoAcumulacao = newValue;
    },
  },
  actions: {
    changeNbAcumuladoFirst(context, newValue) {
      context.commit("setNbAcumuladoFirst", newValue);
    },
    changeNbAcumuladoSecond(context, newValue) {
      context.commit("setNbAcumuladoSecond", newValue);
    },
    changeOrigemApuracaoAcumulacao(context, newValue) {
      context.commit("setOrigemApuracaoAcumulacao", newValue);
    },
  },
};
