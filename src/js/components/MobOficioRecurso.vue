<template>
  <div>
    <div
      class="debito" id="debito">O valor do débito apurado é de {{valorDebito }} - {{ valorDebitoExtenso}} referente ao período de {{ periodoDebitoInicial }} a {{periodoDebitoFinal}}.</div>
    <button class="btn btn-primary" @click="addTexto('debito')">Tem Débito</button>

    <br />

    <textarea rows="10" v-model="trataLinhas" id="txtOfRecurso"></textarea>
    <input type="text" v-model="newtext" placeholder="new element" />

    <!-- <mob-new-element-text v-model="newtext" /> -->
    <copy-text copyFrom="txtOfRecurso" />
  </div>
</template>

<script>
import MobNewElementText from "./MobNewElementText.vue";
import CopyText from "./MobCopyText.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      textos: "getTextos",
      valorDebito: "getValorDebito",
      valorDebitoExtenso: "getValorDebitoExtenso",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal"
    }),
    trataLinhas: {
      get() {
        let linhas = "";
        this.localText = this.textos.recurso;
        if (this.localText) {
          this.localText.forEach((item, i) => (linhas += `${item} \n\n`));
          return linhas;
        }
      },
      set() {}
    }
  },

  data() {
    return {
      newtext: "",
      localText: []
    };
  },
  methods: {
    digitou(e) {
      console.log("Vc digitou" + e.target.value);
    },
    addTexto(idElemento) {
      console.log;
      let textoDebito = document.querySelector("#" + idElemento).innerHTML;
      this.localText.splice(2, 0, textoDebito);
    }
  },
  components: {
    MobNewElementText,
    CopyText

  }
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
