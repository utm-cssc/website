import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state() {
      return {
        drawerOpen: false,
      }
    },
    mutations: {
      setDrawerOpen: (state, payload) => {
        state.drawerOpen = payload.drawerOpen
      },
    },
  })
}
