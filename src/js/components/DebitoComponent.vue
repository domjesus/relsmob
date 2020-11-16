<template>
  <div>
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
            @blur="workInValorDebito($event.target.value)"
            v-money="money"
            v-b-popover.hover.bottom="{
              variant: 'primary',
              content:
                'Digite o valor do débito. Esta informação sairá com o valor extenso convertido no ofício de defesa (item 5)/análise/recurso. Informe também o período inicial e final do débito.',
            }"
            title="Débito"
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
            @blur="callValidaData($event, 'Período Início Débito')"
            v-b-tooltip.bottom.v-info
            title="Período inicial do débito"
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
            @blur="callValidaData($event, 'Período Fim de Débito')"
            v-b-tooltip.bottom.v-info
            title="Período final do débito"
          />
          <!-- <div :class="[{ 'active alert-danger': erroData }]" v-show="erroData">
            Data inválida!
          </div>-->
        </div>
      </div>

      <!-- END DIV ROW -->
    </div>
    <!-- END DIV DEBITO -->
  </div>
</template>

<script>
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";
import { validaData } from "./../functions/utils";
import { mapActions, mapGetters } from "vuex";
import { dev } from "./../functions/auxiliarInterno";

export default {
  name: "DebitoComponent",
  data() {
    return {
      erroData: false,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        //suffix: " #",
        precision: 2,
      }, //END MONEY
    };
  },
  methods: {
    ...mapActions([
      "changeValorDebito",
      "changeValorDebitoExtenso",
      "changePeriodoDebitoInicial",
      "changePeriodoDebitoFinal",
    ]),

    callValidaData(e, nameOfField) {
      let data = e.target.value;
      const campoId = e.target.id;

      this.checkData = validaData(data);

      if (!this.checkData && data != "") {
        this.$bvToast.toast("Verifique o campo: " + nameOfField, {
          variant: "danger",
          title: "Erro!",
          autoHideDelay: 3000,
        });
        document.getElementById(campoId).focus();
      }

      const periodoInicial = document.getElementById("periodoDebitoInicial")
        .value;
      const periodoFinal = document.getElementById("periodoDebitoFinal").value;

      const tmsIni = new Date(this.quebraData(periodoInicial)).getTime();
      const tmsFim = new Date(this.quebraData(periodoFinal)).getTime();

      if (tmsIni > tmsFim) {
        this.$bvToast.toast(
          "A data final não pode ser menor que a data inicial. Verifique o campo: " +
            nameOfField,
          {
            variant: "danger",
            title: "Erro!",
            autoHideDelay: 3000,
          }
        );
        document.getElementById(campoId).focus();
      }
    },
    quebraData(data) {
      const dt_tmp = data.split("/");
      return dt_tmp[2] + "-" + dt_tmp[1] + "-" + dt_tmp[0];
    },

    workInValorDebito(valor) {
      this.$store.dispatch("changeValorDebito", valor);
      this.converteMoeda(valor);
    },

    converteMoeda(valor) {
      const formData = new FormData();
      formData.append("valor", valor);
      let url = "";

      if (dev)
        url = "http://localhost/relsmob/src/utilsBackEnd/classes/Extenso.php";
      else url = "/ajax/Extenso.php";

      fetch(url, {
        method: "post",
        body: formData,
      }).then((resp) => {
        resp.json().then((retorno) => {
          this.changeValorDebitoExtenso(retorno.valorExtenso);
          // console.log(retorno);

          // this.$store.commit("setValorDebitoExtenso", retorno.valorExtenso);
        });
      });
    },
  },
  directives: {
    money: VMoney,
    mask,
  },
  computed: {},
};
</script>

<style>
</style>