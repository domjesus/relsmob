import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import CadUnicoModule from "./modules/CadUnicoModule";
import seguradoModule from "./modules/seguradoModule";
import regularidadeModule from "./modules/regularidadeModule";
import debitoModule from "./modules/debitoModule";
import textosModule from "./modules/textosModule";
import appOptions from "./modules/appOptions";
import irregularidadeModule from "./modules/irregularidadeModule";

export default new Vuex.Store({
  modules: {
    CadUnicoModule,
    seguradoModule,
    regularidadeModule,
    debitoModule,
    textosModule,
    appOptions,
    irregularidadeModule,
  },
  state: {
    origemApuracao: [
      {
        nome: "Trata-se de superação de renda da NT 20/2018/MDS.",
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
