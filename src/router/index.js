import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlaylistInfo from '../views/PlaylistInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playlistInfo',
    name: 'PlaylistInfo',
    component: PlaylistInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
