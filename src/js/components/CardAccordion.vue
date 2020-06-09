<template>
  <div class="accordion" id="mainAccordion">
    <!-- <InnerAccordion idHeaderAccordion="analisePrevia" idCollapse="collapsePrevia" /> -->
    <InnerAccordion
      conteudo="Ofício de defesa"
      idCollapse="#collapseOficioDefesa"
      classeMostrar="collapse show"
      idColl="collapseOficioDefesa"      
    >
      <oficio-defesa />
    </InnerAccordion>
    <InnerAccordion
      conteudo="Analise Previa"
      idCollapse="#collapsePrevia"
      idColl="collapsePrevia"
      classeMostrar="collapse"
      aria-expanded="true"
      elemento="Análise Prévia"
      
    >
      <regular-component />
      <mob-irregular />
      <!-- ADICIONADO O COMPONENTE POR MEIO DE UM SLOT, O QUAL É RECEBIDO NO INNERACCORCION -->
    </InnerAccordion>

    <InnerAccordion
      conteudo="Relatório de Análise"
      idCollapse="#collapseAnalise"
      classeMostrar="collapse"
      idColl="collapseAnalise"      
    >
      <mob-relatorio-analise />
    </InnerAccordion>

     <InnerAccordion
      conteudo="Ofício de Recurso"
      idCollapse="#collapseRelExtra"
      classeMostrar="collapse"
      idColl="collapseRelExtra"      
    >
      <mob-oficio-recurso />
    </InnerAccordion>
  </div>
</template>

<script>
import InnerAccordion from "./InnerAccordion.vue";
import RegularComponent from "./RegularComponent.vue";
import MobIrregular from "./MobIrregular.vue";
import MobRelatorioAnalise from "./MobRelatorioAnalise.vue";
import MobOficioRecurso from "./MobOficioRecurso.vue";
import OficioDefesa from "./OficioDefesa.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    InnerAccordion,
    RegularComponent,
    MobIrregular,
    MobRelatorioAnalise,
    MobOficioRecurso,
    OficioDefesa
  },
  computed: {
    // ...mapGetters({ collapsesToShow: "getCollapsesToShow" })
  }
};
</script>
