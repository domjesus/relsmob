<template>
  <b-modal
    id="modal-contribute"
    ref="modal-contribute"
    title="Contribua"
    ok-only
    no-stacking
    @hidden="emiteEvento"
    centered
    no-close-on-backdrop
  >
    Prezado(a) usuário do Teletrabalho.net. Ajude a manter o site no ar. Faça
    uma contribuição,
    <a
      href="http://teletrabalho.net/index.php/doe"
      @click="closeModal"
      target="_blank"
      >clicando aqui</a
    >.
  </b-modal>
</template>

<script>
import { getCookie } from "./../../utils/CookieManager";

export default {
  methods: {
    closeModal() {
      this.$refs["modal-contribute"].hide();
    },
    emiteEvento() {
      document.cookie = `jaleu=true;path=/`;
      this.$emit("changeModal");
    },
  },
  mounted() {
    const jaleu = getCookie("jaleu");
    // const jaleu = false;

    const dia = new Date().getDate();
    // const dia = 5;

    if (!jaleu && dia <= 6) {
      this.$refs["modal-contribute"].show();
    }
  },
};
</script>
