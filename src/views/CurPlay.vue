<template>
  <div>
    <div style="border-radius: 50%;width: 330px;height: 330px;border:10px solid #eee;background-color: #333;display: flex;align-items: center;justify-content: center;">
      <div style="width:220px;height: 220px;background-color: #fff;border-radius: 50%;display: flex;align-items: center;justify-content: center;">
          <img style="display: block;border:8px solid black;border-radius: 50%;height: 220px;width:220px;" src="http://p2.music.126.net/ytdZwERCVFd8U1VaWL6wXA==/109951165325450537.jpg"
       alt=""/>
      </div>
    </div>

    <ControlBar ref="playlist" :isPlay="isPlay"/>
  </div>
</template>

<script>
import ControlBar from '@/components/ControlBar'
export default {
  name: 'CurPlay',
  components: {ControlBar},
  created() {
    console.log('hhh')
  }
}
</script>

<style scoped>

</style>
