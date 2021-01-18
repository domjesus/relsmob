<template>
  <b-modal title="Status CadúNICO" v-model="showModal" hide-footer>
    <div class="row">
      <div class="col col-md-6 mb-8">
        <input
          type="text"
          class="form-control"
          aria-label="dtAtuCadUnico"
          aria-describedby="spamdtAtuCadUnico"
          placeholder="Data de atualização"
          name="dtAtuCadUnico"
          id="dtAtuCadUnico"
          v-mask="'##/##/####'"
          @keyup="callValidaData($event, 'Data Atualização CadÚnico')"
        />
      </div>
      <div class="col">
        <b-button size="xl" variant="warning" @click="setStatus('inexistente')"
          >INEXISTENTE
        </b-button>
      </div>
    </div>
    <!-- <b-button size="xl" variant="success" @click="setStatus('atualizado')"
      >ATUALIZADO</b-button -->
    <!-- > -->
    <!-- <b-button size="xl" variant="danger" @click="setStatus('desatualizado')"
      >DESATUALIZADO</b-button
    > -->
  </b-modal>
</template>

<script>
import { validaData } from "./../../functions/utils";
import { mask } from "vue-the-mask";

import { mapGetters, mapActions } from "vuex";

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
    ...mapActions(["changeDtAtuCadUnico"]),
    setStatus(status) {
      this.showModal = false;
      this.$emit("changeModal");
      this.$store.dispatch("changeStatusCadUnicoAtual", status);
    },
    callValidaData(e, nameOfField) {
      let data = e.target.value;
      const campoId = e.target.id;

      this.checkData = validaData(data);

      if (data.length == 10) {
        if (!this.checkData && data != "") {
          this.$bvToast.toast(
            "Erro na data! Verifique o campo: " + nameOfField,
            {
              variant: "danger",
              title: "Erro!",
              autoHideDelay: 3000,
            }
          );
          // document.getElementById(campoId).focus();
        } else {
          this.changeDtAtuCadUnico(e.target.value);
          this.showModal = false;
          this.$emit("changeModal");
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      tiposDeApuracao: "getTiposDeApuracao",
      tipoSelecionado: "getTipoDeApuracaoSelecionado",
    }),
  },
  watch: {
    show() {
      if (this.tipoSelecionado == "superacaoRenda") {
        if (this.show) this.showModal = true;
        else this.show = false;
      } else this.$emit("changeModal");
    },
  },
  directives: {
    mask,
  },
};
</script>

<style>
</style>