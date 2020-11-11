export default {
  state: {
    objIrregularidade: "",
  },
  getters: {
    getObjIrregularidade(state) {
      return state.objIrregularidade;
    },
  },
  mutations: {
    setObjIrregularidade(state, newValue) {
      state.objIrregularidade = newValue;
    },
  },
  actions: {
    changeObjIrregularidade(context, newValue) {
      context.commit("setObjIrregularidade", newValue);
    },
  },
};
