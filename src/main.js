// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/routes";
import store from "./store/store";
import "./js/app_url";
import "./js/service";
import VueAnalytics from "vue-analytics";

import Axios from "axios";
// Vue.prototype.$axios = axios
window.axios = Axios;

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/landing/css/styles.css";
import "../static/landing/css/welcome.css";
import axios from "axios";
Vue.config.productionTip = false;
import Scrollspy from "vue2-scrollspy";
// use default options
Vue.use(Scrollspy);

// google analytics
Vue.use(VueAnalytics, {
  id: "UA-155289676-1",
  router
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});

import CxltToastr from "cxlt-vue2-toastr";

Vue.use(CxltToastr);
