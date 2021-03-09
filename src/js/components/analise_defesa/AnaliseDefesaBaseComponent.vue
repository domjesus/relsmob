<template>
  <div>
    <div class="botoes mb-5">
      <input
        type="checkbox"
        @click="
          defesa = true;
          defesaNaoApresentada = false;
        "
        true-value="tempestiva"
        false-value="intempestiva"
        v-model="defesa"
      /><span v-b-tooltip.bottom.v-warning title="Marque para defesa tempestiva"
        >Defesa Tempestiva</span
      >

      <input
        type="checkbox"
        @click="
          defesaNaoApresentada = true;
          defesa = false;
        "
        v-model="defesaNaoApresentada"
      />
      <span
        v-b-tooltip.bottom.v-info
        title="Marque para defesa NÃO apresentada"
      >
        Defesa NÃO apresentada
      </span>

      <button
        class="btn btn-secondary"
        @click="
          manutencaoIrregular = true;
          concessaoIrregular = false;
        "
      >
        Manutenção Irregular
      </button>
      <button
        class="btn btn-secondary"
        @click="
          concessaoIrregular = true;
          manutencaoIrregular = false;
        "
      >
        Concessao Irregular
      </button>
    </div>

    <div :id="sourceToCopy">
      <superacao
        v-if="tipoDeApuracaoSelecionado == 'superacaoRenda'"
        :defesa="defesa"
        :defesa-nao-apresentada="defesaNaoApresentada"
        :manutencaoIrregular="manutencaoIrregular"
        :concessaoIrregular="concessaoIrregular"
        :defesaInsuficiente="defesaInsuficiente"
      />
      <acumulacao
        v-if="tipoDeApuracaoSelecionado == 'acumulacao'"
        :defesa="defesa"
        :defesa-nao-apresentada="defesaNaoApresentada"
        :manutencaoIrregular="manutencaoIrregular"
        :concessaoIrregular="concessaoIrregular"
        :defesaInsuficiente="defesaInsuficiente"
      />
    </div>

    <copy-text-component :sourceToCopy="sourceToCopy" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CopyTextComponent from "../CopyTextComponent.vue";
import Acumulacao from "./acumulacao_indevida/Acumulacao.vue";
import superacao from "./bpc/superacao.vue";
export default {
  name: "AnaliseDefesaBaseComponent",
  data() {
    return {
      defesa: "tempestiva",
      defesaNaoApresentada: false,
      manutencaoIrregular: false,
      concessaoIrregular: false,
      defesaInsuficiente: false,
      sourceToCopy: "analise_Defesa",
    };
  },
  computed: {
    ...mapGetters({
      tipoDeApuracaoSelecionado: "getTipoDeApuracaoSelecionado",
    }),
  },
  components: { superacao, Acumulacao, CopyTextComponent },
};
</script>
    Acumulacao

<style>
</style>