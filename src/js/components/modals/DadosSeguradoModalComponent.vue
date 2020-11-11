<template>
  <b-modal
    id="regular-modal"
    ref="segurado-modal"
    title="Nome do(a) interessado"
    ok-variant="success"
    ok-only
    @ok.prevent="hideModal"
    v-model="showModal"
  >
    <label for="nomeSegurado">Nome: </label
    ><input
      type="text"
      class="form-control"
      placeholder="nome do segurado"
      @keyup="changeNameSegurado"
    />
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";

export default {
  name: "DadosSeguradoModalComponent",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    show() {
      this.showModal = true;
    },
  },
  components: {
    BModal,
  },
  methods: {
    changeNameSegurado(field) {
      this.$store.dispatch("changeNomeSegurado", field.target.value);
      // console.log(this.$store.getters.getNomeSegurado);
    },
    hideModal() {
      // this.$refs['segurado-modal'].hide();
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>