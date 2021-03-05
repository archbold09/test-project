export default {
  namespaced: true,
  state: {
    sidebarState: false
  },
  mutations: {
    SIDEBAR_STATE (state, payload) {
      state.sidebarState = payload
    }
  },
  getters: {
    sidebar (state) {
      return 'asdasdasd'
    }
  },
  acctions: {
    set_sidebar_state () {

    }
  }
}
