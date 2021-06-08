/**
 * @author wang chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-06 14:47:42
 * @modify date 2021-06-08 14:05:30
 * @desc Vuex全局状态管理 https://next.vuex.vuejs.org/zh/guide/
 */

import { createStore } from 'vuex';
import setting from './setting.js';
import route from './route.js';
import user from './user.js';

export default createStore({
  modules: { setting, route, user }
});
