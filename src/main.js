import Vue from "vue";
import Vuex from "vuex";
import store from "./js/store/store.js";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});
