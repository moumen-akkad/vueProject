<template>
  <label class="block">
    <span class="text-sm text-gray-700 flex items-center gap-1 mb-2">
      {{ label }}
      <span class="relative text-blue-500 cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <title>info</title>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <span
          class="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden group-hover:inline-block w-64 p-2 text-xs text-white bg-gray-800 rounded shadow-lg">
          {{ tip }}
        </span>
      </span>
    </span>
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  tip: string
}>()
</script>
