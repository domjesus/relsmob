<template>
  <div class="ml-5 pr-5 mr-5 container-fluid">
    <div
      class="input-group"
      v-if="tipoDeApuracaoSelecionado == 'superacaoRenda'"
    >
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

    <div class="input-group mt-3">
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

    <div class="row mt-3" v-if="tipoDeApuracaoSelecionado == 'acumulacao'">
      <div class="col col-md-3">
        <div class="input-group mb-0">
          <div class="input-group-prepend">
            <span class="input-group-text" id="spam-acumulacao">Nb1:</span>
          </div>

          <input
            type="text"
            placeholder="00/000.000.000-0"
            v-b-tooltip.bottom.v-info
            title="Informe o primeiro NB que é objeto de acumulação indevida"
            class="form-control"
            v-mask="'##/###.###.###-#'"
            @keyup="changeNbAcumuladoFirst($event.target.value)"
          />
        </div>
      </div>

      <div class="col col-md-3">
        <div class="input-group mb-0">
          <div class="input-group-prepend">
            <span class="input-group-text" id="spam-acumulacao">Nb2:</span>
          </div>
          <input
            type="text"
            placeholder="00/000.000.000-0"
            v-b-tooltip.bottom.v-info
            title="Informe o *segundo* NB que é objeto de acumulação indevida"
            class="form-control"
            v-mask="'##/###.###.###-#'"
            @keyup="changeNbAcumuladoSecond($event.target.value)"
          />
        </div>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Origem Apuracao"
          @keyup="changeOrigemApuracaoAcumulacao($event.target.value)"
        />
      </div>
    </div>

    <div
      class="row mt-3"
      v-show="tipoDeApuracaoSelecionado == 'superacaoRenda'"
    >
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
          @blur="callValidaData($event, 'Data Atualização CadÚnico')"
          :disabled="statusCadUnicoAtual == 'inexistente'"
          :value="dtAtuCadUnico"
        />
      </div>
      <!-- END COL -->
      <div class="col">
        <div class="input-group">
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

      <textarea
        rows="6"
        id="txt-obj-irregularidade"
        @keyup="changeObjIrregularidade($event.target.value)"
        placeholder="Texto objeto da irregularidade"
        style="width: 90%"
        class="ml-5 mt-5"
        hidden
      >
    A renda que o(a) Sr(a) {{
          membroIrregularidade.toUpperCase()
        }} recebe no valor de {{
          vlrIrregularidade
        }} (conforme dados do CadÚnico/CNIS), faz com que a renda percapta do grupo familiar fique superior ao permitido por lei para manutenção do benefício que é de 1/4 do salário mínimo (R$ 275,00) por pessoa, ficando desta forma superado o critério de baixa renda para fins de acesso/permência ao/no BPC. {{
          judicial
        }}
    </textarea
      >
    </div>

    <div class="row mt-3">
      <DebitoComponent />
    </div>

    <div class="row" v-show="tipoDeApuracaoSelecionado == 'superacaoRenda'">
      <div class="col col-md-6">
        <input
          type="text"
          v-model="membroIrregularidade"
          placeholder="Membro Irregularidade"
          @keyup="setObjIrregularidade"
          size="50"
          class="form-control"
          v-b-popover.hover.bottom="{
            variant: 'info',
            content:
              'Digite o nome do membro do GF ao qual se refere a irregularidade. Sairá no Ofício de Defesa (item 2).',
          }"
          title="Membro do GF origem da irregularidade"
        />
      </div>
      <div class="col col-md-2">
        <input
          type="text"
          placeholder="valor irregularidade"
          v-model="vlrIrregularidade"
          v-money="money"
          @keyup="setObjIrregularidade"
          class="form-control"
          v-b-popover.hover.bottom="{
            variant: 'info',
            content:
              'Digite o valor da renda do membro do GF ao qual se refere a irregularidade. Sairá no Ofício de Defesa (item 2).',
          }"
          title="Renda do membro do GF"
        />
      </div>
      <input
        type="checkbox"
        @click="setCheckObjIrregularidade"
        v-b-popover.hover.bottom="{
          variant: 'info',
          content:
            'Marque caso queira que saia no texto solicitação para o segurado apresentar sentença que concedeu o benefício.',
        }"
        title="Processo concedido judicialmente"
      />Concessão judicial
      <div>
        <input
          type="checkbox"
          @click="
            changeObsBpcLeiNova(
              'Registre-se que até 01/04/2020 era vigente o critério de que o benefício previdenciário de qualquer valor entrava para cálculo da renda percapta, sendo que este entendimento foi alterado com a publicação da Lei 13982 de 02/04/2020, sendo que conforme a PORTARIA Nº 374/DIRBEN/INSS, DE 05 DE MAIO DE 2020 em seu art. 2º os valores recebidos por componentes do grupo familiar, idoso, acima de 65 (sessenta e cinco) anos de idade, ou pessoa com deficiência, de BPC/LOAS ou de benefício previdenciário de até um salário-mínimo, ficam excluídos da aferição da renda familiar mensal per capita para fins de análise do direito ao BPC/LOAS.'
            )
          "
          v-b-popover.hover.bottom="{
            variant: 'info',
            content:
              'Copia para a análise prévia e análise de defesa um texto padrão com observações a respeito da alteração do critério de 1/4 do salário mínimo e exclusão de benefícios previdenciários de valor mínimo do cálculo da renda percapta.',
          }"
          title="Alterações Loas Lei 13982/2020"
        />Observação Lei 13892 de 02/04/2020
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <label for="reexibir"
          ><span
            v-b-tooltip.bottom.v-info
            title="Clique para reexibir as respectivas janelas"
            >Reexibir janelas:</span
          >
        </label>
      </div>
      <div class="col">
        <b-button
          variant="primary"
          v-b-tooltip.bottom.v-warning
          title="Reexibir Tipo de Apuração"
          @click="reexibirJanela('tiposDeApuracao')"
          >Tipos de Apuração</b-button
        >
        <b-button
          variant="primary"
          v-b-tooltip.bottom.v-warning
          title="Reexibir janela status da análise"
          @click="reexibirJanela('statusInicial')"
          >Status</b-button
        >
        <b-button
          variant="primary"
          v-b-tooltip.bottom.v-warning
          title="Reexibir status do CadÚnico"
          @click="reexibirJanela('statusCadUnico')"
          v-show="tipoDeApuracaoSelecionado == 'superacaoRenda'"
          >CadÚnico</b-button
        >

        <b-button
          variant="primary"
          v-b-tooltip.bottom.v-warning
          title="Reexibir nome do segurado"
          @click="reexibirJanela('dadosSegurado')"
          >Nome Segurado</b-button
        >
        <b-button
          variant="primary"
          v-b-tooltip.bottom.v-warning
          title="Reexibir detalhe irregularidade"
          @click="reexibirJanela('detalheIrregularidade')"
          >Detalhe da irregularidade</b-button
        >
      </div>
    </div>
    <!-- {{ obsBpcMeioSM }} -->
    <!-- Tipo: {{ tipoDeApuracaoSelecionado }} -->
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
// import { VBTooltip } from "bootstrap-vue";

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
      tipoDeApuracaoSelecionado: "getTipoDeApuracaoSelecionado",
      obsBpcLeiNova: "getObsBpcLeiNova",
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
      "changeNbAcumuladoFirst",
      "changeNbAcumuladoSecond",
      "changeOrigemApuracaoAcumulacao",
      "changeObsBpcLeiNova",
    ]),
    reexibirJanela(janela) {
      // console.log("Nom component dados basicos: " + janela);
      this.$emit("reOpenPopup", janela);
    },

    setCheckObjIrregularidade(e) {
      const txtObjIrregularidade = document.getElementById(
        "txt-obj-irregularidade"
      ).value;

      if (e.target.checked) {
        this.judicial =
          "Solicitamos apresentar ação judicial que concedeu o benefício.";
        this.$store.dispatch("changeJudicial", this.judicial);
      } else {
        this.judicial = "";
        this.$store.dispatch("changeJudicial", this.judicial);
      }
    },
    setObjIrregularidade() {
      const txtObjIrregularidade = document.getElementById(
        "txt-obj-irregularidade"
      ).value;

      this.changeObjIrregularidade(txtObjIrregularidade);

      // console.log(txtObjIrregularidade);
    },

    callValidaData(e, nameOfField) {
      let data = e.target.value;
      const campoId = e.target.id;

      this.checkData = validaData(data);

      if (!this.checkData && data != "") {
        this.$bvToast.toast("Erro na data! Verifique o campo: " + nameOfField, {
          variant: "danger",
          title: "Erro!",
          autoHideDelay: 3000,
        });
        document.getElementById(campoId).focus();
      }
    },
  },
  components: {
    DebitoComponent,
  },
  directives: {
    money: VMoney,
    mask,
    // BTooltip: VBTooltip,
  },
};
</script>

<style>
input[type="checkbox"] {
  transform: scale(2);
  margin: 15px;
}
</style>