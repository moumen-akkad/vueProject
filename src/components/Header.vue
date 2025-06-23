<template>
  <header class="bg-gray-100 border-b border-gray-300 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <RouterLink
        to="/"
        class="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
      >
        Company Info
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
