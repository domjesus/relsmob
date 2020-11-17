<template>
  <!-- prettier-ignore -->

  <ol contenteditable>
    <li>Trata-se de indícios irregularidade quanto à acumulação indevida de benefício, sendo um deles o benefício nº {{ nbAcumuladoFirst }}, onde figura como titular o (a) Sr(a) {{nomeSegurado}}, sendo que esta demanda se origina de {{ origemApuracao }}.</li>
    <li>A partir do cruzamento de informações verificou indícios de irregularidade que consistem em acumulação entre os benefícios {{ nbAcumuladoFirst }} e {{ nbAcumuladoSecond }}.</li>
    <li>Foram realizadas consultas aos sistemas de informações da Previdência Social, das quais se depreende, preliminarmente, que {{ detalheIrregularidade }}.</li>
    <li v-if="isRegular">Considerando que não há vedação exposta no art. 528 da IN 77/2015, quanto à acumulação de aposentadoria com pensão por morte, entendemos pela regularidade do benefício em tela, propondo seu arquivamento.</li>
    <li v-if="valorDebito">Face aos indícios de irregularidade detectados, o débito com o erário perfaz o valor de {{ valorDebito }}, atualizado até a competência {{ periodoDebitoFinal }}.</li>
    <li v-if="!isRegular"> Diante do exposto, caberá emissão de Ofício de Defesa à (o) interessada(o), conforme art. 69, § 1º da Lei nº 8.212/1991.</li>
    <li v-if="isRegular">Diante do exposto, propomos o arquivamento do processo.</li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AcumulacaoIndevida",
  props: {
    nomeSegurado: {
      type: String,
      required: true,
    },
    valorDebito: {
      type: String,
      required: true,
    },
    periodoDebitoFinal: {
      type: String,
      required: true,
    },
    isRegular: {
      type: Boolean,
      required: true,
    },
    detalheIrregularidade: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      nbAcumuladoFirst: "getNbAcumuladoFirst",
      nbAcumuladoSecond: "getNbAcumuladoSecond",
      origemApuracao: "getOrigemApuracaoAcumulacao",
    }),
  },
};
</script>

<style>
</style>