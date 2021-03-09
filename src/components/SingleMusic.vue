<template>
  <div class="singleMusic" :class="classPrefix+'-item'">
    <img :src="musicInfo.album.blurPicUrl" alt="">
    <div class="div-icon">
      <svg t="1615195170700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" width="200" height="200"><path d="M806.452777 482.975966 256.718361 70.675666c-10.416234-7.882528-24.366967-9.150404-35.964096-3.2623-11.689227 5.798053-19.025309 17.757432-19.025309 30.712489l0 824.691675c0 12.954033 7.335059 24.913413 19.025309 30.711466 4.845355 2.446725 10.100032 3.624551 15.307637 3.624551 7.340175 0 14.588253-2.356674 20.655436-6.885827l549.734416-412.3003c8.653077-6.523577 13.770632-16.669658 13.770632-27.541263C820.223409 499.644601 815.105854 489.407446 806.452777 482.975966" fill="#ff3333" p-id="1091"/></svg>
    </div>
    <div style="display: flex;flex-direction: column;justify-content: space-around;margin-left: 20px;text-align: left">
      <div :class="classPrefix+'-name'">{{musicInfo.name}}</div>
      <div :class="classPrefix+'-artist'">
        <span v-for="(items, index) in musicInfo.artists"> {{index!==0?'/':''}} {{items.name}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SingleMusic',
  props: {
    classPrefix: String,
    musicInfo: Object
  },
  mounted () {
    // console.log(this.musicInfo)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.singleMusic {
  display: inline-flex;
  width: 100%;
  padding: 12px 0;
  position: relative;
  align-items: center;
  img {
    height: 60px;
    border-radius: 8px;
    margin-left: 8px;
  }
  &-name {
    color: #000;
    font-size: 14px;
  }
  &-artist {
    font-size: 12px;
  }
  & .div-icon {
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    left: 24px;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(248,248,248,0.88);
  }
  .icon {
    height: 14px;
    width: 14px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 7px;
  }
}
.singleMusic:hover {
  background-color: #efefef;
  border-radius: 8px;
}
</style>
