<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
    <li>
      O Instituto Nacional do Seguro Social, por intermédio de Ofício de Defesa, comunicou a V.Sa. sobre a apuração dos indícios de irregularidade no Benefício de Prestação Continuada.
    </li>
    <li v-if="defesaNaoApresentada && !defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, NÃO houve apresentação de defesa e provas ou novos elementos por parte da interessada que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício assistencial.</li>
    <li v-if="defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, da análise da defesa apresentada observa-se que não houve prova suficiente, ou novos elementos que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício assistencial.</li>
    <li v-if="objIrregularidade.trim().length">{{ objIrregularidade }}</li>
    <li v-if="detalheIrregularidade">{{ detalheIrregularidade }}</li>
    <li v-if="!isRegular">Diante do exposto, comunicamos que o benefício assistencial foi suspenso. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss.</li>
    <li v-if="isRegular">Diante do exposto, comunicamos que o benefício assistencial será mantido, mas existe(m) período(s) de recebimento indevido, passível(eis) de restituição. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss.</li>
    <li v-if="hasDebito">
      {{ hasDebito }}
    </li>
    <li>Considerando o contido nos artigos 47 e 47-A do Decreto n.º 6.214/07 e §§1º e 2º do artigo 41 da Portaria Conjunta n.º 1/MDS/17, em caso de interposição de recurso V.Sa. deverá apresentar os documentos comprobatórios referentes ao grupo e renda familiar, além da inscrição no CADÚnico.</li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SuperacaoRenda",
  props: {
    defesaNaoApresentada: {
      type: Boolean,
      required: true,
    },
    defesaInsuficiente: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      objIrregularidade: "getObjIrregularidade",
      detalheIrregularidade: "getDetalheIrregularidade",
      isRegular: "getIsRegular",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
    }),

    hasDebito() {
      if (this.valorDebito)
        return `O valor do débito apurado é de ${this.valorDebito} - ${this.valorDebitoExtenso} referente ao período de ${this.periodoDebitoInicial} a ${this.periodoDebitoFinal}.`;

      return "Não há débito a se cobrar.";
    },
  },
};
</script>

<style>
</style>