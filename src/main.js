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

import htmlToPdf from "@/utils/htmlToPdf";

Vue.use(htmlToPdf);
Vue.use(Element);

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://result.eolinker.com/REByVur452d182ac514f6233d9dab0089d297517a09c58b?uri=";
// axios.defaults.baseURL = "/api";

import store from "./store/store";
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
