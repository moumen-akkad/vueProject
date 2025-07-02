<template>
    <section class="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold text-gray-800">Company Governance</h1>

        <div class="space-y-4">

            <FormField label="Corporate Policies"
                tip="References to documents like Code of Conduct, Terms & Conditions, or Quality Agreements.">
                <input type="file" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="Industry Standards"
                tip="List memberships in industry organizations and certifications (e.g., ISO 9001).">
                <textarea rows="3" class="w-full border rounded px-3 py-2"
                    placeholder="ISO 9001, VDA, DIN..."></textarea>
            </FormField>

            <FormField label="Risk Management"
                tip="Describe your risk management strategy (e.g., Business Continuity Plan).">
                <textarea rows="3" class="w-full border rounded px-3 py-2"
                    placeholder="BCP measures, internal audits..."></textarea>
            </FormField>

            <FormField label="Legal Compliance"
                tip="State applicable regulations and how your company complies with them.">
                <textarea rows="3" class="w-full border rounded px-3 py-2"
                    placeholder="GDPR, REACH, RoHS..."></textarea>
            </FormField>

        </div>

        <div class="flex justify-between pt-6">
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
import { useFormStore } from '@/stores/formData'
import { RouterLink } from 'vue-router'
import FormField from '@/components/FormField.vue'

const store = useFormStore()

function save() {
  const jsonData = store.getFinalJson()
  const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
    type: 'application/json'
  })

  const url = URL.createObjectURL(blob)

  // Open in new tab
  window.open(url, '_blank')

  // Optional: cleanup
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
</script>
