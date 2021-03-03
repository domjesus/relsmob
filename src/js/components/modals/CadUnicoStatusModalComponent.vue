<template>
  <b-modal title="Status CadúNICO" v-model="showModal" hide-footer>
    <b-container>
      <p class="alert alert-warning py-3 px-3">
        Informe a data abaixo e será calculado automaticamente se está
        atualizado ou não, de acordo com o critério de 2 anos. Caso não haja
        cadastro clique no botão "Inexistente"
      </p>
      <div class="row">
        <b-input-group size="lg">
          <b-input-group-prepend is-text>
            <b-icon icon="calendar-date"> </b-icon>
          </b-input-group-prepend>
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
            v-b-tooltip.hover.v-info
            title="Data da atualização do CadÚnico"
            :value="dtAtualizacaoCadUnico"
          />
          <b-button
            size="md"
            variant="danger"
            @click="setStatus('inexistente')"
            class="ml-3"
          >
            <b-icon icon="hand-thumbs-down"></b-icon>Inexistente
          </b-button>
        </b-input-group>
      </div>

      <!-- <b-button size="xl" variant="success" @click="setStatus('atualizado')"
      >ATUALIZADO</b-button -->
      <!-- > -->
      <!-- <b-button size="xl" variant="danger" @click="setStatus('desatualizado')"
      >DESATUALIZADO</b-button
    > -->
    </b-container>
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
      dtAtualizacaoCadUnico: "getDtAtuCadUnico",
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