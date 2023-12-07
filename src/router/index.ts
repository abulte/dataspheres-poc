import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// common/default routes
const defaultRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showInNav: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: { showInNav: true }
  }
]

async function loadRoutes() {
  const importedModule = await import(`../sites/${import.meta.env.VITE_SITE_ID}/routes.ts`)
  return importedModule.routes
}

const siteRoutesPromise = loadRoutes()

// merge routes and give priority to siteRoutes for same path
const routesMap = new Map()
defaultRoutes.forEach((route) => {
  routesMap.set(route.path, route)
})
const routerPromise = siteRoutesPromise.then((siteRoutes) => {
  siteRoutes.forEach((route) => {
    routesMap.set(route.path, route)
  })
  const routes = Array.from(routesMap.values())
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
})

export default routerPromise
