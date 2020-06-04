<template>
  <div class="card">
    <!-- {{collapsesToShow}} -->
    <div class="card">
      <div class="card-body">
        <h4>Marque para exibir os textos</h4>
        <input
          type="checkbox"
          @click="changeCollapsesToShow($event.target.name)"
          name="defesa"
          checked
        />Defesa
        <input
          type="checkbox"
          @click="changeCollapsesToShow($event.target.name)"
          name="analiseprevia"
          checked
        />Análise Prévia
        <input
          type="checkbox"
          @click="changeCollapsesToShow($event.target.name)"
          name="relatorioanalise"
        />Relatório de análise
        <input
          type="checkbox"
          @click="changeCollapsesToShow($event.target.name)"
          name="conclusivo"
        />Conclusivo
        <input
          type="checkbox"
          @click="changeCollapsesToShow($event.target.name)"
          name="recurso"
        />Recurso
      </div>
    </div>

    <div class="card-header" id="headingDadosBasicos">
      <h5 class="mb-0">Dados Básicos</h5>
    </div>

    <div class="card-body">
      <!-- <h3>Conteúdo dos Dados Básicos</h3> -->

      <div class="row">
        <div class="col">
          <div class="input-group mb-0">
            <div class="input-group-prepend">
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
              </label>
            </div>
          </div>
        </div>

        <div class="input-group mb-0 col">
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
            <option
              v-for="(origem, i) in origemApuracao"
              :value="origem"
              :key="i"
              >{{ origem.nome }}</option
            >
          </select>
        </div>
      </div>
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
          @blur="validaData"
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
            <option v-for="(cad, i) in statusCadUnico" :value="cad" :key="i">{{
              cad
            }}</option>
          </select>
        </div>
      </div>
    </div>
    <!-- END ROW -->
    <div id="divDebito" class="container-fluid">
      <div class="row">
        <div class="input-group col col-md-6 mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Débito R$</span>
          </div>

          <input
            type="text"
            name="valorDebito"
            id="valorDebito"
            class="form-control"
            @keyup="changeValorDebito($event.target.value)"
            @blur="converteMoeda"
            v-money="money"
          />
        </div>

        <div class="col input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Início</span>
          </div>

          <input
            type="text"
            placeholder="Período inicial do débito"
            class="form-control"
            name="periodoDebitoInicial"
            id="periodoDebitoInicial"
            :class="{ 'btn-outline-danger': erroData }"
            @keyup="changePeriodoDebitoInicial($event.target.value)"
            v-mask="'##/##/####'"
            @blur="validaData"
          />
        </div>

        <div class="col input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Fim</span>
          </div>

          <input
            type="text"
            placeholder="Período fim do débito"
            class="form-control"
            :class="{ 'btn-outline-danger': erroData }"
            name="periodoDebitoFinal"
            id="periodoDebitoFinal"
            @keyup="changePeriodoDebitoFinal($event.target.value)"
            v-mask="'##/##/####'"
            @blur="validaData"
          />
          <!-- <div :class="[{ 'active alert-danger': erroData }]" v-show="erroData">
            Data inválida!
          </div> -->
        </div>
      </div>
      <!-- END DIV ROW -->
    </div>
    <!-- END DIV DEBITO -->

    <div id="tooltip" role="tooltip" data-popper-arrow v-show="erroData">
      <p id="innerTooltip">Data incorreta!</p>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
  <!-- END DIV CARD -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";
import { createPopper } from "@popperjs/core";

