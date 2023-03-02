import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from 'vue-clipboard2'

import Directives from './directives/index'

Vue.use(VueClipboard)

Vue.config.productionTip = false;

Vue.use(Directives)



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
