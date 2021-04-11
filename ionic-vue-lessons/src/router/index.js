import { createRouter, createWebHistory } from '@ionic/vue-router';

import Basics from '../pages/Basics.vue'
import Consitionals_and_lists from '../pages/Conditionals_and_lists.vue'
import Game from '../pages/Game.vue'
import Behind_the_scene from '../pages/Behind_the_scene.vue'

const routes = [
  {
    path: '/',
    redirect: '/game'
  },
  {
    path: '/home',
    component: Basics
  },
  {
    path: '/exercises',
    component: Consitionals_and_lists
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/scene',
    component: Behind_the_scene
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
