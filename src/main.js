import Vue from "vue";
import Vuex from "vuex";
import store from "./js/store/store.js";
import App from "./App.vue";

Vue.use(Vuex);

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});
