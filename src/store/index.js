import Vue from 'vue'
import Vuex from 'vuex'
import APlayer from '@moefe/vue-aplayer';

Vue.use(Vuex,APlayer)

export default new Vuex.Store({
  state: {
    playlist: [],
    musicUrl: "../assets/4.mp3",
    curMusicInfo: {
      imgUrl: '',
      musicUrl: '',
      id: 0,
      name: '',
      artists: ''
    }
  },
  getters: {
    getPlaylist: state => state.playlist
  },
  mutations: {
    setPlaylist (state, value) {
      state.playlist = value
    },
    setMusicInfo (state, value) {
      state.curMusicInfo = value
    }
  },
  actions: {
  },
  modules: {
  }
})
