import Vue from "vue";
import App from "./App.vue";

import "reset-css/reset.css";

Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
