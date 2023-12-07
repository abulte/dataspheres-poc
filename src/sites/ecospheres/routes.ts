export const routes = [
  {
    path: '/organizations',
    name: 'organizations',
    component: () => import('./views/OrganizationsView.vue'),
    meta: { showInNav: true }
  },
]
