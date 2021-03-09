<template>
  <b-button
    @click="copyText"
    v-b-tooltip.v-info
    size="lg"
    title="Clique para copiar o texto!"
    variant="primary"
    class="copy"
  >
    <b-icon icon="clipboard-plus"></b-icon>Copiar
  </b-button>
</template>

<script>
export default {
  name: "CopyTextComponent",
  props: {
    sourceToCopy: {
      type: String,
      required: true,
    },
  },
  methods: {
    copyText() {
      // console.log(this.sourceToCopy);
      const itemsLi = document.querySelectorAll(`#${this.sourceToCopy}>ol>li`);
      // const outrool = document.querySelector("." + textoAnaliseDefesa);
      //   console.log(this.sourceToCopy);
      var textBoxCopy = document.createElement("textarea");
      document.body.appendChild(textBoxCopy);

      itemsLi.forEach((item, i) => {
        // console.log(item);

        if (item.innerHTML.trim()) {
          if (
            this.sourceToCopy == "oficio_defesa" ||
            this.sourceToCopy == "recurso"
          )
            textBoxCopy.value += i + 1 + ".    " + item.innerHTML.trim() + "\n";
          else
            textBoxCopy.value +=
              i + 1 + ".    " + item.innerHTML.trim() + "\n\n";
        }
      });
      textBoxCopy.value = textBoxCopy.value.trim();
      textBoxCopy.select();

      try {
        document.execCommand("copy");
        this.$bvToast.toast(
          `Copiado texto de ${this.sourceToCopy.toUpperCase()} com sucesso!`,
          {
            title: "Deu certo!",
            autoHideDelay: 5000,
            variant: "success",
            toaster: "b-toaster-bottom-center",
            solid: true,
          }
        );
      } catch (error) {
        this.$bvToast.toast(`Erro ao copiar: ${error}`, {
          title: "Erro!",
          autoHideDelay: 5000,
          toaster: "b-toaster-bottom-center",
          variant: "danger",
        });
      }

      document.body.removeChild(textBoxCopy);
    }, //end method
  }, //end methods
}; //end export
</script>

<style>
.copy {
  position: fixed;
  bottom: 60px;
  right: 60px;
}
</style>