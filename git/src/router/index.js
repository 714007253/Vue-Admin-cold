import Vue from "vue";
import vueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(vueRouter);
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
          title: "可视化面板",
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/record",
    component: Layout,
    children: [
      {
        path: "/record",
        component: () => import("@/views/record/index"),
        name: "record",
        meta: {
          title: "仓储记录仪",
          noCache: true,
        },
      },
      {
        path: "/recordOnline",
        component: () => import("@/views/record-online/index"),
        name: "recordOnline",
        meta: {
          title: "在线记录仪",
          noCache: true,
        },
      },
      {
        path: "/recordDanger",
        component: () => import("@/views/record-danger/index"),
        name: "recordDanger",
        meta: {
          title: "报警记录仪",
          noCache: true,
        },
      },
      {
        path: "/recordTransport",
        component: () => import("@/views/record-transport/index"),
        name: "transportrecord",
        meta: {
          title: "运输记录仪",
          noCache: true,
        },
      },
    ],
  },
];

var router = new vueRouter({
  routes,
});
export default router;
