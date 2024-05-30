import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import myLogin from '@/views/myLogin.vue'
import myRegister from '@/views/myRegister.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: myLogin
  },
  {
    path: '/register',
    name: 'register',
    component: myRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
