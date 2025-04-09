<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import BaseHeader from '@/components/base/BaseHeader.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'

const route = useRoute()
const { locale } = useI18n()

// глобально поставим локацилизацию допустим так, но это можно зарефакторить
watch(route, (newRoute) => {
  locale.value = newRoute.path.includes('/en') ? 'en' : 'ru'
})
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-col relative min-h-screen">
      <BaseHeader />
      <RouterView class="flex-grow" />
      <BaseFooter />
    </div>
  </div>
</template>
