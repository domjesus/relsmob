<template>
  <div>
    <h3>Dados Básicos</h3>
    <div class="input-group mb-0">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01"
          >Origem da Apuração:</label
        >
      </div>
      <select
        class="custom-select"
        id="origemApuracao"
        name="origemApuracao"
        v-model="origemApuracaoAtual"
      >
        <option v-for="(origem, i) in origemApuracao" :value="origem" :key="i">
          {{ origem.nome }}
        </option>
      </select>
    </div>
    <div class="input-group mb-0">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"
          >Nome do(a) segurado(a)</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        name="nomeSegurado"
        :value="nomeSegurado"
        @keyup="changeNomeSegurado($event.target.value)"
      />
    </div>

    <div class="row">
      <div class="col col-md-4 input-group mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="spamdtAtuCadUnico"
            >Atualização Cadúnico:</span
          >
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="dtAtuCadUnico"
          aria-describedby="spamdtAtuCadUnico"
          placeholder="Data de atualização"
          name="dtAtuCadUnico"
          id="dtAtuCadUnico"
          @keyup="changeDtAtuCadUnico($event.target.value)"
          v-mask="'##/##/####'"
          @blur="callValidaData"
        />
      </div>
      <!-- END COL -->
      <div class="col">
        <div class="input-group mb-0">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect02"
              >Status CadÚnico:</label
            >
          </div>
          <select
            class="custom-select"
            id="inputGroupSelect02"
            name="cadUnico"
            @change="changeStatusCadUnicoAtual($event.target.value)"
          >
            <option
              v-for="(cad, i) in statusCadUnico"
              :value="cad"
              :key="i"
              :selected="cad == statusCadUnicoAtual"
            >
              {{ cad }}
            </option>
          </select>
        </div>
      </div>
      <DebitoComponent />

      <div class="row ml-5">
        <input
          type="text"
          v-model="membroIrregularidade"
          placeholder="Membro Irregularidade"
          @keyup="setObjIrregularidade"
        />
        <input
          type="text"
          placeholder="valor irregularidade"
          v-model="vlrIrregularidade"
          v-money="money"
          @keyup="setObjIrregularidade"
          class="mr-5"
        />
      </div>

      <br />

      <input type="checkbox" @click="setCheckObjIrregularidade" />Concessão
      judicial

      <br />
      <textarea
        rows="6"
        id="txt-obj-irregularidade"
        @keyup="changeObjIrregularidade($event.target.value)"
        placeholder="Texto objeto da irregularidade"
        style="width: 90%"
        class="ml-5 mt-5"
      >
    A renda que o(a) Sr(a) {{
          membroIrregularidade.toUpperCase()
        }} recebe no valor de {{
          vlrIrregularidade
        }} (conforme dados do CadÚnico/CNIS), faz com que a renda percapta do grupo familiar fique superior ao permitido por lei para manutenção do benefício que é de 1/4 do salário mínimo (R$ 261,25) por pessoa, ficando desta forma superado o critério de baixa renda para fins de acesso/permência ao/no BPC. {{
          judicial
        }}
    </textarea
      >
    </div>
  </div>
  <!-- <p>Aki vai o conteudo dos dados basicos</p>
          <span class="input-group-text" id="statusRegularidade"
            >Marque para regular</span
          >
          <label class="switch">
            <input
              type="checkbox"
              @click="changeIsRegular($event.target.checked)"
              :checked="isRegular"
            />
            <span class="slider round"></span>
          </label> -->
</template>

<script>
import DebitoComponent from "./DebitoComponent.vue";
import { mask } from "vue-the-mask";
import { VMoney } from "v-money";
import { validaData } from "./../functions/utils";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DadosBasicos",
  data() {
    return {
      membroIrregularidade: "",
      vlrIrregularidade: "",
      judicial: "",
      modalToShow: "regular",
      showModalDadosSegurado: 0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        //suffix: " #",
        precision: 2,
      }, //END MONEY
    };
  },
  computed: {
    ...mapGetters({
      dtAtuCadUnico: "getDtAtuCadUnico",
      origemApuracao: "getOrigemApuracao",
      valorDebito: "getValorDebito",
      isRegular: "getIsRegular",
      nomeSegurado: "getNomeSegurado",
      statusCadUnico: "getStatusCadUnico",
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      // textos: "getTextos",
      // collapsesToShow: "getCollapsesToShow",
    }),
    origemApuracaoAtual: {
      get() {
        return this.$store.state.origemApuracaoAtual;
      },
      set(value) {
        this.$store.commit("setOrigemApuracaoAtual", value);
      },
    },
  },
  methods: {
    ...mapActions([
      "changeValorDebito",
      "changeValorDebitoExtenso",
      "changeIsRegular",
      "changeNomeSegurado",
      "changeDtAtuCadUnico",
      "changeStatusCadUnicoAtual",
      "changePeriodoDebitoInicial",
      "changePeriodoDebitoFinal",
      // "changeTextos",
      // "changeCollapsesToShow",
      "changeObjIrregularidade",
    ]),

    setCheckObjIrregularidade(e) {
      const txtObjIrregularidade = document.getElementById(
        "txt-obj-irregularidade"
      ).value;

      if (e.target.checked) {
        this.judicial =
          "Solicitamos apresentar ação judicial que concedeu o benefício.";
          this.$store.dispatch('changeJudicial',this.judicial);
      } else {

        this.judicial = "";
           this.$store.dispatch('changeJudicial',this.judicial);
      }
    },
    setObjIrregularidade() {
      const txtObjIrregularidade = document.getElementById(
        "txt-obj-irregularidade"
      ).value;

      this.changeObjIrregularidade(txtObjIrregularidade);

      console.log(txtObjIrregularidade);
    },

    callValidaData(data) {
      if (!validaData(data)) alert("data errada!");
    },
  },
  components: {
    DebitoComponent,
  },
  directives: {
    money: VMoney,
    mask,
  },
};
</script>

<style>
input[type="checkbox"] {
  transform: scale(2);
  margin: 15px;
}
</style>