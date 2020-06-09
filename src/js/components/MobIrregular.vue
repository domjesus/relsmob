<template>
  <div v-show="!isRegular" >
    <h4>Análise irregular</h4>
    <input
      type="text"
      class="form-control"
      v-model="textoComplementar"
      placeholder="Digite texto complementar!"
      hidden
    />

    <textarea rows="10" id="txtAnaliseIrreg" title="Analise Irregular">
                      1.      Trata-se de apuração de indícios de irregularidade detectados em batimento contínuo de informações sobre a renda per capita do grupo familiar do Benefício de Prestação Continuada, conforme avaliação de que trata o art. 11 da Lei n.º 10.666, de 8 de maio de 2003. {{
        origemApuracaoAtual.nome
      }}

                      2.      Foi identificado que a renda do grupo familiar do(a) titular, Sr(a). {{
        nomeSegurado
      }}, do benefício assistencial em análise, contraria o disposto no artigo 20, § 3º, da Lei n.º 8.742/1993, concomitante com o artigo 3º, inciso IV, do Decreto n.º 6.214/2007.
                      
                      3.     Em relação ao Cadastro Único, requisito para manutenção do benefício objeto desta apuração, conforme disposto nos artigos 12 e 13 do Decreto n.º 6.214/2007, observa-se que o(a) interessado(a) possui o CadÚnico {{
        statusCadUnicoAtual
      }} e a última atualização foi em {{ dtAtuCadUnico }}.       
                      
                     4.      Em face ao exposto, caberá emissão de Ofício de Defesa a(o) interessado(a), conforme artigo 47, §1º, do Decreto n.º 6.214/2007.                    
                  </textarea>
  <copy-text copyFrom="txtAnaliseIrreg" />    

    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CopyText from "./MobCopyText.vue"

export default {
  name: "IrregularComponent",

  data() {
    return {
      dataShow: false,
      textoComplementar: ""
    };
  },
  methods: {
    ...mapActions(["changeDtAtuCadUnico"]),
  },
  computed: {
    //...mapState(["statusCadUnicoAtual"]),
    ...mapGetters({
      nomeSegurado: "getNomeSegurado",
      dtAtuCadUnico: "getDtAtuCadUnico",
      isRegular: "getIsRegular",
      statusCad: "getStatusCadUnico",
      statusCadUnicoAtual: "getStatusCadUnicoAtual"
    }),

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
#tooltip {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  display: none;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}

#arrow::before {
  content: "";
  transform: rotate(45deg);
  background: black;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}
#tooltip[data-show] {
  display: block;
}
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
