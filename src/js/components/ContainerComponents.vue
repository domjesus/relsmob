<template>
  <div class="card ml-5 mr-5">
    <TiposDeApuracaoModalComponent
      :show="modalToShow == 'tiposDeApuracao'"
      @changeModal="changeModal('statusInicial')"
    />
    <RegularModalComponent
      :show="modalToShow == 'statusInicial'"
      @changeModal="changeModal('statusCadUnico')"
    />
    <CadUnicoStatusModalComponent
      :show="modalToShow == 'statusCadUnico'"
      @changeModal="changeModal('dadosSegurado')"
    />

    <DadosSeguradoModalComponent
      :show="modalToShow == 'dadosSegurado'"
      @changeModal="changeModal('detalheIrregularidade')"
    />

    <DetalheIrregularidadeModalComponent
      :show="modalToShow == 'detalheIrregularidade'"
    />

    <!-- {{collapsesToShow}} -->
    <div>
      <b-tabs content-class="mt-3" pills>
        <h5 v-if="nomeTipoApuracao">
          Tipo de apuração selecionado: {{ nomeTipoApuracao }}
        </h5>
        <b-tab title="Dados Básicos" active>
          <DadosBasicos @reOpenPopup="reOpenPopup" />
        </b-tab>

        <b-tab title="AnalisePrevia">
          <div v-if="!tipoDeApuracaoSelecionado">
            <p class="alert alert-danger">
              Você deve selecionar um tipo de apuração na primeira tela!
            </p>
          </div>
          <AnalisePreliminarComponent />
          <!-- <p
            class="alert alert-danger"
            v-show="tipoDeApuracaoSelecionado != 'superacaoRenda'"
          >
            Para o tipo de apuração "{{ nomeTipoApuracao || "não informado" }}"
            infelizmente não temos modelo de texto, colabore enviando-os para
            domjesus@gmail.com
          </p> -->
        </b-tab>
        <b-tab title="Ofício de defesa">
          <div v-if="!tipoDeApuracaoSelecionado">
            <p class="alert alert-danger">
              Você deve selecionar um tipo de apuração na primeira tela!
            </p>
          </div>
          <OficioDefesaComponent />

          <!-- <p
            class="alert alert-danger"
            v-show="tipoDeApuracaoSelecionado != 'superacaoRenda'"
          >
            Para o tipo de apuração "{{ nomeTipoApuracao || "não informado" }}"
            infelizmente não temos modelo de texto, colabore enviando-os para
            domjesus@gmail.com
          </p> -->
        </b-tab>
        <b-tab title="Análise de defesa">
          <div v-if="!tipoDeApuracaoSelecionado">
            <p class="alert alert-danger">
              Você deve selecionar um tipo de apuração na primeira tela!
            </p>
          </div>

          <AnaliseDefesa />

          <p
            class="alert alert-danger"
            v-show="tipoDeApuracaoSelecionado != 'superacaoRenda'"
          >
            Para o tipo de apuração "{{ nomeTipoApuracao || "não informado" }}"
            infelizmente não temos modelo de texto, colabore enviando-os para
            domjesus@gmail.com
          </p>
        </b-tab>

        <b-tab title="Ofício de Recurso">
          <OficioRecurso
            :tipo-de-apuracao="tipoDeApuracao"
            v-show="tipoDeApuracaoSelecionado == 'superacaoRenda'"
          />

          <p
            class="alert alert-danger"
            v-show="tipoDeApuracaoSelecionado != 'superacaoRenda'"
          >
            Para o tipo de apuração "{{ nomeTipoApuracao || "não informado" }}"
            infelizmente não temos modelo de texto, colabore enviando-os para
            domjesus@gmail.com
          </p>
        </b-tab>
      </b-tabs>
    </div>

    <!-- END ROW -->
  </div>
  <!-- END DIV CARD -->
</template>

<script>
import { mapGetters } from "vuex";
import { BTabs, BTab } from "bootstrap-vue";
// import AnalisePrevia from "./AnalisePrevia/AnalisePrevia.vue";
import RegularModalComponent from "./modals/RegularModalComponent.vue";
import DadosSeguradoModalComponent from "./modals/DadosSeguradoModalComponent.vue";
import CadUnicoStatusModalComponent from "./modals/CadUnicoStatusModalComponent.vue";
import DetalheIrregularidadeModalComponent from "./modals/DetalheIrregularidadeModalComponent.vue";
import TiposDeApuracaoModalComponent from "./modals/TiposDeApuracaoModalComponent.vue";

import OficioDefesaComponent from "./oficioDefesa/OficioDefesaComponent.vue";
import AnaliseDefesa from "./AnaliseDefesa.vue";
import OficioRecurso from "./OficioRecurso.vue";
import DadosBasicos from "./DadosBasicos.vue";
import AnalisePreliminarComponent from "./analisePreliminar/AnalisePreliminarComponent.vue";

export default {
  name: "ContainerComponents",
  data() {
    return {
      elementos: [],
      modalToShow: "tiposDeApuracao",
    }; //END RETURN
  }, //END DATA

  methods: {
    reOpenPopup(nameModal) {
      this.modalToShow = nameModal;
    },
    changeModal(nameModal) {
      // console.log(nameModal);

      this.modalToShow = nameModal;
    },
  },
  computed: {
    ...mapGetters({
      tipoDeApuracaoSelecionado: "getTipoDeApuracaoSelecionado",
      tipoDeApuracao: "getTipoDeApuracaoSelecionado",
      nomeTipoApuracao: "getNomeDaApuracaoSelecionada",
    }),
  },

  created() {
    // let valor = new FormData();
    // valor.append("flag", "recurso");
    // fetch(
    //   "http://localhost/relsmob/src/utilsBackEnd/classes/RecuperaTexto.php",
    //   {
    //     method: "post",
    //     body: valor,
    //   }
    // ).then((resp) =>
    //   resp.json().then((result) => {
    //     this.changeTextos(result);
    //     // console.log(result);
    //   })
    // );
  },
  components: {
    BTabs,
    BTab,
    DadosBasicos,
    // AnalisePrevia,
    RegularModalComponent,
    DadosSeguradoModalComponent,
    CadUnicoStatusModalComponent,
    DetalheIrregularidadeModalComponent,
    TiposDeApuracaoModalComponent,
    OficioDefesaComponent,
    AnaliseDefesa,
    OficioRecurso,
    AnalisePreliminarComponent,
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

#tooltip {
  background-color: darkred;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  /* display: none; */
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}

#arrow::before {
  content: "";
  transform: rotate(45deg);
  background: black;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}
#tooltip[data-show] {
  display: block;
}
</style>
