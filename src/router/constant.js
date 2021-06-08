/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:48:28
 * @modify date 2021-06-08 13:21:58
 * @desc 安全同步路由列表
 */

const constantRoutes = [
  {
    path: '/:pathMatch(.*)',
    name: 'None',
    component: () => import('../views/error/404.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
    mata: { title: '登录', hidden: true }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/error/403.vue'),
    mata: { title: '错误', hidden: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/error/404.vue'),
    mata: { title: '错误', hidden: true }
  }
];

export default constantRoutes;
