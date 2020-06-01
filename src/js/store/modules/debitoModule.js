export default {
  state: {
    valorDebito: "",
    valorDebitoExtenso: "",
    periodoDebitoInicial: "",
    periodoDebitoFinal: "",
  },
  getters: {
    getValorDebito(state) {
      return state.valorDebito;
    },
    getValorDebitoExtenso(state) {
      return state.valorDebitoExtenso;
    },
    getPeriodoDebitoInicial(state) {
      return state.periodoDebitoInicial;
    },
    getPeriodoDebitoFinal(state) {
      return state.periodoDebitoFinal;
    },
  },
  mutations: {
    setValorDebitoExtenso(state, newValue) {
      state.valorDebitoExtenso = newValue;
    },
    setValorDebito(state, newValue) {
      state.valorDebito = newValue;
    },
    setPeriodoDebitoInicial(state, newValue) {
      state.periodoDebitoInicial = newValue;
    },
    setPeriodoDebitoFinal(state, newValue) {
      state.periodoDebitoFinal = newValue;
    },
  },
  actions: {
    changeValorDebito(context, newValue) {
      context.commit("setValorDebito", newValue);
    },
    changeValorDebitoExtenso(context, newValue) {
      context.commit("setValorDebitoExtenso", newValue);
    },
    changePeriodoDebitoInicial(context, newValue) {
      context.commit("setPeriodoDebitoInicial", newValue);
    },
    changePeriodoDebitoFinal(context, newValue) {
      context.commit("setPeriodoDebitoFinal", newValue);
    },
  },
};
