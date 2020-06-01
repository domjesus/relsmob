export default {
  state: {
    isRegular: true,
  },
  getters: {
    getIsRegular(state) {
      return state.isRegular;
    },
  },
  mutations: {
    setIsRegular(state, newValue) {
      state.isRegular = newValue;
    },
  },
  actions: {
    changeIsRegular(context, newValue) {
      context.commit("setIsRegular", newValue);
    },
  },
};