export default {
  name: "DadosBasicos",
  data() {
    return {
      erroData: false,
      elementos: [],
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        //suffix: " #",
        precision: 2,
      }, //END MONEY
    }; //END RETURN
  }, //END DATA

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
      "changeTextos",
      "changeCollapsesToShow",
    ]),

    validaData(e) {
      let data = e.target.value;

      this.erroData = !this.validaDataFunction(data);

      if (this.erroData) {
        let elemento = e.target.name;

        const popcorn = document.querySelector(`#${elemento}`);

        // console.log(popcorn);

        const tooltip = document.querySelector("#tooltip");
        //   console.log(tooltip);

        createPopper(popcorn, tooltip, {
          placement: "bottom",
        });

        e.target.focus();
      }
    },

    validaDataFunction(data) {
      let reg = /[^\d\/\.]/gi; // Mascara = dd/mm/aaaa | dd.mm.aaaa
      let valida = data.replace(reg, ""); // aplica mascara e valida só numeros

      if (valida && valida.length == 10) {
        // é válida, então ;)
        let ano = data.substr(6),
          mes = data.substr(3, 2),
          dia = data.substr(0, 2),
          M30 = ["04", "06", "09", "11"],
          v_mes = /(0[1-9])|(1[0-2])/.test(mes),
          v_ano = /(19[1-9]\d)|(20\d\d)|2100/.test(ano),
          rexpr = new RegExp(mes),
          fev29 = ano % 4 ? 28 : 29;

        if (v_mes && v_ano) {
          if (mes == "02") return dia >= 1 && dia <= fev29;
          else if (rexpr.test(M30)) return /((0[1-9])|([1-2]\d)|30)/.test(dia);
          else return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
        }
      }
      return false; // se inválida :(
    },

    verElementos(e) {
      // if (this.elementos.indexOf(e.target.name) >= 0) {
      //ELEMENT EXISTS IN ARRAY
      // let name = e.target.name;
      // let checked = e.target.checked;
      // console.log(`Nome ${name} -> ${checked}`);
      // this.$store.dispatch("changeCollapsesToShow", name);
      // }
      //   if (checked) {
      //     this.elementos.push(e.target.name);
      //   } else this.elementos.splice(this.elementos.indexOf(name), 1);
      //   console.log("Defesa: " + this.elementos.indexOf("defesa"));
    },

    converteMoeda(e) {
      // console.log("Dados Basicos -> Debito: " + e.target.value);
      const valor = e.target.value;
      // this.valorDebito.numero = valor;

      const formData = new FormData();
      formData.append("valor", valor);

      fetch(
        "http://localhost:80/relsmob/src/utilsBackEnd/classes/Extenso.php",
        {
          method: "post",
          body: formData,
        }
      ).then((resp) => {
        resp.json().then((retorno) => {
          this.changeValorDebitoExtenso(retorno.valorExtenso);
          // console.log(retorno);

          // this.$store.commit("setValorDebitoExtenso", retorno.valorExtenso);
        });
      });
    },
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
      textos: "getTextos",
      collapsesToShow: "getCollapsesToShow",
    }),

    // statusCadUnico: {
    //   get() {
    //     return this.$store.state.statusCadUnico;
    //   },
    //   set(value) {
    //     this.$store.commit("SetStatusCadUnico", value);
    //   }
    // },

    // isRegular: {
    //   get() {
    //     return this.$store.isRegular;
    //   },
    //   set(newValue) {
    //     this.$store.commit("changeIsRegular", newValue);
    //   }
    // },

    // valorDebito: {
    //   get() {
    //     return this.$store.state.valorDebito;
    //   },
    //   set(value) {
    //     this.$store.commit("setValorDebito", value);
    //   },
    // },
    // valorDebitoExtenso: {
    //   get() {
    //     return this.$store.state.valorDebitoExtenso;
    //   }
    // },
    // statusCadUnicoAtual: {
    //   get() {
    //     return this.$store.state.statusCadUnicoAtual;
    //   },
    //   set(value) {
    //     this.$store.commit("setStatusCadUnicoAtual", value);
    //   }
    // },
    origemApuracaoAtual: {
      get() {
        return this.$store.state.origemApuracaoAtual;
      },
      set(value) {
        this.$store.commit("setOrigemApuracaoAtual", value);
      },
    },
  },
  directives: {
    money: VMoney,
    mask,
  },
  created() {
    let valor = new FormData();
    valor.append("flag", "recurso");

    fetch(
      "http://localhost:80/relsmob/src/utilsBackEnd/classes/RecuperaTexto.php",
      {
        method: "post",
        body: valor,
      }
    ).then((resp) =>
      resp.json().then((result) => {
        this.changeTextos(result);
      })
    );
  },
  components: {},
};
</script>

<style scoped>
input[type="checkbox"] {
  transform: scale(2);
  margin: 15px;
}

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
