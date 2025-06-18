
<template>
    <section class="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <h1 class="text-3xl font-bold text-gray-800">Company Identification</h1>

        <div class="space-y-4">
            <label class="block">
                <span class="block text-sm font-medium text-gray-700 mb-1">Company Name</span>
                <input type="text"
                    class="block w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>

            <label class="block">
                <span class="block text-sm font-medium text-gray-700 mb-1">VAT Number</span>
                <input type="text"
                    class="block w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>

        <div class="flex justify-end pt-4">
            <RouterLink to="/company/banks" class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                Next
            </RouterLink>
        </div>

    </section>
</template>


<script setup lang="ts">
</script>