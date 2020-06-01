import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import CadUnicoModule from "./modules/CadUnicoModule";
import seguradoModule from "./modules/seguradoModule";
import regularidadeModule from "./modules/regularidadeModule";
import debitoModule from "./modules/debitoModule";
import textosModule from "./modules/textosModule";

export default new Vuex.Store({
  modules: {
    CadUnicoModule,
    seguradoModule,
    regularidadeModule,
    debitoModule,
    textosModule,
  },
  state: {
    origemApuracao: [
      {
        nome: "Trata-se de superação de renda da NT 20.",
      },
      {
        nome: "Trata-se de superação de renda da NT 01/2020.",
      },
    ],
    origemApuracaoAtual: "",
  },

  getters: {
    getOrigemApuracao(state) {
      return state.origemApuracao;
    },
  },

  mutations: {
    setOrigemApuracaoAtual(state, newValue) {
      state.origemApuracaoAtual = newValue;
    },
  },

  actions: {},
});
