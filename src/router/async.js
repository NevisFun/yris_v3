/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:48:07
 * @modify date 2021-06-08 13:26:52
 * @desc 异步权限路由列表
 */

/**
 * redirect: noredirect       当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'         设定路由名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : 
     title: 'title'           路由标题
     icon: 'yrisicon-name'    路由图标
     hidden: false            当设置为true，则不影响导航和标签
     alwaysShow: false        当设置为true，则包含子路由
     Cachable: true           当设置为false，则不会被 <keep-alive> 缓存
     breadcrumb: true         当设置为false，则不会在breadcrumb面包屑中显示
     affix: false             当设置为true，则会一直固定在标签页中
     
*/

import Layout from '../layout/index.vue';

const asyncRoutes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '系统首页',
          icon: 'yrisicon-home',
          affix: true
        }
      }
    ]
  }
];

export default asyncRoutes;
