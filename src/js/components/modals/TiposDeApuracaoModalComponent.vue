<template>
  <b-modal
    title="Tipos de apuração"
    v-model="showModal"
    hide-footer
    size="lg"
    @hidden="closeAndRedirect"
  >
    <div class="container container-items">
      <b-button
        variant="primary"
        v-for="(type, i) in tiposDeApuracao"
        :key="i"
        class="btnItem"
        size="lg"
        @click="setTipoApuracao(type.tipo, type.nome)"
        >{{ type.nome }}</b-button
      >
    </div>
  </b-modal>
</template>

<script>
import { BModal, BButton } from "bootstrap-vue";
import { mapGetters } from "vuex";

export default {
  name: "TiposDeApuracaoModalComponent",
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
  computed: {
    ...mapGetters({
      tiposDeApuracao: "getTiposDeApuracao",
      tipoSelecionado: "getTipoDeApuracaoSelecionado",
    }),
  },
  methods: {
    setTipoApuracao(tipo, nome) {
      // this.showModal = false;
      this.$store.dispatch("changeTipoDeApuracao", { tipo, nome });
      this.closeAndRedirect();
    },
    closeAndRedirect() {
      this.$emit("changeModal");
      this.showModal = false;
    },
  },
  mounted() {
    // console.log(this.tiposDeApuracao);
    // this.showModal = true;
    this.showModal = this.show;
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
.btnItem {
  margin: 15px;
}
</style>