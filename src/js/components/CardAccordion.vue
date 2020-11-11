<template>
  <div class="accordion" id="mainAccordion">
    <!-- <InnerAccordion idHeaderAccordion="analisePrevia" idCollapse="collapsePrevia" /> -->
    <InnerAccordion
      conteudo="Ofício de defesa"
      idCollapse="#collapseOficioDefesa"
      classeMostrar="collapse show"
      idColl="collapseOficioDefesa"
      v-show="collapsesToShow.indexOf('defesa') >= 0"
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
      v-show="collapsesToShow.indexOf('analiseprevia') >= 0"
    >
      <regular-component />
      <!-- ADICIONADO O COMPONENTE POR MEIO DE UM SLOT, O QUAL É RECEBIDO NO INNERACCORCION -->
    </InnerAccordion>

    <InnerAccordion
      conteudo="Relatório de Análise"
      idCollapse="#collapseAnalise"
      classeMostrar="collapse"
      idColl="collapseAnalise"
      v-show="collapsesToShow.indexOf('relatorioanalise') >= 0"
    >
      <mob-relatorio-analise />
    </InnerAccordion>

    <InnerAccordion
      conteudo="Relatório Conclusivo"
      idCollapse="#collapseRelConclusivo"
      classeMostrar="collapse"
      idColl="collapseRelConclusivo"
      v-show="collapsesToShow.indexOf('conclusivo') >= 0"
    />
    <InnerAccordion
      conteudo="Ofício de Recurso"
      idCollapse="#collapseRelExtra"
      classeMostrar="collapse"
      idColl="collapseRelExtra"
      v-show="collapsesToShow.indexOf('recurso') >= 0"
    >
      <mob-oficio-recurso />
    </InnerAccordion>
  </div>
</template>

<script>
import InnerAccordion from "./InnerAccordion.vue";
import RegularComponent from "./RegularComponent.vue";
import AnalisePrevia from "./AnalisePrevia/AnalisePrevia.vue";
import MobRelatorioAnalise from "./MobRelatorioAnalise.vue";
import MobOficioRecurso from "./MobOficioRecurso.vue";
import OficioDefesa from "./OficioDefesa.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    InnerAccordion,
    RegularComponent,
    AnalisePrevia,
    MobRelatorioAnalise,
    MobOficioRecurso,
    OficioDefesa,
  },
  computed: {
    ...mapGetters({ collapsesToShow: "getCollapsesToShow" }),
  },
};
</script>
