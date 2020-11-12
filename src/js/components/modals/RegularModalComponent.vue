<template>
  <b-modal
    id="main-modal"
    ref="main-modal"
    title="Status Prévio"
    ok-title="REGULAR"
    ok-variant="success"
    cancel-title="IRREGULAR"
    cancel-variant="danger"
    @ok.prevent="setRegular"
    @cancel.prevent="setIrregular"
    v-model="showModal"
  >
    <p class="my-4">Se possível informe o status prévio da análise</p>
    <p class="alert alert-warning">
      Para parcialmente irregular marque 'irregular'
    </p>
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";

export default {
  name: "RegularModalComponent",
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
  mounted() {
    this.$refs["main-modal"].show();
  },
  components: {
    BModal,
  },
  watch: {
    show() {
      if (this.show) this.showModal = true;
      else this.show = false;
    },
  },
  methods: {
    setRegular() {
      // console.log(this.$refs);

      // this.$refs["main-modal"].hide();
      this.showModal = false;

      this.$store.dispatch("changeIsRegular", true);
      this.$emit("changeModal");
    },
    setIrregular() {
      this.showModal = false;
      this.$store.dispatch("changeIsRegular", false);
      this.$emit("changeModal");
      // this.$refs["main-modal"].hide();
    },
  },
};
</script>

<style>
</style>