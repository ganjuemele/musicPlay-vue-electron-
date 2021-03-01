<template>
  <div class="home">
    <div style="display: flex;">
<!--      <NavList/>-->

<!--      <Playlist/>-->
      <div class="playlistInfo">
        <div v-if="result.tracks">
          <img class="playlistImg" :src="result.tracks[0].album.picUrl" alt="playlistImg">
          <div style="flex-grow: 1;margin-left:30px;display:flex;flex-direction:column;">
            <p style="font-size:22px;font-weight:600;text-align:left;line-height:22px;">
              <span style="border:red 1px solid;color:red;font-size:14px;line-height:26px;border-radius:2px;padding:0 4px;">歌单</span>
              {{result.name}}
            </p>
            <div class="playAll" @click="playTheList()">播放全部</div>
<!--            <div style="border: 1px solid red;width:100%;height:50px;">-->
<!--&lt;!&ndash;              <APlayer :audio="audio"/>&ndash;&gt;-->
<!--            </div>-->
          </div>
        </div>

        <div>
          <div class="playlistTab">歌曲列表</div>
          <div class="listTitle">
            <div class="name">音乐标题</div>
            <div class="artists">歌手</div>
            <div class="album">专辑</div>
            <div class="duration">时长</div>
          </div>
          <div class="playlist" v-for="(item, index) in result.tracks" :key="index" :style="index % 2 ? '' : 'background-color:#f9f9f9;'" @click="doubleClickPlay(item)" >
            <div class="serialNum">{{index + 1}}</div>
            <div class="fav">
              <svg t="1610098253511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="900" width="200" height="200"><path d="M737.712 96.016C640.576 96.016 556.064 151.312 512.432 231.712 468.528 151.312 383.6 96.016 286.464 96.016 145.792 96.016 31.76 210.672 31.76 352.112 31.76 419.248 57.456 480.336 99.472 526L490.576 919.04C496.528 925.024 504.32 927.984 512.096 927.968 519.872 927.984 527.648 925.024 533.584 919.04L924.704 526C966.72 480.336 992.416 419.248 992.416 352.112 992.416 210.672 878.384 96.016 737.712 96.016ZM876.08 484.512 512.096 854.144 148.096 484.512C115.456 450.064 95.44 403.44 95.44 352.112 95.44 246.048 180.96 160.048 286.464 160.048 371.664 160.048 445.024 216.512 470.464 293.952 477.28 310.592 493.488 322.304 512.48 322.304 531.456 322.304 547.632 310.608 554.464 294.048L554.48 294.048C579.664 216.544 652.48 160.048 737.712 160.048 843.2 160.048 928.736 246.048 928.736 352.112 928.736 403.44 908.72 450.064 876.08 484.512Z" fill="#8a8a8a" p-id="901"></path></svg>
              <!--      <svg t="1610098640173" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="900" width="200" height="200"><path d="M512 164.864l-31.232-30.72a281.6 281.6 0 0 0-398.336 397.824L512 961.536l429.568-430.08a281.6 281.6 0 0 0-398.336-397.824l-31.232 31.232z" fill="#ff3333" p-id="901"></path></svg>-->
            </div>
            <div class="name">{{item.name}}</div>
            <div class="artists"><span>{{item.artists[0].name}}</span></div>
            <div class="album">{{item.album.name}}</div>
            <div class="duration">{{formatDuration(item.duration)}}</div>
          </div>
        </div>
      </div>
    </div>

<!--    <ControlBar ref="playlist" :isPlay="isPlay"/>-->

  </div>
</template>

<script>
import ControlBar from '@/components/ControlBar'
import NavList from '@/components/NavList'
// import { APlayer } from '@moefe/vue-aplayer';
// import Playlist from '@/components/Playlist'
import axios from 'axios'

