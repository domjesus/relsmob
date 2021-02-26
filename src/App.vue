<template>
  <div id="nav">
    <ContainerComponents />
    <!-- <card-accordion /> -->
  </div>
</template>

<script>
import ContainerComponents from "./js/components/ContainerComponents.vue";

// import OficioDefesa from "./js/components/OficioDefesa.vue";
// import CardAccordion from "./js/components/CardAccordion.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ContainerComponents,
    // OficioDefesa,
    // CardAccordion,
  },
  created() {
    // console.log("App Component just created and atualized...");
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}
</style>