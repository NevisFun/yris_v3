/**
 * @author wang chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-06 19:10:19
 * @modify date 2021-06-08 09:00:16
 * @desc 路由拦截状态管理
 */

import constantRoutes from '../router/constant.js';
import asyncRoutes from '../router/async.js';
import { filterAsyncRoutes } from '../utils/route.js';

const state = () => ({
  routes: [],
  partialRoutes: []
});

const getters = {
  routes: (state) => state.routes,
  partialRoutes: (state) => state.partialRoutes
};

const mutations = {
  setRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes);
  },
  setPartialRoutes(state, routes) {
    state.partialRoutes = constantRoutes.concat(routes);
  }
};

const actions = {
  async setRoutes({ commit }, permissions) {
    //开源版只过滤动态路由permissions，admin不再默认拥有全部权限
    const finallyAsyncRoutes = await filterAsyncRoutes([...asyncRoutes], permissions);
    commit('setRoutes', finallyAsyncRoutes);
    return finallyAsyncRoutes;
  }
  // async setAllRoutes({ commit }) {
  //   let { data } = await getRouterList();
  //   data.push({ path: '*', redirect: '/404', hidden: true });
  //   let accessRoutes = convertRouter(data);
  //   commit('setAllRoutes', accessRoutes);
  //   return accessRoutes;
  // },
  // setPartialRoutes({ commit }, accessRoutes) {
  //   commit('setPartialRoutes', accessRoutes);
  //   return accessRoutes;
  // }
};
export default { namespaced: true, state, getters, mutations, actions };
