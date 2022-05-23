/*
 * @Author: LiuMeiYu
 * @Date: 2022-05-23 11:09:04
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-05-23 11:19:40
 * @FilePath: \vue3-ts-milky-way\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by yihua, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
