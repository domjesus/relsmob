<template>
  <!-- prettier-ignore -->
  <ol contenteditable>
       <li>Trata-se de apuração de indícios de irregularidade detectados em batimento contínuo de informações sobre a renda per capita do grupo familiar do Benefício de Prestação Continuada, conforme avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003. {{origemApuracaoAtual.nome}}</li>
       <li v-if="isRegular">Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). {{nomeSegurado.toUpperCase()}}, do benefício assistencial em análise, está de acordo com o dispsto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.</li>
       <li v-if="!isRegular">Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). {{nomeSegurado.toUpperCase()}}, do benefício assistencial em análise, contraria o disposto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.</li>
       <li v-if="obsBpcLeiNova">{{obsBpcLeiNova}}</li>
       <li>Em relação ao Cadastro Único, requisito para manutenção do benefício objeto desta apuração, conforme disposto nos artigos 12 e 13 do Decreto n.º 6.214/2007, observa-se que o(a) interessado(a) possui o CadÚnico {{statusCadUnicoAtual}}. {{ trataCadUnico }}</li>
       <li v-if="isRegular">Após pesquisas aos sistemas e análise do processo, concluímos pela manutenção regular do Benefício de Prestação Continuada.</li>
       <li v-if="!isRegular">Em face ao exposto, caberá emissão de Ofício de Defesa a(o) interessado(a), conforme artigo 47, §1º, do Decreto n.º 6.214/2007.</li>
      <li v-if="isRegular">Diante do exposto, caberá emissão do ofício de regularidade ao interessado, caso tenha sido informado da revisão em momento anterior.</li>
      <li v-if="isRegular">Por fim, propomos o arquivamento do processo, sem mais diligências</li>
    </ol>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SuperacaoRenda",
  props: {
    isRegular: {
      type: Boolean,
      required: true,
    },
    nomeSegurado: {
      type: String,
      required: true,
    },
  },
  computed: {
    //...mapState(["statusCadUnicoAtual"]),
    ...mapGetters({
      // nomeSegurado: "getNomeSegurado",
      dtAtuCadUnico: "getDtAtuCadUnico",
      // isRegular: "getIsRegular",
      statusCad: "getStatusCadUnico",
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
      obsBpcLeiNova: "getObsBpcLeiNova",
    }),

    trataCadUnico() {
      return this.dtAtuCadUnico.length > 0
        ? ` A última atualização do cadastro foi em ${this.dtAtuCadUnico}.`
        : "";
    },

    origemApuracaoAtual() {
      return this.$store.state.origemApuracaoAtual;
    },
  },
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
  height: auto;
}
</style>
