import MFHomeView from "./views/MFHomeView.vue"

export const routes = [
  {
    path: '/',
    name: 'home',
    component: MFHomeView,
    meta: { showInNav: true }
  },
]
