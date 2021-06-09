/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-06 00:46:05
 * @modify date 2021-06-08 18:56:42
 * @desc 全局设置状态管理
 */

import config from '../config/index.js';
const generateKey = (key) => config.abbreviation + '-setting-' + key;
const getLocalStorage = (key) => localStorage.getItem(generateKey(key));
const setLocalStorage = (key, value) => localStorage.setItem(generateKey(key), value);

const state = () => ({
  iscollapsed: getLocalStorage('iscollapsed'),
  themeName: getLocalStorage('themeName') || config.themeName,
  showCollapse: getLocalStorage('showCollapse') || config.showCollapse,
  showProgressBar: getLocalStorage('showProgressBar') || config.showProgressBar,
  showFullScreen: getLocalStorage('showFullScreen') || config.showFullScreen
});

const getters = {
  iscollapsed: (state) => state.iscollapsed,
  themeName: (state) => state.themeName,
  showCollapse: (state) => state.showCollapse,
  showProgressBar: (state) => state.showProgressBar,
  showFullScreen: (state) => state.showFullScreen
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
  setShowProgressBar(state, showProgressBar) {
    state.showProgressBar = showProgressBar;
    setLocalStorage('showProgressBar', state.showProgressBar);
  },
  setShowFullScreen(state, showFullScreen) {
    state.showFullScreen = showFullScreen;
    setLocalStorage('showFullScreen', state.showFullScreen);
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
  setShowProgressBar: ({ commit }, showProgressBar) => {
    commit('setShowProgressBar', showProgressBar);
  },
  setShowFullScreen: ({ commit }, showFullScreen) => {
    commit('setShowFullScreen', showFullScreen);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
