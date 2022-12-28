import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/home.vue'
import aboutView from '../views/about.vue'
import jobsView from '../views/jobs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
