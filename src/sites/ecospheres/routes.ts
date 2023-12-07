import OrganizationsView from "./views/OrganizationsView.vue"

export const routes = [
  {
    path: '/organizations',
    name: 'organizations',
    component: OrganizationsView,
    meta: { showInNav: true }
  },
]
