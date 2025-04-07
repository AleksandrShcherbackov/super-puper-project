<script lang="ts">
export default {
  name: 'Footer',
};
</script>

<template>
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        &copy; {{ new Date().getFullYear() }} SuperPuper Service. All rights reserved.
      </div>
    </footer>
  </template>
