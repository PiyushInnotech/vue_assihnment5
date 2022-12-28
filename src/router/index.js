import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
    import("../views/home.vue")
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
    import("../views/about.vue")
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => 
    import("../views/jobs.vue"),
    children: [
      {path: ':jobId', name:'jobId', component: () => import("../views/jobId.vue"), props: true},
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () =>
    import("../views/notFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
