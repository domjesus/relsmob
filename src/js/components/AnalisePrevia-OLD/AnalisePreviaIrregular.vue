<template>
  <div>
    <h4>Análise irregular</h4>
    <input
      type="text"
      class="form-control"
      v-model="textoComplementar"
      placeholder="Digite texto complementar!"
      hidden
    />

    <textarea rows="10" id="textoAnaliseIrregular" title="Analise Irregular">
                      1.      Trata-se de apuração de indícios de irregularidade detectados em batimento contínuo de informações sobre a renda per capita do grupo familiar do Benefício de Prestação Continuada, conforme avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003. {{
        origemApuracaoAtual.nome
      }}

                      2.      Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). {{
        nomeSegurado.toUpperCase()
      }}, do benefício assistencial em análise, contraria o disposto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.
                      
                      3.     Em relação ao Cadastro Único, requisito para manutenção do benefício objeto desta apuração, conforme disposto nos artigos 12 e 13 do Decreto n.º 6.214/2007, observa-se que o(a) interessado(a) possui o CadÚnico {{
        statusCadUnicoAtual
      }}. {{ trataCadUnico }}  
                      
                     4.      Em face ao exposto, caberá emissão de Ofício de Defesa a(o) interessado(a), conforme artigo 47, §1º, do Decreto n.º 6.214/2007.                    
                  </textarea
    >
    <br />
    <button
      type="button"
      class="btn btn-primary"
      name="btnCopia"
      id="btnCopia"
      @click="copiatexto('textoAnaliseIrregular')"
    >
      Copiar texto
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { copyTextById } from "./../../functions/utils";
export default {
  name: "AnalisePreviaIrregular",

  data() {
    return {
      dataShow: false,
      textoComplementar: "",
    };
  },
  methods: {
    ...mapActions(["changeDtAtuCadUnico"]),
    copiatexto(idElemento) {
      try {
        if (copyTextById(idElemento))
          this.$bvToast.toast(`Copiado texto com sucesso!`, {
            title: "Deu certo!",
            autoHideDelay: 3000,
            variant: "success",
          });
      } catch (error) {
        this.$bvToast.toast(`Erro ao copiar`, {
          title: "Não deu certo!",
          autoHideDelay: 3000,
          variant: "danger",
        });
      }
    },
  },
  computed: {
    //...mapState(["statusCadUnicoAtual"]),
    ...mapGetters({
      nomeSegurado: "getNomeSegurado",
      dtAtuCadUnico: "getDtAtuCadUnico",
      isRegular: "getIsRegular",
      statusCad: "getStatusCadUnico",
      statusCadUnicoAtual: "getStatusCadUnicoAtual",
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
textarea:focus {
  background-color: khaki;
}
textarea {
  width: 90%;
}
</style>
