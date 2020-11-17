<template>
  <div class="tudo">
    <div class="botoes mb-5">
      <input
        type="checkbox"
        @click="
          defesa = true;
          defesaNaoApresentada = false;
        "
        true-value="tempestiva"
        false-value="intempestiva"
        v-model="defesa"
      /><span v-b-tooltip.bottom.v-warning title="Marque para defesa tempestiva"
        >Defesa Tempestiva</span
      >

      <input
        type="checkbox"
        @click="
          defesaNaoApresentada = true;
          defesa = false;
        "
        v-model="defesaNaoApresentada"
      />
      <span
        v-b-tooltip.bottom.v-info
        title="Marque para defesa NÃO apresentada"
      >
        Defesa NÃO apresentada
      </span>

      <button
        class="btn btn-secondary"
        @click="
          manutencaoIrregular = true;
          concessaoIrregular = false;
        "
      >
        Manutenção Irregular
      </button>
      <button
        class="btn btn-secondary"
        @click="
          concessaoIrregular = true;
          manutencaoIrregular = false;
        "
      >
        Concessao Irregular
      </button>
    </div>
    <div :id="sourceToCopy">
      <!-- prettier-ignore -->
      <ol contenteditable>
        <li>A Previdência Social, após avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003, detectou irregularidade na manutenção do Benefício de Prestação Continuada que consiste na percepção de renda per capita do grupo familiar superior a ¼ (um quarto) do salário-mínimo vigente, contrariando o contido no art. 20, § 3º, da Lei n.º 8.742/93, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.</li>
        <li>
          A apuração do benefício está relacionada aos batimentos contínuos realizados pelo INSS e às informações prestadas pelo(a) titular (ou seu representante legal), estando o declarante sujeito às sanções previstas em lei nos casos de declaração falsa ou omissão de informação, de acordo com o art. 13 do Decreto n.º 6.214/2007.
        </li>
        <li v-if="defesa">
          Encaminhado o ofício de defesa, com base no art. 5º, inciso LV, da Constituição Federal, de 5 de outubro de 1988, e decorrido o devido prazo legal, a defesa foi apresentada de forma {{defesa}}.
        </li>
        <li v-if="defesaNaoApresentada">
          Encaminhado o Ofício de Defesa, com base no art. 5º, inciso LV, da Constituição Federal, de 5 de outubro de 1988, e decorrido o devido prazo legal, NÃO houve manifestação do(a) interessado(a).
        </li>
        <li v-if="objIrregularidade">{{ objIrregularidade }}</li>
        <li v-if="detalheIrregularidade">{{ detalheIrregularidade }}</li>
        <li v-if="manutencaoIrregular">Após as devidas análises, entendemos pela manutenção irregular do benefício, uma vez que a renda per capita passou a ser superior a ¼ (um quarto) do salário-mínimo vigente, após a concessão, havendo, portanto, a superação dos requisitos para a manutenção do benefício assistencial em análise, devendo os valores recebidos indevidamente serem devolvidos em razão de restar comprovada a materialidade da conduta de má-fé por parte do beneficiário, pela omissão da informação, de acordo com os artigos 47, 48 e 49 do Decreto n.º 6.214/2007. Foi realizado o levantamento do valor de R$ {{valorDebito}} {{valorDebitoExtenso}}, corrigido monetariamente até esta data, referente ao período de {{periodoDebitoInicial}} a {{periodoDebitoFinal}}, conforme art. 175 do Decreto n.º 3048/99.</li>
        <li v-if="concessaoIrregular">Após as devidas análises, entendemos pela concessão irregular do benefício, com recebimento indevido de valores, passíveis de restituição, de acordo com os artigos 47, 48 e 49 do Decreto n.º 6.214/2007, uma vez que restou comprovada a materialidade da conduta de má-fé, em razão da declaração do(a) interessado(a) no requerimento inicial de não possuir benefício ou perceber renda. Foi realizado o levantamento do valor de R$ {{valorDebito}} {{valorDebitoExtenso}}, corrigido monetariamente até esta data, referente ao período de {{periodoDebitoInicial}} a {{periodoDebitoFinal}}, conforme art. 175 do Decreto n.º 3048/99.</li>
        <li>Considerando que cabe ainda ao beneficiário, ou seu representante legal, manter atualizado o CadÚnico do beneficiário e de sua família, além de informar ao INSS das alterações de dados cadastrais ou da percepção de renda, conforme disposto nos artigos 12, 13 e 35-A do Decreto n.° 6.214/07. Em relação ao Cadastro Único, requisito para manutenção do Benefício de Prestação Continuada, conforme disposto nos artigos 12 e 13 do Decreto n.º 6214/2007, observamos que se encontra {{ statusCadUnicoAtual }}, sendo sua última atualização em {{ dtAtuCadUnico }}.</li>
        <li v-if="valorDebito && periodoDebitoInicial && periodoDebitoFinal">{{ hasDebito }}</li>        
        <li v-if="!isRegular">Diante do exposto, feitas as devidas considerações, foi constatada a irregularidade, além de períodos recebidos indevidamente, razão pela qual o benefício foi suspenso com encaminhamento de ofício, facultando à(o) interessada(o) prazo para recorrer da decisão ao Conselho de Recursos da Previdência Social.</li>
      </ol>
    </div>

    <CopyText :sourceToCopy="sourceToCopy" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CopyText from "./../components/CopyTextComponent.vue";

export default {
  name: "MobRelatorioAnalise",
  data() {
    return {
      defesa: "tempestiva",
      defesaNaoApresentada: false,
      manutencaoIrregular: false,
      concessaoIrregular: false,
      sourceToCopy: "analiseDefesa",
    };
  },
  computed: {
    ...mapGetters({
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      dtAtuCadUnico: "getDtAtuCadUnico",
      objIrregularidade: "getObjIrregularidade",
      detalheIrregularidade: "getDetalheIrregularidade",
      isRegular: "getIsRegular",
      origemApuracaoAtual: "getOrigemApuracaoAtual",
    }),

    hasDebito() {
      if (this.valorDebito)
        return `O valor do débito apurado é de ${this.valorDebito} - ${this.valorDebitoExtenso} referente ao período de ${this.periodoDebitoInicial} a ${this.periodoDebitoFinal}.`;

      return "Não há débito a se cobrar.";
    },
  },
  components: {
    CopyText,
  },
};
</script>

<style scoped>
textarea:focus {
  background-color: khaki;
}
textarea {
  width: 90%;
}
li {
  padding-top: 10px;
}
</style>
