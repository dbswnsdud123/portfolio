import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/views/Main.vue";
import PrivacyPolicy from "@/views/Policy/Privacy.vue";
import TermsOfUse from "@/views/Policy/Terms.vue";
import MyPage from "@/views/MyPage.vue";
import SignIn from "@/views/SignIn.vue";
import Register from "@/views/Register.vue";
import Arcade from "@/views/Arcade.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Main,
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
