<template>
  <div>
    <!-- <ul v-for="(texto,i) in textos" :key="i">{{texto}}</ul> -->

    <textarea v-model="trataLinhas" rows="10" id="textoDefesa"></textarea>
    

    <!-- <div v-show="textos.length > 1">
      <!-- <h2>Só mostra se for maior que um</h2>
      <!-- <button class="btn btn-primary" @click="selectModel">Selecionar Modelo</button> 
      </div>
    -->

    <!-- <div v-for="texto in textos" v-show="textos.length > 1">
      <button class="btn btn-primary" @click="selectModel(texto.id)">Modelo {{texto.id}}</button>
    </div>-->
    <copy-text copyFrom="textoDefesa" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CopyText from "./MobCopyText.vue";

export default {
  name: "OficioDefesa",
  data() {
    return {
      textoTmp: [],      
    };
  },
  computed: {
    ...mapGetters({ textos: "getTextos" }),
    trataLinhas: {
      get() {
        let linhas = "";
        this.textoTmp = this.textos.defesa;

        // console.log(this.textoTmp);

        if (this.textoTmp) {
          this.textoTmp.forEach((item, i) => (linhas += `${item} \n\n`));
          return linhas;
        }
      },
      set() {}
    }
  },
  components:{
    CopyText
  }
};
</script>

<style scoped>
textarea:focus {
  background-color: khaki;
}
textarea {
  width: 90%;
}
</style>