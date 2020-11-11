<template>
  <div v-show="!isRegular" @mouseleave="escondeToolTip">
    <h4>Análise irregular</h4>
    <input
      type="text"
      class="form-control"
      v-model="textoComplementar"
      placeholder="Digite texto complementar!"
      hidden
    />

    <textarea rows="10" id="textoAnalise" title="Analise Irregular">
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
    <div id="tooltip" role="tooltip" data-popper-arrow :data-show="dataShow">
      <p id="innerTooltip">Copiado com sucesso!</p>
      <div id="arrow" data-popper-arrow></div>
    </div>
    <br />

    <button
      type="button"
      class="btn btn-primary"
      name="btnCopia"
      id="btnCopia"
      @click="copiatexto('textoAnalise')"
    >
      Copiar texto
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { createPopper } from "@popperjs/core";

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
      let textoCopiado = document.getElementById(idElemento);

      textoCopiado.select();
      document.execCommand("copy");

      const popcorn = document.querySelector(`#${idElemento}`);

      const tooltip = document.querySelector("#tooltip");
      this.dataShow = true;
      //   console.log(tooltip);

      createPopper(popcorn, tooltip, {
        placement: "bottom",
      });
    },
    escondeToolTip() {
      this.dataShow = false;
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
