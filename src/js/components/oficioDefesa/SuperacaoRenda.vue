<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
    <li>Após avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003, foi detectada possível irregularidade na manutenção do seu benefício, identificando, por meio de batimento de dados contínuos, que a renda per capita do grupo familiar do Benefício de Prestação Continuada contraria o contido no art. 20, § 3º, da Lei n.º 8.742/93, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.</li>
    <li v-if="objetoDaIrregularidade">{{ objetoDaIrregularidade.trim() }} {{ judicial }}</li>
    <li>Desta maneira, em respeito aos princípios do contraditório e da ampla defesa, facultamos o prazo de 30 (trinta) dias a V.Sa., a contar do recebimento desta correspondência, para apresentar defesa, provas e documentos que demonstrem a regularidade do benefício.</li>
    <li>Considerando que a renda per capita do grupo familiar é igual ou superior a ¼ (um quarto) do salário-mínimo vigente na data da apuração, oportunizamos, em atenção à Ação Civil Pública n.º 5044874-22.2013.4.04.7100-RS, comprovar as despesas feitas em razão de sua deficiência, incapacidade ou idade avançada, com:
a) medicamentos: comprovação de prescrição médica e comprovação do valor mensal gasto; b) alimentação especial: comprovação de prescrição médica e comprovação de valor mensal gasto;
c) fraldas descartáveis: comprovação do valor mensal gasto; d) consultas com profissionais de toda área de saúde: comprovação do valor mensal gasto e, além da comprovação das despesas, demonstrar documentalmente que requereu e teve a prestação negada por órgão da rede pública de saúde com atribuição para fornecimento dos medicamentos, da alimentação especial, das fraldas descartáveis e das consultas na área de saúde, do seu domicílio. Esta declaração deverá estar assinada, carimbada e identificada pelo profissional do órgão.</li>
    <li>Advertimos quanto à necessidade de manter o Cadastro Único atualizado, requisito para manutenção do benefício objeto desta apuração, conforme disposto nos artigos 12 e 13 do Decreto n.º 6214/07.</li>
    <li>Informamos que esta apuração poderá implicar na suspensão do benefício e ainda na devolução de valores considerados irregulares, que atualizados até esta data importam em {{valorDebito}} {{ valorDebitoExtenso }}, referente ao período de {{periodoDebitoInicial}} a {{ periodoDebitoFinal }}, conforme art. 175 do Decreto 3.048/99.</li>
    <li>A defesa poderá ser apresentada pelo site https://meu.inss.gov.br/ ou aplicativo MeuINSS ou, em caso de atendimento presencial para a apresentação da defesa, é necessário o prévio agendamento do serviço "Apresentar Defesa - MOB". O agendamento poderá ser realizado pelo telefone 135, de segunda-feira a sábado, das 7h às 22h (horário de Brasília), ou pela internet no site gov.br/meuinss.</li>
    <li>Comunicamos que o dossiê eletrônico relativo ao assunto se encontra disponível em gov.br/meuinss.</li>
  </ol>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SuperacaoRenda",

  computed: {
    ...mapGetters({
      objetoDaIrregularidade: "getObjIrregularidade",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      judicial: "getJudicial",
      isRegular: "getIsRegular",
    }),
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
</style>