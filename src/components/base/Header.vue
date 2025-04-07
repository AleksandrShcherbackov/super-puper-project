<script lang="ts">
export default {
  name: 'Header',
};
</script>

<template>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between">
        <nav>
          <router-link to="/en" class="mr-4">{{ $t('header.home') }}</router-link>
          <router-link to="/en/tos">{{ $t('header.terms') }}</router-link>
        </nav>
      </div>
    </header>
  </template>
  