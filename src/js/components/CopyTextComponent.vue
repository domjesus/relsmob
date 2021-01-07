<template>
  <button type="button" class="btn btn-primary" @click="copyText">
    Copiar texto
  </button>
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
    copyText(sourceToCopy) {
      const itemsLi = document.querySelectorAll(`#${this.sourceToCopy}>ol>li`);
      // const outrool = document.querySelector("." + textoAnaliseDefesa);
      //   console.log(this.sourceToCopy);
      var textBoxCopy = document.createElement("textarea");
      document.body.appendChild(textBoxCopy);

      itemsLi.forEach((item, i) => {
        // console.log(item);

        if (item.innerHTML.trim()) {
          if (this.sourceToCopy == "oficioDefesa")
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
        this.$bvToast.toast(`Copiado texto com sucesso!`, {
          title: "Deu certo!",
          autoHideDelay: 3000,
          variant: "success",
          solid: true,
        });
      } catch (error) {
        this.$bvToast.toast(`Erro ao copiar: ${error}`, {
          title: "Erro!",
          autoHideDelay: 3000,
          variant: "danger",
        });
      }

      document.body.removeChild(textBoxCopy);
    }, //end method
  }, //end methods
}; //end export
</script>

<style>
</style>