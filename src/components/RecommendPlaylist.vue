<template>
  <div class="recPlaylist">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;height:30px;">
      <p style="font-weight:bold;font-size:24px;line-height:24px;">推荐歌单</p>
      <router-link to="/#">全部 ></router-link>
    </div>

    <ul>
      <li v-for="(item, index) in playlistCreator" :key="'playlist' + index" @click="jumpToInfo(id[index])">
        <div>
          <img :src="item.backgroundUrl" alt=""/>
        </div>
        <router-link to="/#">{{item.description}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // https://api.imjad.cn/cloudmusic/?type=playlist&id=5395166307
  // https://music.163.com/playlist?id=3136952023&userid=278357373
  name: 'RecommendPlaylist',
  data() {
    return {
      id: ['5395166307', '5395166307', '5395166307', '5395166307', '5395166307', '5395166307', '3136952023'],
      playlistCreator: []
    }
  },
  mounted() {
    this.playlistQry()
  },
  methods: {
    // 歌单请求接口
    playlistQry() {
      const that = this;
      this.id.forEach(id => {
        axios.get('http://music.163.com/api/playlist/detail?id=' + id)
          .then(response => {
            that.playlistCreator = that.playlistCreator.concat(response.data.result.creator)
          })
          .catch()
      })
    },
    jumpToInfo(e) {
      console.log(this.$router)
      this.$router.push({
        name: 'PlaylistInfo',
        params: {
          id: e
        }
      })
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  margin: 40px 0;
  font-size: 12px;
  justify-content: space-between;
  flex-wrap: wrap;
}

li {
  width: 168px;
  height: 248px;
  margin-bottom: 30px;
}
li img {
  border-radius: 6px;
  width: 168px;
  height: 168px;
}
li a {
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: bold;
  font-size: 15px;
}
ul > li:first-child {
  width: 360px;
  height: 240px;
  position: relative;
}
ul > li:first-child div {
  width: 360px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  height: 240px;
  overflow: hidden;
}
ul > li:first-child img {
  width: 360px;
  height: 360px;
}
ul > li:first-child a {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgba(40,40,40,.9);
  position: absolute;
  border-radius: 0 0 5px 5px;
  top: 180px;
  color: white;
  align-items: center;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: unset;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
