export default {
  namespaced: true,
  state: {
    tableContent: [],
    diagramContent: []
  },
  mutations: {
    TABLE_CONTENT (state, payload) {
      state.tableContent = payload
    },
    DIAGRAM_CONTENT (state, payload) {
      state.diagramContent = payload
    }
  },
  getters: {
    tableContent (state) {
      return state.tableContent
    },
    diagramContent (state) {
      return state.diagramContent
    }
  }
}
