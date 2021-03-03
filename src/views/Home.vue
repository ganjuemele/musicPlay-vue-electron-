<template>
  <div class="home" style="display: flex;">
    <div style="width:824px;padding:30px 40px 72px;position:absolute;left:176px;background-color: #fff;">
      <Carrousel/>
      <FourEntry/>
      <RecommendPlaylist/>
    </div>
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
    Carrousel,
    RecommendPlaylist
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>
