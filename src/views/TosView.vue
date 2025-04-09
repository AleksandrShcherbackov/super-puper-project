<script setup lang="ts">
import { useRoute } from 'vue-router'
import MarkdownViewer from '@/components/base/MarkdownViewr.vue'

const route = useRoute()
const prefix = route.path.includes('/en') ? 'en' : 'ru'
const path = `/src/assets/${prefix}tos.md`
</script>

<template>
  <div class="container mx-auto py-8">
    <MarkdownViewer :filePath="path" />
  </div>
</template>
