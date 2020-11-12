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
    <input
      type="text"
      class="form-control"
      placeholder="nome do(a) segurado(a) ou interessado(a)"
      @keyup="changeNameSegurado"
      :value="nomeSegurado"
    />
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import { mapGetters } from "vuex";

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
      if (this.show) this.showModal = true;
      else this.show = false;
    },
  },
  computed: {
    ...mapGetters({
      nomeSegurado: "getNomeSegurado",
    }),
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