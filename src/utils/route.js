import router from '../router/index.js';
import pathTools from 'path';
import { rolesControl } from '../config/index.js';
import { isExternal } from '../utils/validate.js';
import { hasRole } from '../utils/hasRole.js';

/**
 * @author wang.chaofeng
 * @description 根据roles数组拦截路由
 * @param routes
 * @param baseUrl
 * @returns {[]}
 */
export function filterRoutes(routes, baseUrl = '/') {
  return routes
    .filter((route) => {
      if (route.meta && route.meta.roles) return !rolesControl || hasRole(route.meta.roles);
      else return true;
    })
    .map((route) => {
      if (route.path !== '*' && !isExternal(route.path)) route.path = pathTools.resolve(baseUrl, route.path);
      route.fullPath = route.path;
      if (route.children) route.children = filterRoutes(route.children, route.fullPath);
      return route;
    });
}

/**
 * 根据当前页面firstMenu
 * @returns {string}
 */
export function handleFirstMenu() {
  const firstMenu = router.currentRoute.matched[0].path;
  if (firstMenu === '') return '/';
  return firstMenu;
}
