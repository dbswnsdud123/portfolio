import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/views/Main.vue";
import Career from "@/views/Career.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
