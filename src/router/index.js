import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/box',
    name: 'Box',
    component: () => import(/* webpackChunkName: "box" */ '../views/Box.vue')
  },
  {
    path: '/pokedex',
    name: 'Dex',
    component: () => import(/* webpackChunkName: "dex" */ '../views/Dex.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import(/* webpackChunkName: "teams" */ '../views/Teams.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
