<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
import BaseHeader from '@/components/base/BaseHeader.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'

const route = useRoute();
const { locale } = useI18n();

// глобально поставим локацилизацию допустим так, но это можно зарефакторить
watch(route, (newRoute) => {
  locale.value = newRoute.path.includes('/en') ? 'en' : 'ru';
});
</script>
  
<template>
  <main>
    <div class="flex flex-col h-screen md:flex-row relative">
      <BaseHeader />
      <RouterView />
      <BaseFooter />
    </div>
  </main>
</template>
