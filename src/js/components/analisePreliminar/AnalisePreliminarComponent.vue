<template>
  <div>
    <div :id="sourceToCopy">
      <AcumulacaoIndevida
        :nomeSegurado="nomeSegurado"
        :valorDebito="valorDebito"
        :periodoDebitoInicial="periodoDebitoInicial"
        :periodoDebitoFinal="periodoDebitoFinal"
        :detalheIrregularidade="detalheIrregularidade"
        :isRegular="isRegular"
        v-if="tipoApuracaoSelecionado == 'acumulacao'"
      />

      <SuperacaoRenda
        :nomeSegurado="nomeSegurado"
        :isRegular="isRegular"
        v-if="tipoApuracaoSelecionado == 'superacaoRenda'"
      />
    </div>
    <CopyText :sourceToCopy="sourceToCopy" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AcumulacaoIndevida from "./AcumulacaoIndevida.vue";
import SuperacaoRenda from "./SuperacaoRenda.vue";
import CopyText from "./../CopyTextComponent.vue";

export default {
  name: "AcumulacaoCOmponent",
  data() {
    return {
      sourceToCopy: "analisePreliminar",
    };
  },
  computed: {
    ...mapGetters({
      nomeSegurado: "getNomeSegurado",
      detalheIrregularidade: "getDetalheIrregularidade",
      valorDebito: "getValorDebito",
      periodoDebitoInicial: "getPeriodoDebitoInicial",
      periodoDebitoFinal: "getPeriodoDebitoFinal",
      isRegular: "getIsRegular",
      tipoApuracaoSelecionado: "getTipoDeApuracaoSelecionado",
    }),
  },
  components: {
    AcumulacaoIndevida,
    SuperacaoRenda,
    CopyText,
  },
};
</script>

<style>
</style>