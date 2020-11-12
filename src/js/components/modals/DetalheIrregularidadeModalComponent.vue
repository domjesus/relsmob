<template>
  <b-modal
    id="regular-modal"
    ref="segurado-modal"
    title="Detalhe da irregularidade"
    ok-variant="success"
    ok-only
    @ok.prevent="hideModal"
    v-model="showModal"
    size="lg"
  >
    <textarea
      name="txtDetalheIrregularidade"
      id="txtDetalheIrregularidade"
      rows="10"
      placeholder="Informe os detalhes da irregularidade aqui."
      @keyup="changeDetalheIrregularidade($event.target.value)"
      :value="detalheIrregularidade"
      v-b-tooltip.bottom.v-info
      title="Este texto migrará para o relatório de análie, item 3 (se não foi informado objeto da irregularidade) ou 4. No ofício de recurso aparecerá no item 3."
    ></textarea>
    <!-- <p class="bg-warning">
      Informe aqui um resumo da irregularidade, o qual sairá na análise da
      defesa (item 3 ou 4) e no ofício de recurso (item ).
    </p> -->
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

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
      detalheIrregularidade: "getDetalheIrregularidade",
    }),
  },
  components: {
    BModal,
  },

  methods: {
    ...mapActions(["changeDetalheIrregularidade"]),

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
textarea {
  border-radius: 6px;
  background-color: khaki;
  width: 100%;
}
</style>