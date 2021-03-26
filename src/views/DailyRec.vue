<template>
  <div class="master-view">
    <div class="top-title">
      <svg t="1616746509678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1505" width="200" height="200"><path d="M948.096 64h-851.2a22.528 22.528 0 0 0-22.4 22.4v851.2c0 12.288 10.112 22.4 22.4 22.4h75.072v-0.384c0.704 0.064 1.28 0.384 1.92 0.384a24.96 24.96 0 0 0 0-49.856c-0.704 0-1.28 0.32-1.92 0.384v-0.576h-52.672V322.816h806.4v369.28h-194.752a22.528 22.528 0 0 0-22.464 22.464v195.52H272v0.704c-0.832-0.128-1.472-0.512-2.368-0.512a24.896 24.896 0 1 0 0 49.728c0.832 0 1.536-0.384 2.368-0.512V960h497.92l200.576-199.744V86.4a22.464 22.464 0 0 0-22.4-22.4z m-194.752 842.624v-169.728h171.264l-171.264 169.728z" fill="#d81e06" p-id="1506"></path><path d="M119.936 280a0.64 0.64 0 0 1-0.64-0.64V109.44a0.64 0.64 0 0 1 0.64-0.64h805.12a0.64 0.64 0 0 1 0.64 0.64v169.92a0.64 0.64 0 0 1-0.64 0.64H119.936z" fill="#f5b1b8" p-id="1507"></path><path d="M318.976 193.984m-54.016 0a54.016 54.016 0 1 0 108.032 0 54.016 54.016 0 1 0-108.032 0Z" fill="#d81e06" p-id="1508"></path><path d="M318.976 193.984m-31.616 0a31.616 31.616 0 1 0 63.232 0 31.616 31.616 0 1 0-63.232 0Z" fill="#FFFFFF" p-id="1509"></path><path d="M726.016 193.984m-54.016 0a54.016 54.016 0 1 0 108.032 0 54.016 54.016 0 1 0-108.032 0Z" fill="#d81e06" p-id="1510"></path><path d="M726.016 193.984m-31.616 0a31.616 31.616 0 1 0 63.232 0 31.616 31.616 0 1 0-63.232 0Z" fill="#FFFFFF" p-id="1511"></path><path d="M361.024 182.784h326.016v22.4H361.024z" fill="#d81e06" p-id="1512"></path><path d="M176 378.688h692.032v92.032H176zM176 504h692.032v91.968H176zM176 629.376h472v92.032H176z" fill="#f5b1b8" p-id="1513"></path></svg>
      <div class="bigTitle">
        <span>每日歌曲推荐</span>
        根据你的音乐口味生成，每天6:00更新
      </div>
    </div>

    <div style="display: flex;justify-content: left;width: 50%;margin: 20px 0 12px 30px;">
      <div class="playAll">播放全部</div>
      <div class="favAll">收藏全部</div>
    </div>

    <PlayLi :musicLi="musicLi"/>
  </div>
</template>

<style scoped lang="scss">
.master-view {
  padding: 15px 0 100px 0;
}
div.top-title {
  display: flex;
  text-align: left;
  margin-left: 30px;
  svg {
    height: 80px;
    width: 80px;
    margin-right: 30px;
  }
  .bigTitle {
    font-size: 12px;
    color: #6f6f6f;
    span {
      color: #333;
      display: block;
      font-size: 22px;
      font-weight: 500;
    }
  }
}
  .playAll {
    color: #fff;
    background-color: orangered;
    width: 160px;
    line-height: 30px;
    border-radius: 15px;
    margin-top: 10px;
  }
  .playAll:hover {
    background-color: red;
  }
  .favAll {
    margin-left: 10px;
    color: #333;
    background-color: #fff;
    width: 150px;
    line-height: 30px;
    border-radius: 15px;
    margin-top: 10px;
    border: 1px solid #d3d3d3;
  }
  .favAll:hover {
    background-color: #d3d3d3;
  }
.m-subnav {
  display: none !important;
}
</style>
<script>
import axios from 'axios'
import PlayLi from '@/components/PlayLiCpn'

export default {
  name: "DailyRec",
  components: { PlayLi },
  data() {
    return {
      musicLi: []
    }
  },
  created() {
    this.dailySongsQry()
  },
  methods: {
    dailySongsQry() {
      let that = this;
      axios({
        url: 'http://106.14.159.71:3000/recommend/songs',
        methods: 'GET',
        withCredentials: true
      }).then(res => {
        console.log(res)
        that.musicLi = res.data.data.dailySongs
      }).catch(
        axios.get('http://106.14.159.71:3000/login/cellphone?phone=18917577956&password=2Mhaonanren')
          .then(res => {
            // that.dailySongsQry()
          }).catch()
      )
    }
  }
}
</script>

