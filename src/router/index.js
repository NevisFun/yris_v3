/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:58:33
 * @modify date 2021-06-08 13:35:52
 * @desc 路由配置
 */

import { createRouter, createWebHistory } from 'vue-router';
import constantRoutes from './constant.js';

import store from '../store/index.js';
import config from '../config/index.js';

//创建常规路由
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
});

//设置路由守卫
router.beforeEach(async (to, from, next) => {
  let hasToken = store.getters['user/accessToken'];
  if (hasToken) {
    // if (to.path === '/login') {
    //   next({ path: '/' });
    // } else {
    //   const hasRoles =
    //     store.getters['acl/admin'] || store.getters['acl/role'].length > 0 || store.getters['acl/ability'].length > 0;
    //   if (hasRoles) {
    //     next();
    //   } else {
    //     try {
    //       if (config.loginInterception) {
    //         await store.dispatch('user/getUserInfo');
    //       }
    //       let accessRoutes = [];
    //       accessRoutes = await store.dispatch('route/setRoutes');
    //       accessRoutes.forEach((item) => {
    //         router.addRoute(item);
    //       });
    //       next({ ...to, replace: true });
    //     } catch {
    //       await store.dispatch('user/resetAll');
    //       if (config.recordRoute)
    //         next({
    //           path: '/login',
    //           query: { redirect: to.path },
    //           replace: true
    //         });
    //       else next({ path: '/login', replace: true });
    //     }
    //   }
    // }
  } else {
    console.log(config.setting.routesWhiteList.indexOf(to.path), config.setting.routesWhiteList, to.path);
    if (config.setting.routesWhiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next({ path: '/login', replace: true });
    }
  }
});

router.afterEach((to) => {
  window.document.title = 'YRIS-' + to.meta.title;
});

export default router;
