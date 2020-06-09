<template>
  <div v-show="isRegular">
    <h4>Análise regular</h4>
    <input
      type="text"
      class="form-control"
      v-model="textoComplementar"
      placeholder="Digite texto complementar!"
      hidden
    />

    <!-- <textarea rows="10" v-model="trataLinhas"></textarea> -->

    <textarea rows="10" id="txtAnaliseReg" title="Analise regular">
                      1.      Trata-se de apuração de indícios de irregularidade detectados em batimento contínuo de informações sobre a renda per capita do grupo familiar do Benefício de Prestação Continuada, conforme avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003. {{
        origemApuracaoAtual.nome
      }}

                      2.      Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). {{
        nomeSegurado
      }}, do benefício assistencial em análise, contraria o disposto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.
                      
                      3.      Verificando o CadÚnico, temos que o cadastro é {{
        statusCadUnicoAtual
      }} e a última atualização foi em {{
        dtAtuCadUnico
      }}. O grupo familiar do(a) titular é composto pelo (a) titular unicamente, sendo que não há outras rendas no CadÚnico ou no CNIS, conforme telas que fizemos anexar. 

             {{ textoComplementar }}         
                      4.      Após pesquisas aos sistemas e análise do processo, concluímos pela manutenção regular do Benefício de Prestação Continuada.
                      
                      5.      Diante do exposto, caberá emissão do ofício de regularidade ao interessado, caso tenha sido informado da revisão em momento anterior.
                      
                      6.      Por fim, propomos o arquivamento do processo, sem mais diligências.                      
    </textarea>    
    <copy-text copyFrom="txtAnaliseReg" />    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CopyText from "./MobCopyText.vue"

export default {
  name: "RegularComponent",

  data() {
    return {      
      textoComplementar: ""
    };
  },  
  computed: {
    ...mapGetters({
      nomeSegurado: "getNomeSegurado",
      dtAtuCadUnico: "getDtAtuCadUnico",
      isRegular: "getIsRegular",
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      textos: "getTextos"
    }),
    trataLinhas: {
      get() {
        let linhas = "";
        if (this.textos.analisePrevia) {
          this.textos.analisePrevia.forEach(
            (item, i) => (linhas += `${item} \n\n`)
          );
          return linhas;
        }
      },
      set() {}
    },

    origemApuracaoAtual() {
      return this.$store.state.origemApuracaoAtual;
    }
  },
  components:{
    CopyText
  }
};
</script>

<style scoped>
input[type="text"]:focus {
  background-color: darksalmon;
}
textarea:focus {
  background-color: khaki;
}
textarea {
  width: 90%;
}
</style>
