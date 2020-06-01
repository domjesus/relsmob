<template>
  <div>
    <dados-basicos />
    <card-accordion />
  </div>
</template>

<script>
import DadosBasicos from "./js/components/DadosBasicos.vue";
import OficioDefesa from "./js/components/OficioDefesa.vue";
import CardAccordion from "./js/components/CardAccordion.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    DadosBasicos,
    OficioDefesa,
    CardAccordion
  },
  created() {
    // console.log("App Component just created and atualized...");
  }
};
</script>
