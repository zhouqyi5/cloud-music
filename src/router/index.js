import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index')
  },
  {
    name: 'Ranklist',
    path: '/ranklist',
    component: () => import('@/views/ranklist/index')
  },
  {
    name: 'Singer',
    path: '/singer',
    component: () => import('@/views/singer/index')
  },
  {
    name: 'Songlist',
    path: '/songlist',
    component: () => import('@/views/songlist/index')
  },
  {
    name: 'Playing',
    path: '/playing',
    component: () => import('@/views/playing/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
