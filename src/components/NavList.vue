<template>
  <aside>
    <div>
      <p>我的音乐</p>
      <ul>
        <li class="selected" v-for="(item, index) in asideList" :key="index">
          <router-link :to="item.url">{{item.name}}</router-link>
        </li>
<!--        <li>-->
<!--          <router-link to="/#">-->
<!--            <svg t="1610204898423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="932" width="200" height="200"><path d="M737.712 96.016C640.576 96.016 556.064 151.312 512.432 231.712 468.528 151.312 383.6 96.016 286.464 96.016 145.792 96.016 31.76 210.672 31.76 352.112 31.76 419.248 57.456 480.336 99.472 526L490.576 919.04C496.528 925.024 504.32 927.984 512.096 927.968 519.872 927.984 527.648 925.024 533.584 919.04L924.704 526C966.72 480.336 992.416 419.248 992.416 352.112 992.416 210.672 878.384 96.016 737.712 96.016ZM876.08 484.512 512.096 854.144 148.096 484.512C115.456 450.064 95.44 403.44 95.44 352.112 95.44 246.048 180.96 160.048 286.464 160.048 371.664 160.048 445.024 216.512 470.464 293.952 477.28 310.592 493.488 322.304 512.48 322.304 531.456 322.304 547.632 310.608 554.464 294.048L554.48 294.048C579.664 216.544 652.48 160.048 737.712 160.048 843.2 160.048 928.736 246.048 928.736 352.112 928.736 403.44 908.72 450.064 876.08 484.512Z" fill="#8a8a8a" p-id="933"></path></svg>-->
<!--            我的收藏-->
<!--          </router-link>-->
<!--        </li>-->
      </ul>
    </div>
  </aside>
</template>

<script>
import { asideList } from '@/data/data'
export default {
  name: 'NavList',
  data() {
    return {
      asideList
    }
  },
  created() {
    // console.log('nav', this)
  }
}
</script>

<style scoped>
  aside {
    width: 176px;
    background-color: #ddd;
    height: 100%;
    padding: 45px 8px 0 8px;
    font-size: 12px;
    text-align: start;
    position: fixed;
  }
  aside > div > p {
    color: #888;
    margin: 10px 0;
  }
  svg {
    height: 18px;
    width: 18px;
  }
  li {
    padding: 10px 0 10px 15px;
    height: 36px;
    color: #333;
    border: #ddd .5px solid;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 3px;
  }
  li:hover {
    background-color: red!important;
  }
  li.selected {
    background-color: orangered;
    color: #fff;
  }
  li > a {
    display: flex;
  }
  aside > div:last-child > p {
    color: #888;
    margin: 14px 0;
  }
</style>
