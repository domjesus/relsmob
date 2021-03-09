<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
    <li>A Previdência Social, após avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003, detectou irregularidade no recebimento conjunto de {{espName()}} com {{espName(1)}}.</li>
    <li>A apuração do benefício está relacionada aos batimentos contínuos realizados pelo INSS, no presente caso, relativo à {{origemApuracaoAtual}}.</li>
    <li v-if="defesa">
          Encaminhado o ofício de defesa, com base no art. 5º, inciso LV, da Constituição Federal, de 5 de outubro de 1988, e decorrido o devido prazo legal, a defesa foi apresentada de forma {{defesa}}.
        </li>
    <li v-if="defesaNaoApresentada && !defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, NÃO houve apresentação de defesa e provas ou novos elementos por parte da interessada que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício ora em apuração.</li>
    <li v-if="defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, da análise da defesa apresentada observa-se que não houve prova suficiente, ou novos elementos que pudessem modificar a decisão do INSS e caracterizar o direito ao recebimento conjunto dos dois benefícios.</li>
    <li v-if="objIrregularidade.trim().length">{{ objIrregularidade }}</li>
    <li v-if="verificaTipoNbUm() == 'b95'">O titular recebe dois benefícios, a saber, o {{espName()}} sob número {{nbum}} e a aposentadoria sob número {{nbdois}}, sendo que a acumulação de auxílio-suplementar com aposentadoria é vedada pelo art. 9º, § 1 da Lei 6367/1976.</li>    
    <li v-if="verificaTipoNbUm() == 'b94'">O titular recebe dois benefícios, a saber, o {{espName()}} sob número {{nbum}} e a aposentadoria sob número {{nbdois}}, sendo que a acumulação de auxílio-acidente com aposentadoria é vedada para aposentadoria iniciadas a partir de 10/11/1997, data de publicação da  Lei n.º 9.528, de 10/11/1997.</li>    
    <li v-if="detalheIrregularidade">{{ detalheIrregularidade }}</li>
    <li v-if="manutencaoIrregular">Após as devidas análises, entendemos pela manutenção irregular do benefício {{nbum}}, uma vez que a acumulação dos dois benefícios é vedada, conforme detalhamos acima. Foi realizado o levantamento do valor de {{valorDebito}} - {{valorDebitoExtenso}}, corrigido monetariamente até esta data, referente ao período de {{periodoDebitoInicial}} a {{periodoDebitoFinal}}, conforme art. 175 do Decreto n.º 3048/99.</li>
    <li v-if="concessaoIrregular">Após as devidas análises, entendemos pela concessão irregular do benefício {{nbum}}, com recebimento indevido de valores, passíveis de restituição, de acordo com os artigos 47, 48 e 49 do Decreto n.º 6.214/2007, uma vez que restou comprovada a materialidade da conduta de má-fé. Foi realizado o levantamento do valor de R$ {{valorDebito}} {{valorDebitoExtenso}}, corrigido monetariamente até esta data, referente ao período de {{periodoDebitoInicial}} a {{periodoDebitoFinal}}, conforme art. 175 do Decreto n.º 3048/99.</li>    
    <li v-if="hasDebito">
      {{ hasDebito }}
    </li>
    <li v-if="!isRegular">Diante do exposto, feitas as devidas considerações, foi constatada a irregularidade, além de períodos recebidos indevidamente, razão pela qual o benefício foi suspenso com encaminhamento de ofício, facultando à(o) interessada(o) prazo para recorrer da decisão ao Conselho de Recursos da Previdência Social.</li>
    <li v-if="isRegular">Diante do exposto, feitas as devidas considerações, foi constatada a regularidade na manutenção de ambos os benefícios.</li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
import { getNameOfEspecie } from "../../../functions/getNameOfEspecie";

export default {
  name: "Acumulacao",
  props: [
    "defesaNaoApresentada",
    "manutencaoIrregular",
    "concessaoIrregular",
    "defesaInsuficiente",
    "defesa",
  ],
  computed: {
    ...mapGetters({
      objIrregularidade: "getObjIrregularidade",
      detalheIrregularidade: "getDetalheIrregularidade",
      isRegular: "getIsRegular",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      nbum: "getNbAcumuladoFirst",
      nbdois: "getNbAcumuladoSecond",
      origemApuracaoAtual: "getOrigemApuracaoAcumulacao",
    }),

    hasDebito() {
      if (this.valorDebito)
        return `O valor do débito apurado é de ${this.valorDebito} - ${this.valorDebitoExtenso} referente ao período de ${this.periodoDebitoInicial} a ${this.periodoDebitoFinal}.`;

      return "Não há débito a se cobrar.";
    },
  },
  methods: {
    verificaTipoNbUm() {
      if (this.nbum.split("/")[0] == 95) return "b95";
      else if (this.nbum.split("/")[0] == 94) return "b94";
    },
    espName() {
      return getNameOfEspecie(this.nbum.split("/")[0]);
    },
  },
};
</script>

<style>
</style>