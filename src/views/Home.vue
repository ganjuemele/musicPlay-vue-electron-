<template>
  <div class="home">
    <div style="display: flex;">
      <NavList/>
      <div style="width:824px;padding:30px 40px 72px;position:fixed;left:176px;">
        <Carrousel/>
        <FourEntry/>
        <RecommendPlaylist/>
      </div>
    </div>
    <ControlBar :playlist="playlist" :isPlay="false"/>
  </div>
</template>

<script>
import ControlBar from '@/components/ControlBar'
import NavList from '@/components/NavList'
import FourEntry from '@/components/FourEntry'
import Carrousel from '@/components/Swiper'
import RecommendPlaylist from '@/components/RecommendPlaylist'

export default {
  name: 'Home',
  components: {
    FourEntry,
    ControlBar,
    NavList,
    Carrousel,
    RecommendPlaylist
  },
  data() {
    return {
      playlist: [],
      isPlay: false
    }
  },
  methods: {

  }
}
</script>
