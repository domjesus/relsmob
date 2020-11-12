<template>
  <b-modal title="Status CadúNICO" v-model="showModal" hide-footer>
    <b-button size="xl" variant="success" @click="setStatus('atualizado')"
      >ATUALIZADO</b-button
    >
    <b-button size="xl" variant="danger" @click="setStatus('desatualizado')"
      >DESATUALIZADO</b-button
    >
    <b-button size="xl" variant="warning" @click="setStatus('inexistente')"
      >INEXISTENTE
    </b-button>
  </b-modal>
</template>

<script>
import { BModal, BButton } from "bootstrap-vue";

export default {
  name: "CadUnicoStatusModalComponent",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    setStatus(status) {
      this.showModal = false;
      this.$emit("changeModal");
      this.$store.dispatch("changeStatusCadUnicoAtual", status);
    },
  },
  components: {
    BModal,
    BButton,
  },
  watch: {
    show() {
      if (this.show) this.showModal = true;
      else this.show = false;
    },
  },
};
</script>

<style>
</style>