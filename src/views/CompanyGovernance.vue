<template>
    <section class="p-6 max-w-xl mx-auto space-y-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold text-gray-800">Company Governance</h1>
        <div class="flex justify-between pt-4">
            <RouterLink to="/company/reports"
                class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
                Previous
            </RouterLink>
            <button @click="save" class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Save
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>
