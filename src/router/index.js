import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/home.vue'
import aboutView from '../views/about.vue'
import jobsView from '../views/jobs.vue'
import jobDetails from '../views/jobdetails/jobDetails.vue'
import notFound from '../views/notFound.vue'

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
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
