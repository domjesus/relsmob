export default {
  state: {
    tipoSelecionado: "",
    nomeTipoSelecionado: "",
    tipos: [
      {
        tipo: "superacaoRenda",
        nome: "Superação de Renda",
      },
      {
        tipo: "acumulacao",
        nome: "Acumulação indevida",
      },
      {
        tipo: "vinculosFicticios",
        nome: "Vinculos Fictícios",
      },
    ],
  },
  getters: {
    getTiposDeApuracao(state) {
      return state.tipos;
    },
    getTipoDeApuracaoSelecionado(state) {
      return state.tipoSelecionado;
    },
    getNomeDaApuracaoSelecionada(state) {
      return state.nomeTipoSelecionado;
    },
  },
  mutations: {
    setTipoDeApuracao(state, newValue) {
      state.tipoSelecionado = newValue.tipo;
      state.nomeTipoSelecionado = newValue.nome;
    },
  },

  actions: {
    changeTipoDeApuracao(context, newValue) {
      context.commit("setTipoDeApuracao", newValue);
    },
  },
};
