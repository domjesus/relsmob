<template>
  <div class="card ml-5">
    <RegularModalComponent show @changeModal="changeModal('statusCadUnico')" />
    <CadUnicoStatusModalComponent
      :show="modalToShow == 'statusCadUnico'"
      @changeModal="changeModal('dadosSegurado')"
    />

    <DadosSeguradoModalComponent :show="modalToShow == 'dadosSegurado'" />
    <!-- {{collapsesToShow}} -->
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Dados Básicos" active>
          <DadosBasicos />
        </b-tab>

        <b-tab title="AnalisePrevia">
          <p>Análise Prévia</p>
          <AnalisePrevia />
        </b-tab>
        <b-tab title="Ofício de defesa">
          <h3>Ofício de defesa</h3>
          <OficioDefesa />
        </b-tab>
        <b-tab title="Análise de defesa">
          <h3>Análise de defesa</h3>
          <AnaliseDefesa />
        </b-tab>

        <b-tab title="Ofício de Recurso">
          <h3>Ofício de recurso</h3>
          <OficioRecurso />
        </b-tab>

        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>

    <!-- END ROW -->
  </div>
  <!-- END DIV CARD -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { createPopper } from "@popperjs/core";
import { BTabs, BTab } from "bootstrap-vue";
import AnalisePrevia from "./AnalisePrevia/AnalisePrevia.vue";
import RegularModalComponent from "./modals/RegularModalComponent.vue";
import DadosSeguradoModalComponent from "./modals/DadosSeguradoModalComponent.vue";
import CadUnicoStatusModalComponent from "./modals/CadUnicoStatusModalComponent.vue";
import OficioDefesa from "./OficioDefesa.vue";
import AnaliseDefesa from "./AnaliseDefesa.vue";
import OficioRecurso from "./OficioRecurso.vue";
import DadosBasicos from "./DadosBasicos.vue";

export default {
  name: "ContainerComponents",
  data() {
    return {
      elementos: [],
      modalToShow: "",
    }; //END RETURN
  }, //END DATA

  methods: {
    changeModal(nameModal) {
      this.modalToShow = nameModal;
    },
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
    AnalisePrevia,
    RegularModalComponent,
    DadosSeguradoModalComponent,
    CadUnicoStatusModalComponent,
    OficioDefesa,
    AnaliseDefesa,
    OficioRecurso,
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
