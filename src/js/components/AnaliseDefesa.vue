<template>
  <div class="tudo">
    <div class="cobranca hide">Este conteudo vai ser copiado para a parte de cobrança</div>
    <div class="suspenso hide">TEXTO DO NB SUSPENSO</div>
    <div
      class="debito hide"
    >O valor do débito apurado é de {{valorDebito }} - {{ valorDebitoExtenso}} referente ao período de {{ periodoDebitoInicial }}a {{periodoDebitoFinal}}</div>

    <div
      class="mantem hide"
    >Após as devidas análises, entendemos pela manutenção irregular do benefício, uma vez que a renda per capita passou a ser superior a ¼ (um quarto) do salário-mínimo vigente, após a concessão, havendo, portanto, a superação dos requisitos para a manutenção do benefício assistencial em análise</div>
    <div
      class="st-cad-unico hide"
    >Em relação ao Cadastro Único, requisito para manutenção do Benefício de Prestação Continuada, conforme disposto nos artigos 12 e 13 do Decreto n.º 6214/2007, observamos que se encontra {{statusCadUnicoAtual}}, sendo sua última atualização em {{dtAtuCadUnico}}</div>

    <div class="botoes">
      <button class="btn btn-danger" @click="copiaTexto($event, 'cobranca')">Com Cobrança</button>
      <button class="btn btn-primary" @click="copiaTexto($event, 'suspenso')">Suspenso</button>
      <button class="btn btn-danger" @click="copiaTexto($event, 'debito')">Débito</button>
      <button class="btn btn-primary" @click="copiaTexto($event, 'mantem')">Manter NB</button>
      <button class="btn btn-danger" @click="copiaTexto($event, 'st-cad-unico')">Status CadÚnico</button>
    </div>
    <div class="texto">
      <textarea rows="10" v-model="trataLinhas"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MobRelatorioAnalise",
  data() {
    return {
      textoTmp: [
        "A Previdência Social, após avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003, detectou irregularidade na manutenção do Benefício de Prestação Continuada que consiste na percepção de renda per capita do grupo familiar superior a ¼ (um quarto) do salário-mínimo vigente, contrariando o contido no art. 20, § 3º, da Lei n.º 8.742/93, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.",
        "A apuração do benefício está relacionada aos batimentos contínuos realizados pelo INSS e às informações prestadas pelo(a) titular (ou seu representante legal), estando o declarante sujeito às sanções previstas em lei nos casos de declaração falsa ou omissão de informação, de acordo com o art. 13 do Decreto n.º 6.214/2007.",
        "Considerando que cabe ainda ao beneficiário, ou seu representante legal, manter atualizado o CadÚnico do beneficiário e de sua família, além de informar ao INSS das alterações de dados cadastrais ou da percepção de renda, conforme disposto nos artigos 12, 13 e 35-A do Decreto n.° 6.214/07.",
        "Encaminhado o Ofício de Defesa, com base no art. 5º, inciso LV, da Constituição Federal, de 5 de outubro de 1988, e decorrido o devido prazo legal, a defesa foi apresentada de forma tempestiva.",
        "Diante do exposto, feitas as devidas considerações, foi constatada a irregularidade, além de períodos recebidos indevidamente, razão pela qual o benefício foi suspenso com encaminhamento de ofício, facultando à(o) interessada(o) prazo para recorrer da decisão ao Conselho de Recursos da Previdência Social."
      ],
      camposJaAdicionados: []
    };
  },
  methods: {
    copiaTexto(e, field) {
      let texto = document.querySelector("." + field).innerHTML;

      if (this.camposJaAdicionados.indexOf(field) >= 0) return this.trataLinhas;

      this.camposJaAdicionados.push(field);
      console.log(this.camposJaAdicionados);

      this.textoTmp.splice(3, 0, texto);
      //   console.log(this.textos[0].cobranca);
    }
  },
  computed: {
    ...mapGetters({
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      dtAtuCadUnico: "getDtAtuCadUnico"
    }),
    trataLinhas: {
      get() {
        let linhas = "";
        // console.log(this.textoTmp);
        this.textoTmp.forEach((item, i) => (linhas += `${item} \n\n`));
        return linhas;
      },
      set() {}
    }
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
textarea:focus {
  background-color: khaki;
}
textarea {
  width: 90%;
}
</style>
