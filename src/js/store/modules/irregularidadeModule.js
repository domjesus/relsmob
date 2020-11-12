export default {
  state: {
    objIrregularidade: "",
    detalheIrregularidade: "",
  },
  getters: {
    getObjIrregularidade(state) {
      return state.objIrregularidade;
    },
    getDetalheIrregularidade(state) {
      return state.detalheIrregularidade;
    },
  },
  mutations: {
    setObjIrregularidade(state, newValue) {
      state.objIrregularidade = newValue;
    },
    setDetalheIrregularidade(state, newValue) {
      state.detalheIrregularidade = newValue;
    },
  },
  actions: {
    changeObjIrregularidade(context, newValue) {
      context.commit("setObjIrregularidade", newValue);
    },
    changeDetalheIrregularidade(context, newValue) {
      context.commit("setDetalheIrregularidade", newValue);
    },
  },
};
