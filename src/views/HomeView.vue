<template>
    <section class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
        <div class="bg-white p-8 rounded shadow max-w-md space-y-6">
            <h1 class="text-3xl font-bold text-gray-800">Welcome to Company Data Portal</h1>
            <p class="text-gray-600 text-lg">
                Click the button below to begin filling out your company's profile.
            </p>
            <RouterLink to="/company/id"
                class="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition">
                Start
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
