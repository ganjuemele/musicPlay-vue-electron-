import Vue from 'vue'
import Vuex from 'vuex'
import APlayer from '@moefe/vue-aplayer';

Vue.use(Vuex,APlayer)

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
