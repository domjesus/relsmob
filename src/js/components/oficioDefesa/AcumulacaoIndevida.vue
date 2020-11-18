<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
    <li>
      A Previdência Social, após a avaliação de que trata o artigo 11 da Lei nº 10.666, de 8 de maio de 2003 identificou indício de irregularidade que consiste na acumulação indevida entre os benefícios  {{nbAcumuladoFirst}} e {{nbAcumuladoSecond}} .
    </li>
    <li v-if="detalheIrregularidade">
    {{detalheIrregularidade}}
    </li>

    <li>
      Desta forma, em respeito ao princípio do contraditório facultamos ao (a) Senhor (a) o prazo de dez dias, a contar da data de recebimento desta correspondência, para apresentar defesa escrita e provas ou documentos de que dispuser, objetivando demonstrar a regularidade da manutenção dos benefícios.
    </li>
    <li>Informamos que o indício de irregularidade mencionado no item 1 poderá implicar na devolução de valores relativos aos períodos considerados irregulares, que atualizado até esta data importam em {{valorDebito}} - {{valorDebitoExtenso}}</li>
    <li>A defesa poderá ser apresentada pelo site https://meu.inss.gov.br/ ou aplicativo MeuINSS ou, em caso de atendimento presencial para a apresentação da defesa, é necessário o prévio agendamento do serviço "Apresentar Defesa - MOB". O agendamento poderá ser realizado pelo telefone 135, de segunda-feira a sábado, das 7h às 22h (horário de Brasília), ou pela internet no site gov.br/meuinss.</li>
    <li>
      Comunicamos que o dossiê eletrônico relativo ao assunto se encontra disponível em gov.br/meuinss.
    </li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AcumulacaoIndevida",
  computed: {
    ...mapGetters({
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      nbAcumuladoFirst: "getNbAcumuladoFirst",
      nbAcumuladoSecond: "getNbAcumuladoSecond",
      detalheIrregularidade: "getDetalheIrregularidade",
    }),
  },
};
</script>

<style>
</style>