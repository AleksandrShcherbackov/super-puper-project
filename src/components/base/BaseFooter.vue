<script lang="ts" setup></script>

<template>
  <footer class="bg-gray-800 text-white p-4 h-16">
    <div class="container mx-auto text-center">
      &copy;{{ $t('footer.copyright', { msg: new Date().getFullYear() }) }}
    </div>
  </footer>
</template>
