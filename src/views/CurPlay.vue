<template>
  <div class="curPlay">
    <div class="musicImg">
      <div>
        <img :src="curMusicInfo.imgUrl" alt=""/>
      </div>
    </div>

    <div class="curMusicInfo">
      <div class="musicName">{{curMusicInfo.name}}</div>
      <div class="album">专辑: <a href="">{{curMusicInfo.albumName}}</a></div>
      <div class="artists">歌手: <a href="">{{curMusicInfo.artists}}</a></div>
      <div class="lrc">
        <div v-for="(item, index) in lrc" :key="index">
          <div>{{item.text}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CurPlay',
  data() {
    return {
      curMusicInfo: {},
      lrc: []
    }
  },
  created() {
    // console.log(this.$store.state.curMusicInfo)
    this.curMusicInfo = this.$store.state.curMusicInfo;
    this.getLyric()
  },
  methods: {
    getLyric() {
      let that = this;
      axios
        .get('https://api.imjad.cn/cloudmusic/?type=lyric&id=' + that.curMusicInfo.id + '&br=128000')
        .then(response => {
          // console.log('获取歌词', response.data.lrc.lyric)
          let lrc = response.data.lrc.lyric.split('\n')
          lrc.forEach( (item, index) => {
            let text = item.split(']')[1].trim()
            let time = item.split(']')[0].split('[')[1]
            that.lrc.push({text, time})
          })
        })
        .catch()
    }
  }
}
</script>

<style lang="scss" scoped>
.curPlay {
  display: flex;
  justify-content: center;
  margin-left: 176px;
  padding: 30px 0;
}
.musicImg {
  border-radius: 50%;
  width: 330px;
  height: 330px;
  border: 10px solid #eee;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  & div {
    width: 220px;
    height: 220px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      display: block;
      border: 8px solid black;
      border-radius: 50%;
      height: 220px;
      width: 220px;
    }
  }
}

.curMusicInfo {
  text-align: left;
  margin-left: 40px;
  width: 330px;
  & .musicName {
    font-weight: 450;
    font-size: 22px;
    color: #000;
  }
  & .album {
    margin: 10px 0 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & .artists {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & a {
    color: #2E93E0;
  }
}
.lrc {
  margin-top: 20px;
  height: 480px;
  overflow: auto;
  border-right: #9f9f9f solid 1px;
  padding-right: 10px;
  > div {
    color: #666;
    font-weight: 500;
    margin: 7px 0;
    padding: 7px 0;
  }
}
</style>
