/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-09 15:44:07
 * @modify date 2021-06-09 15:44:07
 * @desc 标签状态管理
 */

const state = () => ({
  visitedRoutes: [],
})

const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
}

const mutations = {
  /**
   * @description 添加标签
   * @param {*} state
   * @param {*} route
   * @returns
   */
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  /**
   * @description 删除当前
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  /**
   * @description 删除当前以外
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delOthersVisitedRoutes(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.meta.affix || item.path === route.path
    )
  },
  /**
   * @description 删除当前标左侧
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delLeftVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  /**
   * @description 删除当前右侧
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delRightVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  /**
   * @description 删除全部
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
}

const actions = {
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  delVisitedRoute({ commit }, route) {
    commit('delVisitedRoute', route)
  },
  delOthersVisitedRoutes({ commit }, route) {
    commit('delOthersVisitedRoutes', route)
  },
  delLeftVisitedRoutes({ commit }, route) {
    commit('delLeftVisitedRoutes', route)
  },
  delRightVisitedRoutes({ commit }, route) {
    commit('delRightVisitedRoutes', route)
  },
  delAllVisitedRoutes({ commit }) {
    commit('delAllVisitedRoutes')
  },
}

export default { state, getters, mutations, actions }
