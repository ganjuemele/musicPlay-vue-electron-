import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import PlaylistInfo from '../views/PlaylistInfo'
import FavArtists from '../views/FavArtists'
import CurPlay from '../views/CurPlay'
import Artist from '../views/Artist'
import DailyRec from '../views/DailyRec'
// let fs = require('fs')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/playlistInfo',
    name: 'PlaylistInfo',
    component: PlaylistInfo
  }, {
    path: '/fav',
    name: 'FavArtists',
    component: FavArtists
  }, {
    path: '/curPlay',
    name: 'CurPlay',
    component: CurPlay
  }, {
    path: '/artist/:id',
    name: 'Artist',
    component: Artist
  }, {
    path: '/home/dailyRec',
    name: 'DailyRec',
    component: DailyRec
  }
]

const router = new VueRouter({
  routes
})

export default router
