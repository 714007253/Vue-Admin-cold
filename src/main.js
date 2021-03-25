import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import "./styles/global.css";
import echarts from "echarts";
import VueWechatTitle from "vue-wechat-title";

Vue.use(VueWechatTitle);
import Vuex from "vuex";
Vue.use(Vuex);
import AMap from "AMap";
Vue.use(AMap);

Vue.use(Element);

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// axios.defaults.baseURL = 'https://result.eolinker.com/rvEju3Y2e4ed213a501dd3ebef6085cf162fa50a17619ba?uri='
axios.defaults.baseURL = "/api";

import store from "./store/store";
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
