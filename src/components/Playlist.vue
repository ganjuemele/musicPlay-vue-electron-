<template>
  <div class="playlistInfo">
    <div v-if="result.tracks">
      <img class="playlistImg" :src="result.tracks[0].album.picUrl" alt="playlistImg">
      <div style="flex-grow: 1;margin-left:30px;display:flex;flex-direction:column;">
        <p style="font-size:22px;font-weight:600;text-align:left;line-height:22px;">
          <span style="border:red 1px solid;color:red;font-size:14px;line-height:26px;border-radius:2px;padding:0 4px;">歌单</span>
          {{result.name}}
        </p>
        <div class="playAll" @click="playTheList()">播放全部</div>
        <div style="border: 1px solid red;width: 50px;height:50px;background-color: gray;">
          <audio ref="music" loop autoplay>
            <source src="https://m8.music.126.net/20210121115925/65c26515a244917cc838f1d725505fc6/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3984532057/a616/41a6/cc6a/ecab9a71084963bebf463bfabb4cbf98.mp3" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </div>

    <div>
      <div class="playlistTab">歌曲列表</div>
      <div class="listTitle">
        <div class="name">音乐标题</div>
        <div class="artists">歌手</div>
        <div class="album">专辑</div>
        <div class="duration">时长</div>
      </div>
      <div class="playlist" v-for="(item, index) in result.tracks" :key="index" :style="index % 2 ? '' : 'background-color:#f9f9f9;'">
        <div class="serialNum">{{index + 1}}</div>
        <div class="fav">
          <svg t="1610098253511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="900" width="200" height="200"><path d="M737.712 96.016C640.576 96.016 556.064 151.312 512.432 231.712 468.528 151.312 383.6 96.016 286.464 96.016 145.792 96.016 31.76 210.672 31.76 352.112 31.76 419.248 57.456 480.336 99.472 526L490.576 919.04C496.528 925.024 504.32 927.984 512.096 927.968 519.872 927.984 527.648 925.024 533.584 919.04L924.704 526C966.72 480.336 992.416 419.248 992.416 352.112 992.416 210.672 878.384 96.016 737.712 96.016ZM876.08 484.512 512.096 854.144 148.096 484.512C115.456 450.064 95.44 403.44 95.44 352.112 95.44 246.048 180.96 160.048 286.464 160.048 371.664 160.048 445.024 216.512 470.464 293.952 477.28 310.592 493.488 322.304 512.48 322.304 531.456 322.304 547.632 310.608 554.464 294.048L554.48 294.048C579.664 216.544 652.48 160.048 737.712 160.048 843.2 160.048 928.736 246.048 928.736 352.112 928.736 403.44 908.72 450.064 876.08 484.512Z" fill="#8a8a8a" p-id="901"></path></svg>
          <!--      <svg t="1610098640173" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="900" width="200" height="200"><path d="M512 164.864l-31.232-30.72a281.6 281.6 0 0 0-398.336 397.824L512 961.536l429.568-430.08a281.6 281.6 0 0 0-398.336-397.824l-31.232 31.232z" fill="#ff3333" p-id="901"></path></svg>-->
        </div>
        <div class="name">{{item.name}}</div>
        <div class="artists"><span>{{item.artists[0].name}}</span></div>
        <div class="album">{{item.album.name}}</div>
        <div class="duration">{{formatDuration(item.duration)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist"
}
</script>

<style scoped>

</style>
