import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlist: []
  },
  getters: {
    getPlaylist: state => state.playlist
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    }
  },
  actions: {
  },
  modules: {
  }
})
