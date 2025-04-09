<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  filePath: string
}>()

const markdownContent = ref('')
const compiledMarkdown = ref('')

onMounted(async () => {
  try {
    const response = await fetch(props.filePath)
    if (!response.ok) throw new Error('Network response was not ok')
    markdownContent.value = await response.text()
    compiledMarkdown.value = marked(markdownContent.value)
  } catch (error) {
    console.error('Error fetching markdown:', error)
  }
})
</script>

<template>
  <div v-html="compiledMarkdown"></div>
</template>
