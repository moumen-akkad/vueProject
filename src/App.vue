<template>
  <Header></Header>

  <main class="p-4">
    <RouterView  />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>