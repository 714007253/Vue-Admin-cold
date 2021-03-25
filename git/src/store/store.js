import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //响应式布局配置
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight
  },
  mutations: {
    //响应式布局配置
    setWidth(state, value) {
      state.screenWidth = value
    },
    setHeight(state, value) {
      state.screenHeight = value
    }
  },
  actions: {},
  modules: {}
})