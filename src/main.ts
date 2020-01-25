import Vue from "vue";
import Host from "./Host.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Host)
}).$mount("#host");
