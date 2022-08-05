import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/views/Login/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/login',
    component: index
  }]
})

export default router