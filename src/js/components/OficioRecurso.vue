<template>
  <div>
    <input
      type="checkbox"
      @click="
        defesaNaoApresentada = !defesaNaoApresentada;
        defesaInsuficiente = !defesaInsuficiente;
      "
      v-model="defesaNaoApresentada"
    />
    <span v-b-tooltip.bottom.v-info title="Marque para defesa NÃO apresentada">
      Defesa NÃO apresentada
    </span>

    <input
      type="checkbox"
      @click="
        defesaInsuficiente = !defesaInsuficiente;
        defesaNaoApresentada = !defesaNaoApresentada;
      "
      v-model="defesaInsuficiente"
    />
    <span v-b-tooltip.bottom.v-info title="Marque para defesa insuficiente">
      Defesa insuficiente
    </span>

    <!-- prettier-ignore -->

    <div class="texto-recurso">
      <SuperacaoRenda :defesaNaoApresentada="defesaNaoApresentada" :defesaInsuficiente="defesaInsuficiente" v-if="tipoDeApuracao == 'superacaoRenda'"/>
      <VinculosFicticios :defesaNaoApresentada="defesaNaoApresentada" :defesaInsuficiente="defesaInsuficiente" v-if="tipoDeApuracao == 'vinculosFicticios'"/>
      <div class="alert alert-danger" v-if="!tipoDeApuracao">Não foi selecionado tipo de apuração!</div>
    </div>

    <br />
    <button
      type="button"
      class="btn btn-primary"
      name="btnCopia"
      id="btnCopia"
      @click="copiatexto('textoAnaliseDefesa')"
    >
      Copiar texto
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SuperacaoRenda from "./recurso/bpc/superacaoRenda.vue";
import VinculosFicticios from "./recurso/vinculos/VinculosFicticios.vue";

export default {
  name: "OficioDefesa",
  props: {
    tipoDeApuracao: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      defesaNaoApresentada: false,
      defesaInsuficiente: true,
    };
  },
  components: {
    SuperacaoRenda,
    VinculosFicticios,
  },
  computed: {
    // ...mapGetters({ tipoDeApuracao: "getTipoDeApuracaoSelecioanado" }),
  },
  methods: {
    copiatexto(idElemento) {
      const itemsLi = document.querySelectorAll(".texto-recurso>ol>li");
      // const outrool = document.querySelector("." + textoAnaliseDefesa);
      // console.log(outrool);
      var textBoxCopy = document.createElement("textarea");
      document.body.appendChild(textBoxCopy);

      itemsLi.forEach((item, i) => {
        if (item.innerHTML.trim())
          textBoxCopy.value += i + 1 + ".    " + item.innerHTML.trim() + "\n\n";
      });

      textBoxCopy.select();

      try {
        document.execCommand("copy");
        this.$bvToast.toast(`Copiado texto com sucesso!`, {
          title: "Deu certo!",
          autoHideDelay: 3000,
          variant: "success",
        });
      } catch (error) {
        this.$bvToast.toast(`Erro ao copiar: ${error}`, {
          title: "Erro!",
          autoHideDelay: 3000,
          variant: "danger",
        });
      }

      document.body.removeChild(textBoxCopy);
    },
  },
};
</script>