import moment from "moment";

export default {
  state: {
    dtAtuCadUnico: "",
    statusCadUnicoAtual: "atualizado",
    statusCadUnico: ["atualizado", "desatualizado", "inexistente"],
    passouDoisAnos: false,
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
    getPassouDoisAnos(state) {
      return state.passouDoisAnos;
    },
  },
  mutations: {
    setDtAtuCadUnico(state, newValue) {
      state.dtAtuCadUnico = newValue;
    },
    setStatusCadUnicoAtual(state, newValue) {
      state.statusCadUnicoAtual = newValue;
    },
    setPassouDoisAnos(state, newValue) {
      state.passouDoisAnos = newValue;
    },
  },
  actions: {
    changeDtAtuCadUnico(context, newValue) {
      const dt_exploded = newValue.split("/");
      
      const dt_cadastro = moment(dt_exploded[2]+"-"+dt_exploded[1]+"-"+dt_exploded[0]);
      
      
      const twoYears = moment().subtract(2,'years');
      // console.log('DATA: ',dt_cadastro.diff(twoYears,'years',true));

      if (dt_cadastro.isValid()) {
        if (dt_cadastro.diff(twoYears,'years',true) < 0) {
          context.commit("setPassouDoisAnos", true);
          context.commit("setStatusCadUnicoAtual", "desatualizado");
        } else {
          context.commit("setPassouDoisAnos", false);
          context.commit("setStatusCadUnicoAtual", "atualizado");
        }
      } else {
        context.commit("setStatusCadUnicoAtual", "atualizado");
        context.commit("setPassouDoisAnos", false);
      }
      // console.log("DT ATU CADUNICO: ", new Date(dt_exploded[2], dt_exploded[1], dt_exploded[0]));

      // console.log("cad: ", dt_cadastro.getTime());
      // console.log("dt_apuracao: ", dt_apuracao.getTime());
      // console.log("passou 2Y: ", this.getters.getPassouDoisAnos);
      context.commit("setDtAtuCadUnico", newValue);
    },
    changeStatusCadUnicoAtual(context, newValue) {
      context.commit("setStatusCadUnicoAtual", newValue);
    },
  },
};
