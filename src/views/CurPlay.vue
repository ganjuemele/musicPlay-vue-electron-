<template>
  <div style="display: flex;justify-content: center;margin-left: 176px;padding: 30px 0;border: 1px solid green">
    <div class="musicImg">
      <div>
          <img src="http://p2.music.126.net/ytdZwERCVFd8U1VaWL6wXA==/109951165325450537.jpg" alt=""/>
      </div>
    </div>

    <div style="height:330px;border: 1px solid red;width: 300px">
      <div>歌名</div>
      <div>专辑: <a href="">摩羯座</a></div>
      <div>歌手: <a href="">周杰伦</a></div>
    </div>

  </div>
</template>

<script>
// import ControlBar from '@/components/ControlBar'
export default {
  name: 'CurPlay',
  // components: {ControlBar},
  data() {
    return {
      id: '',
      name: '',
      index: Number,
      musicUrl: '',
      imgUrl: '',
      artists: ''
    }
  },
  created() {
    console.log(this.$store.state.curMusicInfo)
    let {id, name, index, musicUrl, imgUrl, artists} = { ...this.$store.state.curMusicInfo }

  }
}
</script>

<style lang="scss" scoped>
.musicImg {
  border-radius: 50%;
  width: 330px;
  height: 330px;
  border: 10px solid #eee;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
