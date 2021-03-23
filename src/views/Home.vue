<template>
    <div style="margin-left:176px;width:824px;padding:30px 40px 72px;background-color: #fff;">
      <Carrousel/>
      <FourEntry/>
      <RecommendPlaylist/>

      <p style="font-weight:bold;font-size:24px;line-height:24px;text-align: left;">最新歌曲</p>
      <div class="newMusicGroup">
        <div v-for="(item, index) in new10" :index="index">
          <SingleMusic class-prefix="singleMusic"
                       :music-info="item"
          />
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import FourEntry from '@/components/FourEntry'
import Carrousel from '@/components/Swiper'
import SingleMusic from '@/components/SingleMusic'
import RecommendPlaylist from '@/components/RecommendPlaylist'

export default {
  name: 'Home',
  components: { FourEntry, Carrousel, RecommendPlaylist, SingleMusic },
  data() {
    return {
      new10: []
    }
  },
  created () {
    this.newMusicQry()
  },
  methods: {
    newMusicQry() {
      let that = this;
      axios.get('http://musicapi.leanapp.cn/top/song')
        .then(response => {
          that.new10 = response.data.data.slice(0, 10)
        })
        .catch()
    }
  }
}
</script>

<style scoped lang="scss">
.newMusicGroup {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 25px 0;
  > div {
    width: 48%;
    margin: 0 6px;
    //height: 85px;
    display: inline-block;
    border-top: .5px solid #eee;
  }
  > div:last-child, > div:nth-child(9) {
    border-bottom: .5px solid #eee;
  }
}
</style>
