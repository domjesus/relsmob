<template>
  <!-- prettier-ignore -->
  <ol contenteditable="">
    <li>
      O Instituto Nacional do Seguro Social, por intermédio de Ofício de Defesa, comunicou a V.Sa. sobre a apuração dos indícios de irregularidade no benefício de vossa senhoria, devido a vínculos fictícios</li>
    <li v-if="defesaNaoApresentada && !defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, NÃO houve apresentação de defesa e provas ou novos elementos por parte da interessada que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício.</li>
    <li v-if="defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, da análise da defesa apresentada observa-se que não houve prova suficiente, ou novos elementos que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício.</li>    
    <li v-if="detalheIrregularidade">{{ detalheIrregularidade }}</li>
    <li v-if="hasDebito">{{ hasDebito }}</li>
    <li v-if="!isRegular">Diante do exposto, comunicamos que o benefício foi suspenso. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss.</li>
    
  </ol>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "vinculosFicticios",
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

      //   return "Não há débito a se cobrar.";
    },
  },
};
</script>

<style>
</style>