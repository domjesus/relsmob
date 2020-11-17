<template>
  <div :id="sourceToCopy">
    <SuperacaoRenda v-if="tipoApuracaoSelecionado == 'superacaoRenda'" />
    <AcumulacaoIndevida v-if="tipoApuracaoSelecionado == 'acumulacao'" />

    <CopyText :sourceToCopy="sourceToCopy" />
  </div>
</template>

<script>
import SuperacaoRenda from "./SuperacaoRenda.vue";
import AcumulacaoIndevida from "./AcumulacaoIndevida.vue";
import { mapGetters } from "vuex";
import CopyText from "./../CopyTextComponent.vue";

export default {
  name: "OficioDefesaComponent",
  data() {
    return {
      sourceToCopy: "oficioDefesa",
    };
  },
  components: {
    SuperacaoRenda,
    AcumulacaoIndevida,
    CopyText,
  },
  computed: {
    ...mapGetters({ tipoApuracaoSelecionado: "getTipoDeApuracaoSelecionado" }),
  },
};
</script>

<style>
</style>