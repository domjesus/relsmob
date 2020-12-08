<template>
  <div>
    <NavBarComponent />

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
      <b-tabs content-class="mt-3">
        <h5 v-if="nomeTipoApuracao">
          Tipo de apuração selecionado: {{ nomeTipoApuracao }}
        </h5>
        <b-tab title="Dados Básicos" active>
          <DadosBasicos @reOpenPopup="reOpenPopup" />
        </b-tab>

        <b-tab title="Analise Previa">
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
import NavBarComponent from "./../components/NavBarComponent.vue";

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
    NavBarComponent,
  },
};
</script>