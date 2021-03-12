<template>
  <div class="artist">
    <div class="artist-top">
      <img :src="passData.img1v1Url" alt=""/>
      <div>
        <div class="name">{{passData.name}}</div>
<!--        <div class="nickname">nickname</div>-->
        <div class="fav" @click="favArtist">{{isFav?'已收藏':'收藏'}}</div>
<!--        <div>number</div>-->
      </div>
    </div>

    <Tags class-prefix="artist"
          :bars="['歌手详情', '专辑']"
          :tagsIndex.sync="tagsIndex"
    />

    <div>
      <div class="title">{{passData.name}}简介</div>
      <div class="content">{{detail.briefDesc}}</div>
      <div v-for="(item,index) in detail.introduction">
        <div class="title">{{item.ti}}</div>
        <div class="content" v-for="(i, index) in item.txtArr">{{i}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Tags from '@/components/Tags'
// import xx from '../data/file.js'
let fs = window.require('fs')

export default {
  name: 'Artist',
  components: { Tags },
  data() {
    return {
      passData: this.$route.params,
      detail: {},
      tagsIndex: 0,
      isFav: !1,
      index: 0
    }
  },
  created() {
    this.getArtistDetail()
    this.getFav()
  },
  methods: {
    getArtistDetail() {
      let that = this;
      axios.get('http://musicapi.leanapp.cn/artist/desc?id=' + that.passData.id)
        .then( response => {
          that.detail = response.data;
          response.data.introduction.forEach( (item, index) => {
            that.detail.introduction[index].txtArr = item.txt.split('\n')
          })
        })
        .catch()
    },
    readFile() {
      return new Promise(resolve => {
        fs.readFile('./src/data/file.json',function (err, data) {
          if(err) {
            return console.error(err)
          }
          return resolve(JSON.parse(data))
        })
      })
    },
    async getFav() {
      let dt = await this.readFile();
      dt.data.forEach((item, index) => {
        if(item.id === this.passData.id) {
          this.index = index;
          return this.isFav = !0
        }
      })
    },
    writeFile(dt) {
      fs.writeFile('./src/data/file.json', JSON.stringify(dt),function (err, data) {
        if (err) {
          return console.error(err)
        }
      })
    },
    async favArtist() {
      // let filePath = process.cwd() + 'file.txt' // 文件路径
      let dt = await this.readFile();
      if(this.isFav) {
        dt.data.splice(this.index, 1);
        this.isFav = false;
        this.writeFile(dt)
      } else {
        dt.data.push(this.passData);
        this.isFav = true;
        this.writeFile(dt)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.artist {
  margin-left: 176px;
  padding: 15px 30px;
  text-align: left;
  height: calc(100vh - 75px);
  overflow: auto;
  & .artist-top {
    display: flex;
    margin-bottom: 20px;
    > img {
      width: 200px;
      height: 200px;
      border-radius: 6px;
    }
    > div {
      margin-left: 30px;
      letter-spacing: -0.2px;

      .name {
        color: #000;
        font-size: 22px;
        font-weight: 450;
      }
      .fav {
        margin-top: 20px;
        text-align: center;
        line-height: 30px;
        font-weight: 450;
        border-radius: 15px;
        height: 30px;
        border: 1px solid #b3b3b3;
        max-width: 100px;
      }
    }
  }

  .title {
    color: #000;
    font-weight: 450;
    margin: 15px 0;
  }
  .content {
    color: #888;
    font-size: 12px;
    margin: 15px 0;
    letter-spacing: 0.2px;
    line-height: 20px;
    padding-bottom: 5px;
  }
}
</style>
