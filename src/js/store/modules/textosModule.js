export default {
  state: {
    textos: [],
  },
  getters: {
    getTextos(state) {
      return state.textos;
    },
  },
  mutations: {
    setTextos(state, newValue) {
      state.textos = newValue;
    },
  },
  actions: {
    changeTextos(context, value) {
      context.commit("setTextos", value);
    },
  },
};
