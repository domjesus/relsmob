<template>
  <div class="tudo">
    <div class="cobranca hide">Este conteudo vai ser copiado para a parte de cobrança</div>
    <div class="suspenso hide">TEXTO DO NB SUSPENSO</div>
    <div class="debito hide">O valor do débito apurado é de</div>

    <div class="botoes">
      <button class="btn btn-danger" @click="copiaTexto($event, 'cobranca')">Com Cobrança</button>
      <button class="btn btn-primary" @click="copiaTexto($event, 'suspenso')">Suspenso</button>
      <button class="btn btn-danger" @click="copiaTexto($event, 'debito')">Débito</button>
    </div>
    <div class="texto">
      <textarea rows="10">
            1.      A Previdência Social, após avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003, detectou irregularidade na manutenção do Benefício de Prestação Continuada que consiste na percepção de renda per capita do grupo familiar superior a ¼ (um quarto) do salário-mínimo vigente, contrariando o contido no art. 20, § 3º, da Lei n.º 8.742/93, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.

2.      A apuração do benefício está relacionada aos batimentos contínuos realizados pelo INSS e às informações prestadas pelo(a) titular (ou seu representante legal), estando o declarante sujeito às sanções previstas em lei nos casos de declaração falsa ou omissão de informação, de acordo com o art. 13 do Decreto n.º 6.214/2007.

3.      Considerando que cabe ainda ao beneficiário, ou seu representante legal, manter atualizado o CadÚnico do beneficiário e de sua família, além de informar ao INSS das alterações de dados cadastrais ou da percepção de renda, conforme disposto nos artigos 12, 13 e 35-A do Decreto n.° 6.214/07.

4.      Encaminhado o Ofício de Defesa, com base no art. 5º, inciso LV, da Constituição Federal, de 5 de outubro de 1988, e decorrido o devido prazo legal, a defesa foi apresentada de forma tempestiva.

Verificando informações do CadÚnico, temos que o cadastro foi atualizado em 03/07/2019, sendo o grupo familiar composto pelo(a) titular, seu(sua) cônjuge o Sr FULANO DE TAL DA SILVA, o qual é titular do NB 99/9999999, cujo benefício tem MR= R$ 1216,00, DIB em 05/01/2005 e DDB em 22/01/2005, posteriores portanto à concessão do benefício ora em análise. Conforme citado no despacho de análise prévia a defesa juntada refere-se a terceiros, no entanto foi verificado somente o critério de superação de renda de que trata a NT 20.

5.      Após as devidas análises, entendemos pela manutenção irregular do benefício, uma vez que a renda per capita passou a ser superior a ¼ (um quarto) do salário-mínimo vigente, após a concessão, havendo, portanto, a superação dos requisitos para a manutenção do benefício assistencial em análise

{{ textos[0].cobranca }} - {{ textos[0].suspenso }} - {{ textos[0].debito }} {{
          valorDebito
        }}

        {{ valorDebitoExtenso }}

6.      Em relação ao Cadastro Único, requisito para manutenção do Benefício de Prestação Continuada, conforme disposto nos artigos 12 e 13 do Decreto n.º 6214/2007, observamos que se encontra {{
          
        }}.

7.      Diante do exposto, feitas as devidas considerações, foi constatada a irregularidade, além de períodos recebidos indevidamente, razão pela qual o benefício foi suspenso com encaminhamento de ofício, facultando à(o) interessada(o) prazo para recorrer da decisão ao Conselho de Recursos da Previdência Social.
      </textarea>
    </div>
  </div>
</template>

<script>
import { mapsGetters, mapGetters } from "vuex";

export default {
  name: "MobRelatorioAnalise",
  data() {
    return {
      textos: ["texto1", "texto2", "texto3"]
    };
  },
  methods: {
    copiaTexto(e, field) {
      let texto = document.querySelector("." + field).innerHTML;
      console.log(texto);
      this.textos[0][field] = texto;
      //   console.log(this.textos[0].cobranca);
    }
  },
  computed: {
    ...mapGetters({
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso"
    })
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
