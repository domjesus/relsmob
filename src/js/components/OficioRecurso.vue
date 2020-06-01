<template>
  <div>
    <textarea rows="10" v-model="trataLinhas"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "OficioDefesa",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({textos:"getTextos"})
    )
    trataLinhas:{
      get(){
        if (this.textos) {
          this.textos.forEach((item, i) => (linhas += `${item} \n\n`));
          return linhas;
        }
      },
      set(){}      
    }
  }
};
</script>