<template>
  <header class="p-4 bg-gray-800 text-white">
    Header
  </header>

  <main class="p-4">
    <RouterView companyId />
    
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>