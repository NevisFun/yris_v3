/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:58:33
 * @modify date 2021-06-09 15:38:48
 * @desc 路由配置
 */

import { createRouter, createWebHistory } from 'vue-router';
import constantRoutes from './constant.js';
import asyncRoutes from './async.js';
// import pathLib from 'path';
import store from '../store/index.js';
import config from '../config/index.js';

//创建常规路由
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
});

/**
 * @desc 依据角色过滤异步路由
 * @param role
 * @returns RouteRecordRaw[]
 */
const filterRoutes = (routes, role) => {
  return routes
    .filter((route) => {
      if (route.meta && route.meta.role) {
        return !config.rolesControl || route.meta.role.includes(role);
      } else return true;
    })
    .map((route) => {
      route.fullPath = route.path;
      if (route.children) route.children = filterRoutes(route.children, role);
      return route;
    });
};

//设置路由守卫
router.beforeEach(async (to, from, next) => {
  if (config.routesWhiteList.includes(to.path)) {
    next();
    return;
  }

  //是否已经登录
  if (store.getters['user/accessToken']) {
    if (store.getters['user/role']) {
      next();
    } else {
      //登录相关 设定
      try {
        //存储用户信息
        // await store.dispatch('user/stageUserInfo');
        const role = 'GUEST';
        store.commit('user/setRole', role);

        //安全同步路由重新整合异步路由
        const accessRoutes = constantRoutes.concat(filterRoutes(asyncRoutes, role));
        console.log(asyncRoutes);
        accessRoutes.forEach((item) => {
          router.addRoute(item);
        });

        next({ path: to.path, replace: true });
      } catch {
        await store.dispatch('user/logout');
        next({ path: '/login', replace: true });
      }
    }
  } else {
    next({ path: '/login', replace: true });
  }
});

router.afterEach((to) => {
  window.document.title = config.abbreviation + '-' + to.meta.title;
});

export default router;
