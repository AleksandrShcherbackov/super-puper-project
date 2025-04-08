<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';

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
      <RouterView />
    </div>
  </main>
</template>
