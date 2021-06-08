/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-07 18:47:48
 * @modify date 2021-06-07 21:29:58
 * @desc 获取用户信息状态管理|登录登出
 */

import { getUserInfo, login, logout } from '../api/user.js';
import { getAccessToken, removeAccessToken, setAccessToken } from '../utils/access.js';
import { title, tokenName } from '../config/index.js';
import { message, notification } from 'ant-design-vue';

const state = () => ({
  accessToken: getAccessToken(),
  username: '',
  avatar: 'yrisicon-admin'
});

const getters = {
  accessToken: (state) => state.accessToken,
  username: (state) => state.username,
  avatar: (state) => state.avatar
};

const mutations = {
  /**
   * @description 设置accessToken
   * @param {*} state
   * @param {*} accessToken
   */
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    setAccessToken(accessToken);
  },

  /**
   * @description 设置用户名
   * @param {*} state
   * @param {*} username
   */

  setUsername(state, username) {
    state.username = username;
  },

  /**
   * @description 设置头像
   * @param {*} state
   * @param {*} avatar
   */
  setAvatar(state, avatar) {
    state.avatar = avatar;
  }
};

const actions = {
  /**
   * @description 登录
   * @param {*} { commit }
   * @param {*} userInfo
   */
  async login({ commit }, userInfo) {
    const { data } = await login(userInfo);
    const accessToken = data[tokenName];
    if (accessToken) {
      commit('setAccessToken', accessToken);
      const hour = new Date().getHours();
      const thisTime =
        hour < 8 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
      notification.open({
        message: `欢迎登录${title}`,
        description: `${thisTime}！`
      });
    } else {
      message.error(`登录接口异常，未正确返回${tokenName}...`);
    }
  },

  /**
   * @description 获取用户信息接口使用
   * @param {*} { commit, dispatch, state }
   * @returns
   */
  async getUserInfo({ commit, dispatch, state }) {
    const { data } = await getUserInfo(state.accessToken);
    if (!data) {
      message.error('验证失败，请重新登录...');
      return false;
    }
    let { username, avatar, roles, ability } = data;
    if (username && roles && Array.isArray(roles)) {
      dispatch('acl/setRole', roles, { root: true });
      if (ability && ability.length > 0) dispatch('acl/setAbility', ability, { root: true });
      commit('setUsername', username);
      commit('setAvatar', avatar);
    } else {
      message.error('用户信息接口异常');
    }
  },

  /**
   * @description 登出
   * @param {*} { dispatch }
   */
  async logout({ dispatch }) {
    await logout(state.accessToken);
    await dispatch('resetAll');
  },

  /**
   * @description 重置
   * @param {*} { commit, dispatch }
   */
  async resetAll({ dispatch }) {
    await dispatch('setAccessToken', '');
    await dispatch('acl/setFull', false, { root: true });
    await dispatch('acl/setRole', [], { root: true });
    await dispatch('acl/setAbility', [], { root: true });
    removeAccessToken();
  },

  /**
   * @description 设置
   */
  setAccessToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
