/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-06 00:46:05
 * @modify date 2021-06-10 20:41:54
 * @desc 全局设置状态管理
 */

import config from '../config/index.js';
import { encrypt, decrypt } from '../utils/cryption.js';

const generateKey = (key) => config.abbreviation + '-setting-' + key;

const getLocalStorage = (key) => {
  const data = localStorage.getItem(generateKey(key));
  if (typeof data === 'string') {
    if (data == 'true') return true;
    else if (data == 'false') return false;
    else return data;
  }
};

const setLocalStorage = (key, value) => localStorage.setItem(generateKey(key), value);

const state = () => ({
  iscollapsed: getLocalStorage('iscollapsed') || false,
  themeName: getLocalStorage('themeName') || config.themeName,
  showCollapse: getLocalStorage('showCollapse') || config.showCollapse,
  showProgress: getLocalStorage('showProgress') || config.showProgress,
  showScreen: getLocalStorage('showScreen') || config.showScreen,

  userName: getLocalStorage('userName'),
  passWord: getLocalStorage('passWord'),
  saveUser: getLocalStorage('saveUser') || config.saveUser,
  saveCode: getLocalStorage('saveCode') || config.saveCode
});

const getters = {
  iscollapsed: (state) => state.iscollapsed,
  themeName: (state) => state.themeName,
  showCollapse: (state) => state.showCollapse,
  showProgress: (state) => state.showProgress,
  showScreen: (state) => state.showScreen,

  userName: (state) => state.userName,
  passWord: (state) => decrypt(state.passWord),
  saveUser: (state) => state.saveUser,
  saveCode: (state) => state.saveCode
};

const mutations = {
  toggleCollapse(state) {
    state.iscollapsed = !state.iscollapsed;
    setLocalStorage('iscollapsed', state.iscollapsed);
  },
  setThemeName(state, themeName) {
    console.log(themeName);
    state.themeName = themeName;
    setLocalStorage('themeName', state.themeName);
  },
  setShowCollapse(state, showCollapse) {
    state.showCollapse = showCollapse;
    setLocalStorage('showCollapse', state.showCollapse);
  },
  setShowProgress(state, showProgress) {
    state.showProgress = showProgress;
    setLocalStorage('showProgress', state.showProgress);
  },
  setShowScreen(state, showScreen) {
    state.showScreen = showScreen;
    setLocalStorage('showScreen', state.showScreen);
  },

  setUsername(state, userName) {
    state.userName = userName;
    setLocalStorage('userName', state.userName);
  },
  setPassword(state, passWord) {
    state.passWord = encrypt(passWord);
    setLocalStorage('passWord', state.passWord);
  },
  setSaveUser(state, saveUser) {
    state.saveUser = saveUser;
    setLocalStorage('saveUser', state.saveUser);
  },
  setSaveCode(state, saveCode) {
    state.saveCode = saveCode;
    setLocalStorage('saveCode', state.saveCode);
  }
};

const actions = {
  toggleCollapse: ({ commit }) => {
    commit('toggleCollapse');
  },
  setThemeName: ({ commit }, themeName) => {
    commit('setThemeName', themeName);
  },
  setShowCollapse: ({ commit }, showCollapse) => {
    commit('setShowCollapse', showCollapse);
  },
  setShowProgress: ({ commit }, showProgress) => {
    commit('setShowProgress', showProgress);
  },
  setShowScreen: ({ commit }, showScreen) => {
    commit('setShowScreen', showScreen);
  },

  setUsername: ({ commit }, userName) => {
    commit('setUsername', userName);
  },
  setPassword: ({ commit }, passWord) => {
    commit('setPassword', passWord);
  },
  setSaveUser: ({ commit }, saveUser) => {
    commit('setSaveUser', saveUser);
  },
  setSaveCode: ({ commit }, saveCode) => {
    commit('setSaveCode', saveCode);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
