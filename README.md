# dataspheres-poc

Goal: experiment with a multisite architecture in vuejs, i.e. a common code base that can serve multiple sites with some common features/components and some custom ones.

This could be used in https://github.com/ecolabdata/ecospheres-front/ and real life examples are taken from there.

This project includes:
- a `VITE_SITE_ID` env var that defines which site should be built
- the config files from https://github.com/ecolabdata/ecospheres-front/tree/main/configs and the same mechanism to load the correct config file depending on `VITE_SITE_ID`
- `src/sites/{site_id}/` directories with custom configuration and components

Each site should provide its own routing (can be empty) that extends the default one in `src/sites/{site_id}/routes.ts`.

For example, if Ecospheres wants to expose a custom `organizations` page that is not included by default:

```javascript
export const routes = [
  {
    path: '/organizations',
    name: 'organizations',
    component: () => import('./views/OrganizationsView.vue'),
    meta: { showInNav: true }
  },
]
```

The `showInNav` attribute is used to generate the header navigation. The `meta` attr of the route could be used for multiple configuration use cases like this.

This per-site routing combined with [slots](https://vuejs.org/guide/components/slots.html) in default templates opens up other possibilities.

For example, the default `HomeView` exposes a `sub-hero` slot. With custom routing, MeteoFrance can extend the `HomeView` with its own template, `MFHomeView`, filling the `sub-hero` slot.

```javascript
import MFHomeView from "./views/MFHomeView.vue"

export const routes = [
  {
    path: '/',
    name: 'home',
    component: MFHomeView,
    meta: { showInNav: true }
  },
]
```

```vue
<script setup lang="ts">
import HomeView from "@/views/HomeView.vue"
</script>

<template>
  <HomeView>
    <template #sub-hero>
      METEO FRANCE A DES CHOSES A DIRE SUR LA HOME PAGE
    </template>
  </HomeView>
</template>
```

## TODO

- [ ] fix TS
- [ ] try to optimize bundle depending on which site is being built
- [ ] see if multiple repos can be used instead of a mono-repo
- [ ] maybe move configs to `src/sites`

## Deployments

Example deployments with different site ids:
- `VITE_SITE_ID=ecospheres`: https://dataspheres-es.netlify.app/
- `VITE_SITE_ID=meteo-france`: https://dataspheres-mf.netlify.app/

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
