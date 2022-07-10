import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // {
  //   component: () => import('../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
