<script setup lang="ts">
import config from '@/config'
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <em>{{ config.website.title }}</em>
    <NavigationBar />
  </header>
  <RouterView />
</template>
