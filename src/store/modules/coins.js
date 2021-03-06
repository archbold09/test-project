export default {
  namespaced: true,
  state: {
    tableContent: []
  },
  mutations: {
    TABLE_CONTENT (state, payload) {
      state.tableContent = payload
    }
  },
  getters: {
    tableContent (state) {
      return state.tableContent
    }
  },
  acctions: {
    async setTableContent ({ commit }) {
      try {
        // const data = await
      } catch (error) {

      }
    }
  }
}
