<template>
  <div id="app">
    <NavList/>

    <router-view/>

    <ControlBar/>
  </div>
</template>

<script>
import ControlBar from '@/components/ControlBar'
import NavList from '@/components/NavList'

export default {
  name: 'App',
  components: {NavList, ControlBar},
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  min-width: 1000px;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  border-bottom: 1px solid;
  cursor: pointer;
  //text-decoration: underline;
  text-decoration: none;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
a:focus {
  text-decoration: none;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  outline: none;
}
button:focus {
  outline: none;
  border: none;
}
</style>
