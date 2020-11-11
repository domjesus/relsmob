<template>
  <div>
    <h4>Aki vai o conteudo do oficio de recurso</h4>
    <textarea rows="10"></textarea>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OficioDefesa",
  computed: {
    ...mapGetters({ textos: "getTextos" }),
  },
};
</script>