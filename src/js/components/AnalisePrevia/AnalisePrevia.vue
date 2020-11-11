<template>
  <div>
    <AnalisePreviaIrregular v-show="!isRegular" />
    <AnalisePreviaRegular v-show="isRegular" />
  </div>
</template>

<script>
import AnalisePreviaIrregular from "./AnalisePreviaIrregular.vue";
import AnalisePreviaRegular from "./AnalisePreviaRegular.vue";
import { mapGetters } from "vuex";

export default {
  name: "AnalisePrevia",
  computed: {
    ...mapGetters({ isRegular: "getIsRegular" }),
  },
  components: {
    AnalisePreviaIrregular,
    AnalisePreviaRegular,
  },
};
</script>

<style>
</style>