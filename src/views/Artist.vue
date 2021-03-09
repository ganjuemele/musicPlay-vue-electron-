<template>
  <div class="artist">
    <div class="artist-top">
      <img :src="passData.img1v1Url" alt=""/>
      <div>
        <div class="name">{{passData.name}}</div>
        <div class="nickname">nickname</div>
        <div>收藏</div>
        <div>number</div>
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

export default {
  name: 'Artist',
  components: { Tags },
  data() {
    return {
      passData: this.$route.params,
      detail: {},
      tagsIndex: 0
    }
  },
  created() {
    this.getArtistDetail()
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
          // console.log(that.detail)
        })
        .catch()
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
    //border: 1px solid red;
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
    }
  }

  //.artist-bars {
  //  display: flex;
  //  border-bottom: #efefef 1px solid;
  //  color: #000;
  //  &-item {
  //
  //  }
  //  > div {
  //    padding-bottom: 5px;
  //    border-bottom: 2px solid red;
  //    margin: 0 20px;
  //  }
  //  > div:first-child {
  //    margin: 0;
  //  }
  //}

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
