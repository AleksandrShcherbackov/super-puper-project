<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const prefix = computed<string>(() => (route.path.includes('en') ? 'en' : 'ru'))
</script>

<template>
  <footer class="bg-gray-800 text-white p-4 h-16">
    <div class="container flex items-center justify-between mx-auto text-center">
      <nav class="flex items-center space-x-4">
        <router-link to="/" class="flex items-center justify-center mr-4">
          <img src="../../assets/icons/notebook.svg" alt="logo" class="w-10 h-10" />
        </router-link>
        <router-link :to="`/${prefix}`" class="mr-4">{{ $t('header.home') }}</router-link>
        <router-link :to="`/${prefix}/tos`">{{ $t('header.terms') }}</router-link>
        <router-link :to="`/${prefix}/order`">{{ $t('header.order') }}</router-link>
      </nav>
      <div>&copy;{{ $t('footer.copyright', { msg: new Date().getFullYear() }) }}</div>
    </div>
  </footer>
</template>
