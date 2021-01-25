<template>
  <div class="home">
    <div style="display: flex;">
      <NavList/>

      <div style="width:824px;padding:30px 25px 72px;position:fixed;left:176px;background-color: #fff;">
        <div class="favTab">喜欢的歌手</div>

        <ul style="display: flex;justify-content: flex-start;flex-wrap: wrap;margin-top: 20px">
          <li class="artist" v-for="(person, index) in artists" :key="index">
            <div>
              <img :src="person.img1v1Url" alt=""/>
            </div>
            <p>{{person.name}}</p>
          </li>
        </ul>
      </div>
    </div>

    <ControlBar/>
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
      artists: []
    }
  },
  created() {
    this.artistsQry()
  },
  mounted() {
    // console.log(this.artists)
  },
  methods: {
    artistsQry() {
      let that = this
      favArtists.forEach(item => {
        setTimeout(
          axios.get('http://music.163.com/api/artist/' + item.id)
            .then(response => {
              let { id, name, img1v1Url } = { ...response.data.artist }
              that.artists.push({ id, name, img1v1Url })
              // console.log(that)
            })
            .catch(), 20
        )
      })
      console.log(this)
    }
  }
}
</script>

<style scoped>
  .favTab {
  margin-left: 30px;
  color: #f33;
  border-bottom: 3px solid #ff3333;
  width: 70px;
  font-weight: bold;
  }
  li.artist {
    margin: 0 9px 30px;
    /*border: .5px solid red;*/
  }
  li.artist div {
    margin-bottom: 5px;
    width: 135px;
    height: 135px;
    border: .5px solid #f3f3f3;
    border-radius: 6px;
  }

  li.artist img {
    width: 134px;
    height: 134px;
    border-radius: 6px;
  }
  li.artist p {
    width: 120px;
  }

</style>
