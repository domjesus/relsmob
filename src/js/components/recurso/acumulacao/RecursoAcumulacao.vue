<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
    <li>
      O Instituto Nacional do Seguro Social, por intermédio de Ofício de Defesa, comunicou a V.Sa. sobre a apuração dos indícios de irregularidade no recebimento conjunto de {{espName()}} com {{espName(1)}}.
    </li>
    <li v-if="defesaNaoApresentada && !defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, NÃO houve apresentação de defesa e provas ou novos elementos por parte da interessada que pudessem modificar a decisão do INSS e caracterizar o direito ao recebimento conjunto dos dois benefícios.</li>
    <li v-if="defesaInsuficiente">Facultado o prazo de 30 (trinta) dias para apresentação de defesa escrita, da análise da defesa apresentada observa-se que não houve prova suficiente, ou novos elementos que pudessem modificar a decisão do INSS e caracterizar o direito à manutenção do benefício em questão.</li>
    <li v-if="objIrregularidade.trim().length">{{ objIrregularidade }}</li>
    <li v-if="detalheIrregularidade">{{ detalheIrregularidade }}</li>  
    <li v-if="!isRegular && verificaTipoNbUm() == 'b95'">Informamos que não é permitido o recebimento em conjunto dos benefícios de {{espName()}} com {{espName(1)}}, conforme prevê o parágrafo único, art. 9º, Lei n.º 6.367/76, sendo que o auxílio suplementar {{nbum}} deveria ter sido cessado quando da concessão da aposentadoria {{nbdois}}</li>
    <li v-if="!isRegular && verificaTipoNbUm() == 'b94'">Informamos que não é permitido o recebimento em conjunto dos benefícios de {{espName()}} com {{espName(1)}}, quando a consolidação das lesões decorrentes de acidente de qualquer natureza ou o preenchimento dos requisitos da aposentadoria sejam posteriores às alterações inseridas no §2º do art. 86 da Lei n.º 8.213, de 1991, pela Medida Provisória n.º 1.596-14, convertida na Lei n.º 9.528, de 10/12/1997, o benefício do auxílio-acidente deveria ter sido cessado um dia antes da DIB (data de início do benefício) da aposentadoria.</li>
    <li v-if="hasDebito">
      {{ hasDebito }}
    </li>
    <li v-if="!isRegular">Diante do exposto, comunicamos que o benefício de {{espName()}} de número {{nbum}} foi suspenso. Sendo assim, em cumprimento ao disposto no artigo 305 do Regulamento da Previdência Social, aprovado pelo Decreto n.º 3.048, de 06/05/99, facultamos a V.Sa. o prazo de 30 (trinta) dias para interposição de recurso ao Conselho de Recursos do Seguro Social, por meio do telefone 135 ou pela internet em gov.br/meuinss.</li>
    <li v-if="isRegular">Diante do exposto, comunicamos que o benefício de {{espName()}} de número {{nbum}} será mantido.</li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
import { getNameOfEspecie } from "./../../../functions/getNameOfEspecie";

export default {
  name: "RecursoAcumulacao",
  props: ["defesaNaoApresentada", "defesaInsuficiente"],
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
    espName(seq = 0) {
      return !seq
        ? getNameOfEspecie(this.nbum.split("/")[0])
        : getNameOfEspecie(this.nbdois.split("/")[0]);
    },
  },
};
</script>

<style>
</style>