<script setup lang="ts">
import config from '@/config'
import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt()
</script>

<template>
  <main style="text-align: center;">
    <slot name="title">
      <h1>{{ config.website.homepage_title }}</h1>
    </slot>
    <div v-html="markdown.render(config.website.homepage_subtitle)"></div>
    <slot name="sub-hero"></slot>
  </main>
</template>
