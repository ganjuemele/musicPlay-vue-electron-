<template>
    <div style="width:824px;padding:30px 25px 72px;position:absolute;left:176px;background-color: #fff;">
      <Tags class-prefix="fav"
            :bars="['收藏的歌手', '收藏的歌曲', '收藏的歌单']"
            :tagsIndex.sync="tagsIndex"
      />
      <transition-group
        name="more"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
      >
        <div @click="jumpToArtist(item)" class="item" v-for="(item,index) in artists" v-if="show3" :data-index="item" :key="index">
          <div class="square">
            <img :src="item.img1v1Url" alt=""/>
          </div>
          <div class="content">
            {{item.name}}
          </div>
        </div>
      </transition-group>
    </div>
</template>

<script>
import favArtists from '@/data/file.json'
import Tags from '@/components/Tags'
import axios from 'axios'

export default {
  name: 'FavArtists',
  components: { Tags },
  data() {
    return {
      favArtists,
      artists: [],
      show1: false,
      show2: false,
      show3: false,
      tagsIndex: 0
    }
  },
  created() {
    this.artistsQry()
  },
  mounted() {
    setTimeout(()=>{
      this.show1 = !this.show1
      this.show2 = !this.show2
      this.show3 = !this.show3
    })
  },
  methods: {
    artistsQry() {
      favArtists.data.forEach((item, index) => {
        axios.get('http://music.163.com/api/artist/' + item.id)
          .then(response => {
            // console.log(response.data)
            this.artists.push({
              name: response.data.artist.name,
              img1v1Url: response.data.artist.img1v1Url,
              id: item.id
            })
          })
          .catch()
      })
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      let delay = el.dataset.index * 2000;
      setTimeout(() => {
        el.style.transition = 'opacity 2s';
        el.style.opacity = 1;
        // el.style.animation = 'one-in 4s infinite';
        // el.style['animation-iteration-count'] = 1;
        done()
      }, delay)
    },
    jumpToArtist(e) {
      let that = this;
      this.$router.push({
        name: 'Artist',
        params: {
          id: e.id,
          name: e.name,
          img1v1Url: e.img1v1Url
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .fav-tab {
    font-weight: bold;
    margin-bottom: 20px;
    + span {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
    }
  }

  .item {
    margin-bottom: 30px;
    overflow: hidden;
    margin-right: 26px;
    & img {
      width: 134px;
      height: 134px;
      display: block;
    }
    & .square {
      border: .5px solid #f3f3f3;
      width: 134px;
      height: 134px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & .content {
      width: 120px;
      margin: auto;
      padding: 10px 0;
      font-weight: bold;
    }
  }
  .item:nth-child(5n) {
    margin-right: 0;
  }
  .item::after {
    content: "";
    clear: both;
    display: block;
  }
  /*@keyframes one-in {*/
  /*  from {*/
  /*    padding-top: 100px;*/
  /*    height: 0;*/
  /*  }*/
  /*  to {*/
  /*    padding-top: 0;*/
  /*    height: 100%;*/
  /*  }*/
  /*}*/
</style>
