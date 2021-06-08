/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-06 00:46:05
 * @modify date 2021-06-06 20:57:44
 * @desc 全局设置状态管理
 */

import defaultSetting from '../config/index.js';
const generateKey = (key) => defaultSetting.abbreviation + '-setting-' + key;
const getLocalStorage = (key) => localStorage.getItem(generateKey(key));
const setLocalStorage = (key, value) => localStorage.setItem(generateKey(key), value);

const state = () => ({
  iscollapsed: getLocalStorage('iscollapsed'),
  themeName: getLocalStorage('themeName') || defaultSetting.themeName,
  showCollapse: getLocalStorage('showCollapse') || defaultSetting.showCollapse,
  showProgressBar: getLocalStorage('showProgressBar') || defaultSetting.showProgressBar,
  showSearch: getLocalStorage('showSearch') || defaultSetting.showSearch,
  showTheme: getLocalStorage('showTheme') || defaultSetting.showTheme,
  showTabsBar: getLocalStorage('showTabsBar') || defaultSetting.showTabsBar,
  showNotice: getLocalStorage('showNotice') || defaultSetting.showNotice,
  showFullScreen: getLocalStorage('showFullScreen') || defaultSetting.showFullScreen
});

const getters = {
  iscollapsed: (state) => state.iscollapsed,
  themeName: (state) => state.themeName,
  showCollapse: (state) => state.showCollapse,
  showProgressBar: (state) => state.showProgressBar,
  showSearch: (state) => state.showSearch,
  showTheme: (state) => state.showTheme,
  showTabsBar: (state) => state.showTabsBar,
  showNotice: (state) => state.showNotice,
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
  setShowSearch(state, showSearch) {
    state.showSearch = showSearch;
    setLocalStorage('showSearch', state.showSearch);
  },
  setShowTheme(state, showTheme) {
    state.showTheme = showTheme;
    setLocalStorage('showTheme', state.showTheme);
  },
  setShowTabsBar(state, showTabsBar) {
    state.showTabsBar = showTabsBar;
    setLocalStorage('showTabsBar', state.showTabsBar);
  },
  setShowNotice(state, showNotice) {
    state.showNotice = showNotice;
    setLocalStorage('showNotice', state.showNotice);
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
  setShowSearch: ({ commit }, showSearch) => {
    commit('setShowSearch', showSearch);
  },
  setShowTheme: ({ commit }, showTheme) => {
    commit('setShowTheme', showTheme);
  },
  setShowTabsBar({ commit }, showTabsBar) {
    commit('setShowTabsBar', showTabsBar);
  },
  setShowNotice: ({ commit }, showNotice) => {
    commit('setShowNotice', showNotice);
  },
  setShowFullScreen: ({ commit }, showFullScreen) => {
    commit('setShowFullScreen', showFullScreen);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
