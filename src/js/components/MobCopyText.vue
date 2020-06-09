<template>

    <div>        
        <div id="tooltip" role="tooltip" data-popper-arrow :data-show="dataShow">
            <p id="innerTooltip">Copiado com sucesso!</p>
            <div id="arrow" data-popper-arrow></div>
        </div>

        <button class="btn btn-primary" @click="copyText(copyFrom)">Copiar</button>



    </div>
    
</template>

<script>
import { createPopper } from "@popperjs/core";


export default {
    name:"MobCopyText",
    props:{
        copyFrom:{
            type:String,
            required:true
        },
    },
    data(){
        return {
            dataShow:false
        }
    },
    methods:{
      copyText(idElemento){     
      
      let areaText = document.getElementById(idElemento);      

      areaText.select();
      document.execCommand("copy");

      const popcorn = document.querySelector(`#${idElemento}`);   
    //   console.log(popcorn);
      

      const tooltip = document.querySelector("#tooltip");
    
      this.dataShow = true;
    //   //   console.log(tooltip);

      createPopper(popcorn, tooltip, {
        placement: "top"
      });

      setTimeout( () => this.escondeToolTip(),4000)
    },

    escondeToolTip() {
      this.dataShow = false;
    }

    }

    
}
</script>

<style scoped>
#tooltip {
  background-color: brown;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  width: 155px;
  display: none;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}

#arrow::before {
  content: "";
  transform: rotate(45deg);
  background: black;
}

#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}
#tooltip[data-show] {
  display: block;
}
</style>