export default {
  name: 'Playlist',
  // components: {NavList, ControlBar},
  data() {
    return {
      id: '' || '5395166307',
      result: {},
      playlist: '[]',
      musicUrl: '',
      isPlay: false,
      curMusicInfo: {}
    }
  },
  created() {
    this.playlistQry(this.$router.currentRoute.params.id || this.id)
    // console.log('歌单详情页id', this.id)
  },
  methods: {
    // 歌单请求接口
    playlistQry(id) {
      const that = this;
      axios
        .get('http://music.163.com/api/playlist/detail?id=' + id)
        .then(response => {
          that.result = response.data.result
        })
        .catch()
    },
    formatDuration(e) {
      let t = (e / 60000).toFixed(2);
      if (t < 10) {
        t = '0' + t.toString()
      }
      return t.replace('.', ':')
    },
    playTheList() {
      this.playlist = this.result.tracks
      this.$store.commit('setPlaylist', this.result.tracks)
      // console.log(this.$store.state.playlist)
      // this.$forceUpdate()
    },
    doubleClickPlay(e) {
      let that = this;
      axios
        .get('https://api.imjad.cn/cloudmusic/?type=song&id=' + e.id)
        .then(response => {
          that.musicUrl = response.data.data[0].url;
          // console.log('mp3地址', that.musicUrl)
          that.curMusicInfo = {
            id: e.id,
            name: e.name,
            index: e.index,
            musicUrl: that.musicUrl,
            imgUrl: e.album.blurPicUrl,
            artists: e.artists[0].name
          };
        })
        .catch()
    },
    // musicPlayer(e) {
    //   console.log(e)
    // }
  },
  watch: {
    playlist: {
      handler() {
        this.isPlay = true
        this.$store.commit('setPlaylist', this.result.tracks)
      },
      deep: true
    },
    musicUrl() {
      this.$store.commit('setMusicInfo', this.curMusicInfo)
      // console.log('音频地址变了')
    }
  }
}
</script>

<style scoped>
  .playlistInfo {
    background-color: #fff;
    width: 824px;
    padding: 30px 0 75px;
    position: fixed;
    left: 176px;
    border: 1px solid #fff;
    height: 100%;
  }
  .playlistInfo > div:first-child {
    display: flex;
    padding: 0 30px;
    width: 100%;
  }
  .playlistInfo > div:last-child {
    width: 100%;
    margin-top: 30px;
  }
  .playlistImg {
    display: block;
    width: 200px;
    border-radius: 10px;
    height: 200px;
  }
  .playAll {
    color: #fff;
    background-color: orangered;
    width: 160px;
    font-weight: 500;
    line-height: 30px;
    border-radius: 15px;
    margin-top: 10px;
  }
  .playAll:hover {
    background-color: red;
  }
  .listTitle {
    display: flex;
    padding: 0 20px;
    justify-content: flex-end;
    text-align: left;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    font-weight: 450;
    color: #999;
    border-top: #ddd 1px solid;
  }
  .listTitle > div {
    justify-content: flex-end;
    padding: 0 4px;
  }
  .playlistTab {
    margin-left: 30px;
    color: #f33;
    border-bottom: 3px solid #ff3333;
    width: 70px;
    font-weight: bold;
  }
  div.playlist {
    display: flex;
    justify-content: flex-end;
    text-align: left;
    padding: 0 20px;
  }
  div.playlist:hover {
    background-color: #eee!important;
  }
  div.playlist > div {
    line-height: 34px;
    height: 34px;
    font-size: 12px;
    color: #000;
    padding: 0 4px;
  }
  div.playlist svg {
    width: 16px;
    height: 16px;
  }
  div.playlist > div {
    align-items: center;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: unset;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  div.playlist .serialNum {
    text-align: center;
    flex-grow: 1;
  }
  div.playlist .fav {
    display: flex;
    align-items: center;
    height: 34px;
    width: 32px;
    justify-content: center;
  }
  div.name {
    width: 284px;
  }
  div.artists {
    width: 160px;
  }
  div.album {
    width: 170px;
  }
  div.duration {
    width: 80px;
  }
</style>
