<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()
const routes = computed(() => {
  return router.getRoutes().filter((route) => route.meta.showInNav)
})
</script>

<template>
  <nav>
    <RouterLink v-for="route in routes" :to="route" :key="route.path">
      {{ route.name }}
    </RouterLink>
  </nav>
</template>
