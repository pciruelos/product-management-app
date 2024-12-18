import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
// import HomeView from '@/views/HomeView.vue'
// import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: () => import('@/views/ProjectsView.vue'),
  // },
  // {
  //   path: '/projects/:id',
  //   name: 'single-project',
  //   component: () => import('@/views/SingleProjectView.vue'),
  // },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: h('p', '404 not found') },
  // ],
})

export default router
