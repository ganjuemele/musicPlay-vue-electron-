<template>
  <div class="home">
    <div style="display: flex;">
<!--      <NavList/>-->

      <div style="width:824px;padding:30px 25px 72px;position:absolute;left:176px;background-color: #fff;">
        <div class="favTab">收藏的歌手</div>
        <transition-group
          name="more"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
        >
          <div @click="" class="item" v-for="(item,index) in artists" v-if="show3" :data-index="item" :key="index">
            <div class="square">
              <img :src="item.img1v1Url" alt=""/>
            </div>
            <div class="content">
              {{item.name}}
            </div>
          </div>
        </transition-group>
      </div>
    </div>

<!--    <ControlBar/>-->
  </div>
</template>

<script>
import ControlBar from '@/components/ControlBar'
import NavList from '@/components/NavList'
import { favArtists } from '@/data/data'
import axios from 'axios'
export default {
  name: 'FavArtists',
  components: {NavList, ControlBar},
  props() {
    // isPlay: Boolean
  },
  data() {
    return {
      favArtists,
      artists: [],
      show1: false,
      show2: false,
      show3: false,
    }
  },
  created() {
    this.artistsQry()
  },
  mounted() {
    console.log(typeof this.artists)
    setTimeout(()=>{
      this.show1 = !this.show1
      this.show2 = !this.show2
      this.show3 = !this.show3
    })
  },
  methods: {
    artistsQry() {
      favArtists.forEach((item, index) => {
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
    beforeEnter (el) {
      el.style.opacity = 0
    },
    enter (el, done) {
      let delay = el.dataset.index * 2000
      setTimeout(() => {
        el.style.transition = 'opacity 2s'
        el.style.opacity = 1
        // el.style.animation = 'one-in 4s infinite'
        // el.style['animation-iteration-count'] = 1
        done()
      }, delay)
    }
  }
}
</script>

<style scoped>
  .favTab {
    margin-left: 30px;
    color: #f33;
    border-bottom: 3px solid #f33;
    width: 80px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .favTab + span {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }

  .item {
    margin: 0 9px 30px;
    overflow: hidden;
    width: 136px;
  }
  .item img {
    width: 134px;
    height: 134px;
    display: block;
  }
  .item::after {
    content: "";
    clear: both;
    display: block;
  }
  .square {
    border: .5px solid #f3f3f3;
    width: 135px;
    height: 135px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    width: 120px;
    margin: auto;
    padding: 10px 0;
    font-weight: bold;
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
