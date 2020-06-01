<template>
  <div class="card">
    <div class="card-header">
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-left"
          type="button"
          data-toggle="collapse"
          :data-target="idCollapse"
          :aria-expanded="ariaExpanded"
          :aria-controls="idColl"
        >
          {{ conteudo }}
        </button>
      </h2>
    </div>

    <div
      :id="idColl"
      :class="classeMostrar"
      :aria-labelledby="idCollapse"
      data-parent="#mainAccordion"
    >
      <div class="card-body">
        <slot>Slot Padrão</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idHeaderAccordion: String,
    idCollapse: String,
    conteudo: String,
    idColl: String,
    ariaExpanded: {
      type: String,
      default: "false",
    },
    classeMostrar: String,
    elemento: String,
  },
  data() {
    return {};
  },
};
</script>
