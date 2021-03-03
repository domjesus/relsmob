<template>
  <b-modal
    id="main-modal"
    ref="main-modal"
    title="Status Prévio"
    v-model="showModal"
    hide-footer
  >
    <b-container>
      <!-- ok-title="REGULAR"
    ok-variant="success"
    cancel-title="IRREGULAR"
    cancel-variant="danger"
    @ok.prevent="setRegular"
    @cancel.prevent="setIrregular" -->
      <p class="my-4">Se possível informe o status prévio da análise</p>
      <p class="alert alert-warning">
        Para parcialmente irregular marque 'irregular'
      </p>

      <b-button
        variant="danger"
        size="lg"
        class="ml-5 my-5"
        @click="setIrregular"
      >
        <b-icon icon="hand-thumbs-down"> </b-icon>Irregular
      </b-button>

      <b-button variant="success" size="lg" class="ml-5" @click="setRegular">
        <b-icon icon="hand-thumbs-up"> </b-icon>Rregular
      </b-button>
    </b-container>
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
  // mounted() {
  //   this.$refs["main-modal"].show();
  // },
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