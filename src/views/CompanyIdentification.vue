<script setup lang="ts">
const local = {
    companyName: '',
    vatNumber: ''
}

function save() {
    // Your save logic here
}
</script>

<template>
    <section class="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <h1 class="text-3xl font-bold text-gray-800">Company Identification</h1>

        <div class="space-y-4">
            <label class="block">
                <span class="block text-sm font-medium text-gray-700 mb-1">Company Name</span>
                <input v-model="local.companyName" type="text"
                    class="block w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>

            <label class="block">
                <span class="block text-sm font-medium text-gray-700 mb-1">VAT Number</span>
                <input v-model="local.vatNumber" type="text"
                    class="block w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>

        <button
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors"
            @click="save">
            Save
        </button>
    </section>
</template>
