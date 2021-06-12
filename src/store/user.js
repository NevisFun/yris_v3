/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-07 18:47:48
 * @modify date 2021-06-12 19:21:06
 * @desc 获取用户信息状态管理|登录登出
 */

import { getUserInfo, login, logout } from '../api/user.js';
import config from '../config/index.js';
import { message, notification } from 'ant-design-vue';

/**
 * @desc 读取|存储|清除accessToken
 * @param accessToken
 * @returns {void|*}
 */

const getAccessToken = () => {
  if ('sessionStorage' === config.storage) {
    return sessionStorage.getItem(config.tokenName);
  } else if ('localStorage' === config.storage) {
    return localStorage.getItem(config.tokenName);
  } else {
    throw new Error('无法读取Token，存储设置无效！');
  }
};

const setAccessToken = (accessToken) => {
  if ('localStorage' === config.storage) {
    return localStorage.setItem(config.tokenName, accessToken);
  } else if ('sessionStorage' === config.storage) {
    return sessionStorage.setItem(config.tokenName, accessToken);
  } else {
    throw new Error('无法存储Token，存储设置无效！');
  }
};

const removeAccessToken = () => {
  if ('localStorage' === config.storage) {
    return localStorage.removeItem(config.tokenName);
  } else if ('sessionStorage' === config.storage) {
    return sessionStorage.clear();
  } else {
    throw new Error('无法清除Token，存储设置无效！');
  }
};

const state = () => ({
  accessToken: getAccessToken(),
  username: '',
  realname: '',
  role: '',
  avatar: ''
});

const getters = {
  accessToken: (state) => state.accessToken,
  username: (state) => state.username,
  realname: (state) => state.username,
  role: (state) => state.role,
  avatar: (state) => state.avatar
};

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    setAccessToken(accessToken);
  },
  setUsername(state, username) {
    state.username = username;
  },
  setRealname(state, realname) {
    state.realname = realname;
  },
  setRole(state, role) {
    state.role = role;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  }
};

const actions = {
  /**
   * @desc 登录
   * @param {*} { commit }
   * @param {*} userInfo
   */
  async login({ commit }, userInfo) {
    const { data } = await login(userInfo);
    const accessToken = data[config.tokenName];
    if (accessToken) {
      commit('setAccessToken', accessToken);
      const hour = new Date().getHours();
      const helloWorld =
        hour < 8 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
      notification.open({
        message: `欢迎登录${config.title}`,
        description: `${helloWorld},${state.realname}！`
      });
    } else {
      message.error(`登录接口异常，未正确返回${config.tokenName}...`);
    }
  },

  /**
   * @desc 暂存用户信息
   * @param {*} { commit, state }
   * @returns
   */
  async stageUserInfo({ commit, state }) {
    const { data } = await getUserInfo(state.accessToken);
    if (!data) {
      message.error('验证失败，请重新登录...');
      return false;
    }
    let { username, realname, role, avatar } = data;
    if (username && realname && role && avatar) {
      commit('setUsername', username);
      commit('setRealname', realname);
      commit('setRole', role);
      commit('setAvatar', avatar);
    } else {
      message.error('用户信息接口异常');
    }
  },

  /**
   * @desc 登出
   * @param {*} { dispatch }
   */
  async logout({ commit }) {
    await logout(state.accessToken);
    commit('setAccessToken', '');
    commit('setUsername', '');
    commit('setRealname', '');
    commit('setRole', '');
    commit('setAvatar', '');
    removeAccessToken();
  }
};

export default { namespaced: true, state, getters, mutations, actions };
