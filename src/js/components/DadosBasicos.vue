<template>
  <div class="card">
    <div class="card-header" id="headingDadosBasicos">
      <h5 class="mb-0">Dados Básicos</h5>
    </div>

    <div class="card-body">
      <!-- <h3>Conteúdo dos Dados Básicos</h3> -->

      <div class="row">
        <div class="col">
          <div class="input-group mb-0">
            <div class="input-group-prepend">
              <span class="input-group-text" id="statusRegularidade">Marque para regular</span>
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

        <div class="col">
          <div class="input-group mb-0">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect02">Status CadÚnico:</label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect02"
              name="cadUnico"
              @change="changeStatusCadUnicoAtual($event.target.value)"
            >
              <option v-for="(cad, i) in statusCadUnico" :value="cad" :key="i">{{ cad }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="input-group mb-0">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Origem da Apuração:</label>
      </div>
      <select
        class="custom-select"
        id="origemApuracao"
        name="origemApuracao"
        v-model="origemApuracaoAtual"
      >
        <option v-for="(origem, i) in origemApuracao" :value="origem" :key="i">{{ origem.nome }}</option>
      </select>
    </div>

    <div class="input-group mb-0">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Nome do(a) segurado(a)</span>
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
          <span class="input-group-text" id="spamdtAtuCadUnico">Atualização Cadúnico:</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="dtAtuCadUnico"
          aria-describedby="spamdtAtuCadUnico"
          name="dtAtuCadUnico"
          id="dtAtuCadUnico"
          placeholder="Data de atualização"
          @keyup="changeDtAtuCadUnico($event.target.value)"
        />
      </div>
      <!-- END COL -->
    </div>
    <!-- END ROW -->
    <div id="divDebito" class="container-fluid">
      <div class="row">
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">Débito R$</span>
          </div>

          <div class="col">
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
          <div class="col">
            <input
              type="text"
              placeholder="Período ini"
              class="form-control"
              @keyup="changePeriodoDebitoInicial($event.target.value)"
            />
          </div>
          <div class="col">
            <input
              type="text"
              placeholder="Período fim"
              class="form-control"
              @keyup="changePeriodoDebitoFinal($event.target.value)"
            />
          </div>
          <!-- <div class="col">{{ valorDebito }} - {{ valorDebitoExtenso }}</div> -->
        </div>
      </div>
      <!-- END DIV ROW -->
    </div>
    <!-- END DIV DEBITO -->
  </div>
  <!-- END DIV CARD -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VMoney } from "v-money";

export default {
  name: "DadosBasicos",
  data() {
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        //suffix: " #",
        precision: 2
      } //END MONEY
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
      "changeTextos"
    ]),

    converteMoeda(e) {
      console.log("Dados Basicos -> Debito: " + e.target.value);
      const valor = e.target.value;
      // this.valorDebito.numero = valor;

      const formData = new FormData();
      formData.append("valor", valor);

      fetch(
        "http://localhost:80/relsmob/src/utilsBackEnd/classes/Extenso.php",
        {
          method: "post",
          body: formData
        }
      ).then(resp => {
        resp.json().then(retorno => {
          this.changeValorDebitoExtenso(retorno.valorExtenso);
          // console.log(retorno);

          // this.$store.commit("setValorDebitoExtenso", retorno.valorExtenso);
        });
      });
    }
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
      textos: "getTextos"
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
      }
    }
  },
  directives: {
    money: VMoney
  },
  created() {
    let valor = new FormData();
    valor.append("flag", "recurso");

    fetch(
      "http://localhost:80/relsmob/src/utilsBackEnd/classes/RecuperaTexto.php",
      {
        method: "post",
        body: valor
      }
    ).then(resp =>
      resp.json().then(result => {
        this.changeTextos(result);
      })
    );
  }
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
</style>
