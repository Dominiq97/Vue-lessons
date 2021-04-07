import { createRouter, createWebHistory } from '@ionic/vue-router';

import Basics from '../pages/Basics.vue'
import Consitionals_and_lists from '../pages/Conditionals_and_lists.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Basics
  },
  {
    path: '/exercises',
    component: Consitionals_and_lists
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
