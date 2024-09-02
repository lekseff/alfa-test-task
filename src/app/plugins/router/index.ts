import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoaded
} from 'vue-router'
import { pageRoutes } from '@/pages/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: pageRoutes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
