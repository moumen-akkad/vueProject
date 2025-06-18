<template>
    <section class="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold text-gray-800">Company Identification</h1>

        <div class="space-y-4">
            <FormField label="Company Name *" tip="The legal name under which the company operates. Required.">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Company Logo" tip="Optional. Upload a logo in .png or .jpg format.">
                <input type="file" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Company Description" tip="Optional. Short summary of the company’s services or mission.">
                <textarea rows="3" class="w-full border rounded px-3 py-2"></textarea>
            </FormField>

            <FormField label="Homepage URL" tip="Optional. Link to the company’s website.">
                <input type="url" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="VAT Number" tip="Optional. Required for EU VAT transactions.">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Tax Number" tip="Optional. National tax ID assigned by tax authorities.">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="DUNS" tip="Optional. Global 9-digit business identifier from Dun & Bradstreet.">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Commercial Register Number" tip="Optional. Legal number registered with authorities.">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Founding Year" tip="Optional. Year the company was established (e.g., 1998).">
                <input type="number" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Order Currency" tip="Optional. Default currency used for transactions.">
                <select class="w-full border rounded px-3 py-2">
                    <option disabled selected>Select currency</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>JPY</option>
                </select>
            </FormField>

            <FormField label="Main Product Groups" tip="Optional. Product categories your company offers.">
                <input type="text" placeholder="e.g., Pumps, Valves" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Industries" tip="Optional. Sectors where your company is active.">
                <input type="text" placeholder="e.g., Manufacturing, Energy" class="w-full border rounded px-3 py-2" />
            </FormField>
        </div>

        <div class="flex justify-between pt-4">
            <RouterLink to="/" class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
                Previous
            </RouterLink>
            <RouterLink to="/company/banks"
                class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                Next
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<!-- Tooltip-enabled label component -->
<script lang="ts">
import { defineComponent } from 'vue';
import FormField from "../components/FormField.vue";

export default defineComponent({
    name: 'FormField',
    props: {
        label: String,
        tip: String
    }
});
</script>
