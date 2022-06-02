import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '@/views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "main" */ '@/views/HomeView.vue'),
      },
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
