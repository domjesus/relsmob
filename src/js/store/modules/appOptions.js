export default {
  state: {
    collapsesToShow: ["analiseprevia", "defesa"],
  },
  getters: {
    getCollapsesToShow(state) {
      return state.collapsesToShow;
    },
  },
  mutations: {
    addCollapsesToShow(state, newValue) {
      state.collapsesToShow.push(newValue);
    },
    deleteCollapseToShow(state, newValue) {
      state.collapsesToShow.splice(state.collapsesToShow.indexOf(newValue), 1);
    },
  },
  actions: {
    changeCollapsesToShow(context, name) {
      if (context.state.collapsesToShow.indexOf(name) < 0)
        context.commit("addCollapsesToShow", name);
      else context.commit("deleteCollapseToShow", name);
    },
  },
};
