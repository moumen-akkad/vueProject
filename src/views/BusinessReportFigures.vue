<template>
    <section class="p-6 max-w-xl mx-auto space-y-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold text-gray-800">Buisness Report Figures</h1>

        <div class="flex justify-between pt-4">
            <RouterLink to="/company/digital"
                class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
                Previous
            </RouterLink>

            <RouterLink to="/company/gov"
                class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                Next
            </RouterLink>
        </div>
    </section>
</template>