/*
 * @Description: 
 * @Date: 2022-05-09 11:03:25
 * @LastEditTime: 2022-06-22 11:40:28
 * @FilePath: /wangh1998.github.io/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/x6",
    name: "X6",
    component: () =>
      import(/* webpackChunkName: "x6" */ "../views/X6.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/Game.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
